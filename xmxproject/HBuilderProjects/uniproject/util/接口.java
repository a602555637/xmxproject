/*
https://www.finetwm.com/xmRepair/
*/
获取商家所有订单
	/order/findAllShopOrder
	post
	参数	shopId  int
	
	{
    "code": 200,
    "message": "ok",
    "data": [
        {
            "orderId": 1000000000001,	订单id
            "price": 123.0,		金额
            
            "serviceMode": 0,	服务类型
            "orderStatus": 1,	订单状态
            
            "phone": {					机型
                "brand": "苹果",
                "model": "iPhone XR",
                "colour": "黑色"
            },
            
        },
		
		
		
根据状态查询商家订单--》单个参数
		/order/findShopOrderByStatus
		post
	参数	shopId  int
			orderStatus int
	
	{
    "code": 200,
    "message": "ok",
    "data": [
        {
            "orderId": 1000000000001,	订单id
            "price": 123.0,		金额
            
            "serviceMode": 0,	服务类型
            "orderStatus": 1,	订单状态
            
            "phone": {					机型
                "brand": "苹果",
                "model": "iPhone XR",
                "colour": "黑色"
            },
            
        },
		
		
根据状态查询商家订单--》多个参数
		/order/findShopOrderByStatuss
		post
	参数	shopId  int
			orderStatus 0
			orderStatus 4
			

	{
    "code": 200,
    "message": "ok",
    "data": [
        {
            "orderId": 1000000000001,	订单id
            "price": 123.0,		金额
            
            "serviceMode": 0,	服务类型
            "orderStatus": 1,	订单状态
            
            "phone": {					机型
                "brand": "苹果",
                "model": "iPhone XR",
                "colour": "黑色"
            },
            
        },
		
		
获取订单详情
		/order/findOrder
		post
	参数	orderId  Long
		{
    "code": 200,
    "message": "ok",
    "data": {
        "orderId": 1000000000001,	订单号
        "price": 123.0,				价格
        "userId": 1,				用户id
        "userName": "迪丽热巴",		用户名
        "userPhone": "13500000001",	电话
        "userAddress": "成都",		用户地址
        "shopAddress": "上海",		商家地址
        "shopId": 1,				商家id
        "serviceMode": 0,			服务类型
        "orderStatus": 1,			订单状态
        "saveTime": "2019.08.12 15:10:10",		下单时间
        "serviceTime": "2019.08.12 15:10",		上门/到店时间
        "phone": {					手机信息
            "brand": "苹果",
            "model": "iPhone XR",
            "colour": "黑色"
        },
        "faults": [					维修信息
            {
                "faults": "屏幕损坏",
                "price": 499
            },
            {
                "faults": "电池不续航",
                "price": 499
            }
        ]
    }
}
		
		
修改订单状态
		/order/updateOrderStatus	
		POST
	参数	orderId		Long	订单id
			orderstatus		int		状态
		{
    "code": 200,
    "message": "ok",
    "data": false		false失败/true成功
}
		
		
提交订单 请求增加 经纬度 距离 故障详情（选填） 
   返回增加抢单信息  
/order/saveUserOrder
参数

"latitude":10.1111111,  纬度
"longitude":103.1111111  经度
   
"distance":  距离1-5 （到店不填）

"details"："" 故障详情（选填）

返回 
{
 "订单id"，
 [
  "符合抢单条件的商家识别phone？"
 ]
}
		
用户下单
  /order/saveUserOrder
  POST
 参数"data": {
        
        "distance": 1
        "details":'detail',
        "price": 123.0,    价格
        "userOpenId": 1,    用户id
        "userName": "迪丽热巴",  用户名
        "userPhone": "13500000001", 电话
        "userAddress": "成都",  用户地址
        "serviceMode": 0,   服务类型  下单时间
        "serviceTime": "2019.08.12 15:10",  上门/到店时间（按此格式提交）
        "phone": {     手机信息
            "brand": "苹果",
            "model": "iPhone XR",
            "colour": "黑色"
        },
        "faults": [     维修信息
            {
                "faults": "屏幕损坏",
                "price": 499
            },

            {
                "faults": "电池不续航",
                "price": 499
            }
        ]
 返回
 {
    "code": 200,
    "message": "ok",
    "data": orderId  订单id
}
  

查询用户订单
 /order/findAllUserOrder
 POST
 参数 userID
 
 {
    "code": 200,
    "message": "ok",
    "data": [
        {
            "orderId": 1000000000001, 订单id
            "price": 123.0,  金额
            
            "serviceMode": 0, 服务类型
            "orderStatus": 1, 订单状态
            
            "phone": {     机型
                "brand": "苹果",
                "model": "iPhone XR",
                "colour": "黑色"
            },
            
        }, 	


附近商家
 附近5公里商家20条数据
/shopInfo/nearbyShops
参数
    // 用户所在地
  latitude 纬度
  longitude 经度
返回
 [
  {
   latitude 纬度
   longitude 经度
   name  商家名称
   area  地区
   street  街道
   detailAddress 详细地址
   phone  电话
   headPortrait 头像地址
   star  评价
   distance 距离
  },
  ......
 ]



上传视频 POST 
order/uploadVideo

  videoUrl:''
  orderId:''
  
 返回
 String "上传成功"
 
 
 
店铺头像上传 POST 
    shopInfo/saveHeadPortrait

 imgUrl:''
 id:''

返回
 String "上传成功"


获取头像
shopInfo/getHeadPortrait
GET
data：{
    id：1
}

登录  POST
shopInfo/login 
 phone:
 password:
返回  成功  失败
 String "SESSIONID"/"登录失败"


获取注册验证码   POST 
/shopInfo/getNumber
参数
 "phone":"电话号码" string 
返回
 "code":"6位验证码"



获取修改密码验证码  POST 
/shopInfo/getResetNumber
参数
 "phone":"电话号码"
返回
 "code"验证码 / "0"不存在手机号请输入正确的手机号

 
修改密码  POST 
/shopInfo/resetPassword
参数
 "phone":"电话号码"
 "password":"新密码"
返回  成功 失败
 String ："1" "0"



GET
根据openid 判断是否会员 (非会员/普通会员/终身会员/会员等待期) 
/userInfo/isvip
参数
 "openid":
 "superiorId":
返回
 String : "0"不是,"1"普通,"2"终身 



改变会员状态 {
 普通会员/终身会员,
 电话
 会员类型：平板/手机
}
/userInfo/becomeVip
POST
参数
{
 "isvip" : 0不是、1普通、2终身,
 "viptype" : 0手机、1平板,
 "phone" : "手机号",
 "openid" : "openid",
 "statid" : 1状态有效,
}
返回
 String "0"成功、"1"失败






















		
获取故障类型
    /faults/getTypes
	GET
		

获取所有故障详情列表
    faults/getDetailList
	GET


 获取故障类型对应的具体故障
    /faults/getDetail
    方式：post
    参数：(对象方式传类型)
    {"type":"screen"}		
        
    



    商家入驻 增加经纬度属性

/shopInfo/add


 "latitude":10.1111111, 纬度
 "longitude":103.1111111  经度


    1、店铺信息新增（参数以对象方式提交）
    shopInfo/add
    方式：Post
    参数：{
    name：店铺名
    manager：责任人
    phone：电话
    area：地区
    street：街道
    detail_address：详细地址
    openid：微信用户id
    type：店铺/企业类型(1个体 2公司)
    service_mode：服务方式（1上门维修 2到店维修 3全部）
    stat（选传，默认为1）：店铺审核状态（0审核中，1审核通过）
    business_status（选传，默认为1）：营业状态（1营业中 2休息 3注销）
    shopPictureList：[		//图片列表：营业执照，身份证
                {
                name（不传）：图片名
                shop_id（不传）：关联店铺id
                address：店铺图片上传返回地址
                type：图片类型（1营业执照2身份证正面3身份证背面）
            }
    ]
    }
    返回：{
        true
    }
    
    2、店铺图片上传（建议表单方式提交）
    /shopInfo/upload
    方式：Post
    参数：
    file：文件
    返回：{
        address：图片存放位置
    }




    3、店铺信息查询
    /shopInfo/get
    方式：Get
    参数：
    id（选传）：店铺信息id
    返回：
    [
        {
        name：店铺名
        manager：责任人
        phone：电话
        area：地区
        street：街道
        detail_address：详细地址
        type：店铺/企业类型(1个体 2公司)
        service_mode：服务方式（1上门维修 2到店维修 3全部）
        stat：店铺审核状态（0审核中，1审核通过）
        business_status：营业状态（1营业中 2休息 3注销）
        shopPictureList：[		//图片列表：营业执照，身份证
                    {
                    name（不传）：图片名
                    shop_id（不传）：关联店铺id
                    address：
                    type：
                }
        ]
        }
    ]



    4、机型接口
    /phoneBrand/getBrand
    方式：Get
    参数：
    返回：brand类型名 statid是否有效 sequence排序
    {
        "code":200,
        "message":"ok",
        "data":[
            {
                "id":1,
                "brand":"苹果",
                "statid":true,
                "sequence":1
            }
        ]
    }
    
    5、机型的具体型号接口
    /phoneBrand/getPhoneType
    方式：Post
    参数：id 对应机型的id(选传，不传默认查出所有)
    返回：brandid机型id  model具体型号   colour颜色 series系列  statid是否有效 sequence排序
    {
        "code":200,
        "message":"ok",
        "data":[
            {
                "id":3,
                "brandid":"2",
                "model":"iPhone XS Max",
                "colour":"深空灰色",
                "series":null,
                "statid":true,
                "sequence":1
            }
        ]
    }
    