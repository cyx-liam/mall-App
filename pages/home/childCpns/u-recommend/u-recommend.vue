<template>
	<view class="recommend">
		<view class="recommend-item" v-for="(item,index) in recommend" :key="index">
			<image :src="item.image" mode="widthFix"></image>
			<view>{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			recommend: {
				type:Array 
			},
		},
	}
</script>

<style lang="less">
	.recommend{
		display: flex;
		justify-content: space-evenly;
		padding: 25rpx 0;
		border-bottom: 20rpx #eee solid;
		.recommend-item{
			width: 23%;
			text-align: center;
			color: #666;
			font-size: 30rpx;
			image{
				width: 100%;
				margin-bottom: 10rpx;
			}
		}
	}
</style>
