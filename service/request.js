function baseRequest(baseUrl,config){
	uni.showLoading({
		mask:true,
	    title: '加载中'
	});
	return new Promise((resole,reject)=>{
		uni.request({
			url:baseUrl+config.url,
			timeout:10000,
			data:config.data,
			method:config.method,
			success: (res) => {
				resole(res.data)
			}
		})
	})
}

export function request1(config){
	return baseRequest('http://123.207.32.32:8000',config)
}

export function request2(config){
	return baseRequest('http://152.136.185.210:7878/api/hy66',config)
}