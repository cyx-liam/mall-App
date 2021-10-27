<template>
	<scroll-view :class="{'active':index==currIndex}" scroll-y class="category-content">
		<u-category-data v-if="dataList" :categoryData="dataList"></u-category-data>
		<view class="recommend">热销推荐</view>
		<u-goods :goods='recommendList'></u-goods>
	</scroll-view>
</template>

<script>
	import uCategoryData from "./u-category-data.vue"
	import ugoods from "@/components/u-goods/u-goods.vue"
	export default {
		props:{
			index:{
				type:Number,
			},
			currIndex:{
				type:Number,
				default:0
			},
			dataList:{
				type:Array,
				default:()=>[]
			},
			recommendList:{
				type:Array,
				default:()=>[]
			}
		},
		components:{
			uCategoryData,
			ugoods
		}
	}
</script>

<style lang="less">
	.category-content {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom:0;
		background-color: #fff;
		.recommend{
			font-size: 45rpx;
			font-weight: bold;
			padding: 5rpx 20rpx;
			margin: 40rpx 0 15rpx;
			background-color: #ff5a7e;
			color: #fff;
		}
	}
</style>
