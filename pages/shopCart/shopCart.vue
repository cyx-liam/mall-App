<template>
	<view class="shop-cart">
		<scroll-view scroll-y class="cart-list">
			<u-cart-info v-for="item in shooCartList" :key='item.id' :itemInfo="item"></u-cart-info>
		</scroll-view>
		<u-buttom-bar class="buttom-bar"></u-buttom-bar>
	</view>
</template>

<script>
	import uCartInfo from "./childCpns/u-cart-item.vue"
	import uButtomBar from "./childCpns/u-bottom-bar.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
			    title: `购 物 车 (${this.$store.state.cartList.length})`
			});
		},
		components: {
			uCartInfo,
			uButtomBar
		},
		computed: {
			shooCartList() {
				return this.$store.state.cartList 
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
	.cart-list{
		height: calc(100vh - 50px - 44px - 44px);
		/* #ifndef H5 */
		height: calc(100vh  - 44px);
		/* #endif */
		
	}
</style>
