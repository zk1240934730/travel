<template>
	<view>
		<view class="trip-box">
			<!--单程-->
			<view class="trip-info">
				<view class="aviation-info"><em>单程</em>
					<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空CA1858<text>04-15</text><text>周三</text><text>2小时16分</text>
				</view>
				<!--共享显示-->
				<view class="shipment" style="display: none;"><text></text>实际承运<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/HO.png"></image>吉祥航空HO1251</view>
				<!--共享显示结束-->
				<view class="time-airport">
					<view>
						<text>19:50</text>
						<text>虹桥机场T2</text>
					</view>
					<view class="go-arrow">
						<image src="../../../static/common/go-arrow.png"></image>
					</view>
					<view>
						<text>22:15</text>
						<text>首都机场T3</text>
					</view>
				</view>
				<view class="punctuality-model">
					<view>准点率96%</view>
					<view>无餐食</view>
					<view>波音738(中)</view>
				</view>
			</view>
			<!--单程结束-->

			<!--往返-->
			<view class="trip-info" style="display: none;">
				<view class="aviation-info"><em>返程</em>
					<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空CA1858<text>04-15</text><text>周三</text><text>2小时30分</text>
				</view>
				<!--共享显示-->
				<view class="shipment" style="display: none;"><text></text>实际承运<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/HO.png"></image>吉祥航空HO1251</view>
				<!--共享显示结束-->
				<view class="time-airport">
					<view>
						<text>08:25</text>
						<text>首都机场T3</text>
					</view>
					<view class="go-arrow">
						<image src="../../../static/common/go-arrow.png"></image>
					</view>
					<view>
						<text>10:40</text>
						<text>虹桥机场T2</text>
					</view>
				</view>
				<view class="punctuality-model">
					<view>准点率96%</view>
					<view>有餐食</view>
					<view>波音738(中)</view>
				</view>
			</view>
			<!--往返结束-->
		</view>

		<view class="details-box">
			<view class="cabin-type">
				<view class="active"><text>全部</text></view>
				<view><text>头等舱/商务舱</text></view>
			</view>

			<!--单程-->
			<view class="details-list-box" style="display: none;">
				<!--列表-->
				<view class="details-list">
					<view class="details-list-l">
						<view class="details-price"><text>¥</text>289</view>
						<view class="class-change">经济舱/T舱<text>2.1折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
					<view class="details-list-r">
						<view class="booking">预订</view>
					</view>
				</view>
				<view class="details-list">
					<view class="details-list-l">
						<view class="details-price"><text>¥</text>491</view>
						<view class="class-change">经济舱/T舱<em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
					<view class="details-list-r">
						<view class="booking-surplus">预订<text>剩8张</text></view>
					</view>
				</view>
				<view class="details-list">
					<view class="details-list-l">
						<view class="details-price"><text>¥</text>655</view>
						<view class="class-change">经济舱/V舱<em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
					<view class="details-list-r">
						<view class="booking">预订</view>
					</view>
				</view>
				<view class="details-list">
					<view class="details-list-l">
						<view class="details-price"><text>¥</text>715</view>
						<view class="class-change">经济舱/E舱<text>4.9折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
					<view class="details-list-r">
						<view class="booking-surplus">预订<text>剩6张</text></view>
					</view>
				</view>
				<view class="details-list">
					<view class="details-list-l">
						<view class="details-price"><text>¥</text>289</view>
						<view class="class-change">经济舱/T舱<text>2.1折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
					<view class="details-list-r">
						<view class="booking-surplus">预订<text>剩3张</text></view>
					</view>
				</view>
				<view class="details-list">
					<view class="details-list-l">
						<view class="details-price"><text>¥</text>491</view>
						<view class="class-change">经济舱/T舱<em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
					<view class="details-list-r">
						<view class="booking">预订</view>
					</view>
				</view>
				<view class="details-list">
					<view class="details-list-l">
						<view class="details-price"><text>¥</text>655</view>
						<view class="class-change">经济舱/V舱<em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
					<view class="details-list-r">
						<view class="booking">预订</view>
					</view>
				</view>
				<view class="details-list">
					<view class="details-list-l">
						<view class="details-price"><text>¥</text>715</view>
						<view class="class-change">经济舱/E舱<text>4.9折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
					<view class="details-list-r">
						<view class="booking">预订</view>
					</view>
				</view>
				<!--列表结束-->
			</view>
			<!--单程结束-->

			<!--往返-->
			<view class="details-list-box">
				<!--列表-->
				<view class="details-list-return">
					<view class="return-pirce">
						<view class="details-price"><text>¥</text>715</view>
						<view class="booking">预订</view>
					</view>
					<view class="return-journey">
						<view class="class-change"><text class="go">去</text>经济舱/E舱<text>4.9折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
						<view class="class-change"><text class="return">返</text>经济舱/E舱<text>2.8折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
				</view>
				<view class="details-list-return">
					<view class="return-pirce">
						<view class="details-price"><text>¥</text>390</view>
						<view class="booking">预订</view>
					</view>
					<view class="return-journey">
						<view class="class-change"><text class="go">去</text>经济舱/E舱<text>4.9折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
						<view class="class-change"><text class="return">返</text>经济舱/E舱<em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
				</view>
				<view class="details-list-return">
					<view class="return-pirce">
						<view class="details-price"><text>¥</text>678</view>
						<view class="booking">预订</view>
					</view>
					<view class="return-journey">
						<view class="class-change"><text class="go">去</text>经济舱/E舱<text>4.9折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
						<view class="class-change"><text class="return">返</text>经济舱/E舱<em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
				</view>
				<view class="details-list-return">
					<view class="return-pirce">
						<view class="details-price"><text>¥</text>390</view>
						<view class="booking-surplus">预订<text>剩6张</text></view>
					</view>
					<view class="return-journey">
						<view class="class-change"><text class="go">去</text>经济舱/E舱<text>4.9折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
						<view class="class-change"><text class="return">返</text>经济舱/E舱<em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
				</view>
				<view class="details-list-return">
					<view class="return-pirce">
						<view class="details-price"><text>¥</text>678</view>
						<view class="booking">预订</view>
					</view>
					<view class="return-journey">
						<view class="class-change"><text class="go">去</text>经济舱/E舱<text>4.9折</text><em>退改签<i class="iconfont icon-jiantou"></i></em></view>
						<view class="class-change"><text class="return">返</text>经济舱/E舱<em>退改签<i class="iconfont icon-jiantou"></i></em></view>
					</view>
				</view>
				<!--列表结束-->
			</view>
			<!--往返结束-->

		</view>

		<!--退改签-->
		<view class="rebook" style="display: none;">
			<view class="rebook-box">
				<view class="rebook-title">放心的服务和价格<em><i class="iconfont icon-guanbi"></i></em></view>
				<view class="rebook-type">
					<view class="active"><text>产品说明</text></view>
					<view><text>行李规定</text></view>
					<view><text>退改签说明</text></view>
				</view>
				<!--内容-->
				<view class="rebook-content">
					<view class="rebook-sub-title"><i class="iconfont icon-dayinpingzheng"></i>报销凭证</view>
					<view class="reimbursement">
						<p>去程:可提供全额行程单</p>
					</view>
					<view class="rebook-sub-title"><i class="iconfont icon-hanglijicun"></i>免费行李规定</view>
					<view class="luggage">
						行李规定
					</view>
					<view class="rebook-sub-title"><i class="iconfont icon-xiugai"></i>退改签说明</view>
					<view class="changes-explain">
						退改签说明
					</view>
					<view class="rebook-sub-title"><i class="iconfont icon-tanhao"></i>其他说明</view>
					<view class="other-explain">
						<p>预订提供航班信息均为计划信息，实际乘坐航班因航空公司机型调整有所变化，以实际乘坐航班为准</p>
						<p>平台不加收任何退改服务费，具体费用按航空公司官网规定收取</p>
					</view>
				</view>
				<!--内容结束-->
			</view>
		</view>
		<!--退改签结束-->
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
	.details-list-box {
		display: block;
	}

	.details-box {
		display: block;
		background: #fff;
		margin-top: 20upx;
		border-top: 1upx solid #eee;
	}

	.cabin-type {
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #eee;
	}

	.cabin-type view {
		width: 50%;
		text-align: center;
		height: 90upx;
		line-height: 90upx;
	}

	.cabin-type view.active text {
		color: #0086F6;
		border-bottom: 4upx solid #0086F6;
		padding: 0 10px;
		height: 86upx;
	}

	.details-list {
		display: flex;
		border-bottom: 1upx solid #eee;
		padding: 30upx 0 24upx 0;
	}

	.details-list-l {
		flex: 1;
		padding-left: 20upx;
	}

	.details-price {
		font-size: 40upx;
		color: #f60;
		line-height: 100%;
		font-weight: bold;
	}

	.details-price text {
		font-size: 26upx;
		font-weight: normal;
	}

	.class-change {
		display: block;
		font-size: 26upx;
		color: #666;
		height: 60upx;
		line-height: 60upx;
	}

	.class-change text {
		margin-left: 10upx;
	}

	.class-change em {
		margin-left: 30upx;
		position: relative;
		height: 60upx;
		line-height: 60upx;
		padding-left: 20upx;
	}

	.class-change em i {
		font-size: 24upx;
		margin-left: 4upx;
		color: #ccc;
	}

	.class-change em::before {
		content: '';
		position: absolute;
		top: 20upx;
		left: -6upx;
		width: 2upx;
		height: 26upx;
		background: #ccc;
	}

	.details-list-r {
		float: right;
		width: 200upx;
		text-align: center;
	}

	.booking {
		display: inline-block;
		height: 60upx;
		line-height: 60upx;
		border-radius: 100upx;
		background: linear-gradient(to right, #FDD100, #FF6600);
		color: #fff;
		width: 140upx;
		margin-top: 16upx;
		text-align: center;
	}

	.booking-surplus {
		display: inline-block;
		width: 140upx;
		background: linear-gradient(to right, #FDD100, #FF6600);
		color: #fff;
		border-radius: 10upx;
		padding: 1upx;
		text-align: center;
	}

	.booking-surplus text {
		display: block;
		font-size: 24upx;
		background: #fff;
		color: #f60;
		width: 138upx;
		margin: 0px auto;
		border-bottom-left-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}

	.details-list-return {
		display: block;
		border-bottom: 1upx solid #eee;
	}

	.return-pirce {
		display: flex;
		justify-content: space-between;
		width: 94%;
		margin: 0px auto;
		border-bottom: 1upx solid #eee;
		padding: 20upx 0;
	}

	.return-pirce .details-price {
		margin-top: 10upx;
	}

	.return-pirce .booking {
		margin-top: 0px;
	}

	.return-journey {
		width: 96%;
		margin: 0px auto;
		padding: 10upx 0 30upx 0;
	}

	.return-journey .class-change {
		height: 44upx;
		line-height: 44upx;
	}

	.return-journey text.go {
		border: 1upx solid #0086F6;
		color: #0086F6;
		height: 30upx;
		line-height: 30upx;
		border-radius: 6upx;
		margin-right: 10upx;
		padding: 0 2upx;
	}

	.return-journey text.return {
		border: 1upx solid #f60;
		color: #f60;
		height: 30upx;
		line-height: 30upx;
		border-radius: 6upx;
		margin-right: 10upx;
		padding: 0 2upx;
	}

	.shipment {
		display: block;
		font-size: 26upx;
		position: relative;
		margin-left: 115upx;
	}

	.shipment text::before {
		content: '';
		position: absolute;
		top: 10upx;
		left: -36upx;
		width: 1upx;
		height: 22upx;
		background: #ccc;
	}

	.shipment text::after {
		content: '';
		position: absolute;
		top: 30upx;
		left: -36upx;
		width: 20upx;
		height: 2upx;
		background: #ccc;
	}

	.shipment image {
		width: 28upx;
		height: 28upx;
		vertical-align: middle;
		margin: 0 10upx;
	}
</style>
