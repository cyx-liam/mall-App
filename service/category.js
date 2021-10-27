import {request2} from "./request.js"

export function getCategory(){
	return request2({
		url: '/category'
	})
}

export function getCategoryData(maitKey){
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