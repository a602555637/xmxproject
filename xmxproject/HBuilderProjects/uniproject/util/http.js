const baseUrl = 'https://120.24.180.246/xmRepair/'

class HTTP {
	request(params) {
		if (!params.method) {
			params.method = 'GET'
		}
		uni.request({
			url: baseUrl + params.url,
			method: params.method,
			data: params.data,
			success: res => {
				params.success(res.data)
			},
			fail: err=>{
				console.log(err)
			}
		})
	}
}

export {
	HTTP
}
