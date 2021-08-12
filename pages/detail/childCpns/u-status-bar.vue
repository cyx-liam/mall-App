<template>
	<view class="status-bar">
		<view class="left"></view>
		<view class="center">
			<view class="titles"  v-for="(item,index) in titles" :key='index' @click="titleClick(index)">
				<text :class="{'activeTitle':currIndex == index}">{{item}}</text>
			</view>
		</view>
		<view class="right">
		</view>
	</view>
</template>

<script>
	export default{
		props: {
			currIndex: {
				type: Number,
			},
		},
		data() {
			return {
				titles: ["商品","参数","评论","推荐"],
			}
		},
		methods: {
			titleClick(index){
				this.$emit("titleClick",index)
			}
		},
	}
</script>

<style scoped lang="less">
	.left,.right{
		width: 80rpx;
		text-align: center;
	}
	.status-bar{
		z-index: 5;
		display: flex;
		line-height: 35px;
		border-bottom: thin solid #dddddd;
		.left image {
			margin-top: 20rpx;
			width: 40rpx;
		}
		.center{
			flex: 1;
			display: flex;
			// border: 1px solid #000;
			.titles{
				flex: 1;
				color: #696969;
				text-align: center;
				// border: 1px solid #000;
			}
		}
	}
	.activeTitle{
		color: #ff5777;
	}
</style>
