<template>
	<view class="catagory">
		<u-category-menu @menuClick='menuClick' :categoryList="categoryList"></u-category-menu>
		<scroll-view scroll-y class="category-content">
			<u-category-data v-if="dataList" :categoryData="dataList"></u-category-data>
			<view class="recommend">热销推荐</view>
			<u-goods :goods='recommendList'></u-goods>
		</scroll-view>
		
	</view>
</template>

<script>
	import uCategoryMenu from "./childCpns/u-category-menu.vue"
	import uCategoryData from "./childCpns/u-category-data.vue"
	import ugoods from "@/components/u-goods/u-goods.vue"
	
	import {getCategory,getCategoryData,getCategoryDetail} from "../../service/category.js"
	export default {
		data() {
			return {
				categoryList:[],
				categoryData:{},
				currIndex:-1
			}
		},
		components: {
			uCategoryMenu,
			uCategoryData,
			ugoods
		},
		created() {
			this._getCategory()
		},
		methods: {
			// 网络请求
			_getCategory(){
				getCategory().then(res=>{
					this.categoryList = res.data.category.list;
					// console.log(this.categoryList);
					for (let i in this.categoryList) {
						this.categoryData[i]={
							data:[],
							recommend:[]
						}
					}
					
					// this._getCategoryData(0)
					this._getContent(0)
				})
			},
			_getContent(index){
				Promise.all([
					new Promise((resolve,reject)=>{
						getCategoryData(this.categoryList[index].maitKey).then(res=>{
							resolve(res.data.list)
						})
					}),
					new Promise((resolve,reject)=>{
						getCategoryDetail(this.categoryList[index].miniWallkey).then(res=>{
							resolve(res)
						})
					})
				]).then(res=>{
					console.log(res);
					this.categoryData[index].data = res[0]
					this.categoryData[index].recommend=res[1]
					this.currIndex = index
					uni.hideLoading()
				})
			},
			// _getCategoryData(index){
			// 	getCategoryData(this.categoryList[index].maitKey).then(res=>{
			// 		// console.log(res.data.list);
			// 		this.categoryData[index].data=res.data.list
			// 		this._getCategoryDetail(index)
					
			// 	})
				
			// },
			// _getCategoryDetail(index){
			// 	getCategoryDetail(this.categoryList[index].miniWallkey).then(res=>{
			// 		// console.log(res);
			// 		this.currIndex = index
			// 		this.categoryData[index].recommend=res
			// 		uni.hideLoading()
			// 	})
			// },
			// 事件
			menuClick(index){
				if(!this.categoryData[index].data.length){
					this._getContent(index)
				}else{
					this.currIndex = index
				}
			}
		},
		computed: {
			dataList() {
				if(this.currIndex == -1){
					return []
				}
				return this.categoryData[this.currIndex].data 
			},
			recommendList(){
				if(this.currIndex == -1){
					return []
				}
				return this.categoryData[this.currIndex].recommend
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
	.catagory{
		display: flex;
	}
	.category-content {
		flex: 1;
		// border: 1px solid #000;
		height: calc(100vh - 50px - 44px);
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		.recommend{
			font-size: 45rpx;
			font-weight: bold;
			padding: 5rpx 20rpx;
			margin: 40rpx 0 15rpx;
			background-color: #ff5a7e;
			color: #fff;
		}
	}
</style>
