<template>
	<view class="goods">
		<u-goods-itme class="item" v-for="(item,index) in goods" :key="index" :goodsItem="item"></u-goods-itme>
	</view>
</template>

<script>
	import uGoodsItme from "./u-goods-item.vue"
	export default {
		name:"u-goods",
		props: {
			goods:Array
		},
		data() {
			return {
				
			};
		},
		components: {
			uGoodsItme
		},
	}
</script>

<style lang="less">
	.goods{
		display: flex;
		
		flex-wrap: wrap;
		justify-content: space-evenly;
		margin-top: 10rpx;
		.item{
			position: relative;
			margin-bottom: 20rpx;
			width: 48%;
		}
	}
</style>
