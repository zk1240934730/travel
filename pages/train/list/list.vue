<template>
	<view>

		<!--顶部-->
		<view class="list-date">
			<view class="day-before disabled"><i class="iconfont icon-jiantou1"></i>前一天</view>
			<view class="same-day">3月9日<text>今天</text>周一<i class="iconfont icon-arrow_b"></i></view>
			<view class="next-day">后一天<i class="iconfont icon-jiantou"></i></view>
		</view>
		<!--顶部结束-->

		<!--暂无-->
		<view class="no-data" style="display:none;">
			<image src="/static/train/no-data.png"></image>
			<text>没有找到符合筛选条件的火车</text>
		</view>
		<!--暂无结束-->

		<!--内容-->
		<view class="list-content">

			<!--列表-->
			<view class="search-list">
				<view class="train-info">
					<view class="train-list-city">
						<view class="time-city">
							06:36
							<text>北京南站</text>
						</view>
						<view class="time-number">
							<view>6时4分</view>
							<view class="go-arrow">
								<image src="/static/train/go-arrow.png"></image>
							</view>
							<view>G105<image src="/static/train/ID.png"></image>
							</view>
						</view>
						<view class="time-city last">12:40
							<text>上海虹桥站</text>
						</view>
					</view>
					<view class="ticket-price"><text>¥</text>553</view>
				</view>
				<view class="train-seat">
					<text>二等座有票</text>
					<text>一等座4</text>
					<text>商务座6</text>
					<text></text>
				</view>

				<!--预订-->
				<view class="book-bg" style="display: none;">
					<view class="book-list">
						<view>二等座</view>
						<view class="price"><text>¥</text>553</view>
						<view>有票</view>
						<view><button type="primary" hover-class="none" @tap="list">预订</button></view>
					</view>
					<view class="book-list">
						<view>一等座</view>
						<view class="price"><text>¥</text>933</view>
						<view>有票</view>
						<view><button type="primary" hover-class="none" @tap="list">预订</button></view>
					</view>
					<view class="book-list">
						<view>商务座</view>
						<view class="price"><text>¥</text>1748</view>
						<view>12张</view>
						<view><button type="primary" hover-class="none" @tap="list">预订</button></view>
					</view>
				</view>
				<!--预订结束-->

			</view>
			<view class="search-list">
				<view class="train-info">
					<view class="train-list-city">
						<view class="time-city">
							07:20
							<text>北京南站</text>
						</view>
						<view class="time-number">
							<view>6时4分</view>
							<view class="go-arrow">
								<image src="/static/train/go-arrow.png"></image>
							</view>
							<view>G121<image src="/static/train/ID.png"></image>
							</view>
						</view>
						<view class="time-city last">13:08
							<text>上海虹桥站</text>
						</view>
					</view>
					<view class="ticket-price"><text>¥</text>553</view>
				</view>
				<view class="train-seat" style="display: none;">
					<text>二等座有票</text>
					<text>一等座有票</text>
					<text>商务座18</text>
					<text></text>
				</view>
				<!--预订-->
				<view class="book-bg" style="display: none3;">
					<view class="book-list">
						<view>二等座</view>
						<view class="price"><text>¥</text>553</view>
						<view>有票</view>
						<view><button type="primary" hover-class="none" @tap="list">预订</button></view>
					</view>
					<view class="book-list">
						<view>一等座</view>
						<view class="price"><text>¥</text>933</view>
						<view>有票</view>
						<view><button type="primary" hover-class="none" @tap="list">预订</button></view>
					</view>
					<view class="book-list">
						<view>商务座</view>
						<view class="price"><text>¥</text>1748</view>
						<view>12张</view>
						<view><button type="primary" hover-class="none" @tap="list">预订</button></view>
					</view>
				</view>
				<!--预订结束-->
			</view>
			<view class="search-list">
				<view class="train-info">
					<view class="train-list-city">
						<view class="time-city">
							08:35
							<text>北京南站</text>
						</view>
						<view class="time-number">
							<view>6时4分</view>
							<view class="go-arrow">
								<image src="/static/train/go-arrow.png"></image>
							</view>
							<view>G101<image src="/static/train/ID.png"></image>
							</view>
						</view>
						<view class="time-city last">14:22
							<text>上海虹桥站</text>
						</view>
					</view>
					<view class="ticket-price"><text>¥</text>553</view>
				</view>
				<view class="train-seat">
					<text>二等座有票</text>
					<text>一等座有票</text>
					<text>商务座18</text>
					<text></text>
				</view>
			</view>
			<view class="search-list">
				<view class="train-info">
					<view class="train-list-city">
						<view class="time-city">
							08:50
							<text>北京南站</text>
						</view>
						<view class="time-number">
							<view>5时43分</view>
							<view class="go-arrow">
								<image src="/static/train/go-arrow.png"></image>
							</view>
							<view>G101<image src="/static/train/ID.png"></image>
							</view>
						</view>
						<view class="time-city last">14:33
							<text>上海虹桥站</text>
						</view>
					</view>
					<view class="ticket-price"><text>¥</text>553</view>
				</view>
				<view class="train-seat">
					<text>二等座有票</text>
					<text>一等座有票</text>
					<text>商务座18</text>
					<text></text>
				</view>
			</view>
			<view class="search-list">
				<view class="train-info">
					<view class="train-list-city">
						<view class="time-city">
							09:00
							<text>北京南站</text>
						</view>
						<view class="time-number">
							<view>4时28分</view>
							<view class="go-arrow">
								<image src="/static/train/go-arrow.png"></image>
							</view>
							<view>G101<image src="/static/train/ID.png"></image>
							</view>
						</view>
						<view class="time-city last">13:28
							<text>上海虹桥站</text>
						</view>
					</view>
					<view class="ticket-price"><text>¥</text>553</view>
				</view>
				<view class="train-seat">
					<text>二等座有票</text>
					<text>一等座有票</text>
					<text>商务座18</text>
					<text></text>
				</view>
			</view>
			<view class="search-list">
				<view class="train-info">
					<view class="train-list-city">
						<view class="time-city">
							09:12
							<text>北京南站</text>
						</view>
						<view class="time-number">
							<view>5时37分</view>
							<view class="go-arrow">
								<image src="/static/train/go-arrow.png"></image>
							</view>
							<view>G101<image src="/static/train/ID.png"></image>
							</view>
						</view>
						<view class="time-city last">14:49
							<text>上海虹桥站</text>
						</view>
					</view>
					<view class="ticket-price"><text>¥</text>553</view>
				</view>
				<view class="train-seat">
					<text>二等座有票</text>
					<text>一等座有票</text>
					<text>商务座18</text>
					<text></text>
				</view>
			</view>
			<view class="search-list">
				<view class="train-info">
					<view class="train-list-city">
						<view class="time-city">
							19:10
							<text>北京站</text>
						</view>
						<view class="time-number">
							<view>14时44分</view>
							<view class="go-arrow">
								<image src="/static/train/go-arrow.png"></image>
							</view>
							<view>Z281</image>
							</view>
						</view>
						<view class="time-city last">09:54
							<text>上海南站</text>
							<em>+1</em>
						</view>
					</view>
					<view class="ticket-price"><text>¥</text>553</view>
				</view>
				<view class="train-seat">
					<text>二等座有票</text>
					<text>二等卧有票</text>
					<text>一等卧18</text>
					<text></text>
				</view>
			</view>
			<view class="search-list">
				<view class="train-info">
					<view class="train-list-city">
						<view class="time-city">
							19:46
							<text>北京南站</text>
						</view>
						<view class="time-number">
							<view>12时0分</view>
							<view class="go-arrow">
								<image src="/static/train/go-arrow.png"></image>
							</view>
							<view>D709<image src="/static/train/ID.png"></image>
							</view>
						</view>
						<view class="time-city last">07:46
							<text>上海虹桥站</text>
							<em>+1</em>
						</view>
					</view>
					<view class="ticket-price"><text>¥</text>553</view>
				</view>
				<view class="train-seat">
					<text>二等座有票</text>
					<text>二等卧有票</text>
					<text>一等卧18</text>
					<text></text>
				</view>
			</view>
			<!--列表结束-->

			<!--中转-->
			<view class="transfer-box">
				<view class="transfer-title">中转方案推荐</view>
				<!--列表-->
				<view class="search-list">
					<view class="train-info">
						<view class="train-list-city">
							<view class="time-city">
								11:00
								<text>北京南站</text>
							</view>
							<view class="time-number transfer-time">
								<view>换成39分</view>
								<view class="go-arrow">
									<em>南京南转</em>
								</view>
								<view>全程5时45分
								</view>
							</view>
							<view class="time-city last">16:45
								<text>上海虹桥站</text>
							</view>
						</view>
						<view class="ticket-price"><text>¥</text>553<em>起</em></view>
					</view>
					<view class="train-seat transfer-trip">
						<text>第一程G31 二等座有票</text>
						<text>第二程G1915 二等座有票</text>
					</view>
				</view>
				<view class="search-list">
					<view class="train-info">
						<view class="train-list-city">
							<view class="time-city">
								08:30
								<text>北京南站</text>
							</view>
							<view class="time-number transfer-time">
								<view>换成57分</view>
								<view class="go-arrow">
									<em>南京南转</em>
								</view>
								<view>全程6时11分
								</view>
							</view>
							<view class="time-city last">14:41
								<text>上海虹桥站</text>
							</view>
						</view>
						<view class="ticket-price"><text>¥</text>553<em>起</em></view>
					</view>
					<view class="train-seat transfer-trip">
						<text>第一程G165 二等座有票</text>
						<text>第二程G211 二等座有票</text>
					</view>
				</view>
				<view class="search-list">
					<view class="train-info">
						<view class="train-list-city">
							<view class="time-city">
								11:00
								<text>北京南站</text>
							</view>
							<view class="time-number transfer-time">
								<view>换成39分</view>
								<view class="go-arrow">
									<em>南京南转</em>
								</view>
								<view>全程5时45分
								</view>
							</view>
							<view class="time-city last">16:45
								<text>上海虹桥站</text>
							</view>
						</view>
						<view class="ticket-price"><text>¥</text>553<em>起</em></view>
					</view>
					<view class="train-seat transfer-trip">
						<text>第一程G31 二等座有票</text>
						<text>第二程G1915 二等座有票</text>
					</view>
				</view>
				<view class="search-list">
					<view class="train-info">
						<view class="train-list-city">
							<view class="time-city">
								08:30
								<text>北京南站</text>
							</view>
							<view class="time-number transfer-time">
								<view>换成57分</view>
								<view class="go-arrow">
									<em>南京南转</em>
								</view>
								<view>全程6时11分
								</view>
							</view>
							<view class="time-city last">14:41
								<text>上海虹桥站</text>
							</view>
						</view>
						<view class="ticket-price"><text>¥</text>553<em>起</em></view>
					</view>
					<view class="train-seat transfer-trip">
						<text>第一程G165 二等座有票</text>
						<text>第二程G211 二等座有票</text>
					</view>
				</view>
				<!--列表结束-->
			</view>
			<!--中转结束-->

		</view>
		<!--内容结束-->

		<!--底部-->
		<view class="list-footer">
			<view>筛选</view>
			<view class="active">时间<text>早-晚</text><text>晚-早</text></view>
			<view>耗时<text>短-长</text><text>长-短</text></view>
			<view>价格<text>低-高</text><text>高-低</text></view>
		</view>
		<!--底部结束-->

		<!--筛选-->
		<view class="filter-bg" style="display: none;">
			<view class="filter-box">
				<view class="filter-title">
					<text>清空</text>
					<text>筛选</text>
					<text>确定</text>
				</view>

				<view class="filter-content">
					<view class="filter-sub-title">车型选择</view>
					<view class="vehicle-type">
						<!--选中加样式text class="active"-->
						<text>高铁 (G/C)<image src="/static/train/check-mark.png"></image></text>
						<text>动车 (D)<image src="/static/train/check-mark.png"></image></text>
						<text>普通 (Z/T/K)<image src="/static/train/check-mark.png"></image></text>
						<text>其他 (Y/L等)<image src="/static/train/check-mark.png"></image></text>
					</view>
					<view class="filter-sub-title">出发时间</view>

					<view class="departure-time">
						<!--选中加样式 view class="active"-->
						<view>早上<text>00:00-06:00</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
						<view>上午<text>06:00-12:00</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
						<view>下午<text>12:00-18:00</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
						<view>晚上<text>18:00-24:00</text>
							<image src="/static/train/check-mark.png"></image>
						</view>
					</view>

					<view class="filter-sub-title">出发/到达车站</view>
					<view class="arrival-station">
						<!--选中加样式text class="active"-->
						<text>北京南<image src="/static/train/check-mark.png"></image></text>
						<text>北京<image src="/static/train/check-mark.png"></image></text>
						<text>上海虹桥<image src="/static/train/check-mark.png"></image></text>
						<text>上海<image src="/static/train/check-mark.png"></image></text>
						<text>上海南<image src="/static/train/check-mark.png"></image></text>
					</view>

				</view>
			</view>
		</view>
		<!--筛选结束-->

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			list(e) {
				//var newsid = e.currentTarget.dataset.newsid;
				uni.navigateTo({
					url: '../booking/booking'
				});
			}
		}
	}
