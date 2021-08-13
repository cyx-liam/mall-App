<template>
	<view class="goodsItem" @click="itemClick">
		<image class="showImg" :src="img" mode="widthFix"></image>
		<view class="desc">
			<view class="title">{{goodsItem.title}}</view>
			<view class="info">
				<text class="price">￥{{goodsItem.price}}</text>
				<view class="cfav">
					<image src="../../static/image/common/favor.png" mode="widthFix"></image>
					<text>{{goodsItem.cfav}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {debounce} from "../../utils/util.js"
	export default {
		name:"u-goods-item",
		props: {
			goodsItem: {
				type: Object 
			},
		},
		data() {
			return {
			};
		},
		computed: {
			img() {
				return this.goodsItem.show?.img ??this.goodsItem.image  
			}
		},
		methods: {
			itemClick() {
				if(this.goodsItem.iid){
					uni.navigateTo({
						url:"../../pages/detail/detail?idd="+this.goodsItem.iid,
					})
				}
				
			},
		},
	}
</script>

<style lang="less">
	.goodsItem{
		width: 100%;
		position: relative;
		padding-bottom: 80rpx;
		
		.showImg{
			width: 100%;
			border-radius: 8rpx;
		}
		.desc{ 
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			.title{
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
				font-size: 30rpx;
				color: #333;
			}
			.info{
				display: flex;
				justify-content: center;
				font-size: 28rpx;
				.price{
					color: #ff5777;
					margin-right: 10rpx;
				}
				.cfav  image{
					position: relative;
					top: 5rpx;
					width: 30rpx;
				}
				
			}
		}
	}
</style>
