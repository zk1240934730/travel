<template>
	<view>
		<view class="pay-price">
			<P>订单金额</P>
			<P><text>¥</text>1258</P>
		</view>

		<view class="pay-title">支付方式</view>

		<view class="pay-box">
			<view class="pay-list">
				<view>
					<image src="../../../static/common/zfb-icon.png"></image> 支付宝
				</view>
				<view><label class="radio">
						<radio value="r1" checked="true" /></label></view>
			</view>

			<view class="pay-list">
				<view>
					<image src="../../../static/common/wx-icon.png"></image> 微信
				</view>
				<view><label class="radio">
						<radio value="r1" /></label></view>
			</view>
		</view>

		<view class="pay-btn">
			<button type="primary" hover-class="none">去支付</button>
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
	.pay-price {
		display: block;
		background: #fff;
		border-bottom: 1upx solid #eee;
		text-align: center;
		padding: 20upx;
		color: #999;
	}

	.pay-price p:last-child {
		font-size: 60upx;
		color: #f60;
		font-weight: bold;
		line-height: 100%;
		padding-top: 16upx;
		padding-bottom: 16upx;
	}

	.pay-title {
		display: block;
		text-indent: 20upx;
		height: 80upx;
		line-height: 80upx;
	}

	.pay-box {
		display: block;
		background: #fff;
		border-top: 1upx solid #eee;
	}

	.pay-list {
		display: flex;
		justify-content: space-between;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #eee;
		padding: 0 20upx;
	}

	.pay-list view {
		height: 100upx;
		line-height: 100upx;
	}

	.pay-list view image {
		width: 60upx;
		height: 60upx;
		vertical-align: middle;
		margin-right: 20upx;
	}

	.pay-price p text {
		font-size: 40upx;
	}

	.pay-btn {
		width: 90%;
		margin: 0px auto;
		padding: 60upx 0;
	}
</style>
