<template>
	<view>
		<view class="introduction-type">
			<view class="active"><text>酒店设施</text></view>
			<view><text>酒店简介</text></view>
			<view><text>交通地图</text></view>
			<view><text>酒店政策</text></view>
		</view>

		<view class="introduction-box">

			<!--设施-->
			<view class="introduction-content">
				<view class="introduction-menu">酒店设施</view>
				<view class="facilities-content">
					<!--列表-->
					<view class="facilities-list">
						<h5><i class=""></i>停车场</h5>
						<view> 有停车场 </view>
						<view>酒店提供停车场（额外收费）。</view>
					</view>
					<view class="facilities-list">
						<h5><i class=""></i>网络</h5>
						<view>公用区wifi免费 </view>
					</view>

					<view class="facilities-list">
						<h5><i class=""></i>前台服务</h5>
						<view>行李寄存 </view>
						<view>部分时段大堂经理 </view>
						<view>叫车服务 </view>
						<view>叫醒服务 </view>
					</view>

					<view class="facilities-list">
						<h5><i class=""></i>餐饮服务</h5>
						<view>餐厅 </view>
					</view>

					<view class="facilities-list">
						<h5><i class=""></i>商务服务</h5>
						<view>传真/复印免费 </view>
					</view>

					<!--列表结束-->
				</view>

			</view>
			<!--设施结束-->

			<!--酒店简介-->
			<view class="introduction-content">
				<view class="introduction-menu">酒店简介</view>
				<view class="hotel-profile"> 2020年开业 17间房 联系方式
					住宿预订提供方苏州轻枫印象酒店，位于凤凰街北，近靠平江路、观前街可步行至拙政园狮子林。酒店装修时尚高雅，设施齐全，环境舒适。让您在游玩平江古街，苏州园林，还是逛吃美食，都可以享受一流入住体验。</view>
			</view>
			<!--酒店简介结束-->

			<!--交通地图-->
			<view class="introduction-content">
				<view class="introduction-menu">交通信息</view>
				<view class="traffic">在地图上查看<i class="iconfont icon-jiantou"></i></view>
			</view>
			<!--交通地图结束-->


			<!--酒店政策-->
			<view class="introduction-content">
				<view class="introduction-menu">酒店政策</view>
				<view class="hotel-policy">

					<view class="hotel-policy-content">
						<view class="hotel-policy-l">入住时间</view>
						<view class="hotel-policy-r">入住时间：14:00以后，离店时间：12:00以前</view>
					</view>

					<view class="hotel-policy-content">
						<view class="hotel-policy-l">取消政策</view>
						<view class="hotel-policy-r">不同类型的客房附带不同的取消预订和预先付费政策，选择上述客房时，请参阅“客房政策”</view>
					</view>

					<view class="hotel-policy-content">
						<view class="hotel-policy-l">信用卡</view>
						<view class="hotel-policy-r">不同类型的客房附带不同的取消预订和预先付费政策，选择上述客房时，请参阅“客房政策”</view>
					</view>

					<view class="hotel-policy-content">
						<view class="hotel-policy-l">宠物政策</view>
						<view class="hotel-policy-r">允许携带宠物，不收取额外费用</view>
					</view>
					<view class="hotel-policy-content">
						<view class="hotel-policy-l">特殊要求</view>
						<view class="hotel-policy-r">不同类型的客房附带不同的取消预订和预先付费政策，选择上述客房时，请参阅“客房政策”</view>
					</view>

					<view class="hotel-policy-content">
						<view class="hotel-policy-l">儿童政策</view>
						<view class="hotel-policy-r">不接受18岁以下客人单独入住</view>
					</view>
				</view>
			</view>
			<!--酒店政策结束-->
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
	page {
		background: #f5f6f7;
	}

	.introduction-type {
		position: fixed;
		top: 0upx;
		left: 0;
		width: 100%;
		height: 90upx;
		z-index: 1;
		background: #fff;
		box-shadow: 0 1upx 10upx #ccc;
	}

	.introduction-type view {
		display: inline-block;
		width: 25%;
		text-align: center;
	}

	.introduction-type view text {
		height: 90upx;
		line-height: 90upx;
	}

	.introduction-type view.active text {
		color: #0086F6;
		border-bottom: 4upx solid #0086F6;
		height: 86upx;
	}

	.introduction-box {
		display: block;
		margin-top: 20upx;
	}

	.introduction-content {
		display: block;
		background: #fff;
		margin-bottom: 20upx;
	}

	.introduction-menu {
		width: 96%;
		margin: 0px auto;
		font-weight: bold;
		color: #333;
		padding-top: 30upx;
		font-size: 32upx;
	}

	.facilities-content {
		width: 96%;
		margin: 0px auto;
		padding: 20upx 0;
	}

	.facilities-list {
		display: block;
		overflow: hidden;
		margin-bottom: 20upx;
	}

	.facilities-list h5 {
		display: block;
		font-size: 32upx;
		font-weight: normal;
	}

	.facilities-list view {
		float: left;
		width: 50%;
		font-size: 24upx;
		color: #999;
	}

	.facilities-list view p {
		display: flex;
	}

	.hotel-profile {
		width: 96%;
		margin: 0px auto;
		padding: 20upx 0;
		font-size: 26upx;
		color: #505050;
		line-height: 40upx;
		overflow: hidden;
	}

	.hotel-profile image {
		width: 100%;
	}

	.traffic {
		width: 96%;
		margin: 0px auto;
		height: 80upx;
		line-height: 80upx;
		position: relative;

	}

	.traffic i {
		position: absolute;
		right: 0;
		top: 0;
	}

	.hotel-policy {
		width: 96%;
		margin: 0px auto;
	}

	.hotel-policy-content {
		display: flex;
		border-bottom: 1upx solid #eee;
		overflow: hidden;
		padding: 20upx 0;
		color: #666;
	}

	.hotel-policy-content:last-child {
		border-bottom: none;
	}

	.hotel-policy-l {
		float: left;
		width: 160upx;
		font-size: 26upx;

	}

	.hotel-policy-r {
		flex: 1;
		line-height: 40upx;
		font-size: 26upx;

	}
</style>
