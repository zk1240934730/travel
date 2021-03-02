<template>
	<view class="content">

		<view class="banner">
			<image src="/static/train/banner.png"></image>
		</view>

		<view class="notice"> <i class="iconfont icon-gonggao"></i>公告：铁路局停售无座车票，餐车不在接待订餐</view>

		<view class="train-search">

			<view class="train-search-city">
				<view @tap="setcity">
					<text>出发城市</text>北京
				</view>
				<view class="train-icon">
					<image src="/static/train/train-icon.png"></image>
				</view>
				<view @tap="setcity">
					<text>到达城市</text>上海
				</view>
			</view>

			<view class="train-search-date" @tap="setdate">3月9日<text>今天</text><text>周一出发</text></view>

			<view class="tickets-type">
				<checkbox-group name="checkbox">
					<label>
						<text>学生票</text>
						<checkbox class="uni-checkbox-input" value="checkbox1" />
					</label>
					<label>
						<text>高铁动车</text>
						<checkbox class="uni-checkbox-input" value="checkbox2" />
					</label>
				</checkbox-group>
			</view>

			<view class="sub-btn"><button type="primary" hover-class="none" @tap="list">查询</button></view>

			<view class="search-history"><text>北京-上海</text><text>南京-杭州</text><text>北京南-武汉</text><text class="clear">清除历史</text></view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			setcity: function() {
				uni.navigateTo({
					url: '/pages/train/city/city'
				})
			},
			setdate: function() {
				uni.navigateTo({
					url: '/pages/train/date/date'
				})
			},
			list: function() {
				uni.navigateTo({
					url: '/pages/train/list/list'
				})
			}
		}
	}
</script>

<style>
	.banner {
		display: block;
	}

	.banner image {
		width: 100%;
		height: 250upx;
		display: block;
	}

	.notice {
		display: block;
		height: 70upx;
		line-height: 70upx;
		color: #f60;
		background: #FFF3E8;
		font-size: 24upx;
	}

	.notice i {
		vertical-align: -5upx;
		margin: 0 5px 0 10px;
	}

	.train-search {
		display: block;
		background: #fff;
	}

	.search-history {
		width: 90%;
		margin: 0px auto;
		padding-bottom: 20upx;
	}

	.search-history text {
		display: inline-block;
		font-size: 24upx;
		color: #999;
		margin-right: 20upx;
		height: 40upx;
		line-height: 40upx;
	}

	.search-history text.clear {
		color: #333;
	}

	.tickets-type {
		width: 90%;
		margin: 0px auto;
		color: #505050;
		overflow: hidden;
	}

	.tickets-type label {
		height: 90upx;
		line-height: 90upx;
		float: left;
	}

	.tickets-type label:last-child {
		float: right;
	}

	.tickets-type label text {
		display: inline-block;
		vertical-align: middle;
	}

	.train-search-date {
		width: 90%;
		margin: 0px auto;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #eee;
		font-size: 40upx;
	}

	.train-search-date text {
		display: inline-block;
		margin-left: 20upx;
		font-size: 28upx;
	}

	.train-search-city {
		display: flex;
		justify-content: space-between;
		width: 90%;
		margin: 0px auto;
		padding: 30upx 0 20upx 0;
		border-bottom: 1upx solid #eee;
	}

	.train-search-city view {
		font-size: 40upx;
	}

	.train-search-city view text {
		display: block;
		font-size: 20upx;
		color: #999;
	}

	.train-icon image {
		display: block;
		margin-top: 28upx;
		width: 62upx;
		height: 62upx;
	}
</style>
