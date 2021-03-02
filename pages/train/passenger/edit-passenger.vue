<template>
	<view>
		<view class="passenger-box">
			<view class="passenger-content">

				<!--学生票提示-->
				<view class="tips" style="display: none;">
					请确保乘车区段与学生证上的优惠区间保持一致，否则无法取票，目前仅支持大学生购买线上学生票
				</view>
				<!--学生票提示结束-->

				<view class="passengers-add">
					<view class="add-title">乘客类型</view>
					<view class="add-r passengers-type">
						<label class="radio">
							<radio value="r1" checked="true" />成人票</label>
						<label class="radio">
							<radio value="r2" />学生票</label>
						<label class="radio">
							<radio value="r3" />儿童票</label>
					</view>
				</view>

				<view class="passengers-add">
					<view class="add-title">姓名</view>
					<view class="add-r"><input type="text" placeholder="与乘客姓名证件一致"></view>
				</view>

				<!--外国人永久居留身份证-->
				<view class="passengers-add" style="display: none;">
					<view class="add-title">姓(英文)</view>
					<view class="add-r"><input type="text" placeholder="如:Zhang"></view>
				</view>
				<view class="passengers-add" style="display: none;">
					<view class="add-title">名(英文)</view>
					<view class="add-r"><input type="text" placeholder="如:San"></view>
				</view>
				<!--外国人永久居留身份证结束-->

				<view class="passengers-add">
					<view class="add-title">证件类型</view>
					<view class="add-r certificate">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view>{{array[index]}}</view>
						</picker>
						<i class="iconfont icon-jiantou"></i>
					</view>
				</view>
				<view class="passengers-add">
					<view class="add-title">证件号码</view>
					<view class="add-r"><input type="text" placeholder="与乘客证件号码一致"></view>
				</view>

				<view class="passengers-add" style="display: none;">
					<view class="add-title">出生日期</view>
					<view class="add-r"><input type="text" placeholder="与乘客证件号码一致"></view>
				</view>

				<view class="passengers-add" style="display: none;">
					<view class="add-title">有效期限</view>
					<view class="add-r"><input type="text" placeholder="与乘客证件号码一致"></view>
				</view>

				<view class="passengers-add">
					<view class="add-title">手机号码</view>
					<view class="add-r"><input type="text" placeholder="请输入手机号码"></view>
				</view>

				<view class="passengers-add" style="display: none;">
					<view class="add-title">电子邮箱</view>
					<view class="add-r"><input type="text" placeholder="请输入电子邮箱"></view>
				</view>

				<view class="determine"><button>确定</button></view>
				<view class="del-passenger"><i class="iconfont icon-shanchu"></i>删除乘客</view>

			</view>

			<!--学生票-->
			<view class="explain" style="display:none;">
				<h5>学生票购票说明</h5>
				<p>乘车时间为每年6月1日-9月30日，12月1日-3月31日，其他时间需购买成人票</p>
				<p>仅支持购买硬座/硬卧/二等座/无座,其他坐席需购买成人票</p>
				<p>学生优惠每年可用4次，超出4次或乘车区段不在优惠区间将无法取票</p>
				<p>取票时，需携带本人学生证</p>
			</view>
			<!--学生票结束-->

			<!--儿童票-->
			<view class="explain" style="display:none;">
				<p>没有儿童证件？<br>儿童可通过如下方法使用同行人证件购票，免填儿童证件：<text>在订单填写页-添加儿童(用成人证件添加儿童)</text></p>
				<h5>儿童购票说明</h5>
				<p>身高 大于 1.5米，购买全价成人票</p>
				<p>身高1.2m-1.5m成人票半价</p>
				<p>身高 小于 1.2米,不需要购票,每位成人能免费携带1名</p> <p>儿童票需使用同行成人证件购票、取票</p>
				<p>请根据儿童实际身高购票，若儿童身高超过标准，将无法正常进站</p>
			</view>
			<!--儿童票结束-->

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'picker',
				array: ['二代身份证', '护照', '回乡证', '台胞证', '外国人永久居留身份证', '港澳台居民居住证'],
				index: 0
			}
		},
		methods: {

		}
	}
</script>

<style>
	.passenger-box {
		display: block;
		background: linear-gradient(#0086F6 1%, #f5f6f7 50%);
	}

	.passenger-content {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		border-radius: 10upx;
		overflow: hidden;
	}

	.passengers-add {
		width: 94%;
		margin: 0px auto;
		border-bottom: 1upx solid #f2f2f2;
		height: 100upx;
		line-height: 100upx;
		display: flex;
	}

	.add-title {
		height: 100upx;
		line-height: 100upx;
		width: 150upx;
		color: #666;
	}

	.add-r {
		float: left;
		flex: 1;
	}

	.add-r input {
		height: 100upx;
		line-height: 100upx;
		font-size: 28upx;
	}

	.certificate {
		position: relative;
		font-size: 28upx;
		color: #0086F6;
	}

	.certificate view {
		line-height: 100upx;
	}

	.certificate i {
		position: absolute;
		right: 0;
		font-size: 24upx;
		color: #999;
		top: 28upx;
	}

	.tips {
		font-size: 20upx;
		width: 94%;
		margin: 0px auto;
		padding: 10upx;
		color: #f60;
		background: #FFF4EA;
		border-radius: 10upx;
		margin-top: 20upx;
		line-height: 28upx;
	}

	.passengers-type label {
		display: inline-block;
		margin-right: 20upx;
		line-height: 100upx;
	}

	.determine {
		width: 94%;
		margin: 0px auto;
		padding: 40upx 0;
	}

	.explain {
		width: 96%;
		margin: 0px auto;
		padding: 40upx 0;
		color: #999;
	}

	.explain p {
		display: block;
		font-size: 24upx;
		margin-bottom: 20upx;
		line-height: 36upx;
	}

	.explain p:first-child {
		color: #0086F6;
	}

	.explain p:first-child text {
		color: #f60;
		font-weight: bold;
	}
	.del-passenger{
		display: block;
		text-align: center;
		color: #999;
		 height: 60upx;
		 line-height: 60upx;
	}
	.del-passenger i{
		vertical-align: -3upx;
		margin-right: 6upx;
	}
</style>
