<template>
	<view>
		<view class="details-box">
			<!--订单状态-->
			<view class="details-state-box">
				<view class="details-state">
					<view class="state-icon">
						<i class="iconfont icon-zhifu"></i>
					</view>
					<view class="state-list">
						<text>待支付</text>
						<text>建议尽快支付，请在28分16秒内完成支付</text>
					</view>
				</view>

				<!--已确认-->
				<view class="details-state" style="display:none;">
					<view class="state-icon">
						<i class="iconfont icon-zhifuchenggong"></i>
					</view>
					<view class="state-list">
						<text>已确认</text>
						<text>您的订单酒店已确认</text>
					</view>
				</view>
				<!--已确认-->

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

				<!--已离店-->
				<view class="details-state" style="display:none;">
					<view class="state-icon">
						<i class="iconfont icon-zhifuchenggong"></i>
					</view>
					<view class="state-list">
						<text>已离店</text>
						<text>欢迎下次继续预订哦~</text>
					</view>
				</view>
				<!--已离店结束-->
			</view>
			<!--订单状态结束-->

			<!--订单信息-->
			<view class="details-order">
				<p>总额:¥890<i class="iconfont icon-tanhao"></i></p>
				<p>订单号:1245678987</p>
				<p>下单时间:2020-03-28 17:55:50</p>
			</view>
			<!--订单信息结束-->

			<!--酒店信息-->
			<div class="details-content">
				<view class="details-title">酒店信息</view>
				<view class="hotel-details">
					<p>苏州轻枫印象酒店</p>
					<p>苏州 姑苏区 凤凰街252号</p>
					<p>04月16日-04月17日<text>共1晚</text></p>
					<p>豪华大床房</p>
					<p class="tips">不可取消：订单一经支付确认，不可取消修改</p>

				</view>
			</div>
			<!--酒店信息结束-->

			<!--入住人-->
			<div class="details-content">
				<view class="details-title">入住人</view>
				<view class="check-in">
					<text>入住1：小非</text>
					<text>入住2：小王</text>
					<text>入住3：小杨</text>
				</view>
				<view class="contact-time"><text>联系手机</text>13890986809</view>
				<view class="contact-time"><text>预计到店</text>2020-03-18 18:00</view>
			</div>
			<!--入住人结束-->

			<!--发票-->
			<div class="details-content">
				<view class="details-title">发票信息</view>
				<!--酒店领取-->
				<view class="hotel-reception" style="display: none;">如需发票，请向酒店前台索取</view>
				<!--酒店领取结束-->

				<!--需要发票-->
				<view class="invoice-details">
					<p>发票类型：电子发票</p>
					<p>发票抬头：公司</p>
					<p>纳税编号：wd098098907340533534</p>
					<p>手机号码：13898098987</p>
					<p>邮箱地址：sex@126.com</p>
				</view>
				<!--需要发票结束-->
			</div>
			<!--发票结束-->

		</view>

		<!--底部-->
		<div class="details-footer">
			<button>取消订单</button>
			<button type="primary">去支付</button>
		</div>
		<!--底部结束-->

		<!--价格明细-->
		<view class="mask-bg" style="display: none;">
			<view class="mask-content">
				<view class="mask-title">价格明细<em><i class="iconfont icon-guanbi"></i></em></view>
				<view class="hotel-detailed">
					<p>香格里拉大酒店</p>
					<p class="check-in">04-16至04-19<text>共3晚</text></p>
					<view class="detailed-list">
						<view>豪华大床房</view>
						<view>¥158x2间</view>
					</view>
					<view class="detailed-list">
						<view>服务费</view>
						<view>¥1x2间</view>
					</view>
					<view class="detailed-list">
						<view>发票</view>
						<view>¥10</view>
					</view>
				</view>
			</view>
		</view>
		<!--价格明细结束-->

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
		display: block;
		margin-bottom: 120upx;
	}

	.details-state-box {
		background: #0086F6;
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

	.details-order {
		display: block;
		background: #fff;
		margin-bottom: 20upx;
		padding: 20upx;
		position: relative;
	}

	.details-order p {
		display: block;
		font-size: 24upx;
		color: #999;
	}

	.details-order p:first-child {
		font-size: 32upx;
		font-weight: bold;
		color: #ff6600;
	}

	.details-order p:first-child i {
		margin-left: 16upx;
		color: #0086F6;
	}

	.details-content {
		display: block;
		background: #fff;
		margin-top: 20upx;
	}

	.details-title {
		display: block;
		height: 80upx;
		line-height: 80upx;
		border-bottom: 1upx solid #f2f2f2;
		font-weight: bold;
		text-indent: 20upx;
	}

	.hotel-details {
		display: block;
		padding: 20upx;
	}

	.hotel-details p {
		display: block;
		font-size: 26upx;
		color: #505050;
		line-height: 60upx;
	}

	.hotel-details p text {
		margin-left: 20upx;
		color: #0086F6;
	}

	.hotel-details p.tips {
		color: #d90000;
	}

	.hotel-details p:first-child {
		font-weight: bold;
		color: #333;
	}

	.check-in {
		display: block;
		padding: 20upx;
	}

	.check-in text {
		width: 33.33%;
	}

	.contact-time {
		display: block;
		padding: 20upx;
		border-top: 1upx solid #f2f2f2;
	}

	.contact-time text {
		margin-right: 20upx;
	}

	.hotel-reception {
		display: block;
		padding: 20upx;
	}

	.details-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100upx;
		background: #fff;
		border-top: 1upx solid #eee;
		text-align: center;
	}

	.details-footer button {
		display: inline-block;
		width: 41%;
		border-radius: 100upx;
		margin: 0 20upx;
		margin-top: 10upx;
	}

	.invoice-details {
		display: block;
		padding: 20upx 20upx 10upx 20upx;
		overflow: hidden;
	}

	.invoice-details p {
		display: block;
		color: #666;
		margin-bottom: 10upx;
		font-size: 26upx;
	}
</style>
