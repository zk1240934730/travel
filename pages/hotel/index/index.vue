<template>
	<view>
		<view class="hotel-index">
			<view class="destination-position">

				<view>
					<text>目的地</text>
					<text>上海</text>
				</view>

				<view>
					<p><i class="iconfont icon-weizhi"></i></p>
					<p>当前位置</p>
				</view>

			</view>
			<view class="hotel-set-date">
				<view>
					<text>入住 今天</text>
					<text>03月30日</text>
				</view>

				<view>
					<text>离店 明天</text>
					<text>03月31日</text>
				</view>
				<em>共1晚</em>
			</view>
			<view class="hotel-key-star">
				<text>关键字/位置/品牌/酒店名</text>
			</view>
			<view class="hotel-key-star">
				<text>价格/星级</text>
			</view>
			<view class="sub-btn"><button type="primary" hover-class="none">查询酒店</button></view>
		</view>

		<!--星级/价格-->
		<view class="mask-bg" style="display: none;">
			<view class="mask-content">
				<view class="mask-title">星级/价格<em><i class="iconfont icon-guanbi"></i></em></view>
				<view class="star-price">
					<h5>星级</h5>
					<text class="active">不限</text>
					<text>客栈/公寓</text>
					<text>二星/经济</text>
					<text>三星/舒适</text>
					<text>四星/高档</text>
					<text>五星/豪华</text>
				</view>
				<view class="star-price">
					<h5>价格</h5>
					<text class="active">不限</text>
					<text>¥150以下</text>
					<text>¥150-250</text>
					<text>¥250-350</text>
					<text>¥350-450</text>
					<text>¥450-700</text>
					<text>¥700以上</text>
				</view>

				<view class="star-operation">
					<button class="reset-btn">重置</button>
					<button hover-class="none">确认</button>
				</view>

			</view>

		</view>
		<!--星级价格结束-->
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
	.hotel-index {
		display: block;
		background: #fff;
		border-bottom: 1upx solid #f2f2f2;
	}

	.destination-position {
		width: 90%;
		margin: 0px auto;
		border-bottom: 1upx solid #eee;
		padding: 30upx 0;
		display: flex;
		justify-content: space-between;
	}

	.destination-position view text {
		display: block;
		font-size: 24upx;
		color: #666;
	}

	.destination-position view text:last-child {
		font-size: 44upx;
		line-height: 100%;
		color: #111;
		margin-top: 10upx;
	}

	.destination-position view:last-child {
		margin-top: 14upx;
	}

	.destination-position view:last-child p {
		display: block;
		text-align: center;
		color: #0086F6;
		line-height: 40upx;
	}

	.destination-position view:last-child p i {
		font-weight: bold;
		text-align: center;
		font-size: 50upx;
	}

	.hotel-set-date {
		width: 90%;
		margin: 0px auto;
		border-bottom: 1upx solid #eee;
		position: relative;
		padding: 20upx 0;
	}

	.hotel-set-date view {
		display: inline-block;
		width: 45%;
	}

	.hotel-set-date view text {
		display: block;
		font-size: 24upx;
		color: #999;
	}

	.hotel-set-date view text:last-child {
		font-size: 44upx;
		color: #111;
		line-height: 100%;
	}

	.hotel-set-date em {
		position: absolute;
		right: 0;
		bottom: 20upx;
		font-size: 24upx;
		color: #505050;
	}

	.hotel-key-star {
		display: block;
		width: 90%;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #f2f2f2;
		margin: 0px auto;
	}

	.hotel-key-star text {
		color: #999;
	}

	.sub-btn {
		padding: 30upx 0;
	}
</style>
