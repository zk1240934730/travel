<template>
	<view>

		<!--日期-->
		<view class="list-data">
			<view class="month-date">
				<view class="month-date-box">
					<!--列表-->
					<view class="month-date-list">
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view class="active">
							<text>03-19</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-20</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-21</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-22</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-23</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-24</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-25</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-26</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>03-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
						<view>
							<text>04-18</text>
							<text class="week">周三</text>
							<text>¥290</text>
						</view>
					</view>
					<!--列表结束-->
				</view>
			</view>
			<view class="set-calendar">
				<i class="iconfont icon-rili"></i>
				<text>日历</text>
			</view>
		</view>
		<!--日期结束-->

		<view class="list-box">

			<!--暂无-->
			<view class="no-data" style=" display: none;">
				<image src="/static/train/no-data.png"></image>
				<text>没有找到符合筛选条件的行程</text>
			</view>
			<!--暂无结束-->

			<!--往返显示-->
			<view class="go-trip" style="display: none;">
				<em><i>去</i>2020-03-19</em>
				<text>18:35-20:50</text>
				<text>大新华航空</text>
				<text>CN7150</text>
			</view>
			<!--往返显示结束-->

			<!--列表-->
			<view class="list">
				<view class="list-r">
					<view class="list-airport">
						<view>
							<text>06:50</text>
							<text>浦东机场T2</text>
						</view>
						<view class="stop-over">
							<image src="../../../static/common/go-arrow.png"></image><em>经停<br>洛阳</em>
						</view>
						<view>
							<text>09:25</text>
							<text>大兴国际机场</text>
						</view>
					</view>
					<view class="aircraft-info"><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空
						</em> | MU5111 | 空客321(中) <text>共享</text></view>
				</view>
				<view class="list-price">
					<p class="price"><text>¥</text>345<text>起</text></p>
					<p><em>2.1折</em><em>少</em></p>
				</view>
			</view>

			<view class="list">
				<view class="list-r">
					<view class="list-airport">
						<view>
							<text>07:35</text>
							<text>浦东机场T2</text>
						</view>
						<view class="stop-over">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>10:36</text>
							<text>大兴国际机场</text>
						</view>
					</view>
					<view class="aircraft-info"><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/HU.png"></image>海南航空
						</em> | HU7609 | 波音738(中) </view>
				</view>
				<view class="list-price">
					<p class="price"><text>¥</text>568<text>起</text></p>
					<p><em>3.8折</em></p>
				</view>
			</view>

			<view class="list">
				<view class="list-r">
					<view class="list-airport">
						<view>
							<text>08:10</text>
							<text>浦东机场T2</text>
						</view>
						<view class="stop-over">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>11:20</text>
							<text>大兴国际机场</text>
						</view>
					</view>
					<view class="aircraft-info"><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/HO.png"></image>吉祥航空
						</em> | HO1252 | 空客321(中) </view>
				</view>
				<view class="list-price">
					<p class="price"><text>¥</text>897<text>起</text></p>
					<p><em>3.8折</em></p>
				</view>
			</view>

			<view class="list">
				<view class="list-r">
					<view class="list-airport">
						<view>
							<text>07:35</text>
							<text>浦东机场T2</text>
						</view>
						<view class="stop-over">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>10:36</text>
							<text>大兴国际机场</text>
						</view>
					</view>
					<view class="aircraft-info"><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/HU.png"></image>海南航空
						</em> | HU7609 | 波音738(中) </view>
				</view>
				<view class="list-price">
					<p class="price"><text>¥</text>568<text>起</text></p>
					<p><em>3.8折</em></p>
				</view>
			</view>

			<view class="list">
				<view class="list-r">
					<view class="list-airport">
						<view>
							<text>08:10</text>
							<text>浦东机场T2</text>
						</view>
						<view class="stop-over">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>11:20</text>
							<text>大兴国际机场</text>
						</view>
					</view>
					<view class="aircraft-info"><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/HO.png"></image>吉祥航空
						</em> | HO1252 | 空客321(中) </view>
				</view>
				<view class="list-price">
					<p class="price"><text>¥</text>897<text>起</text></p>
					<p><em>3.8折</em></p>
				</view>
			</view>

			<view class="list">
				<view class="list-r">
					<view class="list-airport">
						<view>
							<text>07:35</text>
							<text>浦东机场T2</text>
						</view>
						<view class="stop-over">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>10:36</text>
							<text>大兴国际机场</text>
						</view>
					</view>
					<view class="aircraft-info"><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/HU.png"></image>海南航空
						</em> | HU7609 | 波音738(中) </view>
				</view>
				<view class="list-price">
					<p class="price"><text>¥</text>568<text>起</text></p>
					<p><em>3.8折</em></p>
				</view>
			</view>

			<view class="list">
				<view class="list-r">
					<view class="list-airport">
						<view>
							<text>08:10</text>
							<text>浦东机场T2</text>
						</view>
						<view class="stop-over">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>11:20</text>
							<text>大兴国际机场</text><em class="day">+1天</em>
						</view>
					</view>
					<view class="aircraft-info"><em>
							<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/HO.png"></image>吉祥航空
						</em> | HO1252 | 空客321(中) </view>
				</view>
				<view class="list-price">
					<p class="price"><text>¥</text>897<text>起</text></p>
					<p><em>3.8折</em></p>
				</view>
			</view>

			<!--列表结束-->
		</view>


		<!--底部-->
		<view class="list-footer">
			<view><i class="iconfont icon-shaixuan"></i>筛选</view>
			<view class="active"><i class="iconfont icon-shijian"></i>时间<text>早-晚</text><text>晚-早</text></view>
			<view><i class="iconfont icon-jiagepaixu"></i>价格<text>低-高</text><text>高-低</text></view>
		</view>
		<!--底部结束-->

		<!--筛选-->
		<view class="screen-bg" style="display: none;">

			<view class="screen-box">

				<view class="screen-title">
					<view>取消</view>
					<view><text>清空已选</text></view>
					<view>确定</view>
				</view>

				<view class="direct-share">
					<label class="radio">
						<radio value="r1" />仅看直飞</label>
					<label class="radio">
						<radio value="r2" />隐藏共享航班</label>
				</view>

				<view class="screen-content">
					<!--左-->
					<view class="screen-left">
						<view class="active">起飞时间</view>
						<view>航空公司</view>
						<view>舱位</view>
						<view>机型</view>
						<view>起飞机场</view>
						<view>降落机场</view>
					</view>
					<!--左结束-->

					<!--右-->
					<view class="screen-right">
						<!--起飞时间-->
						<view class="screen-list">
							<view class="screen-list-info">
								<view>01:00-06:00</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>06:00-12:00</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>12:00-18:00</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>18:00-24:00</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
						</view>
						<!--起飞时间结束-->

						<!--航空公司-->
						<view class="screen-list" style="display: none;">
							<view class="screen-list-info">
								<view>吉祥航空</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>中国国际航空</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>成都航空</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>南方航空</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>厦门航空</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>深圳航空</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>东方航空</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>海南航空</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>

						</view>
						<!--航空公司结束-->

						<!--舱位-->
						<view class="screen-list" style="display: none;">
							<view class="screen-list-info">
								<view>头等舱</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>公务舱</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>经济舱</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
						</view>
						<!--舱位结束-->

						<!--机型-->
						<view class="screen-list" style="display: none;">
							<view class="screen-list-info">
								<view>大机型</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>中机型</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>小机型</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
						</view>
						<!--机型结束-->

						<!--起飞机场-->
						<view class="screen-list" style="display: none;">
							<view class="screen-list-info">
								<view>虹桥国际机场</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>浦东国际机场</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
						</view>
						<!--起飞机场结束-->

						<!--降落机场-->
						<view class="screen-list" style="display: none;">
							<view class="screen-list-info">
								<view>首都国际机场</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
							<view class="screen-list-info">
								<view>大兴国际机场</view>
								<view>
									<checkbox class="uni-checkbox-input" value="checkbox1" />
								</view>
							</view>
						</view>
						<!--降落机场结束-->

					</view>
					<!--右结束-->
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

		}
	}
