<template>
	<view class="paramInfo">
		<view class="sizes" v-for="(sizes,index) in paramInfo.sizes" :key='index'>
			<view class="size" v-for="(item,index) in sizes" :key='index'>
				<view class="data" v-for="(data,index) in item" :key='index'>
					{{data}}
				</view>
			</view>
		</view>
		<view class="infos" v-for="(item,index) in paramInfo.infos" :key='item.key'>
			<view class="key">{{item.key}}</view>
			<view class="value">{{item.value}}</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props: {
			paramInfo:Object
		},
	}
</script>

<style scoped lang="less">
	.paramInfo{
		color: #7e7e7e;
		font-size: 35rpx;
		padding: 20rpx 20rpx 50rpx;
		line-height: 80rpx;
		border-bottom: 6px solid #f3f3f3;
		.size{
			display: flex;
			.data{
				flex:1;
				border-bottom: 1rpx #ececec solid;
			}
		}
		.infos{
			display: flex;
			border-bottom: 1rpx #ececec solid;
			.key{
				
				margin-right: 100rpx;
				white-space: nowrap;
			}
			.value{
				color: #ff5777;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}
</style>
