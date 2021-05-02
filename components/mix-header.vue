<template>
	<view class="head-info">
		<view class="head-search">
			<view class="txt" >
				<text class="text">今日好团</text>
			</view>
			<view class="search" @click="onSearch">
				<view class="hint">
					<text class="max">搜索</text>
				</view>
				<view class="icon">
					<image src="/static/fdj_ico.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"mix-header",
		data() {
			return {
				
			};
		},
		methods: {
			onSearch(){
				uni.navigateTo({url:'/pages/search/search'})
			},
		}
	}
</script>

<style scoped lang="scss">
.head-info {
	// position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	width: 100%;
	padding:0 25rpx;
	height: 131rpx;
	background-color: $mainColor;
	background: url(../.../../static/head_bg.png) no-repeat;
	// background-size: 100% 433rpx;
	background-color: #FFFFFF;
	overflow: hidden;
}
.head-search{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		background-color:$mainColor;
		margin-top: 45rpx;
		.txt {
			color: #fff;
			margin-right: 10rpx;
		}
		.icon-info{
			display: flex;
			align-items: center;
			height: 100%;
			text{
				font-size: 52rpx;
				color: #f6f6f6;
			}
		}
		.search{
			display: flex;
			align-items: center;
			min-width: 183rpx;
			padding: 0 20rpx;
			height: 65rpx;
			background-color: rgba(255,255,255,0.3);
			border-radius: 33rpx;
			.icon{
				display: flex;
				align-items: center;
				margin-right: 20rpx;
				image{
					width: 33rpx;
					height: 38rpx;
				}
			}
			.hint{
				display: flex;
				align-items: center;
				margin-left: 35rpx;
				margin-right: 22rpx;
				.max{
					font-size: 24rpx;
					color: #FFFFFF;
				}
				.min{
					font-size: 24rpx;
					color: #F6f6f6;
					margin-left: 22rpx;
				}
			}
		}
	}
</style>
