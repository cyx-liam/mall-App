<template>
	<view class="shop-cart">
		<scroll-view scroll-y class="cart-list" v-if="this.$store.state.cartList.length">
			<u-cart-info v-for="item in shooCartList" :key='item.id' :itemInfo="item"></u-cart-info>
		</scroll-view>
		<view class="not-cart" v-else>
			<text>购物车暂无商品</text>
		</view>
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
	.not-cart{
		width: 500rpx;
		text-align: center;
		position: fixed;
		// border: 1px solid #000;
		top: 50%;
		left: 50%;
		margin-left:-250rpx;
		margin-top: -100rpx;
		text{
			color: #828282;
			font-size: 50rpx;
			font-weight:bold;
			
		}
	}
</style>
