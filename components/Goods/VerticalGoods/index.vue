<template>
  <view class="goods-info">
    <view class="list">
      <view class="pictrue">
        <image :src="img" mode="heightFix"></image>
      </view>
      <view class="title-tag">
        <view class="tag">
          <!-- <text v-if="item.is_goods === 1">特价</text> -->
          {{ name }}
        </view>
      </view>
      <view class="price-info">
        <view class="user-price">
          <text class="min">￥</text>
          <text class="max">{{ amount }}</text>
        </view>
      </view>
      <button class="green-button">马上抢</button>
    </view>
  </view>
</template>

<script>
export default {
  name: "Vertical-Goods",
  props: {
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
  }
  .list {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    float: left;
    // width:
    padding: 12rpx;
    padding-bottom: 27rpx;
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
        height: 192rpx;
        width: 192rpx;
      }
    }
    .title-tag {
      // display: flex;
      max-height: 100rpx;
      padding: 20rpx;
      .tag {
        float: left;
        margin-right: 10rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
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
      align-items: center;
      justify-content: space-between;
      padding: 0 20rpx;
      padding-bottom: 27rpx;
      height: 80rpx;
      .user-price {
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
          color: #fcb735;
          font-size: 24rpx;
        }
      }
    }
  }
}
</style>
