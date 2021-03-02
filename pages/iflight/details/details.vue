<template>
	<view>
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

		<!--预订-->
		<view class="booking-list">
			<view class="l">
				<view class="price"><text>¥</text>1458</view>
				<view class="taxation">税费¥678</view>
				<view>超级经济舱</view>
			</view>
			<view class="r">
				<view class="booking">预订</view>
			</view>
		</view>

		<view class="booking-list">
			<view class="l">
				<view class="price"><text>¥</text>2378</view>
				<view class="taxation">税费¥986</view>
				<view>超级头等舱</view>
			</view>
			<view class="r">
				<view class="booking-surplus">预订<text>剩6张</text></view>
			</view>
		</view>
		<!--预订结束-->
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
	
	.booking-list {
		display: flex;
		width: 98%;
		margin: 0 auto;
		background: #fff;
		border-radius: 10upx;
		margin-top: 20upx;
		padding: 20upx 0;
	}

	.booking-list .l {
		flex: 1;
		padding-left: 20upx;
	}

	.price {
		font-size: 40upx;
		color: #f60;
		line-height: 100%;
		font-weight: bold;
	}

	.price text {
		font-size: 26upx;
	}

	.booking-list .r {
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
		margin-top: 44upx;
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
		margin-top: 24upx;
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

	.taxation {
		color: #999;
		font-size: 26upx;
	}
</style>
