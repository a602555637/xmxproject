<template>
	<view class="onsittime">
		<text class="onsittime-text">上门时间</text>
		<picker class="onsittime-time" mode="multiSelector" @cancel="onCancel" @change="bindPickerChange" :range="dateItem">
			<view v-if="isChange">{{currentDate}} 日 {{currentHour}} : {{currentMinutes}}</view>
		</picker>
		<image src="../../static/wxcomponentimg/arrow@2x.png" mode=""></image>
	</view>
</template>

<script>
</script>

<style>
</style>
