<template>
	<view>

		<view class="details-box">

			<!--状态-->
			<view class="details-state">
				<view class="state-icon">
					<i class="iconfont icon-zhifu"></i>
				</view>
				<view class="state-list">
					<text>待支付</text>
					<text>建议尽快支付，请在28分16秒内完成支付</text>
				</view>
			</view>

			<!--已取消-->
			<view class="details-state" style="display:none;">
				<view class="state-icon">
					<i class="iconfont icon-gantanhao"></i>
				</view>
				<view class="state-list">
					<text>已取消</text>
					<text>您的订单已取消，可重新预订</text>
				</view>
			</view>
			<!--已取消-->

			<!--已完成-->
			<view class="details-state" style="display:none;">
				<view class="state-icon">
					<i class="iconfont icon-zhifuchenggong"></i>
				</view>
				<view class="state-list">
					<text>已完成</text>
					<text>欢迎下次继续预订哦~</text>
				</view>
			</view>
			<!--已完成结束-->

			<!--状态结束-->

			<!--信息-->
			<view class="details-info">
				<view class="ticket-collection">取票号：E750712636</view>
				<view class="details-city">
					<view>
						<text>03月26日</text>
						<text class="time">05:53</text>
						<text>上海站</text>
					</view>
					<view class="stop">
						<text>G7032</text>
						<em>经停信息</em>
					</view>
					<view>
						<text>03月26日</text>
						<text class="time">06:12</text>
						<text>昆山南站</text>
					</view>
				</view>
				<!--列表-->
				<view class="details-passenger">
					<view class="passenger-info">
						<view>
							<p>杨过<em>成人票</em></p>
							<text>二代身份证</text>
							<text>410987**********98</text>
						</view>
						<view>
							<text>02车厢03A号</text>
							<text>二等座¥24.5</text>
						</view>
					</view>
					<view class="ticket-state">待支付</view>
				</view>

				<view class="details-passenger">
					<view class="passenger-info">
						<view>
							<p>王二小<em>成人票</em></p>
							<text>二代身份证</text>
							<text>410987**********98</text>
						</view>
						<view>
							<text>02车厢03A号</text>
							<text>二等座¥24.5</text>
						</view>
					</view>
					<view class="ticket-state">待支付</view>
				</view>
				<!--列表结束-->
			</view>
			<!--信息结束-->

			<!--取消-->
			<view class="cancel-order">
				取消订单
			</view>
			<!--取消结束-->

		</view>

		<!--底部-->
		<view class="detail-footer">
			<view>订单总额<strong><text>¥</text>583</strong><em>明细<i class="iconfont icon-arrow_b"></i></em></view>
			<button type="primary" hover-class="none">去支付</button>
		</view>
		<!--底部结束-->

		<!--已完成/已取消显示-->
		<view class="detail-footer" style="display: none;">
			<button hover-class="none" class="again-tiket">重新购票</button>
		</view>
		<!--结束-->

		<!--费用明细-->
		<view class="cost-detailed" style="display: none;">

			<view class="cost-detailed-box">

				<view class="cost-detailed-title">费用明细<text><i class="iconfont icon-guanbi"></i></text></view>

				<view class="cost-detailed-list">
					<view>火车票</view>
					<view>¥553<text>x1人</text></view>
				</view>

				<view class="cost-detailed-list">
					<view>交通意外险</view>
					<view>¥20<text>x1人</text></view>
				</view>

				<view class="cost-detailed-list">
					<view>手续费</view>
					<view>¥2<text>x1人</text></view>
				</view>

			</view>

		</view>
		<!--费用明细结束-->

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
	.details-box {
		background: linear-gradient(#0086F6 15%, #f5f6f7 85%);
	}

	.details-state {
		width: 90%;
		margin: 0px auto;
		height: 100upx;
		padding: 20upx 0;
	}

	.state-icon {
		display: inline-block;
		vertical-align: middle;
		margin-right: 20upx;
	}

	.state-icon i {
		color: #fff;
		font-size: 90upx;
		line-height: 100%;
	}

	.state-list {
		display: inline-block;
		vertical-align: middle;
	}

	.state-list text:first-child {
		font-size: 40upx;
	}

	.state-list text {
		display: block;
		color: #fff;
		font-size: 26upx;
		line-height: 50upx;
	}

	.details-info {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		border-radius: 10upx;
		margin-bottom: 20upx;
	}

	.ticket-collection {
		display: block;
		height: 80upx;
		line-height: 80upx;
		border-bottom: 1upx dashed #ccc;
		text-indent: 20upx;
		color: #666;
		background: #E6F2FF;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
	}

	.details-city {
		display: flex;
		justify-content: space-between;
		background: #E6F2FF;
		padding: 20upx 30upx;
	}

	.details-city view.stop {
		margin-top: 20upx;
	}

	.details-city view text {
		display: block;
		text-align: center;
		font-size: 26upx;
		color: #666;
	}

	.details-city view text.time {
		font-size: 40upx;
		font-weight: bold;
		line-height: 100%;
		color: #333;
	}

	.details-city view em {
		color: #0086F6;
		border: 1upx solid #0086F6;
		font-size: 24upx;
		border-radius: 100upx;
		height: 40upx;
		line-height: 40upx;
		padding: 0 10upx;
		position: relative;
	}

	.details-city view em::before {
		content: '';
		position: absolute;
		top: 18upx;
		left: -20upx;
		width: 20upx;
		height: 1upx;
		background: #0086F6;
		z-index: 1;
	}

	.details-city view em::after {
		content: '';
		position: absolute;
		top: 18upx;
		right: -20upx;
		width: 20upx;
		height: 1upx;
		background: #0086F6;
		z-index: 1;
	}

	.details-passenger {
		width: 92%;
		margin: 0px auto;
		border-bottom: 1upx solid #f2f2f2;
		padding-top: 20upx;
	}

	.details-passenger:last-child {
		border-bottom: none;
	}

	.passenger-info {
		display: flex;
		justify-content: space-between;
	}

	.passenger-info view text {
		display: block;
		font-size: 24upx;
		color: #999;
		line-height: 36upx;
	}

	.passenger-info view p {
		display: block;
		margin-bottom: 10upx;
	}

	.passenger-info view p em {
		margin-left: 10upx;
		background: #ddd;
		border-radius: 10upx;
		padding: 0 10upx;
		font-size: 24upx;
		color: #fff;
		height: 36upx;
		line-height: 36upx;
	}

	.ticket-state {
		display: block;
		color: #f60;
		padding: 20upx 0;
	}

	.passenger-info view:last-child text {
		color: #333;
		font-size: 28upx;
		line-height: 50upx;
	}

	.passenger-info view:last-child text:last-child {
		margin-top: 30upx;
	}

	.cancel-order {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		border-radius: 10upx;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
	}

	.detail-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background: #fff;
		border-top: 1upx solid #f2f2f2;
	}

	.detail-footer view {
		float: left;
		margin-left: 20upx;
		color: #999;
		height: 100upx;
		line-height: 100upx;
	}

	.detail-footer view strong {
		color: #f60;
		margin-left: 10upx;
		font-size: 40upx;
	}

	.detail-footer view strong text {
		font-size: 20upx;
	}

	.detail-footer view em {
		font-size: 20upx;
		vertical-align: middle;
		margin-left: 20upx;
	}

	.detail-footer view em i {
		font-size: 20upx;
		margin-left: 6upx;
	}

	.detail-footer button {
		float: right;
		font-size: 32upx;
		width: 300upx;
		margin-right: 10upx;
		margin-top: 9upx;
	}

	.detail-footer button.again-tiket {
		width: 96%;
		margin-left: 20upx;
		background: #007AFF;
		color: #fff;
		margin-right: 16upx;
	}
</style>
