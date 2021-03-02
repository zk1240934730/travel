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
			</view>
			<!--订单状态结束-->

			<!--订单信息-->
			<view class="details-order">
				<p>总额:¥3890<i class="iconfont icon-tanhao"></i></p>
				<p>订单号:1245678987</p>
				<p>下单时间:2020-03-28 17:55:50</p>
			</view>
			<!--订单信息结束-->

			<!--航程-->
			<view class="voyage-info">
				<view class="person-title">航程信息</view>
				<!--航班-->
				<view class="voyage-info">

					<!--单程-->
					<view class="voyages-list">
						<view class="voyage-title">
							<em><i>去</i>04-10(周五)</em> <text>总时长:5h10m</text>
						</view>
						<!--列表-->
						<view class="voyage-content">
							<!--左-->
							<view class="voyage-l">
								<view>
									<text>10:15</text>
								</view>
								<view class="duration"><i class="iconfont icon-shijian"></i>5h10m</view>
								<view>
									<text>05-11 周一</text>
									<text>15:35</text>
								</view>
							</view>
							<!--左结束-->

							<!--右-->
							<view class="voyage-r">
								<em class="dot-top"></em>
								<view>上海虹桥T1</view>
								<view class="airline">
									<p>
										<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU567
									</p>
									<p>机型:321</p>
								</view>
								<view>樟宜机场T3</view>
								<em class="dot-bom"></em>
							</view>
							<!--右结束-->
						</view>

						<!--中转-->
						<view class="transfer"><text>转</text>厦门 <em><i class="iconfont icon-shijian"></i>停留:12h15m</em></view>
						<!--中转结束-->

						<view class="voyage-content">
							<!--左-->
							<view class="voyage-l">
								<view>
									<text>10:15</text>
								</view>
								<view class="duration"><i class="iconfont icon-shijian"></i>5h10m</view>
								<view>
									<text>05-11 周一</text>
									<text>15:35</text>
								</view>
							</view>
							<!--左结束-->

							<!--右-->
							<view class="voyage-r">
								<em class="dot-top"></em>
								<view>上海虹桥T1</view>
								<view class="airline">
									<p>
										<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU567
									</p>
									<p>机型:321</p>
								</view>
								<view>樟宜机场T3</view>
								<em class="dot-bom"></em>
							</view>
							<!--右结束-->
						</view>

						<!--列表结束-->
					</view>
					<!--单程结束-->

					<!--往返-->
					<view class="voyages-list" style="display: none;">
						<view class="voyage-title">
							<em class="return"><i>返</i>04-12(周五)</em> <text>总时长:5h10m</text>
						</view>
						<!--列表开始-->
						<view class="voyage-content">
							<!--左-->
							<view class="voyage-l">
								<view>
									<text>15:35</text>
								</view>
								<view class="duration"><i class="iconfont icon-shijian"></i>5h10m</view>
								<view>
									<text>05-11 周一</text>
									<text>10:15</text>
								</view>
							</view>
							<!--左结束-->

							<!--右-->
							<view class="voyage-r">
								<em class="dot-top"></em>
								<view>樟宜机场T3</view>
								<view class="airline">
									<p>
										<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空168
									</p>
									<p>机型:321</p>
								</view>
								<view>上海虹桥T1</view>
								<em class="dot-bom"></em>
							</view>
							<!--右结束-->
						</view>
						<!--列表结束-->
					</view>
					<!--往返结束-->

				</view>
				<!--航班结束-->




			</view>
			<!--航程结束-->

			<!--出行信息-->
			<view class="person-info">
				<view class="person-title">出行信息</view>
				<view class="person-box">
					<view class="person-l">出行人</view>
					<view class="person-r">
						<!--列表-->
						<view class="person-list">
							<p>WANG/XIAOER<text>成人</text></p>
							<p>护照:30909868<em>女</em>有效期2025-12-30</p>
						</view>
						<view class="person-list">
							<p>YANG/GUO<text>儿童</text></p>
							<p>港澳通行证:30909868<em>男</em>有效期2025-12-30</p>
						</view>
						<!--列表结束-->
					</view>

				</view>
			</view>
			<!--出行信息结束-->

			<!--联系-->
			<view class="contact-phone">
				<view>联系手机</view>
				<view>13898765678</view>
			</view>
			<view class="contact-phone">
				<view>电子邮箱</view>
				<view>jipiao@126.com</view>
			</view>
			<!--联系结束-->

		</view>

		<!--底部-->
		<div class="details-footer">
			<button>取消订单</button>
			<button type="primary">去支付</button>
		</div>
		<!--底部结束-->

		<!--价格明细-->
		<view class="price-detailed" style="display: none;">
			<view class="detailed-box">
				<view class="detailed-title">价格明细<em><i class="iconfont icon-guanbi"></i></em></view>
				<view class="detailed-subtitle">上海-新加坡</view>
				<view class="detailed-list">
					<view>成人价格</view>
					<view>¥1700x1人</view>
				</view>
				<view class="detailed-list">
					<view>成人税费</view>
					<view>¥986</view>
				</view>

				<view class="detailed-list">
					<view>儿童价格</view>
					<view>¥170x1人</view>
				</view>
				<view class="detailed-list">
					<view>儿童税费</view>
					<view>¥658</view>
				</view>

				<view class="detailed-subtitle">其他</view>
				<view class="detailed-insurance">
					<text>航意险</text>
					<text>¥40x2人</text>
				</view>
			</view>
		</view>
		<!--价格明细-->

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

	/*  */
	.details-order em {
		position: absolute;
		bottom: 14upx;
		right: 20upx;
		color: #0086F6;
		height: 60upx;
		line-height: 60upx;
		z-index: 1;
	}

	.details-order em i {
		font-size: 24upx;
	}

	.voyage-info {
		display: block;
		background: #fff;
	}

	.person-info {
		display: block;
		background: #fff;
		margin-top: 20upx;
	}

	.person-title {
		display: block;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #f2f2f2;
		font-weight: bold;
		text-indent: 20upx;
	}

	.person-box {
		width: 96%;
		margin: 0px auto;
		border-bottom: 1upx solid #eee;
		display: flex;
		overflow: hidden;
		padding-bottom: 20upx;
	}

	.person-l {
		color: #999;
		width: 130upx;
		margin-right: 20upx;
		margin-top: 20upx;
	}

	.person-r {
		flex: 1;
	}

	.person-list {
		display: block;
		margin-top: 20upx;
	}

	.person-list p {
		display: block;
		font-size: 24upx;
		color: #999;
	}

	.person-list p em {
		margin: 0 20upx;
	}

	.person-list p:first-child {
		font-size: 28upx;
		color: #222;
	}

	.person-list p:first-child text {
		font-size: 24upx;
		background: #eee;
		padding: 0 10upx;
		border-radius: 10upx;
		color: #999;
		height: 40upx;
		line-height: 40upx;
		margin-left: 10upx;
	}

	.contact-phone {
		display: flex;
		height: 100upx;
		background: #fff;
		border-bottom: 1upx solid #eee;
	}

	.contact-phone view {
		line-height: 100upx;
	}

	.contact-phone view:first-child {
		color: #999;
		width: 120upx;
		margin: 0 20upx;
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

	.price-detailed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	.detailed-box {
		position: absolute;
		background: #fff;
		width: 100%;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		left: 0;
		bottom: 0;
	}

	.detailed-title {
		display: block;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		font-weight: bold;
		border-bottom: 1upx solid #eee;
		position: relative;
		margin-bottom: 20upx;
	}

	.detailed-title em {
		position: absolute;
		top: 0;
		right: 0;
		width: 100upx;
		height: 100upx;
		text-align: center;
	}

	.detailed-title em i {
		color: #666;
	}

	.detailed-subtitle {
		display: block;
		color: #999;
		width: 90%;
		margin: 0px auto;
		padding: 10upx 0;
	}

	.detailed-list {
		display: flex;
		justify-content: space-between;
		width: 90%;
		margin: 0px auto;
		height: 60upx;
		line-height: 60upx;

	}

	.detailed-insurance {
		display: flex;
		justify-content: space-between;
		width: 90%;
		margin: 0px auto;
		height: 60upx;
		line-height: 60upx;
		margin-bottom: 10upx;
	}
</style>
