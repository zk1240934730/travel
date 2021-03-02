<template>
	<view>
		<view class="login-title">欢迎您的到来！</view>
		<view class="login-box">
			<view><input type="text" placeholder="请输入手机号"></view>
			<view><input type="password" placeholder="登录密码"></view>
			<view class="retrieve-password"><text>找回密码？</text></view>
			<view><button type="primary" hover-class="none" @tap="list">登录</button></view>
			<view class="dynamic-reg"><text>手机动态码登录</text><text>免费注册</text></view>
		</view>

		<view class="login-ther">
			<h5><text>其他方式登录</text></h5>
			<view>
				<image src="../../../static/train/wx-icon.png"></image>
			</view>
			<view>
				<image src="../../../static/train/qq-icon.png"></image>
			</view>
			<view>
				<image src="../../../static/train/zfb-icon.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #ffffff;
	}

	.login-title {
		width: 85%;
		margin: 0px auto;
		font-size: 60upx;
		color: #333;
		padding: 100upx 0;
		position: relative;
		font-weight: bold;
	}

	.login-title::after {
		content: '';
		position: absolute;
		left: 0;
		top: 156upx;
		width: 200upx;
		height: 30upx;
		background: #F0AD4E;
		opacity: 0.2;
	}

	.login-box {
		width: 85%;
		margin: 0px auto;
	}

	.login-box view {
		margin-bottom: 20upx;
	}

	.login-box button {
		display: block;
		margin-top: 20upx;
	}

	.login-box input {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #eee;
	}

	.retrieve-password {
		display: block;
		text-align: right;
		font-size: 24upx;
	}

	.retrieve-password text {
		height: 80upx;
		line-height: 80upx;
		color: #0086F6;
	}

	.dynamic-reg {
		display: flex;
		width: 88%;
		margin: 0px auto;
		justify-content: space-between;
		margin-top: 40upx;
	}

	.dynamic-reg text {
		display: block;
		height: 60upx;
		line-height: 60upx;
		font-size: 26upx;
	}

	.login-ther {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 5;
	}

	.login-ther h5 {
		width: 90%;
		margin: 0px auto;
		text-align: center;
		border-bottom: 1upx solid #eee;
		font-weight: normal;
	}

	.login-ther h5 text {
		color: #999;
		position: relative;
		background: #fff;
		bottom: -20upx;
		padding: 0 20upx;
	}

	.login-ther view {
		display: inline-block;
		width: 30%;
		text-align: center;
		padding: 50upx 0 40upx 0;
	}

	.login-ther view image {
		width: 80upx;
		height: 80upx;
	}
</style>
