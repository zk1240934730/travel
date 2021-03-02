<template>
	<view>
		<view class="list-date">
			<view><i class="iconfont icon-jiantou1"></i>前一天</view>
			<view class="date">04-15 周日<i class="iconfont icon-arrow_b"></i></view>
			<view>后一天<i class="iconfont icon-jiantou"></i></view>
		</view>

		<view class="list-box">

			<!--暂无-->
			<view class="no-data" style=" display: none;">
				<image src="/static/train/no-data.png"></image>
				<text>没有找到符合筛选条件的行程</text>
			</view>
			<!--暂无结束-->

			<!--往返显示-->
			<view class="go-trip" style="display: none;">
				<em><i>去</i>05-10 周日</em>
				<text>18:35-20:50</text>
				<text>大新华航空</text>
				<text>CN7150</text>
			</view>
			<!--往返显示结束-->

			<!--列表-->
			<view class="ifight-list">
				<view class="ifight-list-l">
					<view class="ifight-time-airport">
						<view>
							<text>09:20</text>
							<text>浦东T1</text>
						</view>
						<view class="turn-city">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>15:00</text>
							<text>樟宜T3</text>
						</view>
					</view>
					<view class="airline-time">
						<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU9451<em><i class="iconfont icon-shijian"></i>5h20m</em>
					</view>
				</view>

				<view class="ifight-list-r">
					<view class="price"><text>¥</text>6018</view>
					<p>税费¥759</p>
					<p style="display: none;">含税价</p>
				</view>
			</view>

			<view class="ifight-list">
				<view class="ifight-list-l">
					<view class="ifight-time-airport">
						<view>
							<text>10:15</text>
							<text>浦东T1</text>
						</view>
						<view class="turn-city">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>15:35</text>
							<text>樟宜T3</text>
						</view>
					</view>
					<view class="airline-time">
						<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU9451<em><i class="iconfont icon-shijian"></i>5h20m</em>
					</view>
				</view>

				<view class="ifight-list-r">
					<view class="price"><text>¥</text>6018</view>
					<p>税费¥759</p>
					<p style="display: none;">含税价</p>
				</view>
			</view>

			<view class="ifight-list">
				<view class="ifight-list-l">
					<view class="ifight-time-airport">
						<view>
							<text>16:25</text>
							<text>浦东T1</text>
						</view>
						<view class="turn-city">
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>22:15</text>
							<text>樟宜T3</text>
						</view>
					</view>
					<view class="airline-time">
						<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU9451<em><i class="iconfont icon-shijian"></i>5h20m</em>
					</view>
				</view>

				<view class="ifight-list-r">
					<view class="price"><text>¥</text>5954</view>
					<p>税费¥619</p>
					<p style="display: none;">含税价</p>
				</view>
			</view>

			<view class="ifight-list">
				<view class="ifight-list-l">
					<view class="ifight-time-airport">
						<view>
							<text>18:50</text>
							<text>浦东T2</text>
						</view>
						<view class="turn-city">
							<em><i>转</i><br>昆明</em>
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>16:50</text>
							<text>樟宜T4</text>
							<em class="day">+1天</em>
						</view>
					</view>
					<view class="airline-time">
						<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU9451<em><i class="iconfont icon-shijian"></i>5h20m</em>
					</view>
				</view>

				<view class="ifight-list-r">
					<view class="price"><text>¥</text>7961</view>
					<p>税费¥619</p>
					<p style="display: none;">含税价</p>
				</view>
			</view>

			<view class="ifight-list">
				<view class="ifight-list-l">
					<view class="ifight-time-airport">
						<view>
							<text>14:35</text>
							<text>浦东T2</text>
						</view>
						<view class="turn-city">
							<em><i>转</i><br>吉隆坡</em>
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>20:10</text>
							<text>樟宜T4</text>
							<em class="day">+1天</em>
						</view>
					</view>
					<view class="airline-time">
						<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU9451<em><i class="iconfont icon-shijian"></i>5h20m</em>
					</view>
				</view>

				<view class="ifight-list-r">
					<view class="price"><text>¥</text>7961</view>
					<p>税费¥619</p>
					<p style="display: none;">含税价</p>
				</view>
			</view>

			<view class="ifight-list">
				<view class="ifight-list-l">
					<view class="ifight-time-airport">
						<view>
							<text>11:10</text>
							<text>浦东T2</text>
						</view>
						<view class="turn-city">
							<em><i>转</i><br>厦门</em>
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>11:40</text>
							<text>樟宜T4</text>
							<em class="day">+1天</em>
						</view>
					</view>
					<view class="airline-time">
						<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU9451<em><i class="iconfont icon-shijian"></i>5h20m</em>
					</view>
				</view>

				<view class="ifight-list-r">
					<view class="price"><text>¥</text>6358</view>
					<p>税费¥619</p>
					<p style="display: none;">含税价</p>
				</view>
			</view>

			<view class="ifight-list">
				<view class="ifight-list-l">
					<view class="ifight-time-airport">
						<view>
							<text>11:10</text>
							<text>浦东T2</text>
						</view>
						<view class="turn-city">
							<em><i>转</i><br>2次</em>
							<image src="../../../static/common/go-arrow.png"></image>
						</view>
						<view>
							<text>11:40</text>
							<text>樟宜T4</text>
							<em class="day">+1天</em>
						</view>
					</view>
					<view class="airline-time">
						<image src="//pic.c-ctrip.com/flight_intl/airline_logo/32x32/MU.png"></image>东方航空MU9451<em><i class="iconfont icon-shijian"></i>5h20m</em>
					</view>
				</view>

				<view class="ifight-list-r">
					<view class="price"><text>¥</text>6358</view>
					<p>税费¥619</p>
					<p style="display: none;">含税价</p>
				</view>
			</view>

			<!--列表显示-->

			<!--底部-->
			<view class="list-footer">
				<view>
					<p><i class="iconfont icon-shaixuan"></i></p>筛选
				</view>
				<view class="active">
					<p><i class="iconfont icon-feiji"></i></p>直飞优先
				</view>
				<view>
					<p><i class="iconfont icon-paixu"></i></p>排序
				</view>
				<view>
					<p><i class="iconfont icon-jiagepaixu"></i></p><em>不含税价</em><em style="display: none;">含税价</em>
				</view>
			</view>
			<!--底部结束-->

			<!--筛选-->
			<view class="mask-bg" style="display: none;">
				<view class="mask-content">
					<view class="screen-title">
						<view>取消</view>
						<view><text>清空已选</text></view>
						<view>确定</view>
					</view>

					<view class="screen-content">
						<!--左-->
						<view class="screen-left">
							<view class="active">舱位</view>
							<view>中转次数</view>
							<view>机型</view>
							<view>起飞机场</view>
							<view>降落机场</view>
						</view>
						<!--左结束-->

						<!--右-->
						<view class="screen-right">

							<!--舱位-->
							<view class="screen-list">
								<view class="screen-list-info">
									<view>经济舱/超级经济舱</view>
									<view>
										<checkbox class="uni-checkbox-input" value="checkbox1" />
									</view>
								</view>
								<view class="screen-list-info">
									<view>公务舱/头等舱</view>
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
									<view>头等舱</view>
									<view>
										<checkbox class="uni-checkbox-input" value="checkbox1" />
									</view>
								</view>
							</view>
							<!--舱位结束-->

							<!--中转次数-->
							<view class="screen-list" style="display: none;">
								<view class="screen-list-info">
									<view>直飞</view>
									<view>
										<checkbox class="uni-checkbox-input" value="checkbox1" />
									</view>
								</view>
								<view class="screen-list-info">
									<view>一次中转</view>
									<view>
										<checkbox class="uni-checkbox-input" value="checkbox1" />
									</view>
								</view>
								<view class="screen-list-info">
									<view>2程中转</view>
									<view>
										<checkbox class="uni-checkbox-input" value="checkbox1" />
									</view>
								</view>
							</view>
							<!--中转次数结束-->

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
									<view>樟宜国际机场</view>
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


			<!--排序-->
			<view class="mask-bg" style="display: none;">
				<view class="mask-content">
					<view class="mask-title">选择排序方式<em><i class="iconfont icon-guanbi"></i></em></view>
					<view class="sort-list active">
						低价优先
						<em><i class="iconfont icon-duigou"></i></em>
					</view>
					<view class="sort-list">
						起飞 早 - 晚
						<em><i class="iconfont icon-duigou"></i></em>
					</view>
					<view class="sort-list">
						起飞 晚 - 早
						<em><i class="iconfont icon-duigou"></i></em>
					</view>
					<view class="sort-list">
						到达 早 - 晚
						<em><i class="iconfont icon-duigou"></i></em>
					</view>
					<view class="sort-list">
						起飞 晚 - 早
						<em><i class="iconfont icon-duigou"></i></em>
					</view>
				</view>
			</view>
			<!--排序结束-->
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
	.list-date {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background: #0086F6;
		padding: 20upx 0;
		z-index: 9;
	}

	.list-date view {
		height: 60upx;
		line-height: 60upx;
		font-size: 26upx;
		color: #fff;
		width: 30%;
	}

	.list-date view:first-child {
		margin-left: 20upx;
	}

	.list-date view.date {
		text-align: center;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 10upx;
	}

	.list-date view.date i {
		display: inline-block;
		margin-left: 10upx;
		vertical-align: middle;
	}

	.list-date view:last-child {
		text-align: right;
		margin-right: 20upx;
	}

	.list-date view i {
		font-size: 24upx;
	}

	.list-box {
		display: block;
		margin-top: 118upx;
		margin-bottom: 120upx;
	}

	.ifight-list {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		display: flex;
		margin-bottom: 20upx;
		border-radius: 10upx;
		padding: 20upx 0;
	}

	.ifight-list-l {
		flex: 1;
		margin-left: 20upx;
		margin-right: 40upx;
	}

	.ifight-list-r {
		float: right;
		width: 200upx;
		text-align: right;
		margin-right: 20upx;
	}

	.ifight-list-r view.price {
		font-size: 40upx;
		line-height: 100%;
		font-weight: bold;
		color: #f60;
	}

	.ifight-list-r view.price text {
		font-size: 24upx;
	}

	.ifight-list-r p {
		font-size: 26upx;
		color: #999;
	}

	.ifight-time-airport {
		display: flex;
		justify-content: space-between;
	}

	.ifight-time-airport view {
		position: relative;
	}

	.ifight-time-airport view text {
		display: block;
		color: #999;
		font-size: 26upx;
	}

	.ifight-time-airport view .day {
		font-size: 20upx;
		position: absolute;
		top: -10upx;
		right: -50upx;
	}

	.ifight-time-airport view text:first-child {
		color: #333;
		font-size: 40upx;
		font-weight: bold;
		line-height: 100%;
	}

	.airline-time {
		display: block;
		font-size: 24upx;
		color: #999;
		margin-top: 10upx;
	}

	.airline-time image {
		width: 32upx;
		height: 32upx;
		vertical-align: middle;
		margin-right: 10upx;
	}

	.airline-time em {
		margin-left: 20upx;
		position: relative;
	}

	.airline-time em::before {
		content: '';
		position: absolute;
		top: 10upx;
		left: 0;
		width: 2upx;
		height: 24upx;
		background: #ccc;
		z-index: 1;
	}

	.airline-time i {
		font-size: 24upx;
		margin: 0 6upx 0 20upx;
	}

	.turn-city {
		display: block;
		position: relative;
	}

	.turn-city image {
		width: 160upx;
		height: 8upx;
	}

	.turn-city em {
		font-size: 20upx;
		position: absolute;
		top: 20upx;
		left: 0;
		width: 160upx;
		text-align: center;
		z-index: 1;
		color: #0086F6;
		line-height: 28upx;
	}

	.turn-city em i {
		background: #fff;
	}

	.list-footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #fff;
		z-index: 9;
		border-top: 1upx solid #eee;
		height: 100upx;
	}

	.list-footer view {
		float: left;
		width: 25%;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		font-size: 26upx;
		color: #505050;
		line-height: 36upx;
	}

	.list-footer view p {
		display: block;
		margin-top: 18upx;
		height: 40upx;
	}

	.list-footer view p i {
		font-size: 34upx;
	}

	.list-footer view p i.icon-feiji {
		font-size: 32upx;
	}

	.list-footer view.active {
		color: #0086F6;
	}

	.sort-list {
		display: block;
		height: 90upx;
		line-height: 90upx;
		border-bottom: 1upx solid #f2f2f2;
		text-align: center;
		position: relative;
		color: #505050;
	}

	.sort-list.active {
		color: #0086F6;
	}

	.sort-list.active i {
		display: block;
	}

	.sort-list i {
		position: absolute;
		top: 6upx;
		right: 20upx;
		display: none;
	}

	.screen-content {
		display: flex;
		height: 500upx;
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
		height: 500upx;
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
</style>
