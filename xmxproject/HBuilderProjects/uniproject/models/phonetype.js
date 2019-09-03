import {HTTP} from '/util/http.js'

class faultsModel extends HTTP {
	faults(sCallback) {
		this.request({
			url:'faults/getTypes',
			success:res=>{
				sCallback(res)
				console.log(res)
			}
		})
	}
}

export {faultsModel}