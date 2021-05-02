<template>
  <view class="recommend-info">
    <view
      class="list"
      v-for="(item, index) in goodsList"
      @click="onSkip('goods')"
      :key="index"
    >
      <VerticalGoods />
    </view>
  </view>
</template>

<script>
import VerticalGoods from "../VerticalGoods";
export default {
  components: {
    VerticalGoods,
  },
  name: "Vertical-Goods",
  props: {
    goodsList: {
      type: Array,
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
  },
};
</script>

<style scoped lang="scss">
/* 为你推荐 */
.recommend-info {
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
      height: 100rpx;
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
      height: 80rpx;
      .user-price {
        display: flex;
        align-items: center;
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
