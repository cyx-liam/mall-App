<template>
	<view>
		<swiper class="banner"
		 indicator-dots
		 indicator-active-color="#fff"
		 autoplay
		 interval=3000
		 circular>
			<swiper-item class="banner-item" v-for="item in banner" >
				<image :src="item.image" mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"u-swiper",
		props:{
			banner:Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.banner{
		width: 100%;
		height: 400rpx;
		.banner-item image{
			width:100%;
			
		}
	}
</style>
