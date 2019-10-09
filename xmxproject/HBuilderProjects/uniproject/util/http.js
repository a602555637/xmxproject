
var request = require('./request.js')
 
//故障： 根据id获取详情
var postFaulesItem = function(e){
	let url = 'faults/getDetail'
	return request.postRequestJson(url, e)
}
//故障： 获取故障列表
var getFaulesList = function (e) {
	let url = 'faults/getDetailList'
	return request.getRequestJson(url, e)
}
//商家： 获取商家所有订单
var postShopOrderList = function (e) {
	let url = 'order/findAllShopOrder'
	return request.postRequestForm(url, e)
}
 
 
module.exports = {
	postFaulesItem,
	getFaulesList,
	postShopOrderList
}