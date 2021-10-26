<template>
	<view class="info">
		<view class="info-item">
			<view class="number">
				<text>0.00</text>元
			</view>
			<view class="title">我的余额</view>
		</view>
		<view class="info-item">
			<view class="number">
				<text>0</text>个
			</view>
			<view class="title">我的优惠</view>
		</view>
		<view class="info-item">
			<view class="number">
				<text>0</text>分
			</view>
			<view class="title">我的积分</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style scoped lang="less">
	.info{
		display: flex;
		color: #666;
		.info-item{
			flex:1;
			text-align: center;
			font-size: 32rpx;
			padding: 50rpx 0;
			border-right: 3rpx solid #f5f5f5;
			.number text{
				font-size: 40rpx;
				font-weight: bold;
				color: #ff0000;
			}
			.title{
				margin-top: 8rpx;
			}
		}
	}
</style>
