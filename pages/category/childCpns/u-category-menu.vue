<template>
	<scroll-view scroll-y show-scrollbar class="category-menu">
		<view class="menu-item" v-for="(item,index) in categoryList" :key='item.title' @click="titleClick(index)" :class="{'activeTitle':currIndex==index}">
			<text>{{item.title}}</text>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		props: {
			categoryList: {
				type: Array,
				default: () => []
			},
		},
		data() {
			return {
				currIndex: 0
			}
		},
		methods: {
			titleClick(index) {
				this.currIndex = index
				
				this.$emit("menuClick",index)
			}
		},
	}
</script>

<style scoped lang="less">
	/deep/::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
	}

	.category-menu {
		// border: 1px solid #000;
		height: calc(100vh - 50px - 44px);
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		width: 210rpx;
		background-color: #f1f1f1;
		color: #666;
		.menu-item {
			line-height: 100rpx;
			text-align: center;
			// border-bottom: thin solid #000;
			letter-spacing: 5rpx;
		}
	}
	
	.activeTitle{
		background-color: #fff;
		color: #ff5777;
		font-weight: bold;
		border-left: 6rpx solid #ff5777;
	}
</style>
