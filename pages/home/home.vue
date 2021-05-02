<template>
  <view class="page">
    <view class="head">
      <!-- 搜索 -->
      <SearchHeader />
      <!-- 分类列表 -->
      <view class="classify-list">
        <view class="classify">
          <view
            class="list"
            v-for="(item, index) in classList"
            :class="{ action: classifyShow == index }"
            @click="onClassify(item, index)"
            :key="index"
          >
            <text>{{ item.name }}</text>
            <!-- <text class="line" v-show="classifyShow == index"></text> -->
          </view>
          <view
            class="list line"
            @click="navTo('pages/classify/classify', { login: true })"
          >
            <text class="iconfont2 icon-arrow-down"></text>
          </view>
        </view>
      </view>
      <view class="s-list">
        <view class="left">
          <view class="logo"><image class=""></image></view>
          <view>
            <view class="title">
              <text>新鲜购 ︱ 联盟生活超市</text>
            </view>
            <view class="store"
              ><text>门店地址：广东省广州市黄埔区 绿地中央广场1703室</text>
            </view>
          </view>
        </view>
        <view class="right">
          <view
            class="item center"
            @click="navTo('/pages/order/list?current=1', { login: true })"
            hover-class="hover-gray"
            :hover-stay-time="50"
          >
            <text class="iconfont2 icon-daohang"></text>
            <text>导航</text>
            <text v-if="orderCount.c0 > 0" class="number">{{
              orderCount.c0
            }}</text>
          </view>
        </view>
      </view>
    </view>
    <mescroll-body
      ref="mescrollRef"
      @down="downCallback"
      @up="upCallback"
      :down="downOption"
      :up="upOption"
      :top="0"
    >
      <view class="main" v-show="classifyShow === 0">
        <!-- banner -->
        <view class="ensure">
          <image src="/static/imgs/xinxianmeiwei.png" />
          <image src="/static/imgs/pinzhijingxuan.png" />
          <image src="/static/imgs/jisusongda.png" />
          <image src="/static/imgs/wuyoushouhou.png" />
        </view>
        <carousel
          :img-list="imgList"
          url-key="url"
          @selected="selectedBanner"
        />
        <!-- 菜单导航 -->
        <view class="menu-nav">
          <view @scroll="ScrollMenu" class="nav-list">
            <view
              class="nav"
              ref="nav"
              :style="navList.length <= 10 ? 'flex-direction:row' : ''"
            >
              <view
                class="list"
                v-for="item in navList"
                @click="onSkip('menu')"
                :key="item.id"
              >
                <image :src="item.img" mode=""></image>
                <text>{{ item.name }}</text>
              </view>
            </view>
          </view>
          <view class="indicator" v-if="navList.length > 10">
            <view class="plan">
              <view class="bar" :style="'left:' + slideNum + '%'"></view>
            </view>
          </view>
        </view>
        <view class="body-main margin-30">
          <view class="jinrihaotuan">
            <view class="more-button">
              <text class="txt">查看更多爆款</text>
              <text class="iconfont2 icon-right-circle-fill"></text>
            </view>
          </view>
          <view class="flash-good xianshi">
            <image
              class="bg"
              src="https://jinrihaotuan.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/jinrihaotuanbeijing.png?versionId=CAEQFRiBgMDdy7uwyRciIDdkNzc5YTliMjgzNDQ3MDQ4MmYyYWE0MTMwMjgwZjU5"
              mode=""
            />
            <view class="flash-sale">
              <view class="flash-title" @click="onSkip('flash')">
                <view class="pictrue">
                  <image src="/static/imgs/jrhaotuan.png" mode=""></image>
                </view>
                <view class="goods-title" @click="onSkip('GoodChoice')">
                  <view class="title active">
                    <text>好货精选</text>
                  </view>
                  <view class="title">
                    <text>好货精选</text>
                  </view>
                  <view class="title">
                    <text>好货精选</text>
                  </view>
                  <view class="title">
                    <text>好货精选</text>
                  </view>
                </view>
              </view>
              <view class="goods-list">
                <view
                  class="goods-item"
                  v-for="(item, index) in goodsList"
                  :key="index"
                >
                  <VerticalGoods
                    :name="item.name"
                    :amount="item.price"
                    :img="item.img"
                    :index="index"
                  />
                </view>
              </view>
            </view>
          </view>

          <!-- 限时秒杀 -->
          <view class="flash-good xianshi-good">
            <view class="flash-sale">
              <view class="flash-title" @click="onSkip('flash')">
                <view class="pictrue">
                  <image
                    src="https://jinrihaotuan.oss-cn-hangzhou.aliyuncs.com/xiaochengxu/icon-xianshimiaosha.png?versionId=CAEQFRiBgIC4leywyRciIGQzNGNhNzFjYTM5YzQxODM5NDAxNTVmYjk0ZmUzOTBk"
                    mode=""
                  ></image>
                </view>
                <view class="goods-title" @click="onSkip('GoodChoice')">
                  <view class="title active">
                    <text>好货精选</text>
                    <text>好货精选</text>
                  </view>
                  <view class="title">
                    <text>好货精选</text>
                  </view>
                  <view class="title">
                    <text>好货精选</text>
                  </view>
                  <view class="title">
                    <text>好货精选</text>
                  </view>
                </view>
              </view>
              <view class="ho-goods-list">
                <view
                  class="goods-item"
                  v-for="(item, index) in goodsList"
                  :key="index"
                >
                  <HorizontalGoods
                    tag="爆款价:"
                    :name="item.name"
                    :amount="item.price"
                    :img="item.img"
                    :index="index"
                  />
                </view>
                <view class="more"
                  >查看更多爆款
                  <text class="iconfont2 icon-jiantou"></text>
                </view>
              </view>
            </view>
          </view>
        </view>

        <Pengpai-FadeInOut
          :duration="2000"
          :wait="3000"
          :top="150"
          :left="10"
          :radius="60"
          :loop="true"
          :info="item"
          v-for="(item, index) in noticeList"
          :key="index"
        ></Pengpai-FadeInOut>

        <view class="margin-30">
          <ClassifyList />
        </view>

        <!-- <button @click="add">追加加一条</button> -->

        <!-- 限时抢购，好货精选 -->
      </view>
    </mescroll-body>
    <ClassifyData v-show="classifyShow != 0"></ClassifyData>
    <TabBar :tabBarShow="0"></TabBar>
  </view>
