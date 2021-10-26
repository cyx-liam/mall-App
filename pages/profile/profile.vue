<template>
	<view class="profile">
		<u-header></u-header>
		<u-info></u-info>
		<u-list :list="infoList"></u-list>
		<u-list :list="serveList"></u-list>
	</view>
</template>

<script>
	import uHeader from "./childCpns/u-header.vue"
	import uInfo from "./childCpns/u-info.vue"
	import uList from "./childCpns/u-list.vue"
	export default {
		components: {
			uHeader,
			uInfo,
			uList
		},
		data() {
			return {
				infoList:[
					{ icon: require('@/static/image/profile/message.png'), info: '我的消息' },
				    { icon: require('@/static/image/profile/pointer.png'), info: '积分商城' },
					{ icon: require('@/static/image/profile/vip.png'), info: '会员卡' },
				],
				serveList:[
					{ icon: require('@/static/image/profile/cart.png'), info: '我的购物车' },
					{ icon: require('@/static/image/profile/app.png'), info: '下载购物APP' },
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
