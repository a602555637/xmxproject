<template>
	<view class="container">
		<image class="avatar" :src="avatarUrl"></image>
		<text class="name">{{name}}</text>
		<view class="waittime" v-if="waitTime">等待期还剩45天</view>
		<view class="content">
			<image v-if="isVip==='2'" class="phone-vip" src="../../static/my/phoneVIP@2x.png"></image>
			<image v-else-if="isVip==='1'" class="phone-vip"src="../../static/my/pthy-sj@2x.png"></image>
			<image v-else class="phone-vip" src="../../static/my/un-phoneVIP@2x.png"></image>
			<image v-if="isVip==='2'" src="../../static/my/padVIP@2x.png"></image>
			<image v-else-if="isVip==='1'" src="../../static/my/pthy-pb@2x.png"></image>
			<image v-else src="../../static/my/un-padVIP@2x.png"></image>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
