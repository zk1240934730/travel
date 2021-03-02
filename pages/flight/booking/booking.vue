<template>
	<view>
		<view class="booking-box">

			<!--行程-->
			<view class="voyage-info">
				<view class="voyage-list"><text>去程</text><text>04-15</text><text>周三</text><text>06:50</text><em>退改签规则<i class="iconfont icon-jiantou"></i></em></view>
				<view class="voyage-list"><text>返程</text><text>04-18</text><text>周六</text><text>13:15</text><em>退改签规则<i class="iconfont icon-jiantou"></i></em></view>
			</view>
			<view class="cost-info"><text>¥568/成人</text><text>¥520/儿童</text><text>¥269/婴儿</text><text>¥150/机建燃油</text></view>
			<!--行程结束-->

			<!--乘客-->
			<view class="passengers-box">

				<view class="passenger-title">乘机人<text>已选择:成人0人</text><text>儿童0人</text> <text>婴儿0人</text></view>

				<!--列表-->
				<view class="passenger-content" style="display: none;">

					<!--常旅客-->
					<view class="frequent-travellers">
						<view class="active">杨过<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view>李丽<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view>王小峰<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view>张维<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view>韦斯特<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view><i class="iconfont icon-jiahao"></i>添加</view>
					</view>
					<!--常旅客结束-->

					<view class="booking-passenger-list">
						<view class="passenger-del"><i class="iconfont icon-shanchu1"></i></view>
						<view class="passenger-identity">
							<p class="name">杨过<em>成人票</em></p>
							<P>二代身份证<text>4168**********897</text></P>
						</view>
						<view class="passenger-edit"><i class="iconfont icon-icon-"></i></view>
					</view>
					<view class="booking-passenger-list">
						<view class="passenger-del"><i class="iconfont icon-shanchu1"></i></view>
						<view class="passenger-identity">
							<p class="name">李丽<em>儿童票</em></p>
							<P>二代身份证<text>4168**********897</text></P>
						</view>
						<view class="passenger-edit"><i class="iconfont icon-icon-"></i></view>
					</view>
					<view class="booking-passenger-list">
						<view class="passenger-del"><i class="iconfont icon-shanchu1"></i></view>
						<view class="passenger-identity">
							<p class="name">王小峰<em>婴儿票</em></p>
							<P>二代身份证<text>4168**********897</text></P>
						</view>
						<view class="passenger-edit"><i class="iconfont icon-icon-"></i></view>
					</view>
				</view>
				<!--列表结束-->

				<!--添加-->
				<view class="add-passenger"><i class="iconfont icon-jiahao"></i>添加乘机人</view>
				<!--添加结束-->

			</view>
			<!--乘客结束-->

			<!--联系手机-->
			<view class="contact-phone">
				<text>手机号码</text>
				<input type="number" placeholder="用于接收短信通知" />
			</view>
			<!--联系手机结束-->

			<!--保险-->
			<view class="insurance">

				<view class="insurance-guarantee"><i class="iconfont icon-anquan"></i>出行有保障，家人更放心</view>

				<view class="insurance-list">
					<view class="name">
						<view><label class="radio">
								<radio value="r1" />航意险</label><i class="iconfont icon-tishi"></i></view>
						<view>¥40/人</view>
					</view>
					<p>交通意外险最高可赔付¥50万</p>
				</view>

				<view class="insurance-list">
					<view class="name">
						<view><label class="radio">
								<radio value="r1" />航意险</label><i class="iconfont icon-tishi"></i></view>
						<view>¥80/人</view>
					</view>
					<p>交通意外险最高可赔付¥100万</p>
				</view>

			</view>
			<!--保险结束-->

			<!--发票-->
			<view class="invoice">
				<view class="invoice-title">
					<view>发票</view>
					<view>
						<switch name="switch" />
					</view>
				</view>

				<!--填写-->
				<view class="invoice-box" style="display:none">

					<view class="invoice-list">
						<view>发票类型</view>
						<view><label>
								<checkbox class="uni-checkbox-input" checked value="checkbox1" />纸质发票
							</label></view>
					</view>

					<view class="invoice-list">
						<view>配送方式</view>
						<view><label>
								<checkbox class="uni-checkbox-input" checked value="checkbox1" />快递寄送
							</label><label>
								<checkbox class="uni-checkbox-input" value="checkbox1" />上门自取
							</label></view>
					</view>

					<!--快递-->
					<view class="invoice-content">
						<view class="invoice-list">
							<view>发票清单</view>
							<view>机票行程单</view>
						</view>
						<view class="invoice-list">
							<view>联系人</view>
							<view><input type="text" placeholder="请输入联系人"></view>
						</view>
						<view class="invoice-list">
							<view>邮寄地址</view>
							<view><input type="text" placeholder="请输入详细地址"></view>
						</view>
						<view class="invoice-list">
							<view>邮寄费用</view>
							<view>普通快递<text>¥20</text></view>
						</view>
					</view>
					<!--快递结束-->

					<!--自取-->
					<view class="invoice-content" style="display: none;">
						<view class="invoice-list">
							<view>发票清单</view>
							<view>机票行程单</view>
						</view>
						<view class="ticket-address">
							<i class="iconfont icon-gantanhao"></i>行程单、保险发票起飞后在工作日期间到我公司拿取纸质发票
							<text>取票地址:上海市嘉定区安亭墨玉路</text>
						</view>
					</view>
					<!--自取结束-->
				</view>
				<!--填写结束-->
			</view>
			<!--发票结束-->

		</view>

		<!--底部-->
		<view class="booking-footer">
			<view>订单总额 <text>¥1890</text> <em>明细<i class="iconfont icon-arrow_b"></i></em></view>
			<button type="primary" hover-class="none">去付款</button>
		</view>
		<!--底部结束-->

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

		<!--航班详情-->
		<view class="flight-details" style="display: none;">
			<view class="flight-details-box">
				<view class="flight-details-title">航班详情<em><i class="iconfont icon-guanbi"></i></em></view>
				<!--列表-->
				<view class="flight-details-list">
					<view class="flight-details-info"><text>去程</text><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东航MU1858
						</em><text>04-15</text><text>周三</text></view>
					<view class="flight-details-time">
						<view>
							<text>07:45</text>
							<text>虹桥机场T2</text>
						</view>
						<view>
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>10:10</text>
							<text>首都机场T3</text>
						</view>
					</view>
				</view>
				<view class="flight-details-list">
					<view class="flight-details-info"><text>返程</text><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东航MU1858
						</em><text>04-16</text><text>周四</text></view>
					<view class="flight-details-time">
						<view>
							<text>13:20</text>
							<text>首都机场T3</text>
						</view>
						<view>
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>16:35</text>
							<text>虹桥机场T2</text>
						</view>
					</view>
				</view>
				<!--列表结束-->
			</view>
		</view>
		<!--航班详情结束-->

		<!--明细-->
		<view class="detailed" style="display: none;">

			<view class="detailed-box">

				<!--列表-->
				<view class="detailed-list">
					<view class="passenger-type-price">
						<text>成人</text>
						<text>¥1890x2人</text>
					</view>
					<view class="passenger-sublist">
						<text>机票</text>
						<text>¥3890</text>
					</view>
					<view class="passenger-sublist">
						<text>机建</text>
						<text>¥50</text>
					</view>
					<view class="passenger-sublist">
						<text>燃油</text>
						<text>¥0</text>
					</view>
				</view>

				<view class="detailed-list">
					<view class="passenger-type-price">
						<text>儿童</text>
						<text>¥1890x1人</text>
					</view>
					<view class="passenger-sublist">
						<text>机票</text>
						<text>¥1890</text>
					</view>
					<view class="passenger-sublist">
						<text>机建</text>
						<text>¥0</text>
					</view>
					<view class="passenger-sublist">
						<text>燃油</text>
						<text>¥0</text>
					</view>
				</view>
				<view class="detailed-list">
					<view class="passenger-type-price">
						<text>尊享航意险</text>
						<text>¥40x3人</text>
					</view>
				</view>

				<!--列表结束-->

			</view>

		</view>
		<!--明细结束-->
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
	.booking-box {
		display: block;
		margin-bottom: 120upx;
	}

	.voyage-info {
		display: block;
		background: #0086F6;
	}

	.voyage-list {
		width: 92%;
		margin: 0px auto;
		position: relative;
		color: #fff;
		padding-bottom: 10upx;
	}

	.voyage-list em {
		position: absolute;
		font-size: 24upx;
		top: 6upx;
		right: 0;
	}

	.voyage-list em i {
		font-size: 24upx;
		margin-left: 6upx;
	}

	.voyage-list text {
		margin-left: 20upx;
	}

	.voyage-list text:first-child {
		background: #fff;
		color: #0086F6;
		border-radius: 6upx;
		height: 32upx;
		line-height: 32upx;
		padding: 0 6upx;
		font-size: 24upx;
		margin-left: 0;
	}

	.cost-info {
		display: block;
		background: #fff;
	}

	.cost-info text {
		font-size: 28upx;
		color: #505050;
		margin-left: 20upx;
		padding: 20upx 0;
	}

	.passenger-content {
		display: block;
	}

	.passengers-box {
		display: block;
		background: #fff;
		margin-top: 20upx;
		overflow: hidden;
	}

	.passenger-title {
		width: 94%;
		margin: 0px auto;
		height: 80upx;
		line-height: 80upx;
	}

	.passenger-title text {
		font-size: 24upx;
		color: #999;
		margin-left: 20upx;
	}

	.add-passenger {
		width: 94%;
		margin: 0px auto;
		border: 1upx solid #0086F6;
		border-radius: 10upx;
		text-align: center;
		color: #0086F6;
		height: 80upx;
		line-height: 80upx;
		margin-bottom: 20upx;
	}

	.add-passenger i {
		display: inline-block;
		vertical-align: middle;
		margin-right: 10upx;
	}

	
	.contact-phone {
		display: flex;
		height: 100upx;
		line-height: 100upx;
		background: #fff;
		margin: 20upx 0;
	}

	.contact-phone text {
		width: 140upx;
		text-align: center;
	}

	.contact-phone input {
		flex: 1;
		height: 100upx;
		line-height: 100upx;
		font-size: 28upx;
		padding-left: 20upx;
	}

	.invoice {
		display: block;
		background: #fff;
		margin-top: 20upx;
	}

	.invoice-title {
		display: flex;
		justify-content: space-between;
		height: 100upx;
		padding: 0 20upx;
	}

	.invoice-title view {
		line-height: 100upx;
	}

	.invoice-box {
		display: block;
		width: 100%;
		border-top: 1upx solid #eee;
	}

	.invoice-list {
		display: flex;
		border-bottom: 1upx solid #eee;
		height: 100upx;
		width: 94%;
		margin: 0px auto;
		color: #505050;
	}

	.invoice-list view {
		line-height: 100upx;
		font-size: 26upx;
	}

	.invoice-list view:first-child {
		float: left;
		width: 160upx;
	}

	.invoice-list view input {
		font-size: 28upx;
		height: 100upx;
		line-height: 100upx;
	}

	.invoice-list label {
		margin-right: 40upx;
	}

	.invoice-list text {
		margin-left: 20upx;
		color: #f60;
	}

	.invoice-content {
		display: block;
	}

	.ticket-address {
		width: 90%;
		margin: 0px auto;
		font-size: 26upx;
		color: #999;
		padding: 20upx 0;
		line-height: 36upx;
	}

	.ticket-address text {
		display: block;
		padding-top: 10upx;
	}

	.ticket-address i {
		color: #f60;
		vertical-align: middle;
		margin-right: 10upx;
	}

	.flight-details {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}

	.flight-details-box {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		background: #fff;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
	}

	.flight-details-title {
		display: block;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		position: relative;
		font-weight: bold;
	}

	.flight-details-title em {
		position: absolute;
		top: 0;
		right: 0;
		width: 100upx;
		height: 100upx;
		text-align: center;
	}

	.flight-details-title em i {
		color: #999;
		font-size: 40upx;
	}

	.flight-details-list {
		width: 94%;
		margin: 0px auto;
		margin-bottom: 40upx;
	}

	.flight-details-time {
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin: 0px auto;
	}

	.flight-details-time view text {
		display: block;
		text-align: center;
		font-size: 26upx;
	}

	.flight-details-time view text:first-child {
		line-height: 100%;
		font-size: 40upx;
		font-weight: bold;
	}

	.flight-details-time view image {
		width: 100upx;
		height: 10upx;
		margin-top: 36upx;
	}

	.flight-details-info {
		display: block;
		margin: 20upx 0;
	}

	.flight-details-info text {
		margin-right: 20upx;
	}

	.flight-details-info em {
		margin-right: 20upx;
	}

	.flight-details-info em image {
		width: 32upx;
		height: 32upx;
		vertical-align: middle;
		margin-right: 10upx;
	}

	.flight-details-info text:first-child {
		font-size: 24upx;
		color: #fff;
		background-color: #007AFF;
		border-radius: 6upx;
		height: 30upx;
		line-height: 30upx;
		padding: 0 6upx;
	}
</style>
