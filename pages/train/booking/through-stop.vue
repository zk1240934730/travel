<template>
	<view>
		<view class="stop-title">
			<view class="stop-title-l"></view>
			<view class="stop-title-r">
				<text>车站</text>
				<text>到达</text>
				<text>出发</text>
				<text>停留</text>
			</view>
		</view>

		<view class="stop-box">
			<!--列表-->
			<view class="stop-list">
				<text>上海虹桥</text>
				<text>08:00</text>
				<text>08:00</text>
				<text>--</text>
				<em></em>
			</view>

			<view class="stop-list">
				<text>南京南</text>
				<text>09:00</text>
				<text>09:02</text>
				<text>2分钟</text>
				<em></em>
			</view>

			<view class="stop-list">
				<text>南京南</text>
				<text>10:59</text>
				<text>11:01</text>
				<text>2分钟</text>
				<em></em>
			</view>

			<view class="stop-list">
				<text>北京南</text>
				<text>12:24</text>
				<text>12:24</text>
				<text>--</text>
				<em></em>
			</view>

			<!--列表结束-->

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
		background: #ffffff;
	}

	.stop-title {
		position: fixed;
		top: 0;
		left: 0;
		width: 750upx;
		z-index: 9;
		background: #0086F6;
		height: 50upx;
		line-height: 50upx;
		overflow: hidden;
	}

	.stop-title-l {
		float: left;
		width: 100upx;
		height: 50upx;

	}

	.stop-title-r {
		width: 650upx;
		float: left;
	}

	.stop-title view:last-child text {

		width: 25%;
		color: #fff;
	}

	.stop-box {
		display: block;
		margin-top: 50upx;
		padding-left: 100upx;
	}

	.stop-list {
		display: block;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #f2f2f2;
		position: relative;
	}

	.stop-list text {
		display: inline-block;
		width: 25%;
	}

	.stop-list:first-child text {
		color: #0086F6;
	}

	.stop-list:first-child em {
		height: 60upx;
		top: 42upx;
	}

	.stop-list:first-child em::after {
		top: 0px;
		background: #0086F6;
		border: 1upx solid #0086F6;
	}

	.stop-list:last-child text {
		color: #0086F6;
	}

	.stop-list:last-child em {
		height: 60upx;
	}

	.stop-list:last-child em::after {
		background: #0086F6;
		border: 1upx solid #0086F6;
	}

	.stop-list em {
		position: absolute;
		top: -4upx;
		left: -62upx;
		width: 20upx;
		border-left: 1upx solid #ddd;
		height: 103upx;
		z-index: 1;
	}

	.stop-list em::after {
		content: '';
		position: absolute;
		top: 44upx;
		left: -12upx;
		width: 20upx;
		height: 20upx;
		border-radius: 20upx;
		border: 1upx solid #ddd;
		background: #fff;
		z-index: 2;
	}
</style>
