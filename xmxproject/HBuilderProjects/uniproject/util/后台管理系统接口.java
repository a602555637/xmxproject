后台管理系统接口

地址	https://www.finetwm.com/xmRepair

获得所有商家信息列表
/shopM/findAll
GET
返回
{
	"id"		id
	"name"		店铺名
	"manager"	负责人
	"phone"	电话
	"stat"	状态(0审核中,1审核通过,2未通过,3已通过未完成,4合同未审核,5合同审核未通过)
}

--------------------------------------------------

根据状态查询商家信息列表
/shopM/findByStat
GET
参数：	
	"stat"状态(0审核中,1审核通过,2未通过,3已通过未完成,4合同未审核,5合同审核未通过)
返回
{
	"id"		id
	"name"		店铺名
	"manager"	负责人
	"phone"	电话
	"stat"	状态(0审核中,1审核通过,2未通过,3已通过未完成,4合同未审核,5合同审核未通过)
}

-------------------------------------------------

修改状态
/shopM/updateStat
GET
参数：
	"stat":状态	状态(0审核中,1审核通过,2未通过,3已通过未完成,4合同未审核,5合同审核未通过)
	"openid"
	"opinion"	反馈意见
返回
{
	"success": true	成功
	"success": false 失败
}
	
-------------------------------------------------	

	
商家详情详细/图片地址信息
/shopM/findDetailsByOpenid
GET
参数：
	"openid"
返回：
[
        {
            "id": 1,
            "name": "测试数据",
            "manager": "李某",
            "phone": "18380480446",
            "area": "四川省成都市武侯区",
            "street": "浆洗街",
            "detail_address": "110号",
            "openid": "11111",
            "password": "4297f44b13955235245b2497399d7a93",
            "type": 1,
            "service_mode": 1,
            "stat": 1,
            "business_status": 1,
            "latitude": 30.79278,
            "longitude": 103.899402,
            "headPortrait": "111111111111111",
            "money": null
        },
        [
            {
                "address": 图片地址
                "type": 图片类型（1营业执照2身份证正面3身份证背面4合同5店铺外景6店铺内景7工作台）
            }
			................
        ]
    ]
	
-------------------------------------------------
	
图片识别内容	
/shopM/pictureToChar
GET
参数：
	"url":	图片地址
返回：
{
        "log_id": 1882357373623436986,
        "words_result": [
            {
                "words": "jpq的查询方式"			
            },
            {
                "words": "jpql: jpa query language(jpq查询语言)"
            },
            {
                "words": "特点:语法或关键字和sq语句类似查询的是类和类中的属性"
            }
        ],
        "words_result_num": 17
    }
word对应的就是识别出来的内容


-------------------------------------------------


	
	
	
