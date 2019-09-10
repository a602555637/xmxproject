import request from '../components/pocky-request/index.js'

function urlRequest() {
	const instance = new request()
	const r = instance.get({
		url:'faults/getTypes',
		contentType: 'json',
		success:res=>{
			console.log(res)
		},
		fail:err=>{
			console.log(err)
		}
	})
}


export default {
	urlRequest
}