</template>

<script>
import TabBar from "../../components/TabBar/TabBar.vue";
import SearchHeader from "@/components/mix-header.vue";
import ClassifyData from "../../components/ClassifyData/ClassifyData.vue";
// 引入mescroll-mixins.js
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import carousel from "@/components/vear-carousel/vear-carousel";
import PengpaiFadeInOut from "@/components/Pengpai-FadeInOut/Pengpai-FadeInOut";
import VerticalGoods from "@/components/Goods/VerticalGoods";
import HorizontalGoods from "@/components/Goods/HorizontalGoods";
import ClassifyList from "@/components/ClassifyList";

export default {
  mixins: [MescrollMixin], // 使用mixin
  components: {
    TabBar,
    ClassifyData,
    SearchHeader,
    carousel,
    PengpaiFadeInOut,
    VerticalGoods,
    HorizontalGoods,
    ClassifyList,
  },
  data() {
    return {
      noticeList: [],
      notice: [
        {
          title: "踮起脚尖走向阳光 刚刚浏览本店",
          img:
            "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er0aq5WuQhWxXcQoQbSnSPywUheQrot5biaFxV47nF2OB0aegkH12q2A6VkGUBDfUVqiaqgzVCJJicDg/132",
        },
        {
          title: "幸福的小女人  刚刚浏览本店",
          img:
            "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIOeUhleCNwcOoTtk9Y1zwmpw76FsmAr1bYcKia2AVPiapbtl34jac7SQgjMaibKDJCqjYaHwvmUh3IQ/132",
        },
        {
          title: "快乐天使  刚刚浏览本店",
          img:
            "https://wx.qlogo.cn/mmopen/vi_32/OaXz0rjMsrHkZlfxeEqRhhUCKyaXyVSbCQZWFUeZQuUetKhbQRZiclqNQhFfv3yiclOzTl1FgZdjDpwAFG5gDhBg/132",
        },
        {
          title: "握不住的沙  刚刚浏览本店",
          img:
            "https://wx.qlogo.cn/mmopen/vi_32/bVfMeCPxSQsfBRc1XFHiaAiaZvvdrXC9hMTWAHoqDZKk7HD2By7km1dc55eSEibibKwDaW3ZQ2Zcbccr4KzwILVquQ/132",
        },
        {
          title: "顺其自然  刚刚浏览本店",
          img:
            "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJghoO6zuibOUG6AMubJJIUicbbWjyOyljFr4QVZecvRqEhHfkIribPfEyfxiaKY5MpiaAeVjvokLLATDw/132",
        },
      ],
      imgList: [
        {
          url:
            "https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg",
          id: 1,
        },
        {
          url:
            "https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg",
          id: 2,
        },
        {
          url:
            "https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg",
          id: 3,
        },
        {
          url:
            "https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg",
          id: 4,
        },
      ],
      mescroll: null, // mescroll实例对象 (此行可删,mixins已默认)
      // 下拉刷新的配置(可选, 绝大部分情况无需配置)
      downOption: {},
      // 上拉加载的配置(可选, 绝大部分情况无需配置)
      upOption: {
        use: false,
      },
      swiperList: [
        {
          id: 0,
          type: "image",
          url: "/static/img/banner_01.png",
        },
        {
          id: 1,
          type: "image",
          url: "/static/img/banner_02.png",
        },
        {
          id: 2,
          type: "image",
          url: "/static/img/banner_03.png",
        },
        {
          id: 3,
          type: "image",
          url: "/static/img/banner_04.png",
        },
        {
          id: 4,
          type: "image",
          url: "/static/img/banner_01.png",
        },
        {
          id: 5,
          type: "image",
          url: "/static/img/banner_01.png",
        },
      ],
      slideNum: 0,
      navList: [
        {
          id: 1,
          name: "领券中心",
          img: "/static/imgs/lingquan.png",
        },
        {
          id: 2,
          name: "新品预售",
          img: "/static/imgs/xinpin.png",
        },
        {
          id: 3,
          name: "限时秒杀",
          img: "/static/imgs/miaosha.png",
        },
        {
          id: 4,
          name: "拼团拼单",
          img: "/static/imgs/pintuan.png",
        },
      ],
      classList: [
        {
          id: 0,
          name: "全部",
        },
        {
          id: 1,
          name: "新鲜水果",
        },
        {
          id: 2,
          name: "蔬菜水果",
        },
        {
          id: 3,
          name: "肉禽蛋品",
        },
      ],
      goodsList: [
        {
          id: 1,
          name:
            "BANDALY 2020夏季女装连衣裙韩版大码宽松显瘦套装裙子两件套 JX19301 上豆绿下米白 M ",
          price: "219.00",
          vip_price: "129.00",
          img: "/static/img/goods_thumb_01.png",
          is_goods: 0,
        },
        {
          id: 1,
          name:
            "花花公子 卫衣男秋季圆领薄款休闲体恤男士时尚长袖T恤外套上衣男生情侣装套头衣服秋天男装 白色 XL",
          price: "139.00",
          vip_price: "99.00",
          img: "/static/img/goods_thumb_02.png",
          is_goods: 1,
        },
        {
          id: 1,
          name:
            "【两件套】花花公子PLAYBOY短袖T恤男套装夏季新款卫衣男士韩版修身冰丝宽松运动休闲上衣服裤子男装 CYFS903卡其色 XL",
          price: "168.00",
          vip_price: "158.00",
          img: "/static/img/goods_thumb_03.png",
          is_goods: 1,
        },
      ],
      classifyShow: 0,
      // 页面高度
      pageHeight: 500,
    };
  },
  onReady() {
    uni.hideTabBar();
    // #ifdef MP
    uni.setNavigationBarTitle({
      title: "首页",
    });
    uni.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#fe3b0f",
    });
    // #endif
  },
  onLoad() {},
  onPageScroll(e) {
    let scrollTop = e.scrollTop;
    if (scrollTop > 0) {
      this.pageHeight = 210;
    } else {
      this.pageHeight = 500;
    }
  },
  onReachBottom() {
    console.log(12333);
  },
  methods: {
    add() {
      //随机获取演示数据
      let randomItem = this.notice[
        Math.floor(Math.random() * this.notice.length)
      ];

      //追加一条数据
      this.noticeList = this.noticeList.concat(randomItem);
    },
    toClassify() {
      uni.navigateTo({ url: "pages/classify/classify" });
    },
    /*下拉刷新的回调, 有三种处理方式:*/
    downCallback() {
      this.mescroll.endSuccess();
    },
    /*上拉加载的回调*/
    upCallback(page) {
      setTimeout(() => {
        this.mescroll.endByPage(10, 20);
      }, 2000);
    },
    /**
     * 菜单导航滚动
     */
    ScrollMenu(e) {
      let scrollLeft = e.target.scrollLeft;
      const query = uni.createSelectorQuery().in(this);
      query
        .select(".nav")
        .boundingClientRect((data) => {
          let wid = e.target.scrollWidth - data.width - (data.left * 2 + 5);
          this.slideNum = ((scrollLeft / wid) * 300) / 2;
        })
        .exec();
    },
    /**
     * 搜索点击
     */
    onSearch() {
      uni.navigateTo({ url: "/pages/search/search" });
    },
    /**
     * 扫一扫点击
     */
    onCode() {
      // 只允许通过相机扫码
      uni.scanCode({
        onlyFromCamera: true,
        success: function (res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
        },
      });
    },
    /**
     * 分类点击
     * @param {Object} item
     * @param {Number} index
     */
    onClassify(item, index) {
      this.classifyShow = index;
    },
    /**
     * 跳转点击
     * @param {String} type 跳转类型
     */
    onSkip(type) {
      switch (type) {
        case "mess":
          uni.navigateTo({
            url: "/pages/Message/Message",
          });
          break;
        case "paycode":
          uni.navigateTo({
            url: "/pages/PaymentCode/PaymentCode",
          });
          break;
        case "menu":
          uni.navigateTo({
            url: "/pages/SearchGoodsList/SearchGoodsList",
          });
          break;
        case "inform":
          break;
        case "flash":
          uni.navigateTo({
            url: "/pages/FlashSale/FlashSale",
          });
          break;
        case "GoodChoice":
          uni.navigateTo({
            url: "/pages/GoodChoice/GoodChoice",
          });
          break;
        case "goods":
          uni.navigateTo({
            url: "/pages/GoodsDetails/GoodsDetails",
            animationType: "zoom-fade-out",
            animationDuration: 200,
          });
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "home.scss";
</style>
