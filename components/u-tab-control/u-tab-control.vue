<template>
	<view class="titles">
		<view class="titles-item" v-for="(item,index) in titles" :key='index' @click="titleClick(index)">
			<text :class="{active:index==currIndex}">{{item}}</text> 
		</view>
	</view>
</template>

<script>
	export default {
		name:"u-tab-control",
		props: {
			titles: {
				type:Array 
			},
		},
		data() {
			return {
				currIndex:0
			};
		},
		methods:{
			titleClick(index){
				this.currIndex = index
				this.$emit("titleClick",index)
			}
		}
	}
</script>

<style lang="less">
	.titles{
		display: flex;
		line-height: 88rpx;
		background-color: #fff;
		.titles-item{
			flex: 1;
			text-align: center;
			font-weight: bold;
			color: #666;
			.active{
				color: #ff5777;
				padding: 6rpx;
				border-bottom: 6rpx #ff5777 solid;
			}
		}
	}
</style>
