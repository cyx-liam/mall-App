<template>
	<image @click="backTop" class="back-top" src="../../static/image/common/top.png" mode="widthFix"></image>
</template>

<script>
	export default {
		name:"u-backTop",
		data() {
			return {
				
			};
		},
		methods: {
			backTop() {
				uni.pageScrollTo({
					scrollTop:0,
				})
			}
		},
	}
</script>

<style>
	.back-top{
		width: 100rpx;
		height: 100rpx;
		z-index: 5;
		position: fixed;
		right: 20rpx;
		/* #ifdef H5 */
		bottom: 100rpx;
		/* #endif */
		/* #ifndef H5 */
		bottom: 20rpx;
		/* #endif */
		
	}
</style>
