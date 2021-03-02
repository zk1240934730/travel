<template>
	<view>
		<view class="transit-box">
			<view class="date-time">
				<text>3月11日 周三出发</text>
				<text>全程5时14分</text>
			</view>

			<view class="ransit-city">

				<!--列表-->
				<view class="ransit-info">
					<view class="ransit-set-out"><text>1</text><text>3月11日</text><text>出发</text><text>G214</text><text>2时47分</text></view>
					<view class="ransit-station">
						<view></view>
						<view>
							<P>15:05<text><em style="display: none;">+1</em>上海虹桥</text></P>
							<P>17:52<text>徐州东</text></P>
						</view>
					</view>
				</view>

				<view class="different-station"><text>转</text>异站换乘，请在1时57分内前往<em>徐州<i class="iconfont icon-weizhi"></i></em></view>

				<view class="ransit-info">
					<view class="ransit-set-out"><text>2</text><text>3月11日</text><text>出发</text><text>G60</text><text>2时59分</text></view>
					<view class="ransit-station">
						<view></view>
						<view>
							<P>19:05<text>徐州</text></P>
							<P>21:18<text>北京南</text></P>
						</view>
					</view>
				</view>

				<!--列表结束-->

			</view>

			<view class="stroke">

				<!--列表-->
				<view class="stroke-list">
					<view class="stroke-title"><text>第1程</text><text class="notice">中转预订须知</text></view>
					<view class="stroke-content">
						<view class="active">
							<text>二等座</text>
							<text>¥134.5</text>
							<text>21张</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
						<view>
							<text>一等座</text>
							<text>¥229.5</text>
							<text>21张</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
						<view>
							<text>商务座</text>
							<text>¥429.5</text>
							<text>21张</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
					</view>
				</view>

				<view class="stroke-list">
					<view class="stroke-title"><text>第2程</text></view>
					<view class="stroke-content">
						<view class="active">
							<text>二等座</text>
							<text>¥134.5</text>
							<text>21张</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
						<view>
							<text>一等座</text>
							<text>¥229.5</text>
							<text>21张</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
						<view>
							<text>商务座</text>
							<text>¥429.5</text>
							<text>21张</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
					</view>
				</view>

				<!--列表结束-->
			</view>
		</view>

		<!--底部-->
		<view class="transit-footer">
			<view>订单总额 <text>¥578</text></view>
			<button type="primary" hover-class="none">下一步</button>
		</view>
		<!--底部结束-->
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
	.transit-box {
		display: block;
		margin-bottom: 120upx;
	}

	.date-time {
		display: flex;
		justify-content: space-between;
		background: #0086F6;
		padding: 0 20upx;
		color: #fff;
		padding-bottom: 10upx;
	}

	.ransit-city {
		display: block;
		background: #fff;
		padding: 20upx 0;
	}

	.ransit-info {
		width: 90%;
		margin: 0px auto;
	}

	.ransit-set-out {
		display: block;
		font-size: 24upx;
		color: #999;
	}

	.ransit-set-out text {
		display: inline-block;
		padding-right: 20upx;
		height: 20upx;
		line-height: 20upx;
		position: relative;
	}

	.ransit-set-out text:first-child {
		background: #0086F6;
		padding-left: 10upx;
		padding-right: 10upx;
		color: #fff;
		font-size: 26upx;
		margin-right: 30upx;
		height: 30upx;
		line-height: 30upx;
		border-radius: 6upx;
	}

	.ransit-set-out text:nth-child(3) {
		border-right: 1upx solid #ccc;
		margin-right: 20upx;
	}

	.ransit-set-out text:nth-child(4) {
		border-right: 1upx solid #ccc;
		margin-right: 20upx;
	}

	.ransit-station {
		display: flex;
		margin-top: 10upx;
	}

	.ransit-station view:first-child {
		float: left;
		border-left: 1upx solid #ddd;
		width: 30upx;
		height: 74upx;
		position: relative;
		margin-top: 30upx;
		margin-left: 20upx;
	}

	.ransit-station view:first-child::before {
		content: '';
		position: absolute;
		top: -4upx;
		left: -7upx;
		width: 10upx;
		height: 10upx;
		border-radius: 10upx;
		background: #ddd;
		z-index: 1;
	}

	.ransit-station view:first-child::after {
		content: '';
		position: absolute;
		bottom: -4upx;
		left: -8upx;
		width: 10upx;
		height: 10upx;
		border-radius: 10upx;
		background: #fff;
		border: 1upx solid #ddd;
		z-index: 1;
	}

	.ransit-station view:last-child {
		flex: 1;
		margin-left: 16upx;
	}

	.ransit-station view:last-child p {
		display: block;
		margin-bottom: 6upx;
	}

	.ransit-station view:last-child p text {
		margin-left: 50upx;
		font-size: 32upx;
		position: relative;
	}

	.ransit-station view:last-child p text em {
		position: absolute;
		top: 4upx;
		left: -45upx;
		font-size: 20upx;
	}

	.different-station {
		width: 90%;
		margin: 0px auto;
		margin-bottom: 10upx;
		color: #666;
	}

	.different-station text {
		display: inline-block;
		border: 1upx solid #f60;
		color: #f60;
		width: 40upx;
		height: 40upx;
		line-height: 40upx;
		border-radius: 40upx;
		text-align: center;
		margin-right: 30upx;
	}

	.different-station em {
		color: #0086F6;
		font-style: normal;
		margin-left: 20upx;
	}

	.different-station em i {
		vertical-align: middle;
	}

	.stroke {
		display: block;
		background: #fff;
		margin-top: 20upx;
		padding: 20upx 0;
	}

	.stroke-list {
		width: 90%;
		margin: 0px auto;
	}

	.stroke-title {
		display: flex;
		justify-content: space-between;
		height: 70upx;
		line-height: 70upx;
	}

	.stroke-title text.notice {
		color: #0086F6;
	}

	.stroke-content {
		display: flex;
		justify-content: space-between;
		margin: 0px auto;
		margin-bottom: 10upx;
	}

	.stroke-content view {
		text-align: center;
		width: 31%;
		background: #f8f8f8;
		height: 150upx;
		border: 1upx solid #f8f8f8;
		border-radius: 10upx;
		position: relative;
	}

	.stroke-content view text {
		display: block;
		font-size: 24upx;
		color: #808080;
		line-height: 36upx;
	}

	.stroke-content view text:first-child {
		font-size: 28upx;
		padding-top: 16upx;
		padding-bottom: 5px;
	}

	.stroke-content view.active {
		border: 1upx solid #0086F6;
		color: #0086F6;
		background: #E1F0FF;
	}

	.stroke-content view image {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 1;
		width: 40upx;
		height: 40upx;
		display: none;
	}

	.stroke-content view.active image {
		display: block;
	}

	.transit-footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #fff;
		height: 100upx;
		border-top: 1upx solid #f2f2f2;
	}

	.transit-footer view {
		float: left;
		margin-left: 20upx;
		line-height: 100upx;
		color: #505050;
	}

	.transit-footer view text {
		display: inline-block;
		margin-left: 20upx;
		color: #f60;
	}

	.transit-footer button {
		float: right;
		margin-right: 20upx;
		margin-top: 15upx;
		font-size: 28upx;
		height: 70upx;
		line-height: 70upx;
		padding: 0 40upx;
	}
</style>
