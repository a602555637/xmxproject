<template>
	<view class="container">
		<text class="container-text">{{ title }}</text>
		<input @input="bindInput" class="container-item" :password="xpassword" :type="xtype" :placeholder="placeHolderText"
		 placeholder-class="placeholder-class" />
	</view>
</template>

<script>
	export default {
		name: 'xinput',
		data() {
			return {
				inputValue: ''
			}
		},
		props: {
			title: String,
			placeHolderText: String,
			xtype: {
				type: String,
				default: 'text'
			},
			xpassword: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			bindInput(e) {
				this.inputValue = e.detail.value
				this.$emit('inputValue', {
					inputValue: this.inputValue
				})
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	.container-text {
		font-size: 30upx;
		margin-left: 46upx;
		margin-bottom: 20upx;
	}

	.placeholder-class {
		font-size: 26upx;
		color: #888F97;
		/* padding-left: 20upx; */
	}

	.container-item {
		height: 100upx;
		width: 698upx;
		border: 1px solid #EEEEEE;
		margin-left: 26upx;
		padding-left: 20upx;
		/* margin-bottom: 60upx; */
	}
</style>
