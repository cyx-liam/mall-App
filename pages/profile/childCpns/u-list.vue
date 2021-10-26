<template>
	<view class="list">
		<view class="list-item" v-for="item in list" :key='item.icon'>
			<image :src="item.icon" mode="widthFix"></image>
			<text>{{item.info}}</text>
		</view>
	</view>
	
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default:()=>[] 
			},
		},
	}
</script>

<style scoped lang="less">
	.list{
		padding-left: 30rpx;
		border-top: 35rpx solid #fafafa;;
		.list-item{
			display: flex;
			align-items: center;
			color: #666;
			line-height: 90rpx;
			border-bottom: 1rpx solid #f5f5f5;
			image{
				width: 45rpx;
			}
		}

	}
</style>
