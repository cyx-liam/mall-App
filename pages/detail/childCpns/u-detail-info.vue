<template>
	<view class="detailInfo">
		<view class="desc">
			<view class='start-line'></view>
			<view class="descContent">{{detailInfo.desc}}</view>
			 <view class='end-line'></view>
		</view>
		<view class="detailImage" v-for="item in detailInfo.detailImage" :key='item.key'>
			<view class="key">
				{{item.key}}
			</view>
			<image v-for="item in item.list" :key="item" :src="item" mode="widthFix" @load="imgLoad"></image>
		</view>
		
	</view>
</template>

<script>
	import {debounce} from "../../../utils/util.js"
	export default {
		props: {
			detailInfo: {
				type:Object 
			},
		},
		methods: {
			imgLoad() {
				let bus = ()=>uni.$emit("imgLoad")
				debounce(bus,500)()
			}
		},
	}
</script>

<style scoped lang="less">
	.detailInfo{
		color: #6f6f6f;
		font-size: 34rpx;
		padding-top: 50rpx;
		border-bottom: 6px solid #f3f3f3;
		.desc{
			padding: 0 30rpx;
			.start-line{
				height: 10rpx;
				width: 200rpx;
				border-left: 11rpx solid #000;
				border-top: 1rpx solid #000;
			}
			.end-line{
				float: right;
				height: 10rpx;
				width: 200rpx;
				border-right: 11rpx solid #000;
				border-bottom: 1rpx solid #000;
			}
			.descContent{
				padding: 30rpx 0;
			}
		}
		.detailImage{
			.key{
				padding:30rpx;
			}
		}
		image{
			width: 100%;
		}
	}
</style>
