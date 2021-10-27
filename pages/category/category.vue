<template>
	<view class="catagory">
		<u-category-menu @menuClick='menuClick' :categoryList="categoryList"></u-category-menu>
		<!-- <scroll-view scroll-y class="category-content">
			<u-category-data v-if="dataList" :categoryData="dataList"></u-category-data>
			<view class="recommend">热销推荐</view>
			<u-goods :goods='recommendList'></u-goods>
		</scroll-view> -->
		<view class="content-page">
			<view v-for="(item,index) in categoryData" :key="index">
				<u-category-content v-if="currIndex!=-1" :index="index" :currIndex="currIndex"  :dataList="item.data" :recommendList="item.recommend"/>
			</view >
		</view>
		
	</view>
</template>

<script>
	import uCategoryMenu from "./childCpns/u-category-menu.vue"
	import uCategoryContent from "./childCpns/u-category-content.vue"
	
	import {getCategory,getCategoryData,getCategoryDetail} from "../../service/category.js"
	export default {
		data() {
			return {
				categoryList:[],
				categoryData:[],
				currIndex:-1
			}
		},
		components: {
			uCategoryMenu,
			uCategoryContent,
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
						// this._getContent(i)
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
			// 事件
			menuClick(index){
				if(!this.categoryData[index].data.length && !this.categoryData[index].recommend.length){
					this._getContent(index)
					// this.currIndex = index
				}else{
					this.currIndex = index
				}
			}
		},
	}
</script>

<style lang="less">
	/deep/::-webkit-scrollbar {
		display: none;
		width: 0;
		height: 0;
	}
	.catagory{
		display: flex;
		
	}
	.content-page {
		flex: 1;
		position: relative;
		height: calc(100vh - 50px - 44px);
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
	}
	.active{
		z-index: 5;
	}
</style>
