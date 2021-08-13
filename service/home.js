import {request1,request2} from "./request.js"

export function getHomeData(){
	return request1({
		url:'/home/multidata',
		methods:'GET'
	})
}

export function getGoods(type,page){
	uni.showLoading({
	    title: '加载中',
		mask:true
	});
	return request2({
		url:'/home/data',
		methods:'GET',
		data:{
			type,
			page
		}
	})
}