<template>
	<view>
		<!--酒店信息-->
		<view class="hotel-info">
			<em>房型详情</em>
			<view class="hotel-name">苏州轻枫印象酒店</view>
			<view class="hotel-sub-name">豪华大床房</view>
			<view class="hotel-date">04月16日-04月17日<text>共1晚</text></view>
			<view class="hotel-installation"><text>大床</text><text>双早</text><text>限时取消</text></view>
		</view>
		<!--酒店信息结束-->

		<!--入住人-->
		<view class="check-in-box">
			<view class="room-number">
				<view>房间数</view>
				<view>2间<i class="iconfont icon-arrow_b"></i></view>
			</view>

			<view class="check-in-people">
				<view class="check-in-title">住客姓名</view>
				<view class="check-in-list">
					<p><input type="text" placeholder="姓名,每间只需填写1人"></p>
					<p><input type="text" placeholder="姓名,每间只需填写1人"></p>
				</view>
				<view class="check-in-set"><i class="iconfont icon-yonghu"></i></view>
			</view>

			<view class="phone-time">
				<text>联系手机</text>
				<input type="number" value="13897689989" placeholder="用于接收短信通知" />
			</view>
			<view class="phone-time">
				<text>预订到店</text>14:00
				<i class="iconfont icon-arrow_b"></i>
			</view>
		</view>
		<!--入住人结束-->

		<!--发票-->
		<view class="invoice">
			<!--前台索取-->
			<view class="invoice-hotel" style="display: none;">
				<view>发票</view>
				<view>如需发票，可向酒店索取</view>
			</view>
			<!--前台索取结束-->

			<view class="invoice-hotel">
				<view>需要发票</view>
				<view>
					<switch name="switch" />
				</view>
			</view>

			<!--填写-->

			<view class="invoice-info" style="display: none;">
				<view class="invoice-info-list">
					<view class="invoice-info-l">发票类型</view>
					<view class="invoice-info-r invoice-type"><label class="radio">
							<radio value="r1" checked="true" />电子发票</label>
						<label class="radio">
							<radio value="r2" />纸质发票</label></view>
				</view>

				<view class="invoice-info-list">
					<view class="invoice-info-l">发票内容</view>
					<view class="invoice-info-r">酒店住宿费</view>
				</view>

				<view class="invoice-info-list">
					<view class="invoice-info-l">抬头类型</view>
					<view class="invoice-info-r rise"><text class="active">公司</text><text>个人</text><text>机关单位</text></view>
				</view>

				<view class="invoice-info-list">
					<view class="invoice-info-l">抬头名称</view>
					<view class="invoice-info-r"><input type="text" placeholder="输入抬头全称"></view>
				</view>

				<!--公司-->
				<view class="invoice-info-list">
					<view class="invoice-info-l">纳税编号</view>
					<view class="invoice-info-r"><input type="text" placeholder="公司统一纳税人编号"></view>
				</view>
				<!--公司结束-->

				<!--机关单位-->
				<view class="invoice-info-list" style="display: none;">
					<view class="invoice-info-l">税号</view>
					<view class="invoice-info-r"><input type="text" placeholder="如有税号,请务必填写"></view>
				</view>
				<!--机关单位结束-->

				<view class="invoice-info-list">
					<view class="invoice-info-l">手机号码</view>
					<view class="invoice-info-r"><input type="number" placeholder="请输入收票人手机号码"></view>
				</view>

				<!--电子发票-->
				<view class="invoice-info-list">
					<view class="invoice-info-l">邮箱地址</view>
					<view class="invoice-info-r"><input type="text" placeholder="发票开具后自动发送"></view>
				</view>
				<!--电子发票结束-->

				<!--纸质发票-->
				<view class="paper-invoice" style="display: none;">
					<view class="invoice-info-list">
						<view class="invoice-info-l">姓名</view>
						<view class="invoice-info-r"><input type="text" placeholder="收票人姓名"></view>
					</view>
					<view class="invoice-info-list">
						<view class="invoice-info-l">地址</view>
						<view class="invoice-info-r"><input type="text" placeholder="收票人详细地址"></view>
					</view>
					<view class="invoice-info-list">
						<view class="invoice-info-l">快递费</view>
						<view class="invoice-info-r express">¥10(普通快速)</view>
					</view>
				</view>
				<!--纸质发票结束-->

				<!--备注-->
				<view class="invoice-remarks">
					<h5>发票备注</h5>
					<view class="remarks">
						<view class="left">
							<p>酒店名称：苏州轻枫印象酒店</p>
							<p>入住时间：04-25<text>离店时间：04-26</text></p>
							<p>房间数量：1间</p>
						</view>
						<view class="right"><label class="radio">
								<radio value="r1" checked="true" /></label></view>
					</view>
				</view>
				<!--备注结束-->
			</view>

			<!--填写结束-->

		</view>
		<!--发票结束-->

		<!--房型详情-->
		<view class="mask-bg mask-top-floor" style="display: none;">
			<view class="mask-content">
				<view class="mask-title">房型详情<em><i class="iconfont icon-guanbi"></i></em></view>
				<view class="hotel-profile">
					<view class="profile-pic">
						<image src="https://dimg10.c-ctrip.com/images/200k1f000001g0z1rB5B2_R_300_225.jpg"></image>
					</view>
					<view class="hotel-introduction">
						<P>豪华大床房</P>
						<text>面积：23m²</text>
						<text>楼层：3层</text>
						<text>床型：大床1.6米</text>
						<text>可住：2人</text>
						<text>早餐：双早</text>
						<text>不可加床</text>
						<text>是否有窗：有窗</text>
					</view>

					<view class="hotel-facilities">
						<p>设施服务</p>
						<view><i class="iconfont icon-WIFIwofi"></i>wifi</view>
						<view><i class="iconfont icon-_huabanfuben"></i>停车场</view>
						<view><i class="iconfont icon-canting"></i>餐厅</view>
						<view><i class="iconfont icon-jiaoxingfuwu"></i>叫醒服务</view>
						<view><i class="iconfont icon-kuandai"></i>有线宽带</view>
						<view><i class="iconfont icon-xiyi"></i>洗衣机</view>
						<view><i class="iconfont icon-youyongchi"></i>游泳池</view>
						<view><i class="iconfont icon-jiesong"></i>接送服务</view>
					</view>

					<view class="hotel-cancel">
						<p>退订规则 限时取消</p>
						<p class="hotel-cancel-content">限时取消：在(2020-04-19点前)可免费取消，预期扣出部分或全额费用</p>
					</view>
				</view>
			</view>
		</view>
		<!--房型详情结束-->

		<!--价格明细-->
		<view class="mask-bg" style="display: none;">
			<view class="mask-content hotel-bottom">
				<view class="mask-title">价格明细<em><i class="iconfont icon-guanbi"></i></em></view>
				<view class="hotel-detailed">
					<p>香格里拉大酒店</p>
					<p class="check-in">04-16至04-19<text>共3晚</text></p>
					<view class="detailed-list">
						<view>豪华大床房</view>
						<view>¥158x2间</view>
					</view>
					<view class="detailed-list">
						<view>服务费</view>
						<view>¥1x2间</view>
					</view>
					<view class="detailed-list">
						<view>发票</view>
						<view>¥10</view>
					</view>
				</view>
			</view>
		</view>
		<!--价格明细结束-->

		<!--底部-->
		<view class="booking-footer">
			<view>订单总额 <text>¥1890</text> <em>明细<i class="iconfont icon-arrow_b"></i></em></view>
			<button type="primary" hover-class="none">去付款</button>
		</view>
	</view>
	<!--底部结束-->
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

	.hotel-info {
		display: block;
		background: #fff;
		position: relative;
		padding: 20upx;
	}

	.hotel-info em {
		position: absolute;
		top: 10upx;
		right: 20upx;
		font-size: 26upx;
		color: #0086F6;
		padding: 10upx 0;
	}

	.hotel-name {
		display: block;
		font-size: 32upx;
		font-weight: bold;
	}

	.hotel-sub-name {
		display: block;
		font-size: 26upx;
	}

	.hotel-date {
		display: block;
		font-size: 32upx;
	}

	.hotel-date text {
		color: #0086F6;
		margin-left: 20upx;
	}

	.hotel-installation {
		display: block;
	}

	.hotel-installation text {
		display: inline-block;
		border-right: 1upx solid #e6e6e6;
		padding-right: 20upx;
		font-size: 26upx;
		color: #666;
		line-height: 26upx;
		margin-right: 20upx;
	}

	.hotel-installation text:last-child {
		border-right: none;
	}

	.check-in-box {
		display: block;
		background: #fff;
		margin-top: 20upx;
	}

	.check-in-people {
		display: flex;
		border-bottom: 1upx solid #eee;
		align-items: center;
	}

	.check-in-title {
		width: 180upx;
		font-size: 26upx;
		color: #666;
		text-align: center;
	}

	.check-in-list {
		flex: 1;
	}

	.check-in-list input {
		border-bottom: 1upx solid #f2f2f2;
		border-right: 1upx solid #f2f2f2;
		height: 90upx;
		line-height: 90upx;
		font-size: 28upx;
	}

	.check-in-list p:last-child input {
		border-bottom: none;
	}

	.check-in-set {
		width: 80upx;
		text-align: center;
		color: #0086F6;
	}

	.room-number {
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #f2f2f2;
		padding: 0 20upx;
	}

	.room-number view {
		height: 80upx;
		line-height: 80upx;
		font-size: 28upx;
	}

	.room-number view:last-child {
		color: #0086F6;
	}

	.room-number view:last-child i {
		font-size: 26upx;
		margin-left: 4upx;
	}

	.phone-time {
		display: flex;
		height: 90upx;
		line-height: 90upx;
		padding: 0 20upx;
		position: relative;
	}

	.phone-time text {
		float: left;
		width: 200upx;
		color: #505050;
	}

	.phone-time i {
		position: absolute;
		right: 20upx;
		color: #999;
		font-size: 26upx;
		top: 4upx;
	}

	.phone-time input {
		flex: 1;
		height: 80upx;
		line-height: 80upx;
	}

	.phone-time:last-child {
		border-top: 1upx solid #eee;
	}

	.hotel-profile {
		width: 94%;
		margin: 0px auto;
		height: 800upx;
		overflow-y: auto;
	}

	.profile-pic {
		display: block;
		margin-top: 26upx;
	}

	.profile-pic image {
		width: 100%;
		height: 300upx;
		border-radius: 10upx;
	}

	.hotel-introduction {
		display: block;
		padding-bottom: 20upx;
	}

	.hotel-introduction p {
		display: block;
		font-weight: bold;
	}

	.hotel-introduction text {
		display: inline-block;
		width: 50%;
		font-size: 26upx;
		color: #666;
	}

	.hotel-facilities {
		display: block;
		border-top: 1upx solid #f2f2f2;
		border-bottom: 1upx solid #f2f2f2;
		padding: 20upx 0;
	}

	.hotel-facilities view {
		display: inline-block;
		width: 50%;
		font-size: 26upx;
		color: #666;
	}

	.hotel-facilities view i {
		color: #0086F6;
		vertical-align: middle;
		margin-right: 10upx;
	}

	.hotel-cancel {
		display: block;
		padding: 20upx 0;
	}

	.hotel-cancel p {
		display: block;
		margin: 10upx 0;
	}

	.hotel-cancel p.hotel-cancel-content {
		font-size: 26upx;
		color: #666;
		line-height: 36upx;
	}

	.invoice {
		background: #fff;
		margin-top: 20upx;
		margin-bottom: 120upx;
	}

	.invoice-hotel {
		display: flex;
		justify-content: space-between;

		padding: 0 20upx;
	}

	.invoice-hotel view {
		height: 90upx;
		line-height: 90upx;
	}

	.invoice-hotel view:first-child {
		color: #505050;
	}

	.invoice-info {
		display: block;
	}

	.invoice-info-list {
		display: flex;
		overflow: hidden;
		border-top: 1upx solid #f2f2f2;
		padding: 0 20upx;
	}

	.invoice-info-l {
		float: left;
		width: 200upx;
		height: 90upx;
		line-height: 90upx;
	}

	.invoice-info-r {
		flex: 1;
		height: 90upx;
		line-height: 90upx;
	}

	.invoice-info-r input {
		height: 90upx;
		line-height: 90upx;
		font-size: 28upx;
	}

	.invoice-type label {
		margin-right: 40upx;
		line-height: 90upx;
	}


	.invoice-type label radio {
		vertical-align: 1upx;
	}

	.rise text {
		border: 1upx solid #ccc;
		margin-right: 20upx;
		height: 60upx;
		line-height: 60upx;
		padding: 0 20upx;
		font-size: 26upx;
	}

	.rise text.active {
		color: #0086F6;
		border: 1upx solid #0086F6;
	}

	.express {
		color: #f60;
	}

	.invoice-remarks {
		display: block;
		border-top: 1upx solid #f2f2f2;
	}

	.invoice-remarks h5 {
		padding: 20upx 0 0 20upx;
		color: #666;
		font-weight: normal;
		font-size: 28upx;
	}

	.remarks {
		display: flex;
		overflow: hidden;
		padding: 10upx 20upx 30upx 20upx;
		align-items: center;
	}

	.remarks .left {
		flex: 1;
	}

	.remarks .left p {
		font-size: 24upx;
		color: #999;
	}

	.remarks .left p text {
		margin-left: 20upx;
	}

	.remarks .right {
		float: right;
		width: 100upx;
		text-align: center;
	}

	.paper-invoice {
		display: block;
	}
</style>
