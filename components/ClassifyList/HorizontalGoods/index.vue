<template>
  <view class="goods-info">
    <view class="list">
      <view class="pictrue">
        <image :src="img" mode="heightFix"></image>
      </view>
      <view class="title-tag">
        <view>
          <view class="tag"> {{ name }}1231321 </view>
          <view class="sub-tag"> <text>已售12单</text></view>
        </view>
        <view class="point">
          <view class="left"> <text>已省¥2.6元</text> </view>
          <view class="right"> <text>限购1件</text> </view>
        </view>
        <view class="action">
          <view class="price">
            <view class="user-price">
              <!-- <text class="bk">{{ tag }}</text> -->
              <text class="min">￥</text>
              <text class="max">{{ amount }}</text>
            </view>
            <view class="price-info">
              <view class="vip-price">
                <text class="min">￥</text>
                <text class="max">{{ amount }}</text>
              </view>
            </view>
          </view>
          <button class="red-button">加入购物车</button>
        </view>
      </view>
    </view>
    <view class="prefecture">
      <view class="button"> 去肉类专区水电费水电费</view>
      <view> 用户正在购买 </view>
    </view>
  </view>
</template>

<script>
import AIProgress from "@/components/ai-progress/ai-progress.vue";
export default {
  components: {
    AIProgress,
  },
  name: "Vertical-Goods",
  props: {
    tag: {
      type: String,
      default: "",
    },
    id: {
      type: Number | String,
      default: "",
    },

    img: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.donghua();
  },
  watch: {},
  methods: {
    donghua() {},
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
/* 为你推荐 */
.goods-info {
  width: 100%;
  background-color: #f2f2f2;
  .red-button {
    min-width: 175rpx;
    height: 72rpx;
    background: linear-gradient(-252deg, #ff783e, #ff342a);
    box-shadow: 0px 5rpx 8rpx 0rpx rgba(20, 104, 34, 0.2);
    border-radius: 36rpx;
    font-size: 28rpx;
    color: #fff;
    margin: 0;
    font-weight: 400;
  }
  .sub-tag {
    color: #999999;
    font-size: 24rpx;
  }
  .action {
    display: flex;
    // flex-direction: column;
    width: 100%;

    justify-content: space-between;
    .price {
      display: flex;
      flex-direction: column;
    }
  }
  .list {
    max-height: 366rpx;

    display: flex;
    width: 100%;
    flex: 1;
    // align-items: center;
    box-sizing: border-box;
    // flex-direction: column;
    float: left;
    // width:
    padding: 15rpx;
    // padding-bottom: 27rpx;
    //   height: 540rpx;
    margin-bottom: 20rpx;
    background-color: #ffffff;
    border-radius: 10rpx;
    overflow: hidden;
    .point {
      display: flex;
      border-radius: 28rpx;
      overflow: hidden;
      border: 1px solid $pinkButton;

      .left {
        background-color: $redButton;
        width: 60%;
        font-size: 18rpx;
        color: #fff;
        text-align: center;
      }
      .right {
        background: rgba(255, 52, 43, 0.1);
        color: $redButton;
        font-size: 18rpx;
        width: 40%;
        text-align: center;
      }
    }
    .pictrue {
      display: flex;
      justify-content: center;
      // width: 100%;
      image {
        height: 255rpx;
        width: 255rpx;
        background-color: #ccc;
      }
    }
    .title-tag {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      width: 100%;

      // max-height: 100rpx;
      padding: 0rpx 20rpx;
      justify-content: space-between;
      font-weight: bold;
      .tag {
        // float: left;
        margin-right: 10rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: normal;
        font-size: 32rpx;
        line-height: 40rpx;
        text {
          font-size: 24rpx;
          color: #ffffff;
          padding: 4rpx 16rpx;
          background: linear-gradient(to right, $base, $change-clor);
          border-radius: 6rpx;
          margin-right: 10rpx;
        }
      }
    }

    .user-price {
      color: $redButton;
      font-size: 28rpx;
      .bk {
        font-weight: 400;
      }
      display: flex;
      align-items: baseline;
      text {
        color: $price-clor;
      }
      .min {
        font-size: 24rpx;
        color: $redButton;
      }
      .max {
        font-size: 36rpx;
        color: $redButton;
        font-weight: bold;
      }
    }
    .price-info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      // justify-content: space-between;
      flex-direction: column;
      // padding-bottom: 27rpx;
      // height: 80rpx;

      .vip-price {
        text-align: left;
        display: flex;
        align-items: flex-start;
        text {
          color: #4d4d4d;
          font-size: 24rpx;
          font-weight: 400;
          text-decoration: line-through;
        }
      }
    }
  }
}
.prefecture {
  padding: 20rpx 16rpx;
  .button {
    width: 254rpx;
    height: 56rpx;
    background: rgba(255, 52, 43, 0.1);
    border: 1rpx solid #ffb8b2;
    border-radius: 28rpx;
  }
}
</style>
