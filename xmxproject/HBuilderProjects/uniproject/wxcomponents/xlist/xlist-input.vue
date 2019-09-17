<template>
		<view class="container">
			<text class="item-title">{{title}}</text>
			<input @input="bindInputValue" class="item-input" :type="typeStyle" :placeholder="placeholder" placeholder-class="placeholder-class" />
		</view>
</template>

<script>
	export default {
		name: 'xlist-input',
		data() {
			return {
				inputValue: ''
			}
		},
		props: {
			title: {
				type: String,
				default: '姓名：'
			},
			placeholder: {
				type: String,
				default: '请输入您的姓名'
			},
			typeStyle: {
				type: String,
				default: 'text'
			}
		},
		methods: {
			bindInputValue(e){
				let inputValue = e.detail.value
				this.$emit('inputValue', inputValue)
			}
		}
	}
</script>

<style>
	.placeholder-class {
		font-size: 24upx;
		color: #888F97;
	}

	.container {
		display: flex;
		align-items: center;
		height: 120upx;
		margin-left: 26upx;
		margin-right: 26upx;
		border-bottom: 1px solid #F3F3F3;
	}

	.item-title {
		font-size: 30upx;

	}

	.item-input {
		margin-left: 20upx;
	}

	.identify-code {
		font-size: 30upx;
		color: #09BA51;
		display: flex;
		position: absolute;
		right: 26upx;
	}
</style>
