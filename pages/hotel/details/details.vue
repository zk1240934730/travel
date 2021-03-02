<template>
	<view>
		<!--图片-->
		<view class="hotel-pic">
			<image src="https://dimg12.c-ctrip.com/images/200e1f000001g3mcg78AD_R_300_225.jpg"></image>
			<em><i class="iconfont icon-tupian"></i>28张</em>
		</view>
		<!--图片结束->

		<!--酒店信息-->
		<view class="hotel-info">

			<view class="hotel-relevant-info">

				<view class="hotel-name">
					苏州轻枫印象酒店
					<text>舒适型</text>
				</view>

				<view class="hotel-address">
					<view class="hotel-address-l">
						<p>昆山市花桥镇常发大路香城湾32-108室四楼<text>花桥工业区</text></p>
						<p>距我步行106m,约2分钟</p>
					</view>
					<view class="hotel-address-r">地图/导航<i class="iconfont icon-jiantou"></i></view>
				</view>

				<view class="installation">
					<view class="info-list-l ">
						<view class="dateails">2019年装修，2019年开业</view>
						<view class="facilities">
							<em><i class="iconfont icon-WIFIwofi"></i>WIFI</em>
							<em><i class="iconfont icon-canting"></i>餐厅</em>
							<em><i class="iconfont icon-_huabanfuben"></i>停车场</em>
							<em><i class="iconfont icon-huiyi"></i>会议室</em>
						</view>
					</view>
					<view class="info-list-r">详情/设施<i class="iconfont icon-jiantou"></i></view>
				</view>
				<view class="info-list">
					<view class="info-list-l comments">网友点评<strong>4.6</strong>分</view>
					<view class="info-list-r">更多点评<i class="iconfont icon-jiantou"></i></view>
				</view>
			</view>

			<view class="datelist">
				<view class="datelist-l">2020-04-10入住<text>/</text>2020-04-11离店</view>
				<view class="datelist-r">共1晚<i class="iconfont icon-jiantou"></i></view>
			</view>
			<view class="details-keyword">
				<view class="details-keyword-list">
					<text>双床房</text>
					<text>大床房</text>
					<text>含早餐</text>
					<text>免费取消</text>
					<text>到店付款</text>
					<text>游泳池</text>
				</view>
			</view>

		</view>
		<!--酒店信息结束-->

		<!--暂无-->
		<view class="no-data date-top" style=" display: none;">
			<image src="/static/train/no-data.png"></image>
			<text>没有找到符合筛选条件的酒店</text>
		</view>
		<!--暂无结束-->

		<!--房型-->
		<view class="room-list">
			<view class="room-list-info">
				<view class="room-list-l">
					<image src="//dimg13.c-ctrip.com/images/200r1f000001fv6v4B744_R_130_130.jpg"></image>
				</view>
				<view class="room-list-r">
					<view class="room-info">
						<P class="title">心怡标准间</P>
						<p>20m²,双人床,有窗</p>
						<p><em class="confirm">立即确认</em><em class="cancel">不可取消</em></p>
					</view>
					<view class="room-pirce">
						<em><text>¥</text>128</em>起<i class="iconfont icon-arrow_b"></i>
					</view>
				</view>
			</view>

			<!--价格-->
			<view class="list-price-box" style="display: none;">

				<!--列表-->
				<view class="list-price">
					<view class="list-price-l">
						<view class="title">标准价</view>
						<view><text>1份早餐</text><text>多张床</text><text>有窗</text></view>
						<view><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					</view>
					<view class="list-price-r">
						<view class="price"><text>¥</text>298</view>
						<view class="booking">预订<text>在线付</text></view>
					</view>
				</view>

				<view class="list-price">
					<view class="list-price-l">
						<view class="title">大床房</view>
						<view><text>1份早餐</text><text>多张床</text><text>有窗</text></view>
						<view><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					</view>
					<view class="list-price-r">
						<view class="price"><text>¥</text>358</view>
						<view class="booking topay">预订<text>到店付</text></view>
					</view>
				</view>

				<view class="list-price">
					<view class="list-price-l">
						<view class="title">大床房</view>
						<view><text>1份早餐</text><text>多张床</text><text>有窗</text></view>
						<view><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					</view>
					<view class="list-price-r">
						<view class="price"><text>¥</text>358</view>
						<view class="booking gray">订完<text>到店付</text></view>
					</view>
				</view>
				<!--列表结束-->

			</view>
			<!--价格结束-->
		</view>

		<view class="room-list">
			<view class="room-list-info">
				<view class="room-list-l">
					<image src="//dimg10.c-ctrip.com/images/200l1c000001du1rdF5FD_R_130_130.jpg"></image>
				</view>
				<view class="room-list-r">
					<view class="room-info">
						<P class="title">心享大床房</P>
						<p>23m²,大床,有窗</p>
						<p><em class="confirm">立即确认</em><em class="cancel">不可取消</em></p>
					</view>
					<view class="room-pirce">
						<em><text>¥</text>145</em>起<i class="iconfont icon-arrow_b"></i>
					</view>
				</view>
			</view>
			<!--价格-->
			<view class="list-price-box" style="display: none;">

				<!--列表-->
				<view class="list-price">
					<view class="list-price-l">
						<view class="title">标准价</view>
						<view><text>1份早餐</text><text>多张床</text><text>有窗</text></view>
						<view><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					</view>
					<view class="list-price-r">
						<view class="price"><text>¥</text>298</view>
						<view class="booking">预订<text>在线付</text></view>
					</view>
				</view>

				<view class="list-price">
					<view class="list-price-l">
						<view class="title">大床房</view>
						<view><text>1份早餐</text><text>多张床</text><text>有窗</text></view>
						<view><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					</view>
					<view class="list-price-r">
						<view class="price"><text>¥</text>358</view>
						<view class="booking topay">预订<text>到店付</text></view>
					</view>
				</view>

				<!--列表结束-->

			</view>
			<!--价格结束-->
		</view>
		<view class="room-list">
			<view class="room-list-info">
				<view class="room-list-l">
					<image src="//dimg10.c-ctrip.com/images/200k1f000001g0z1rB5B2_R_130_130.jpg"></image>
				</view>
				<view class="room-list-r">
					<view class="room-info">
						<P class="title">精选大床房</P>
						<p>36m²,大床,有窗</p>
						<p><em class="confirm">立即确认</em><em class="cancel">不可取消</em></p>
					</view>
					<view class="room-pirce">
						<em><text>¥</text>168</em>起<i class="iconfont icon-arrow_b"></i>
					</view>
				</view>
			</view>
			<!--价格-->
			<view class="list-price-box" style="display: none;">

				<!--列表-->
				<view class="list-price">
					<view class="list-price-l">
						<view class="title">标准价</view>
						<view><text>1份早餐</text><text>多张床</text><text>有窗</text></view>
						<view><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					</view>
					<view class="list-price-r">
						<view class="price"><text>¥</text>298</view>
						<view class="booking">预订<text>在线付</text></view>
					</view>
				</view>

				<view class="list-price">
					<view class="list-price-l">
						<view class="title">大床房</view>
						<view><text>1份早餐</text><text>多张床</text><text>有窗</text></view>
						<view><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					</view>
					<view class="list-price-r">
						<view class="price"><text>¥</text>358</view>
						<view class="booking topay">预订<text>到店付</text></view>
					</view>
				</view>
				<!--列表结束-->

			</view>
			<!--价格结束-->
		</view>

		<!--房型结束-->
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
	page {
		background: #f5f6f7;
	}

	.hotel-pic {
		display: block;
		height: 400upx;
		position: relative;
	}

	.hotel-pic image {
		width: 100%;
		height: 400upx;
	}

	.hotel-pic em {
		position: absolute;
		right: 20upx;
		bottom: 20upx;
		z-index: 5;
		font-size: 24upx;
		color: #fff;
		height: 50upx;
		line-height: 50upx;
		border-radius: 50upx;
		padding: 0 20upx;
		background: rgba(0, 0, 0, 0.5);

	}

	.hotel-pic em i {
		font-size: 24upx;
		vertical-align: -1upx;
		margin-right: 10upx;
	}

	.hotel-info {
		display: block;
		background: #fff;
	}

	.hotel-relevant-info {
		display: block;
		padding: 0 20upx;
	}

	.hotel-name {
		display: block;
		padding: 20upx 0 0 0;
		font-size: 32upx;
	}

	.hotel-name text {
		font-size: 26upx;
		color: #999;
		vertical-align: bottom;
		margin-left: 20upx;
	}

	.hotel-address {
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #f2f2f2;
		overflow: hidden;
		padding-bottom: 20upx;
		align-items: center;
	}

	.hotel-address-l {
		flex: 1;
	}

	.hotel-address-l p {
		font-size: 26upx;
		color: #666;
		line-height: 36upx;
	}

	.hotel-address-l p:last-child {
		font-size: 24upx;
		color: #999;
		margin-top: 10upx;
	}

	.hotel-address-r {
		float: right;
		width: 200upx;
		height: 90upx;
		line-height: 90upx;
		text-align: right;
		color: #0086F6;
		font-size: 24upx;
	}

	.hotel-address-r i {
		font-size: 24upx;
		margin-left: 6upx;
	}

	.info-list {
		display: flex;
		height: 90upx;
		border-bottom: 1upx solid #f2f2f2;
		overflow: hidden;
	}

	.info-list-l {
		flex: 1;
		height: 90upx;
		line-height: 90upx;
	}

	.info-list-r {
		float: right;
		width: 200upx;
		height: 90upx;
		line-height: 90upx;
		text-align: right;
		color: #0086F6;
		font-size: 24upx;
	}

	.info-list-r i {
		font-size: 24upx;
		margin-left: 6upx;
	}

	.datelist {
		display: flex;
		height: 90upx;
		overflow: hidden;
		padding: 0 20upx 0 20upx;
		border-top: 20upx solid #f5f6f7;
	}

	.datelist-l {
		flex: 1;
		height: 90upx;
		line-height: 90upx;
	}

	.datelist-l text {
		color: #999;
		margin: 0 10upx;
	}

	.datelist-r {
		float: right;
		width: 200upx;
		height: 90upx;
		line-height: 90upx;
		text-align: right;
		color: #0086F6;
		font-size: 24upx;
	}

	.datelist-r i {
		font-size: 24upx;
		margin-left: 6upx;
	}

	.details-keyword {
		width: 100%;
		height: 100upx;
		overflow-x: auto;
	}

	.details-keyword-list {
		width: 125%;
	}

	.details-keyword-list text {
		display: inline-block;
		height: 50upx;
		line-height: 50upx;
		background: #f2f2f2;
		margin-left: 20upx;
		border-radius: 50upx;
		padding: 0 20upx;

		color: #666;
		font-size: 24upx;
	}

	.date-top {
		top: 80upx;
	}

	.room-list {
		display: block;
		background: #fff;
	}

	.room-list-info {
		display: flex;
		overflow: hidden;
		padding: 20upx 0;
		border-bottom: 1upx solid #f2f2f2;
	}

	.room-list-l {
		float: left;
		width: 180upx;
		height: 180upx;
		margin: 0 20upx;
	}

	.room-list-l image {
		width: 180upx;
		height: 180upx;
		border-radius: 10upx;
	}

	.room-list-r {

		flex: 1;
	}

	.room-info {
		float: left;
	}

	.room-info p {
		display: block;
		font-size: 26upx;
		color: #666;
	}

	.room-info p.title {
		font-size: 34upx;
		color: #333;
	}

	.room-info p em {
		font-size: 20upx;
		margin-right: 10upx;
		padding: 4upx 6upx 0 6upx;
		line-height: 30upx;
		border-radius: 6upx;
	}

	.room-info p:last-child {
		margin-top: 10upx;
	}

	.room-pirce {
		font-size: 24upx;
		color: #999;
		text-align: right;
		float: right;
		margin-top: 36upx;
		margin-right: 20upx;
		display: flex;
		align-items: center;
	}

	.room-pirce em {
		font-size: 44upx;
		color: #f60;
		font-weight: bold;
		margin-right: 6upx;
	}

	.room-pirce em text {
		font-size: 30upx;
		font-weight: normal;
	}

	.room-pirce i {
		font-size: 24upx;
		margin-left: 6upx;
	}

	.list-price-box {
		display: block;
		background: #f8f8f8;
	}

	.list-price {
		display: flex;
		border-bottom: 1upx solid #eee;
		padding: 20upx 0;
	}

	.list-price-l {
		flex: 1;
		padding-left: 20upx;
	}

	.list-price-l view {
		font-size: 26upx;
		color: #404040;
	}

	.list-price-l view.title {
		font-weight: bold;
	}

	.list-price-l view text {
		margin-right: 20upx;
	}

	.list-price-l view em {
		border-radius: 10upx;
		font-size: 24upx;
		line-height: 30upx;
		padding: 0 10upx;
		margin-right: 20upx;
	}


	.list-price-r {
		float: right;
		width: 240upx;
		display: flex;
		align-items: center;
	}

	.list-price-r view {
		display: inline-block;
	}

	.list-price-r view.price {
		color: #f60;
		font-size: 44upx;
		font-weight: bold;
		width: 120upx;
	}

	.list-price-r view.price text {
		font-weight: normal;
		font-size: 28upx;
	}

	.list-price-r view.booking {
		text-align: center;
		width: 100upx;
		color: #fff;
		background: linear-gradient(to right, #FDD100, #FF6600);
		border-radius: 10upx;
		font-size: 32upx;
		height: 103upx;
		position: relative;
	}

	.list-price-r view.booking text {
		position: absolute;
		left: 1%;
		font-size: 24upx;
		background: #fff;
		color: #f60;
		border-bottom-left-radius: 10upx;
		border-bottom-right-radius: 10upx;
		bottom: 2upx;
		width: 98%;
	}

	.list-price-r view.topay {
		background: linear-gradient(to right, #Ff2200, #FF6600);
	}

	.list-price-r view.topay text {
		color: #Ff2200;
	}

	.list-price-r view.gray {
		background: #ccc;
	}

	.list-price-r view.gray text {
		color: #ccc;
	}

	.installation {
		display: flex;
		padding: 16upx 0;
		border-bottom: 1upx solid #f2f2f2;
	}

	.installation .info-list-l {
		flex: 1;
		line-height: 32upx;
	}

	.installation .info-list-l view {
		display: inline-block;
		font-size: 24upx;
		margin-right: 20upx;
	}

	.installation .info-list-l view.dateails {
		font-size: 26upx;
		color: #505050;
	}

	.installation .info-list-l view.facilities em {
		display: inline-block;
		font-size: 20upx;
		color: #999;
		margin-right: 20upx;
	}

	.installation .info-list-l view.facilities em i {
		font-size: 20upx;
		margin-right: 6upx;
	}

	.installation .info-list-l em i.icon-huiyi {
		font-size: 30upx;
	}

	.installation .info-list-l em i.icon-_huabanfuben {
		font-size: 42upx;
	}

	.comments {
		font-size: 26upx;
		color: #666;
	}

	.comments strong {
		font-size: 40upx;
		line-height: 100%;
		margin: 0 10upx;
		color: #0086F6;
	}
</style>
