<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map id="myMap" style="width: 100%; height: 300px;" 
				:latitude="latitude" :longitude="longitude" :markers="markers"
				show-location></map>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            title: 'map',
            latitude: 30.795890000000025,
            longitude: 103.90256,
			markers: [{
				id: 1,
				latitude: 30.795890000000030,
				longitude: 103.90260,
				name: 'ate',
				iconPath:'../../../static/wxcomponentimg/dw@2x.png',
				width:60,
				height:60,
				label:{
					content:'小刘手机维修'
				}
			},{
				id: 2,
				latitude: 30.795890001000020,
				longitude: 103.90150,
				name: 'atc',
				iconPath:'../../../static/wxcomponentimg/dw@2x.png',
				width:60,
				height:60,
				label:{
					content:'小王手机维修',
					fontSize:13,
					color:'#333333',
				},
				callout:{
					content:'小王手机维修',
					fontSize:13,
					color:'#ffffff',
					bgColor:'#51D587'
				}
			}],
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
