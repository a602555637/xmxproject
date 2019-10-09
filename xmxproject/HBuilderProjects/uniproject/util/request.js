const baseUrl = 'https://www.finetwm.com/xmRepair/'

function postRequestForm(url, data) {
	let promise = new Promise((resolve, reject) => {
		let postData = data
		uni.request({
			url: baseUrl + url,
			data: postData,
			method: 'POST',
			header: {
				'content-Type': 'application/x-www-form-urlencoded',
				'TOKEN': 'dfsdgfjew'
			},
			success: res => {
				// 此处的code=0，只是个举例，有的可能是1等其他的，具体的看后台决定，
                //返回什么就相应的做调整
				if (res.statusCode == 200) {
					resolve(res.data.data)
				} else {
					// 请求服务器成功，但是由于服务器没有数据返回，此时无code。会导致这个空数据 
                    //接口后面的then执行
					// 不下去，导致报错，所以还是要resolve下，这样起码有个返回值，
                    //不会被阻断在那里执行不下去！
					resolve(res.data.data)
				}
			},
			error: e => {
				reject('网络出错')
			}
		})
	})
	return promise
}

function postRequestJson(url, data) {
	let promise = new Promise((resolve, reject) => {
		let postData = data
		uni.request({
			url: baseUrl + url,
			data: postData,
			method: 'POST',
			header: {
				'content-type': 'application/json',
				'TOKEN': 'sdlkhgkjsrg'
			},
			success: res => {
                // 根据返回状态码进行数据处理
				if (res.statusCode == 200) {
					resolve(res.data.data)
				} else {
					// 请求服务器成功，但是由于服务器没有数据返回，此时无code。会导致空数据 
                    //接口后面的then执行
					resolve(res.data.data)
				}
			},
			error: e => {
				reject('网络出错')
			}
		})
	})
	return promise
}

// get请求封装
function getRequestJson(url, data) {
	let promise = new Promise((resolve, reject) => {
		let postData = data;
		uni.request({
			url: baseUrl + url,
			data: postData,
			method: 'GET',
			header: {
				'content-type': 'application/json'
			},
			success: res => {
				if (res.statusCode == 200) {
					resolve(res.data.data)
				} else {
					resolve(res.data.data)
				}
			},
			error: e => {
				reject('网络出错')
			}
		})
	})
	return promise
}

function getRequestForm(url, data) {
	let promise = new Promise((resolve, reject) => {
		let postData = data;
		uni.request({
			url: baseUrl + url,
			data: postData,
			method: 'GET',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				if (res.statusCode == 200) {
					resolve(res.data.data)
				} else {
					resolve(res.data.data)
				}
			},
			error: e => {
				reject('网络出错')
			}
		})
	})
	return promise
}
 
 
module.exports = {
	postRequestForm,
	postRequestJson,
	getRequestForm,
	getRequestJson
}