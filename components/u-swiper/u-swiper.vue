<template>
		<swiper class="banner"
		 indicator-dots
		 indicator-active-color="#fff"
		 autoplay
		 interval=3000
		 circular 
		 :style="{height:sheight,marginTop:marginTop}">
			<swiper-item class="banner-item" v-for="(item,index) in banner" :key="index">
				<image :src="item.image || item" mode="widthFix"></image>
			</swiper-item>
		</swiper>
</template>

<script>
	export default {
		name:"u-swiper",
		props:{
			banner:Array,
			sheight:{
				type:String,
				default:'400rpx'
			},
			marginTop:{
				type:String,
				default:'0rpx'
			},
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
		.banner-item image{
			width:100%;
		}
	}
</style>