</script>

<style>
	.list-date {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
		background: #0086F6;
		width: 100%;
		text-align: center;
		text-align: center;
	}

	.day-before {
		position: absolute;
		left: 20upx;
		top: 0;
	}

	.day-before i {
		margin-right: 10upx;
	}

	.next-day {
		position: absolute;
		top: 0;
		right: 20upx;
	}

	.next-day i {
		margin-left: 10upx;
	}

	.list-date view {
		height: 80upx;
		line-height: 80upx;
		color: #fff;
		font-size: 26upx;
	}

	.list-date view.disabled {
		opacity: 0.5;
	}

	.list-date view i {
		font-size: 20upx;
	}

	.same-day text {
		display: inline-block;
		margin: 0 10upx;
	}

	.same-day i {
		margin-left: 10upx;
	}

	.list-content {
		display: block;
		margin-top: 80upx;
		margin-bottom: 110upx;
	}

	.train-info {
		display: flex;
		overflow: hidden;
	}

	.train-list-city {
		display: flex;
		flex: 1;
		justify-content: space-between;
		padding: 20upx 0 0 20upx;
	}

	.time-city {
		font-size: 44upx;
		font-weight: bold;
		line-height: 100%;
		color: #0086F6;
		text-align: left;
		position: relative;
	}

	.time-city em {
		position: absolute;
		top: -8upx;
		right: -30upx;
		font-size: 20upx;
		font-style: normal;
	}

	.time-city text {
		display: block;
		font-size: 26upx;
		color: #333;
		font-weight: normal;
		padding-top: 10upx;
	}

	.time-city.last {
		color: #222;
		text-align: right;
	}

	.time-number view {
		font-size: 20upx;
		text-align: center;
		color: #999;
	}

	.time-number view:last-child image {
		width: 30upx;
		height: 20upx;
		vertical-align: -4upx;
		margin-left: 6upx;
	}

	.go-arrow image {
		width: 100upx;
		height: 8upx;
		display: block;
	}

	.go-arrow em {
		font-size: 20upx;
		font-style: normal;
		color: #0086F6;
		border: 1upx solid #0086F6;
		border-radius: 50upx;
		padding: 0 8upx;
		display: inline-block;
		height: 22upx;
		line-height: 22upx;
		position: relative;
	}

	.go-arrow em:before {
		content: '';
		position: absolute;
		top: 8upx;
		left: -20upx;
		z-index: 5;
		width: 20upx;
		height: 2px;
		background-image: linear-gradient(to right, #fff, #0086F6);
	}

	.go-arrow em:after {
		content: '';
		position: absolute;
		top: 8upx;
		right: -20upx;
		z-index: 5;
		width: 20upx;
		height: 2px;
		background-image: linear-gradient(to right, #0086F6, #fff);
	}

	.ticket-price {
		float: right;
		font-size: 40upx;
		font-weight: bold;
		color: #f60;
		width: 180upx;
		text-align: right;
		margin-top: 8upx;
		margin-right: 20upx;
	}

	.ticket-price text {
		font-size: 24upx;
		font-weight: normal;
	}

	.ticket-price em {
		font-size: 20upx;
		font-weight: normal;
		font-style: normal;
	}

	.search-list {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		border-radius: 5px;
		margin-bottom: 20upx;
	}

	.train-seat {
		display: flex;
		padding: 20upx;
	}

	.train-seat text {
		display: inline-block;
		width: 25%;
		color: #808080;
		font-size: 24upx;
	}

	.list-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 9;
		width: 100%;
		height: 90upx;
		background: #fff;
		border-top: 1upx solid #eee;
	}

	.list-footer view {
		display: inline-block;
		width: 25%;
		height: 90upx;
		line-height: 90upx;
		font-size: 28upx;
		color: #505050;
		text-align: center;
		position: relative;
	}

	.list-footer view::after {
		content: '';
		position: absolute;
		top: 36upx;
		right: 0;
		width: 1upx;
		height: 24upx;
		background: #eee;
	}

	.list-footer view text {
		display: none;
		margin-left: 10upx;
	}

	.list-footer view.active {
		color: #0086F6;
	}

	.list-footer view.active text:first-child {
		display: initial;
	}

	.transfer-box {
		display: block;
		padding-top: 40upx;
	}

	.transfer-title {
		display: block;
		font-size: 32upx;
		padding-left: 20upx;
		margin-bottom: 20upx;
	}

	.transfer-trip {
		display: flex;
		justify-content: space-between;
	}

	.transfer-trip text {
		width: auto;
	}

	.transfer-time view {
		line-height: 30upx;
	}

	.book-bg {
		display: block;
		background: #fafafa;
		border: 4upx solid #fff;
		border-bottom-left-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}

	.book-list {
		display: flex;
		width: 96%;
		margin: 0px auto;
		justify-content: space-between;
		border-bottom: 1upx solid #eee;
	}

	.book-list:last-child {
		border-bottom: none;
	}

	.book-list view {
		height: 120upx;
		line-height: 120upx;
		font-size: 26upx;
		color: #505050;
	}

	.book-list view.price {
		font-weight: bold;
		color: #f60;
		font-size: 30upx;
	}

	.book-list view.price text {
		font-size: 24upx;
	}

	.book-list view button {
		font-size: 28upx;
		height: 54upx;
		line-height: 54upx;
		border-radius: 8upx;
		margin-top: 32upx;
	}

	.filter-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
		background: rgba(0, 0, 0, 0.5);
	}

	.filter-box {
		position: absolute;
		width: 100%;
		background: #fff;
		left: 0;
		bottom: 0;
		border-top-left-radius: 30upx;
		border-top-right-radius: 30upx;
	}

	.filter-title {
		display: flex;
		justify-content: space-between;
		height: 80upx;
		line-height: 80upx;
		padding: 0 20upx;
		font-size: 32upx;
	}

	.filter-title text {
		display: block;
		font-size: 28upx;
	}

	.filter-title text:first-child {
		color: #999;
	}

	.filter-title text:last-child {
		color: #0086F6;
	}

	.filter-content {
		width: 94%;
		margin: 0px auto;
	}

	.filter-sub-title {
		display: block;
		height: 80upx;
		line-height: 80upx;
		color: #333;
	}

	.vehicle-type {
		display: block;
		overflow: hidden;
	}

	.vehicle-type text {
		float: left;
		width: 48%;
		font-size: 26upx;
		color: #808080;
		background: #f5f5f5;
		text-align: center;
		border-radius: 10upx;
		height: 70upx;
		line-height: 70upx;
		margin-bottom: 20upx;
		border: 1px solid #f5f5f5;
		position: relative;
	}

	.vehicle-type text:nth-child(2n+0) {
		float: right;
	}

	.vehicle-type text.active {
		border: 1upx solid #0086F6;
		color: #0086F6;
		background: #E1F0FF;
	}

	.vehicle-type text image {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 5;
		width: 30upx;
		height: 30upx;
		display: none;
	}

	.vehicle-type text.active image {
		display: block;
	}

	.departure-time {
		display: block;
		overflow: hidden;
	}

	.departure-time view {
		float: left;
		width: 48%;
		font-size: 26upx;
		color: #808080;
		background: #f5f5f5;
		text-align: center;
		border-radius: 10upx;
		line-height: 30upx;
		margin-bottom: 20upx;
		padding: 10upx 0;
		position: relative;
		border: 1upx solid #f5f5f5;
	}

	.departure-time view text {
		display: block;
		font-size: 20upx;
	}

	.departure-time view:nth-child(2n+0) {
		float: right;
	}

	.departure-time view image {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 5;
		width: 30upx;
		height: 30upx;
		display: none;
	}

	.departure-time view.active {
		border: 1upx solid #0086F6;
		color: #0086F6;
		background: #E1F0FF;
	}

	.departure-time view.active image {
		display: block;
	}

	.arrival-station {
		display: block;
		overflow: hidden;
	}

	.arrival-station text {
		float: left;
		width: 30%;
		font-size: 26upx;
		color: #808080;
		background: #f5f5f5;
		text-align: center;
		border-radius: 10upx;
		height: 70upx;
		line-height: 70upx;
		margin-bottom: 20upx;
		margin-right: 20upx;
		position: relative;
		border: 1upx solid #f5f5f5;
	}

	.arrival-station text:nth-child(3n+0) {
		float: right;
	}

	.arrival-station text image {
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 5;
		width: 30upx;
		height: 30upx;
		display: none;
	}

	.arrival-station text.active {
		border: 1upx solid #0086F6;
		color: #0086F6;
		background: #E1F0FF;
	}

	.arrival-station text.active image {
		display: block;
	}
</style>
