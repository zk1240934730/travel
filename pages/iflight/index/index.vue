<template>
	<view class="flight-index">

		<view class="flight-content">

			<view class="flight-type">
				<view class="active"><text>单程</text></view>
				<view><text>往返</text></view>
			</view>

			<view class="flight-search-city">
				<view @tap="setcity">
					<text>出发城市</text>
					<view class="city-name">北京</view>
				</view>
				<view class="flight-icon">
					<image src="/static/flight/flight-icon.png"></image>
				</view>
				<view @tap="setcity" style="width: 40%; overflow: hidden;">
					<text>到达城市</text>
					<view class="city-name">新加坡</view>
				</view>
			</view>

			<view class="flight-date">
				<view>3月19日<text>明天</text></view>
				<view style="display: none;">3月21日<text>周六</text></view>
			</view>

			<view class="space-number">
				<view>
					<picker @change="bindPickerChange" :value="index" :range="array">
						<view>{{array[index]}}</view>
					</picker>
				</view>
				<view><em><text>1</text>成人</em><em><text>0</text>儿童</em><em><text>0</text>婴儿</em></view>
			</view>

			<view class="civil-servant">
				<view>仅查看直飞</view>
				<view class="switch-icon">
					<switch name="switch" />
				</view>
			</view>

			<view class="sub-btn"><button type="primary" hover-class="none" @tap="list">查询</button></view>

		</view>

		<!--选择乘机人类型-->
		<view class="mask-bg" style="display: none;">
			<view class="mask-content">
				<view class="passengers-type">选择乘机人类型<em><i class="iconfont icon-guanbi"></i></em></view>

				<view class="passengers-list">
					<view><i class="iconfont icon-icon-test"></i>成人<text>12岁以上需购买成人票</text></view>
					<view class="active">
						<p><i class="iconfont icon-jianhao"></i></p>
						<em>1</em>
						<p><i class="iconfont icon-jiahao1"></i></p>
					</view>
				</view>
				<view class="passengers-list">
					<view><i class="iconfont icon-ertong"></i>儿童<text>2-12岁(不含12岁)</text></view>
					<view>
						<p><i class="iconfont icon-jianhao"></i></p>
						<em>0</em>
						<p><i class="iconfont icon-jiahao1"></i></p>
					</view>
				</view>

				<view class="passengers-list">
					<view><i class="iconfont icon-quanmianshidai-"></i>婴儿<text>14天-2岁(不含2岁)</text></view>
					<view>
						<p><i class="iconfont icon-jianhao"></i></p>
						<em>0</em>
						<p><i class="iconfont icon-jiahao1"></i></p>
					</view>
				</view>

				<view class="passengers-sub"><button>确定</button></view>

			</view>
		</view>
		<!--选择乘机人类型结束-->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'picker',
				array: ['经济舱', '超级经济舱', '公务舱、头等舱', '公务舱', '头等舱'],
				index: 0
			}
		},
		methods: {

		}
	}
</script>

<style>
	.flight-index {
		display: block;
		background: #fff;
	}

	.flight-content {
		width: 90%;
		margin: 0px auto;
	}

	.flight-type {
		border-bottom: 1upx solid #eee;
	}

	.flight-type view {
		display: inline-block;
		width: 50%;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		color: #666;
	}

	.flight-type view.active text {
		color: #0086F6;
		border-bottom: 4upx solid #0086F6;
		padding: 0 10upx;
		height: 96upx;
	}

	.flight-search-city {
		display: flex;
		justify-content: space-between;
		padding: 30upx 0 20upx 0;
		border-bottom: 1upx solid #eee;
	}

	.flight-search-city view {
		font-size: 40upx;
		width: 40%;
	}

	.flight-search-city view text {
		display: block;
		font-size: 20upx;
		color: #999;
	}

	.flight-search-city view.city-name {
		display: block;
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.flight-search-city view:last-child view.city-name {
		text-align: right;
	}

	.flight-search-city view:last-child text {
		text-align: right;
	}

	.flight-search-city view.flight-icon {
		width: 20%;
		text-align: center;
	}

	.flight-search-city view.flight-icon image {
		display: inline-block;
		margin-top: 28upx;
		width: 62upx;
		height: 62upx;
	}

	.flight-date {
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #eee;
	}

	.flight-date view {
		height: 100upx;
		line-height: 100upx;
		font-size: 40upx;
	}

	.flight-date view text {
		font-size: 28upx;
		color: #666;
		margin-left: 10upx;
	}

	.space-number {
		border-bottom: 1upx solid #eee;
		display: flex;
		justify-content: space-between;
	}

	.space-number view {
		height: 100upx;
		line-height: 100upx;
		position: relative;
	}

	.space-number view:last-child {
		text-align: right;
	}

	.space-number view em {
		display: inline-block;
		font-size: 24upx;
		margin-left: 20upx;
		color: #999;
	}

	.space-number view em text {
		font-size: 32upx;
		color: #000;
	}

	.civil-servant {
		height: 100upx;

		position: relative;
		border-bottom: 1upx solid #eee;
		display: flex;
		justify-content: space-between;
	}

	.civil-servant view {
		line-height: 100upx;
	}

	.switch-icon {
		display: inline-block;
		margin-left: 20upx;
	}

	.sub-btn {
		width: 100%;
		padding: 40upx 0;
	}

	.passengers-type {
		display: block;
		text-align: center;
		font-weight: bold;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #eee;
		position: relative;
		margin-bottom: 20upx;
	}

	.passengers-type em {
		position: absolute;
		right: 0;
		width: 100upx;
		height: 100upx;
		text-align: center;
	}

	.passengers-type em i {
		color: #666;
	}

	.passengers-list {
		width: 90%;
		margin: 0px auto;
		display: flex;
		justify-content: space-between;
	}

	.passengers-list view {
		height: 100upx;
		line-height: 100upx;
	}

	.passengers-list view text {
		font-size: 24upx;
		color: #999;
	}

	.passengers-list view:first-child i {
		color: #0086F6;
		font-size: 36upx;
		vertical-align: middle;
		margin-right: 10upx;
	}

	.passengers-list view:last-child {
		width: 210upx;
	}


	.passengers-list view:last-child p {
		display: inline-block;
		width: 50upx;
		height: 50upx;
		line-height: 50upx;
		border-radius: 50upx;
		text-align: center;
		border: 1upx solid #ddd;
	}

	.passengers-list view:last-child em {
		width: 100upx;
		text-align: center;
	}

	.passengers-list view p:first-child {
		color: #ddd;
		border: 1upx solid #eee;
	}

	.passengers-list view.active p:first-child {
		border: 1upx solid #0086F6;
		color: #0086F6;
	}

	.passengers-list view:last-child p:last-child {
		background: #0086F6;
		border: 1upx solid #0086F6;
	}

	.passengers-list view:last-child p:last-child i {
		font-weight: bold;
		color: #fff;
	}

	.passengers-sub {
		width: 90%;
		margin: 0px auto;
		padding: 40upx 0;
	}
</style>
