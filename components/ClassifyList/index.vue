<template>
  <view>
    <view class="header">
      <text>综合排序</text>
      <text>销量</text>
      <text>上新</text>
    </view>
    <view class="body">
      <HorizontalGoods />
    </view>
  </view>
</template>

<script>
import HorizontalGoods from "./HorizontalGoods/index";
export default {
  components: {
    HorizontalGoods,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 86rpx;
  line-height: 86rpx;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 8rpx 16rpx 0rpx rgba(69, 19, 0, 0.12);
  border-radius: 8rpx;
  display: flex;
  align-items: center;

  text {
    width: 33.3%;
    height: 100%;
    text-align: center;
    font-size: 24rpx;
    color: #999;
  }
}
.body {
  margin-top: 24rpx;
}
</style>
