<template>
	<view>
		<!--类型-->
		<view class="order-type">
			<view class="active"><text>待支付</text></view>
			<view><text>已完成</text></view>
			<view><text>已取消</text></view>
		</view>
		<!--类型结束-->

		<!--暂无-->
		<view class="no-data" style="display: none;">
			<image src="../../../static/common/no-data.png"></image>
			<text>您还没有相关订单哦~</text>
		</view>
		<!--暂无结束-->

		<view class="order-box">
			<!--列表-->
			<view class="order-content">
				<view class="booking-date"><em>预订日期:03-22</em></view>
				<view class="order-list">
					<view class="order-list-l">
						<view class="city">上海<em>
								<image src="/static/train/go-arrow.png"></image>
							</em>北京</view>
						<view>04-15<text>05:53至067:12</text></view>
						<view class="train-number">CA8161/浦东2号航站楼出发</view>
					</view>
					<view class="order-list-r">
						<p><text>¥</text>1688</p>
						<p>待支付</p>
					</view>
					<view class="operation">
						<button type="default">取消</button>
						<button type="primary">去支付</button>
					</view>
				</view>
			</view>

			<view class="order-content">
				<view class="booking-date"><em>预订日期:03-16</em></view>
				<view class="order-list">
					<view class="order-list-l">
						<view class="city">上海<em>
								<image src="/static/train/go-arrow.png"></image>
							</em>合肥</view>
						<view>04-15<text>05:53至067:12</text></view>
						<view class="train-number">CA8161/浦东2号航站楼出发</view>
					</view>
					<view class="order-list-r">
						<p><text>¥</text>890</p>
						<p>待支付</p>
					</view>
					<view class="operation">
						<button type="default">取消</button>
						<button type="primary">去支付</button>
					</view>
				</view>
			</view>

			<view class="order-content">
				<view class="booking-date"><em>预订日期:03-10</em></view>
				<view class="order-list gray">
					<view class="order-list-l">
						<view class="city">南京<em>
								<image src="/static/train/go-arrow.png"></image>
							</em>徐州</view>
						<view>04-15<text>05:53至067:12</text></view>
						<view class="train-number">CA8161/浦东2号航站楼出发</view>
					</view>
					<view class="order-list-r">
						<p><text>¥</text>890</p>
						<p>已取消</p>
					</view>
					<view class="operation">
						<button type="default">删除</button>
					</view>
				</view>
			</view>

			<view class="order-content">
				<view class="booking-date"><em>预订日期:03-10</em></view>
				<view class="order-list gray">
					<view class="order-list-l">
						<view class="city">上海<em>
								<image src="/static/train/go-arrow.png"></image>
							</em>广州</view>
						<view>04-15<text>05:53至067:12</text></view>
						<view class="train-number">CA8161/浦东2号航站楼出发</view>
					</view>
					<view class="order-list-r">
						<p><text>¥</text>890</p>
						<p>已取消</p>
					</view>
					<view class="operation">
						<button type="default">删除</button>
					</view>
				</view>
			</view>

			<view class="order-content">
				<view class="booking-date"><em>预订日期:03-10</em></view>
				<view class="order-list gray">
					<view class="order-list-l">
						<view class="city">南京<em>
								<image src="/static/train/go-arrow.png"></image>
							</em>徐州</view>
						<view>04-15<text>05:53至067:12</text></view>
						<view class="train-number">CA8161/浦东2号航站楼出发</view>
					</view>
					<view class="order-list-r">
						<p><text>¥</text>890</p>
						<p>已完成</p>
					</view>
					<view class="operation">
						<button type="default">删除</button>
					</view>
				</view>
			</view>

			<view class="order-content">
				<view class="booking-date"><em>预订日期:03-10</em></view>
				<view class="order-list gray">
					<view class="order-list-l">
						<view class="city">上海<em>
								<image src="/static/train/go-arrow.png"></image>
							</em>广州</view>
						<view>04-15<text>05:53至067:12</text></view>
						<view class="train-number">CA8161/浦东2号航站楼出发</view>
					</view>
					<view class="order-list-r">
						<p><text>¥</text>890</p>
						<p>已完成</p>
					</view>
					<view class="operation">
						<button type="default">删除</button>
					</view>
				</view>
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
	.booking-date {
		width: 96%;
		margin: 0px auto;
		margin-top: 20upx;
		margin-bottom: 10upx;
	}

	.booking-date em {
		font-size: 24upx;
		color: #fff;
		background: #71B8FF;
		border-radius: 50upx;
		padding: 0 10upx;
	}

	.operation {
		position: absolute;
		right: 20upx;
		bottom: 10upx;
		width: 300upx;
		text-align: right;
	}

	.operation button {
		display: inline-block;
		height: 50upx;
		line-height: 50upx;
		margin-left: 20upx;
		font-size: 26upx;
	}

	.operation button:first-child {
		border-radius: 50upx;
		background: #eee;
	}
</style>
