<template>
	<view class="detail">
		<u-status-bar :currIndex="currIndex" class="statusBar" @titleClick='titleClick'></u-status-bar>
		<u-swiper sheight="800rpx" marginTop="35px" class="u-swiper" :banner="banner"></u-swiper>
		<u-base-info  :baseInfo="baseInfo"></u-base-info>
		<u-shop-info :shopInfo="shopInfo"></u-shop-info>
		<u-detail-info :detailInfo="datilInfo" @imgLoad='imgLoad'></u-detail-info>
		<u-param-info class="param" :paramInfo='paramInfo'></u-param-info>
		<u-comment-info class="comment" :commentInfo="commentInfo"></u-comment-info>
		<view class="recommends">商品推荐</view>
		<u-goods class='goods' :goods="goods"></u-goods>
		<goods-nav  :fill="true" @buttonClick="buttonClick" class="nav"></goods-nav>
	</view>
</template>

<script>
	import uSwiper from "../../components/u-swiper/u-swiper.vue"
	import uGoods from "../../components/u-goods/u-goods.vue"
	import uStatusBar from "./childCpns/u-status-bar.vue"
	import uBaseInfo from "./childCpns/u-base-info.vue"
	import uShopInfo from "./childCpns/u-shop-info.vue"
	import uDetailInfo from "./childCpns/u-detail-info.vue"
	import uParamInfo from "./childCpns/u-param-info.vue"
	import uCommentInfo from "./childCpns/u-comment-info.vue"

	import goodsNav from "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"
	
	import {debounce,calcTop} from "../../utils/util.js"
	import {
		getDateil,
		GoodsBaseInfo,
		ShopInfo,
		ParamInfo,
		getRecommends
	} from "../../service/detail.js"
	export default {
		components: {
			uStatusBar,
			uSwiper,
			uBaseInfo,
			uShopInfo,
			uDetailInfo,
			uParamInfo,
			uCommentInfo,
			uGoods,
			goodsNav
		},
		data() {
			return {
				idd: '',
				banner: [],
				baseInfo: {},
				shopInfo: {},
				datilInfo: {},
				paramInfo: {},
				commentInfo: {},
				goods: [],
				scrollTops:[],
				currIndex:0,
				detailImgLength:0,
				imgLoadCount:0
			}
			
		},
		onLoad(e) {
			this._getDateil(e.idd)
			this._getRecommends()
		},
		onPageScroll(e) {
			let top = e.scrollTop
			// console.log(top);
			for (let i = 0; i < this.scrollTops.length; i++) {
				if(top >= this.scrollTops[i] && top < this.scrollTops[i+1]){
					this.currIndex = i
					break;
				}
			}
			// const query = uni.createSelectorQuery()
			// query.select(".param").boundingClientRect()
			// query.selectViewport().scrollOffset().exec(res=>{
				// console.log(res[0].top + res[1].scrollTop)
			// })
			
		},
		onReady() {
			
		},
		mounted() {
			
		},
		methods: {
			async _getDateil(idd) {
				this.idd = idd
				let res = await getDateil(idd)
					// console.log(res.result);
				let data = res.result
				this.banner = data.itemInfo.topImages
				this.baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)
				this.shopInfo = new ShopInfo(data.shopInfo)
				this.datilInfo = data.detailInfo;
				this.paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)
				if (data.rate && data.rate.cRate > 0) {
					this.commentInfo = data.rate.list[0]
				}
				uni.hideLoading();
				// console.log(this.datilInfo);
			},
			async _getRecommends() {
				let res = await getRecommends()
				this.goods.push(...res.data.list)
				uni.hideLoading();
				// console.log(this.goods);
			},
			titleClick(index){
				// console.log(this.scrollTops[index]);
				// this.$nextTick(function(){
					uni.pageScrollTo({
						scrollTop:this.scrollTops[index]+1,
						duration:200,
					})
				// })	
				
				
			},
			buttonClick(e){
				if(e.index == 0){
					this.addCart()
				}
			},
			addCart(){
				let shopInfo = {}
				shopInfo.id = this.idd
				shopInfo.img = this.datilInfo.detailImage[0].list[0]
				shopInfo.title = this.baseInfo.title
				shopInfo.desc = this.datilInfo.desc
				shopInfo.price = this.baseInfo.realPrice
				// console.log(shopInfo);
				this.$store.dispatch("addCart",shopInfo)
			},
			async imgLoad(){
				// console.log('aad');
				this.scrollTops[0] = 0
				this.scrollTops[1] =await calcTop(".param") - 35
				this.scrollTops[2] =await calcTop(".comment") - 35
				this.scrollTops[3] =await calcTop(".recommends") - 35
				this.scrollTops[4] = Number.MAX_VALUE
				// console.log(this.scrollTops);
				// uni.hideLoading();
				
			}
			
		}
	}
</script>

<style>
	.detail{
		padding-bottom:90rpx ;
	}
	.u-swiper .banner{
		margin-top: 35px;
	}
	.statusBar {
		position: fixed;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		/* #ifndef H5 */
		top: 0px;
		/* #endif */
		left: 0;
		right: 0;
		background-color: #fff;
		z-index: 5;
	}

	.recommends {
		font-size: 45rpx;
		color: #787878;
		padding: 20rpx 10rpx;
		font-weight: bold;
	}

	.nav {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
