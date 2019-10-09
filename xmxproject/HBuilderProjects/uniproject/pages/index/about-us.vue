<template>
	<view>
		<button @click="testLine(objTest)" type="primary">test</button>
	</view>
</template>

<script>
	import http from '../../util/http.js'
	import md5util from '../../util/md5util.js'

	export default {
		data() {
			return {
				objTest: {
					avc: '345',
					shopId: 2,
					openid: 'difiwe3'
				}
			}
		},
		methods: {
			testLine(e){
				let testdataMd5 = md5util.paramString(e)
				console.log(testdataMd5)
			}
		}
	}
</script>

<style scoped>

</style>