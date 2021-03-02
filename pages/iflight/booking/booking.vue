<template>
	<view>

		<view class="booking-box">

			<!--航程-->
			<view class="voyage-top-info">
				<view class="voyage-list"><text>去</text>03月30日(周一)<em>10:15起飞</em>浦东T1-樟宜T3<i class="iconfont icon-jiantou"></i></view>
				<view class="voyage-list"><text>返</text>04月01日(周三)<em>13:35起飞</em>樟宜T3-浦东T1<i class="iconfont icon-jiantou"></i></view>
			</view>
			<view class="voyage-price">
				<view>经济舱</view>
				<view>
					<p>¥2156</p>
					<p>票价¥1458<text>税费¥659</text></p>
				</view>
			</view>
			<!--航程结束-->

			<!--乘机人-->
			<view class="passenger">
				<view class="passenger-menu">乘机人<text>请添加1成人</text><text style="display: none;">0儿童</text><text style="display: none;">0婴儿</text></view>

				<view class="frequent-box" style="display: none;">
					<!--常旅客-->
					<view class="frequent-travellers">
						<view class="active">YANG/GUOOOO<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view>LI/LI<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view>WANG/XIAOFENG<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view>ZHANG/WEI<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view>WEI/SITE<image src="../../../static/common/check-mark.png"></image>
						</view>
						<view><i class="iconfont icon-jiahao"></i>添加</view>
					</view>
					<!--常旅客结束-->

					<!--列表-->
					<view class="booking-passenger-list">
						<view class="passenger-del"><i class="iconfont icon-shanchu1"></i></view>
						<view class="passenger-identity">
							<p class="name"><b>YANG/GUO</b><em>成人票</em></p>
							<P>护照<text>98078989</text><text>男</text><text>有效期2025-12-30</text></P>
						</view>
						<view class="passenger-edit"><i class="iconfont icon-icon-"></i></view>
					</view>
					<view class="booking-passenger-list">
						<view class="passenger-del"><i class="iconfont icon-shanchu1"></i></view>
						<view class="passenger-identity">
							<p class="name"><b>WANG/XIAOFENG</b><em>成人票</em></p>
							<P>护照<text>87659809</text><text>男</text><text>有效期2025-12-30</text></P>
						</view>
						<view class="passenger-edit"><i class="iconfont icon-icon-"></i></view>
					</view>
					<!--列表结束-->
				</view>

				<!--添加-->
				<view class="add-passenger"><i class="iconfont icon-jiahao"></i>添加乘机人</view>
				<!--添加结束-->

			</view>
			<!--乘机人结束-->

			<!--联系信息-->
			<view class="booking-contact">
				<view class="contact-info">
					<view>手机号码</view>
					<view><input type="number" placeholder="请填写联系人手机号"></view>
				</view>
				<view class="contact-info">
					<view>电子邮箱</view>
					<view><input type="text" placeholder="请准确填写紧急联系方式"></view>
				</view>
			</view>
			<!--联系信息结束-->

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

		</view>

		<!--底部-->
		<view class="booking-footer">
			<view>订单总额 <text>¥1890</text> <em>明细<i class="iconfont icon-arrow_b"></i></em></view>
			<button type="primary" hover-class="none">去付款</button>
		</view>
		<!--底部结束-->

		<!--航班信息-->
		<view class="mask-bg zindex" style="display: none;">
			<view class="mask-content voyage-height">

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
								<view class="city">上海虹桥T1</view>
								<view class="airline">
									<p>
										<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU567
									</p>
									<p>机型:321</p>
								</view>
								<view class="city">樟宜机场T3</view>
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
								<view class="city">上海虹桥T1</view>
								<view class="airline">
									<p>
										<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU567
									</p>
									<p>机型:321</p>
								</view>
								<view class="city">樟宜机场T3</view>
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
								<view class="city">樟宜机场T3</view>
								<view class="airline">
									<p>
										<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空168
									</p>
									<p>机型:321</p>
								</view>
								<view class="city">上海虹桥T1</view>
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
		</view>


		<!--航班信息结束-->

		<!--明细-->
		<view class="detailed" style="display: none;">

			<view class="detailed-box">

				<!--列表-->
				<view class="detailed-list">
					<view class="passenger-type-price">
						<text>成人</text>
						<text>¥1890x1人</text>
					</view>
					<view class="passenger-sublist">
						<text>机票</text>
						<text>¥3890</text>
					</view>
					<view class="passenger-sublist">
						<text>税费</text>
						<text>¥650</text>
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
						<text>税费</text>
						<text>¥239</text>
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

	.voyage-top-info {
		display: block;
		background: #0086F6;
		padding-bottom: 10upx;
	}

	.voyage-list {
		width: 96%;
		margin: 0px auto;
		color: #fff;
		position: relative;
		height: 60upx;
		line-height: 60upx;
		font-size: 26upx;
	}

	.voyage-list i {
		font-size: 24upx;
		position: absolute;
		right: 0upx;
		z-index: 1;
	}

	.voyage-list text {
		background: #fff;
		color: #0086F6;
		height: 32upx;
		line-height: 32upx;
		font-size: 24upx;
		border-radius: 6upx;
		padding: 0 4upx;
		margin-right: 10upx;
	}

	.voyage-list em {
		margin: 0 10upx;
	}

	.voyage-price {
		display: flex;
		justify-content: space-between;
		padding: 20upx;
		background: #fff;
		border-bottom: 1upx solid #f2f2f2;
	}

	.voyage-price view:first-child {
		line-height: 80upx;
	}

	.voyage-price p {
		display: block;
		text-align: right;
		font-size: 26upx;
		color: #999;
	}

	.voyage-price p:first-child {
		font-size: 40upx;
		font-weight: bold;
		line-height: 100%;
		color: #333;
	}

	.voyage-price p text {
		margin-left: 20upx;
	}

	.passenger {
		display: block;
		background: #fff;
		margin-top: 20upx;
		padding-bottom: 20upx;
	}

	.passenger-menu {
		display: block;
		background: #fff;
		border-bottom: 1upx solid #f2f2f2;
		height: 80upx;
		line-height: 80upx;
		padding-left: 20upx;
		margin-bottom: 30upx;
	}

	.passenger-menu text {
		margin-left: 20upx;
		font-size: 24upx;
		color: #999;
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
		margin-top: 20upx;
	}

	.add-passenger i {
		display: inline-block;
		vertical-align: middle;
		margin-right: 10upx;
	}

	.frequent-box {
		display: block;
	}

	.booking-contact {
		display: block;
		margin: 20upx 0;
		border-top: 1upx solid #f2f2f2;
	}

	.contact-info {
		display: flex;
		height: 100upx;
		line-height: 100upx;
		background: #fff;
		border-bottom: 1upx solid #f2f2f2;
		padding: 0 20upx;
	}

	.contact-info view:first-child {
		line-height: 100upx;
		width: 140upx;
	}

	.contact-info view:last-child {
		flex: 1;
	}

	.contact-info view input {
		height: 100upx;
		font-size: 28upx;
	}

	.voyage-height {
		max-height: 800upx;
		overflow-y: auto;
	}

	.zindex {
		z-index: 99999;
	}
</style>
