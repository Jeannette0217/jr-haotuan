<template>
  <view class="goods-info">
    <view class="list">
      <view class="pictrue">
        <image :src="img" mode="heightFix"></image>
      </view>
      <view class="title-tag">
        <view>
          <view class="tag">
            {{ name }}
          </view>
          <AIProgress
            text="已售"
            strokeWidth="18"
            bgColor=" linear-gradient(180deg, #FF2727, #FF8542)"
            percentage="100"
          />
        </view>

        <view class="action">
          <view class="price-info">
            <view class="vip-price">
              <text class="min">￥</text>
              <text class="max">{{ amount }}</text>
            </view>
            <view class="user-price">
              <text class="bk">{{ tag }}</text>
              <text class="min">￥</text>
              <text class="max">{{ amount }}</text>
            </view>
          </view>
          <button class="green-button">马上抢</button>
        </view>
      </view>
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
  .green-button {
    width: 134rpx;
    height: 72rpx;
    background: linear-gradient(-252deg, #87dfaa, #4fb75c);
    box-shadow: 0px 5rpx 8rpx 0rpx rgba(20, 104, 34, 0.2);
    border-radius: 36rpx;
    font-size: 28rpx;
    color: #fff;
    margin: 0;
  }
  .action {
    display: flex;
    justify-content: space-between;
  }
  .list {
    display: flex;
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
    .pictrue {
      display: flex;
      justify-content: center;
      width: 100%;
      image {
        height: 204rpx;
        width: 204rpx;
      }
    }
    .title-tag {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;

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
    .price-info {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      padding: 0 20rpx;
      // padding-bottom: 27rpx;
      // height: 80rpx;

      .user-price {
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
          color: #ff332b;
        }
        .max {
          font-size: 36rpx;
          color: #ff332b;
          font-weight: bold;
        }
      }
      .vip-price {
        display: flex;
        align-items: center;
        image {
          width: 26rpx;
          height: 26rpx;
          margin-right: 10rpx;
        }
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
</style>
