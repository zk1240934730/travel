<template>
	<view>
		<view class="booking-box">
			<!--预订-->
			<view class="arrival-station-info">
				<view class="station-info">
					<view>
						<text class="date">3月11日 周三</text>
						<text class="time">17:00</text>
						<text>上海虹桥站</text>
					</view>
					<view class="stop-over">
						<p>G8<i class="iconfont icon-shenfenzheng"></i></p>
						<p @tap='showStopStations'><em>经停信息</em></p>
					</view>
					<view>
						<text class="date">3月11日 周三</text>
						<text class="time">21:36</text>
						<text>北京南站</text>
					</view>
				</view>
				<view class="booking-seat">二等座<text>¥553</text></view>
			</view>
			<!--预订结束-->

			<!--中转预订-->
			<view class="transfer-booking" style="display: none;">
				<i class="iconfont icon-jiantou"></i>
				<view class="transfer-booking-list">
					<view class="date"><text>1</text>03-13</view>
					<view class="city">上海虹桥站-南京南站</view>
					<view class="seat">二等座</view>
					<view class="price">¥134.5</view>
				</view>
				<view class="transfer-booking-list">
					<view class="date"><text>2</text>03-13</view>
					<view class="city">上海-南京</view>
					<view class="seat">二等座</view>
					<view class="price">¥1834.5</view>
				</view>
			</view>
			<!--中转预订结束-->

			<!--登录12306-->
			<view class="login12306" style="display: none;">
				<view>登录<text>12306</text>账号</view>
				<view>去登录<i class="iconfont icon-jiantou"></i></view>
			</view>
			<!--登录12306结束-->

			<!--添加乘客-->
			<view class="add-passenger"><i class="iconfont icon-jiahao"></i>添加乘客(成人、儿童、学生)</view>
			<!--添加乘客结束-->

			<!--已选乘客-->
			<view class="booking-passenger" style="display: none0;">
				<view class="ticket-tips">非身份证乘客请按证件上姓名购票,(如护照上有中文，请使用中文名购票)</view>
				<!--列表-->
				<view class="booking-passenger-list">
					<view class="passenger-del"><i class="iconfont icon-shanchu1"></i></view>
					<view class="passenger-identity">
						<p class="name">杨过<em>成人票</em></p>
						<P>二代身份证<text>4168**********897</text></P>
					</view>
				</view>
				<view class="booking-passenger-list">
					<view class="passenger-del"><i class="iconfont icon-shanchu1"></i></view>
					<view class="passenger-identity">
						<p class="name">李丽<em>学生票</em></p>
						<P>二代身份证<text>4168**********897</text></P>
					</view>
					<view class="passenger-type">学生票说明</view>
				</view>
				<view class="booking-passenger-list">
					<view class="passenger-del"><i class="iconfont icon-shanchu1"></i></view>
					<view class="passenger-identity">
						<p class="name">王小峰<em>成人票</em></p>
						<P>二代身份证<text>4168**********897</text></P>
					</view>
				</view>
				<!--列表结束-->
				<view class="booking-passenger-add">
					<view>添加/编辑乘客</view>
					<view>添加儿童<text>(使用成人证件)</text></view>
				</view>
			</view>
			<!--已选乘客结束-->

			<!--手机号码-->
			<view class="mobile-phone">
				<text>手机号码</text>
				<view><input type="number" placeholder="用于接收出票信息"></view>
			</view>
			<!--手机号码结束-->
		</view>
		<!--在线选座-->
		<view class="seat-selection">
			<view class="seat-selection-title">在线选座<text style="display: none;">已选0/1</text></view>
			<view class="seat-selection-content">
				<text>靠窗</text>
				<view class="seat-selection-icon">
					<i class="iconfont icon-zhijixuanzuo active"></i>
					<i class="iconfont icon-zhijixuanzuo"></i>
					<i class="iconfont icon-zhijixuanzuo"></i>
				</view>
				<text>过道</text>
				<view class="seat-selection-icon">
					<i class="iconfont icon-zhijixuanzuo"></i>
					<i class="iconfont icon-zhijixuanzuo"></i>
				</view>
				<text>靠窗</text>

			</view>
			<view class="seat-selection-describe">优先按指定坐席出票，若指定坐席无票，将转购其他坐席</view>
		</view>
		<!--在线选座结束-->

		<!--保险-->
		<view class="insure">
			<view class="insure-title">安全保障，出行更安心</view>

			<view class="insure-list">
				<view class="insure-l">
					<view>
						<view class="title">交通意外险<i class="iconfont icon-tishi"></i><em>多一份保障</em></view>
						<text>最高保额80万</text>
					</view>
					<view>¥20/份</view>
				</view>
				<view class="insure-buy">
					<checkbox-group name="checkbox">
						<checkbox class="uni-checkbox-input" value="checkbox1" />
					</checkbox-group>
				</view>
			</view>

		</view>
		<!--保险结束-->

		<!--协议-->
		<view class="book-agreement">点击预订代表您已阅读并同意<text>火车票信息服务协议、</text><text>预订须知</text></view>
		<!--协议结束-->

		<!--底部-->
		<view class="booking-footer">
			<view>订单总额 <text>¥578</text> <em>明细<i class="iconfont icon-arrow_b"></i></em></view>
			<button type="primary" hover-class="none">立即预订</button>
		</view>
		<!--底部结束-->

		<!--中转行程-->
		<view class="transfer-bg" style="display: none;">
			<view class="transfer-box">
				<view class="transferTitle">中转详情<i class="iconfont icon-guanbi"></i></view>
				<view class="transfer-trip">
					<view>03-13<text>周五</text>上海虹桥-北京南</view>
					<view>6时38分</view>
				</view>

				<view class="transferList">
					<view class="transferList-date"><text>1</text>03-13<em>G226</em></view>
					<view class="transferList-content">
						<view>
							<text>14:20</text>
							<text>上海虹桥站</text>
						</view>
						<view class="transfer-time"><em>2时54分</em>
							<image src="/static/train/go-arrow.png"></image>
						</view>
						<view>
							<text>17:14</text>
							<text>徐州东站</text>
						</view>
					</view>
				</view>

				<view class="transfer-city">中转<text>徐州东</text>停留44分</view>

				<view class="transferList">
					<view class="transferList-date"><text>2</text>03-13<em>G166</em></view>
					<view class="transferList-content">
						<view>
							<text>17:58</text>
							<text>徐州东站</text>
						</view>
						<view class="transfer-time"><em>3时0分</em>
							<image src="/static/train/go-arrow.png"></image>
						</view>
						<view>
							<text>20:58</text>
							<text>北京南站</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--中转行程结束-->

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
			showStopStations(e) {
				//var newsid = e.currentTarget.dataset.newsid;
				uni.navigateTo({
					url: 'through-stop'
				});
			}
		}
	}
