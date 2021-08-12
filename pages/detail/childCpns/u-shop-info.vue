<template>
	<view class="shop-info">
		<view class="logo">
			<view class="logoImg">
				<image :src="shopInfo.logo" mode="widthFix"></image>
			</view>
			<text>{{shopInfo.name}}</text>
		</view>
		<view class="info">
			<view class="sales">
				<view class="sell">
					<view class="num">{{shopInfo.sells}}</view>
					<view class="title">总销量</view>
				</view>
				<view class="goodsCount">
					<view class="num">{{shopInfo.goodsCount}}</view>
					<view class="title">全部宝贝</view>
				</view>
			</view>
			<view class="data">
				<view class="dataItem" v-for="(item,index) in shopInfo.score" :key='index'>
					<view class="name">{{item.name}}</view>
					<view class='score' :class="item.isBetter ? 'good':'less'">{{item.score}}</view>
					<view class="better" :class="item.isBetter ? 'good':'less'">{{item.isBetter ? '高':'低'}}</view>
				</view>
			</view>
		</view>
		<view class="shopSub">
			<button hover-class="activeSub">进店逛逛</button>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			shopInfo: {
				type: Object
			},
		},
	}
</script>

<style lang="less" scoped>
	.shop-info{
		padding: 50rpx 10px;
		color: #666;
		border-bottom: 6px solid #f3f3f3;
		.logo{
			display: flex;
			align-items: center;
			.logoImg{
				width: 100rpx;
				height:100rpx;
				border-radius: 50%;
				overflow: hidden;
				border: 1px solid #ccc;
				image{
					width: 100%;
				}
			}
			text{
				font-size: 38rpx;
				margin-left: 20rpx;
			}
		}
		.info{
			display: flex;
			padding: 50rpx 10rpx;
			.sales{
				display: flex;
				border-right: 1px solid #ccc;
				padding-right: 30rpx;
				.num{
					font-size: 40rpx;
					margin: 10rpx 0;
				}
				.title{
					font-size: 33rpx;
				}
				.sell{
					text-align: center;
					margin-right: 30rpx;
				}
				.goodsCount{
					text-align: center;
				}
			}
			.data{
				margin-left: 50rpx;
				flex: 1;
				.dataItem{
					display: flex;
					text-align: center;
					padding: 5rpx 0;
					.name{
						flex: 2;
					}
					.score{
						flex: 1;
						
					}
					.better{
						flex: 1;
					}
				}
			}
		}
		.shopSub{
			button{
				margin: auto;
				line-height: 80rpx;
				width: 400rpx;
			}
		}
	}
	
	.activeSub{
		background-color: #ccc;
		color: #fff;
	}
	
	.good{
		color: #ff5777;
	}
	.less{
		color: #28b90a;
	}
</style>
