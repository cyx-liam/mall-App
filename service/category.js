import {request2} from "./request.js"

export function getCategory(){
	return request2({
		url: '/category'
	})
}

export function getCategoryData(maitKey){
	uni.showLoading({
	    title: '加载中',
		mask:true
	});
	return request2({
		url:'/subcategory',
		data:{
			maitKey
		}
	})
}

export function getCategoryDetail(miniWallkey){
	return request2({
		url:'/subcategory/detail',
		data:{
			miniWallkey,
			type:'sell'
		}
	})
}