</script>

<style>
	.booking-box {
		display: block;
		background: linear-gradient(#0086F6 15%, #f5f6f7 85%);
	}

	.arrival-station-info {
		width: 90%;
		margin: 0px auto;
	}

	.station-info {
		display: flex;
		justify-content: space-between;
	}

	.station-info view {
		line-height: 40upx;
		text-align: center;
	}

	.station-info text {
		display: block;

		color: #fff;
	}

	.station-info text.date {
		font-size: 22upx;
		opacity: 0.5;
	}

	.station-info text.time {
		font-size: 50upx;
		font-weight: bold;
		padding: 12upx 0;
	}

	.stop-over {
		color: #fff;
		font-size: 24upx;
		opacity: 0.6;
	}

	.stop-over p:first-child {
		margin-top: 20upx;
		margin-bottom: 4upx;
	}

	.stop-over i {
		vertical-align: middle;
		font-size: 24upx;
		margin-left: 6upx;
	}

	.stop-over em {
		border: 1upx solid #fff;
		height: 44upx;
		line-height: 44upx;
		border-radius: 44upx;
		width: 140upx;
		position: relative;
	}

	.stop-over em::after {
		content: '';
		position: absolute;
		top: 20upx;
		right: -30upx;
		width: 30upx;
		height: 2upx;
		background: #fff;
	}

	.stop-over em::before {
		content: '';
		position: absolute;
		top: 20upx;
		left: -30upx;
		width: 30upx;
		height: 2upx;
		background: #fff;
	}

	.transfer-booking {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		border-radius: 10upx;
		padding: 18upx 0;
		position: relative;
	}

	.transfer-booking i {
		position: absolute;
		top: 36upx;
		right: 20upx;
		font-size: 28upx;
		color: #999;
	}


	.transfer-booking-list {
		width: 96%;
		margin: 0px auto;
		display: flex;
	}

	.transfer-booking-list view {
		font-size: 26upx;
	}

	.transfer-booking-list view.date {
		width: 110upx;
	}

	.transfer-booking-list view.city {

		width: 290upx;
		margin-left: 20upx;
	}

	.transfer-booking-list view.seat {
		width: 100upx;
	}

	.transfer-booking-list view.price {
		color: #999;
	}

	.transfer-booking-list view.date text {
		color: #fff;
		height: 28upx;
		line-height: 28upx;
		width: 28upx;
		text-align: center;
		border-radius: 6upx;
		margin-right: 6upx;
		background: #0086F6;
	}

	.booking-seat {
		display: block;
		margin-top: 20upx;
		border-top: 1upx dashed #fff;
		height: 66upx;
		line-height: 66upx;
		font-size: 26upx;
		color: #fff;
		opacity: 0.8;
	}

	.booking-seat text {
		margin-left: 10upx;
	}

	.login12306 {
		display: flex;
		justify-content: space-between;
		width: 96%;
		margin: 0px auto;
		background: #fff;
		height: 120upx;
		border-radius: 10upx;
		margin-top: 10upx;
	}

	.login12306 view:first-child {
		font-size: 32upx;
		margin-left: 20upx;
		color: #333;
	}

	.login12306 view:first-child text {
		font-weight: bold;
	}

	.login12306 view {
		line-height: 120upx;
		margin-right: 20upx;
		color: #999;
	}

	.login12306 view i {
		font-size: 24upx;
	}

	.add-passenger {
		width: 96%;
		background: #fff;
		height: 120upx;
		line-height: 120upx;
		border-radius: 10upx;
		text-align: center;
		margin: 20upx auto;
		color: #0086F6;
	}

	.add-passenger i {
		vertical-align: middle;
		margin-right: 10upx;
	}

	.booking-passenger {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		border-radius: 10upx;
		margin-bottom: 20upx;
		padding-top: 20upx;
	}

	.ticket-tips {
		width: 92%;
		margin: 0px auto;
		font-size: 24upx;
		color: #f60;
		line-height: 30upx;
		padding: 10upx;
		background: #FFF4EA;
		border-radius: 10upx;
		margin-bottom: 20upx;
	}

	.booking-passenger-add {
		display: block;
		width: 92%;
		margin: 0px auto;
		border-top: 1upx solid #eee;
		overflow: hidden;
	}

	.booking-passenger-add view {
		float: left;
		text-align: center;
		width: 50%;
		height: 90upx;
		line-height: 90upx;
		color: #0086F6;
	}

	.booking-passenger-add view text {
		font-size: 20upx;
	}

	.mobile-phone {
		display: flex;
		width: 96%;
		margin: 0px auto;
		background: #fff;
		height: 120upx;
		line-height: 120upx;
		border-radius: 10upx;
	}

	.mobile-phone text {
		float: left;
		width: 160upx;
		text-align: center;
	}

	.mobile-phone input {
		flex: 1;
		height: 120upx;
		line-height: 120upx;
		font-size: 28upx;
	}

	.seat-selection {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		margin-top: 20upx;
		padding: 20upx 0;
		border-radius: 10upx;
	}

	.seat-selection-title {
		width: 94%;
		margin: 0px auto;
		display: flex;
		justify-content: space-between;
	}

	.seat-selection-content {
		display: flex;
		justify-content: space-between;
		width: 94%;
		margin: 20upx auto;
		overflow: hidden;
	}

	.seat-selection-content text {
		font-size: 24upx;
		width: 40upx;
		line-height: 30upx;
		color: #999;
	}

	.seat-selection-icon i {
		font-size: 50upx;
		vertical-align: middle;
		margin: 0 20upx;
		line-height: 100%;
		color: #999;
	}

	.seat-selection-icon i.active {
		color: #0086F6;
	}

	.insure {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		margin-top: 20upx;
		padding-top: 20upx;
		border-radius: 10upx;
	}

	.insure-title {
		width: 94%;
		margin: 0px auto;
		color: #f60;

	}

	.insure-list {
		width: 94%;
		margin: 0px auto;
		display: flex;
		padding: 20upx 0;
		border-bottom: 1upx solid #f2f2f2;
	}

	.insure-list:last-child {
		border-bottom: none;
	}

	.insure-l {
		display: flex;
		flex: 1;
		justify-content: space-between;
	}

	.insure-l view {
		font-size: 24upx;
	}

	.insure-l view:last-child {
		margin-top: 6upx;
	}

	.insure-l view:first-child {
		color: #999;
		line-height: 40upx;
	}

	.insure-l view:first-child view.title {
		font-size: 32upx;
		color: #333;
	}

	.insure-l view:first-child view.title i {
		margin: 0 10upx;
		vertical-align: middle;
		font-size: 26upx;
	}

	.insure-l view:first-child view em {
		font-size: 24upx;
		color: #1AAD19;
	}

	.insure-buy {
		float: right;
		width: 100upx;
		text-align: right;
		padding-top: 10upx;
	}

	.book-agreement {
		width: 96%;
		margin: 0px auto;
		font-size: 24upx;
		height: 70upx;
		line-height: 70upx;
		color: #999;
		margin-bottom: 100upx;
	}

	.book-agreement text {
		color: #0086F6;
	}

	.seat-selection-describe {
		width: 94%;
		margin: 0px auto;
		font-size: 24upx;
		color: #999;
	}

	.booking-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 9;
		width: 100%;
		height: 100upx;
		background: #fff;
	}

	.booking-footer view {
		float: left;
		line-height: 100upx;
		margin-left: 20upx;
	}

	.booking-footer view text {
		font-weight: bold;
		color: #f60;
		margin-left: 10upx;
	}

	.booking-footer view em {
		font-size: 24upx;
		color: #999;
		margin-left: 20upx;
	}

	.booking-footer view em i {
		font-size: 20upx;
		margin-left: 6upx;
	}

	.booking-footer button {
		float: right;
		width: 200upx;
		height: 70upx;
		line-height: 70upx;
		font-size: 32upx;
		margin-right: 20upx;
		margin-top: 14upx;
	}

	.transfer-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 9;
	}

	.transfer-box {
		position: absolute;
		top: 30%;
		left: 5%;
		right: 5%;
		width: 90%;
		background: #fff;
		border-radius: 10upx;
		padding-bottom: 30upx;
	}

	.transferTitle {
		display: block;
		background: #f9f9f9;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		margin-bottom: 10upx;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
		position: relative;
	}

	.transferTitle i {
		position: absolute;
		top: 0;
		right: 20upx;
		font-size: 40upx;
		color: #666;
	}


	.transfer-trip {
		width: 90%;
		margin: 0px auto;
		display: flex;
		justify-content: space-between;
	}

	.transfer-trip view {
		font-size: 20upx;
		height: 60upx;
		line-height: 60upx;
	}

	.transfer-trip view text {
		margin: 0 10upx;
	}

	.transfer-trip view:last-child {
		color: #999;
	}

	.transfer-city {
		display: block;
		text-align: center;
		font-size: 20upx;
		color: #0086F6;
		margin: 30upx 0;
	}

	.transferList {
		width: 90%;
		margin: 0px auto;

	}

	.transferList-date {
		font-size: 24upx;
		color: #505050;
	}

	.transferList-date text {
		width: 30upx;
		height: 30upx;
		text-align: center;
		line-height: 30upx;
		border-radius: 6upx;
		color: #fff;
		background: #0086F6;
		margin-right: 40upx;
	}

	.transferList-date em {
		margin-left: 10upx;
	}

	.transferList-content {
		width: 90%;
		margin: 0px auto;
		display: flex;
		justify-content: space-between;
		margin-top: 20upx;
	}

	.transferList-content view {}

	.transferList-content view text {
		display: block;
		text-align: center;
		color: #505050;
		line-height: 40upx;
	}

	.transferList-content view text:first-child {
		font-size: 40upx;
	}

	.transfer-time {
		position: relative;
	}

	.transfer-time em {
		position: absolute;
		left: 18%;
		top: 16upx;
		font-size: 20upx;
		color: #999;
		background: #fff;
		z-index: 6;
		padding: 0 6upx;
	}

	.transfer-time image {
		width: 160upx;
		height: 10upx;
	}
</style>
