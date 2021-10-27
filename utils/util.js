//防抖
let timer = null;
export function debounce(func, delay) {     
    return function () {
        if (timer) {
			clearTimeout(timer)
		}
        timer = setTimeout(() => { 
             func()
        }, delay)
    }
}

// 计算节点顶部高度
export function calcTop(node){
	return new Promise((res,rej)=>{
		const query = uni.createSelectorQuery()
		query.select(node).boundingClientRect()
		query.selectViewport().scrollOffset().exec(data=>{
			res(data[0].top + data[1].scrollTop ) 
		})
	})
	
}


// 转换时间格式
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};
