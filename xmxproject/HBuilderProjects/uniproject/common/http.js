function urlRequest(url, method, param){
	let baseUrl = 'https://120.24.180.246/xmRepair/' + url;
	uni.request({
		url:baseUrl,
		data:param,
		method:method,
		success: res=>{
			console.log(res)
		},
		fail: err=>{
			console.log(err)
		}
	})
}

export default {
	urlRequest: function(url, param, method) {
		return urlRequest(url, param, method)
	}
}
		