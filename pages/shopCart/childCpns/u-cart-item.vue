<template>
	<view class="cartItem">
		<view class="choice">
			<icon :color="itemInfo.choice ? '#ff5777':'#dcdcdc'" type='success' @click="isChoice"></icon>
		</view>
		<view class="productImg">
			<image :src="itemInfo.img" mode="widthFix"></image>
		</view>
		<view class="productInfo">
			<view class="title">{{itemInfo.title}}</view>
			<view class="desc">{{itemInfo.desc}}</view>
			<view class="price-count">
				<view class="price">￥{{(itemInfo.price * itemInfo.count).toFixed(2)}}</view>
				<view class="count">
					<view class="sub" @click="sub">-</view>
					<view class="show-count">{{itemInfo.count}}</view>
					<view class="add" @click="add">+</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			itemInfo: {
				type:Object,
				default: ()=>{}
			},
		},
		methods: {
			isChoice() {
				this.$store.commit("isChoise",this.itemInfo)
			},
			sub(){
				if(this.itemInfo.count>1){
					this.$store.commit("subCartCount",this.itemInfo)
				}
			},
			add(){
				this.$store.commit("addCartCount",this.itemInfo)
			}
		},
	}
</script>

<style scoped lang="less">
	.text-ellipsis(){
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.cartItem{
		display: flex;
		align-items: center;
		padding: 15rpx 0;
		border-bottom: thin solid #dedede;
		.choice{
			padding: 0 10rpx 0;
		}
		.productImg{
			image{
				width: 200rpx;
				height: 240rpx;
				border-radius: 10rpx;
			}
		}
		.productInfo{
			flex: 1;
			// border: 1px solid #000;
			padding: 0 25rpx 0 10rpx;
			color: #666;
			overflow: hidden;
			.title{
				font-weight: bold;
				font-size: 35rpx;
				padding-bottom: 20rpx;
				.text-ellipsis()
			}
			.desc{
				font-size: 28rpx;
				padding-bottom: 75rpx;
				.text-ellipsis()
			}
			.price-count{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.price{
					font-weight: bold;
					font-size: 40rpx;
					color: #ff5777;
				}
				.count{
					display: flex;
					align-items: center;
					border: thin solid #999;
					width: 180rpx;
					border-radius: 10rpx;
					overflow: hidden;
					font-size: 35rpx;
					line-height: 43rpx;
					.show-count{
						flex: 1;
						text-align: center;
						border-left: thin solid #999;
						border-right: thin solid #999;
						margin: 4rpx 0;
					}
					.add,.sub{
						font-size: 40rpx;
						// border: thin solid #333;
						width: 48rpx;
						text-align: center;
					}
					
				}
			}
		}
		
	}
</style>