</script>

<style>
	.list-data {
		position: fixed;
		width: 100%;
		top: 0upx;
		left: 0;
		z-index: 9;
		background: #fff;
		display: flex;
		height: 120upx;
		padding-top: 10upx;
	}

	.month-date {
		flex: 1;
		overflow-y: auto;
	}

	.month-date-box {
		width: 100%;
		height: 120upx;
		overflow-y: hidden;
		overflow-x: auto;
	}

	.month-date-list {
		width: 3600upx;
	}

	.month-date-list view {
		display: inline-block;
		text-align: center;
		width: 120upx;
		border-radius: 10upx;
	}

	.month-date-list view text {
		display: block;
		font-size: 24upx;
		color: #666;
		line-height: 36upx;
	}

	.month-date-list view text.week {
		font-size: 20upx;
	}

	.month-date-list view.active {
		background: #007AFF;
	}

	.month-date-list view.active text {
		color: #fff;
	}

	.set-calendar {
		float: right;
		width: 120upx;
		background: #fff;
		text-align: center;
		color: #0086F6;
		border-left: 1upx solid #eee;
		line-height: 40upx;
	}

	.set-calendar text {
		display: block;
		font-size: 24upx;
	}

	.set-calendar i {
		margin-top: 20upx;
	}

	.go-trip {
		width: 96%;
		margin: 0px auto;
		background: #E3F2FF;
		margin-bottom: 20upx;
		border-radius: 10upx;
		height: 80upx;
		line-height: 80upx;
		color: #0086F6;
		font-size: 26upx;
	}

	.go-trip i {
		color: #fff;
		background: #0086F6;
		height: 36upx;
		line-height: 36upx;
		width: 36upx;
		text-align: center;
		font-size: 22upx;
		border-radius: 6upx;
		margin: 0 10upx;
		vertical-align: middle;
	}

	.go-trip text {
		margin-left: 10upx;
	}

	.list-box {
		display: block;
		margin-top: 150upx;
		margin-bottom: 120upx;
	}

	.list {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		display: flex;
		margin-bottom: 20upx;
		border-radius: 10upx;
		padding: 20upx 0;
	}

	.list-r {
		flex: 1;
		padding-left: 20upx;
	}

	.list-airport {
		display: flex;
		justify-content: space-between;
	}

	.list-airport view {
		position: relative;
	}

	.list-airport view text {
		display: block;
		color: #666;
		line-height: 50upx;
		font-size: 26upx;
	}

	.list-airport .day {
		position: absolute;
		top: 0;
		right: -6upx;
		font-size: 20upx;
		color: #0086F6;
		z-index: 2;
	}

	.list-airport view text:first-child {
		color: #333;
		font-size: 40upx;
		font-weight: bold;
	}

	.stop-over {
		text-align: center;
		position: relative;
	}

	.stop-over image {
		width: 110upx;
		height: 16upx;
		margin-top: 36upx;
	}

	.stop-over em {
		position: absolute;
		top: 34upx;
		left: 20%;
		z-index: 1;
		font-size: 20upx;
		line-height: 30upx;
		background: #fff;
		color: #999;
		padding: 0 6upx;
	}

	.aircraft-info {
		display: block;
		font-size: 24upx;
		color: #999;
		margin-top: 10upx;
	}

	.aircraft-info image {
		width: 28upx;
		height: 28upx;
		vertical-align: middle;
		margin-right: 4upx;
	}

	.aircraft-info text {
		color: #09BB07;
		margin-left: 10upx;
	}

	.list-price {
		float: right;
		color: #f60;
		text-align: right;
		width: 230upx;
		margin-right: 10upx;
	}

	.list-price p {
		display: block;
	}

	.list-price p.price {
		font-size: 40upx;
		line-height: 100%;
		margin-bottom: 20upx;
	}

	.list-price p.price text {
		font-size: 24upx;
	}

	.list-price p em {
		display: inline-block;
		border: 1upx solid #f60;
		border-radius: 30upx;
		font-size: 24upx;
		padding: 0 10upx;
		margin-left: 10upx;
		height: 30upx;
		line-height: 30upx;
	}

	.list-footer {
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		background: #fff;
		height: 100upx;
		line-height: 100upx;
		border-top: 1upx solid #eee;
		z-index: 9;
	}

	.list-footer view {
		display: inline-block;
		width: 33.33%;
		text-align: center;
		position: relative;
		color: #505050;
		font-size: 26upx;
	}

	.list-footer view::after {
		content: '';
		position: absolute;
		right: 0;
		top: 6upx;
		width: 1upx;
		height: 40upx;
		background: #eee;
		z-index: 10;
	}

	.list-footer i {
		font-size: 30upx;
		vertical-align: middle;
		margin-right: 10upx;
	}

	.list-footer view.active {
		color: #0086F6;
	}

	.list-footer view text {
		display: none;
	}

	.list-footer view.active text:last-child {
		display: none;
	}

	.list-footer view.active text {
		display: inherit
	}

	.screen-bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
		background: rgba(0, 0, 0, 0.5);
	}

	.screen-box {
		position: absolute;
		left: 0;
		bottom: 0;
		background: #fff;
		width: 100%;
	}

	

	.direct-share {
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #eee;
	}

	.direct-share label {
		color: #999;
		height: 100upx;
		line-height: 100upx;
		padding: 0 30upx;
	}

	.screen-content {
		display: flex;
		height: 600upx;
	}

	.screen-left {
		float: left;
		width: 200upx;
	}

	.screen-left view {
		display: block;
		height: 100upx;
		line-height: 100upx;
		border-bottom: 1upx solid #eee;
		border-right: 1upx solid #eee;
		text-align: center;
		color: #505050;
	}

	.screen-left view.active {
		border-right: none;
		color: #0086F6;
	}

	.screen-right {
		flex: 1;
		height: 600upx;
		overflow: auto;
	}

	.screen-list {
		display: block;
		width: 92%;
		margin: 0px auto;
	}

	.screen-list-info {
		display: flex;
		justify-content: space-between;

		border-bottom: 1upx solid #eee;
	}

	.screen-list-info view {
		height: 100upx;
		line-height: 100upx;
	}
</style>
