<template>
	<view class="base-info">
		<view class="title">
			{{baseInfo.title}}
		</view>
		<view class="price-info">
			<text class="price">{{baseInfo.newPrice}}</text>
			<text class="oldprice">{{baseInfo.oldPrice}}</text>
			<text class="discount">{{baseInfo.discount}}</text>
		</view>
		<view class="sell-info">
			<view class="sell-item" v-for="item in baseInfo.columns" :key='item'>
				{{item}}
			</view>
		</view>
		<view class="service">
			<view v-if="index !== 0" class="service-item" v-for="(item,index) in baseInfo.services" :key="index">
				<image :src="item.icon" mode="widthFix"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			baseInfo: {
				type: Object,
			},
		},
	}
</script>

<style scoped lang="less">
	.base-info{
		color: #666;
		padding:30rpx 15rpx 0;
		border-bottom: 6px solid #f3f3f3;
		.title{
			font-size: 33rpx;
			margin-bottom: 10rpx;
		}
		.price-info{
			margin-bottom: 30rpx;
			.price{
				color:#ff5777;
				font-size: 40rpx;
			}
			.oldprice{
				text-decoration: line-through;
				margin-left: 20rpx;
			}
			.discount{
				background-color: #ff5777;
				color: #fff;
				margin-left: 20rpx;
				padding: 4rpx 6rpx;
				border-radius: 12rpx;
				font-size: 15rpx;
				position: relative;
				bottom: 12rpx;
			}
		}
		.sell-info{
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			padding-bottom: 20rpx;
			border-bottom: 1px solid #ccc;
		}
		.service{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20rpx 0 40rpx;
			.service-item{
				
				image{
					width: 25rpx;
					position: relative;
					top: 5rpx;
					margin-right: 6rpx;
				}
				text{
					font-size:25rpx ;
				}
			}
		}
	}
</style>
