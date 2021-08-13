<template>
	<view>
		<u-swiper :banner="banner"></u-swiper>
		<u-recommend :recommend="recommend"></u-recommend>
		<image class="recommend" src="../../static/image/home/recommend_bg.jpg" mode="widthFix"></image>
		<view class="tabControl">
			<u-tab-control :titles="titles" @titleClick="titleClick"></u-tab-control>
		</view>
		<u-goods :goods="goods[currTitle].list"></u-goods>
		<u-back-top v-if="isBackTop" class="backTop"></u-back-top>
	</view>
</template>

<script>
	import uSwiper from "../../components/u-swiper/u-swiper.vue"
	import uRecommend from "./childCpns/u-recommend/u-recommend.vue"
	import uTabControl from "../../components/u-tab-control/u-tab-control.vue"
	import uGoods from "../../components/u-goods/u-goods.vue"
	import uBackTop from "../../components/u-back-top/u-back-top.vue"
	
	import {getHomeData,getGoods} from "../../service/home.js"
	export default {
		data() {
			return {
				banner:[],
				recommend:[],
				titles:['流行','新款','精选'],
				goods:{
					pop:{page:0,list:[]},
					new:{page:0,list:[]},
					sell:{page:0,list:[]}
				},
				currTitle:"pop",
				isBackTop:false
			}
		},
		components:{
			uSwiper,
			uRecommend,
			uTabControl,
			uGoods,
			uBackTop
		},
		created() {
			this._getHomeData()
			this._getGoods("pop")
			this._getGoods("new")
			this._getGoods("sell")
		},
		methods:{
			_getHomeData(){
				getHomeData().then(res=>{
					// console.log(res);
					this.banner = res.data.banner.list
					// console.log(this.banner)
					this.recommend = res.data.recommend.list
					
				})
			},
			_getGoods(type){
				
				let page = this.goods[type].page + 1
				getGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page = page
					// console.log(this.goods[type].list)
					uni.hideLoading();
				})
			},
			titleClick(index){
				this.currTitle = Object.keys(this.goods)[index]
			}
			
		},
		onReachBottom(){
			this._getGoods(this.currTitle)
		},
		onPageScroll(e){
			this.isBackTop = (e.scrollTop>1000)
		}
	}
</script>

<style>
	.recommend{
		width: 100%;
	}
	.tabControl{
		position:sticky;
		z-index: 5;
		/* #ifdef H5 */
		top:44px;
		/* #endif */
		/* #ifndef H5 */
		top:0px;
		/* #endif */
	}
</style>
