// 所需要接口


抢单
	当前用户所在经纬度: {
		'',
		''
	}

	获取到有资格接单的店铺
		经纬度
		店铺名称
		店铺地址
		店铺头像
		评价
		电话号码

https://www.finetwm.com/xmRepair/

content-Type: "x-www-form-urlencoded"



getQrcode(){
				uni.request({
					url: 'https://api.weixin.qq.com/cgi-bin/token',
					method: 'GET',
					data: {
						grant_type: 'client_credential',
						appid: 'wx5a7e48b2d2c7cc4b',
						secret: '9fdc700fef21bb7d3141a50f3fc82591'
					},
					success: res => {
						this.accessToken = res.data.access_token
						this.getCode()
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			getCode(){
				uni.request({
					url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit',
					method: 'POST',
					access_token: this.accessToken,
					dataType: 'json',
					data: {
						page:'pages/index',
						scene:'12&34',
						width:300
					},
					success: res => {
						console.log(res)
					},
					fail: err => {
						console.log(err)
					}
				})
			}