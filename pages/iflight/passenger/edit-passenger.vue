<template>
	<view>
		<view class="editpassenger-box">
			<view class="passenger-content">
				<view class="remind"><text>提醒:</text>姓名需与乘机证件一致，否则会影响登机 <em>填写说明<i class="iconfont icon-jiantou"></i></em></view>

				<view class="passenger-list">
					<view class="left">姓(拼音)</view>
					<view class="right">
						<input type="text" placeholder="如:Zhang" />
					</view>
				</view>
				<view class="passenger-list">
					<view class="left">名(拼音)</view>
					<view class="right">
						<input type="text" placeholder="如:San" />
					</view>
				</view>

				<view class="passenger-list">
					<view class="left">证件类型</view>
					<view class="right certificate">
						<picker @change="bindPickerChange" :value="index" :range="array">
							<view>{{array[index]}}</view>
						</picker>
						<i class="iconfont icon-jiantou"></i>
					</view>
				</view>

				<view class="passenger-list">
					<view class="left">证件号码</view>
					<view class="right">
						<input type="number" placeholder="证件号与证件保持一致" />
					</view>
				</view>

				<view class="passenger-list">
					<view class="left">有效期</view>
					<view class="right">
						<i class="iconfont icon-jiantou"></i>
					</view>
				</view>

				<view class="passenger-list">
					<view class="left">出生日期</view>
					<view class="right">
						<i class="iconfont icon-jiantou"></i>
					</view>
				</view>
				<view class="passenger-list">
					<view class="left">性别</view>
					<view class="right">
						<i class="iconfont icon-jiantou"></i>
					</view>
				</view>

				<view class="passenger-list">
					<view class="left">国籍</view>
					<view class="right">
						<i class="iconfont icon-jiantou"></i>
					</view>
				</view>
				<view class="passenger-list">
					<view class="left">手机号码</view>
					<view class="right">
						<input type="number" placeholder="用于接收航变信息" />
					</view>
				</view>

			</view>
		</view>

		<view class="explain-del">
			<view>儿童婴儿购票说明<i class="iconfont icon-jiantou"></i></view>
			<view><i class="iconfont icon-shanchu"></i>删除乘机人</view>
		</view>

		<!--填写说明-->
		<view class="passenger-bg" style="display: none;">
			<view class="fill-explain">
				<view class="fill-title">填写说明<em><i class="iconfont icon-guanbi"></i></em></view>
				<view class="fill-content">
					<view>一、乘客姓名需与登机所持证件上的名字一致。</view>
					<view>二、中文姓名</view>
					<p>请在中文姓名模式下输入。</p>
					<p>若持护照登机，必须确认护照上有中文姓名。</p>
					<p>生僻字可用拼音代替，例如：“王鬳军”可输入为“王yanjun”。</p>
					<p>姓名中含特殊符号“·”“_”等，可不用输入，例如：“汉祖然·买卖提”可输入为“汉祖然买卖提”。</p>
					<p>香港、台湾、澳门的护照不支持预订内地航班，请改用其他证件。</p>
					<view>三、英文姓名</view>
					<p>请在英文姓名模式下输入。</p>
					<p>若持护照登机，必须按照护照顺序区分姓与名。Middlename 填写在Given name（名）中，不区分大小写。如potter（姓）/joe jerad，在Surname（姓）中填写potter，在Given
						name（名）中输入joe jerad。</p>
					<p>姓与名总长度≤26个字符，若过长请使用缩写。</p>
				</view>
			</view>
		</view>
		<!--填写说明结束-->

		<!--儿童婴儿购票说明-->
		<view class="passenger-bg" style="display: none;">
			<view class="ticket-notice">
				<view class="notice-title">儿童婴儿购票说明<em><i class="iconfont icon-guanbi"></i></em></view>
				<view class="notice-content">
					<view class="notice-list">
						<view class="titles"><i class="iconfont icon-ertong"></i>儿童票</view>
						<view class="notice-tab">
							<view class="notice-tab-list">
								<view class="title">年龄规定</view>
								<view class="content">2周岁(含) - 12周岁(不含)</view>
							</view>
							<view class="notice-tab-list">
								<view class="title">票价</view>
								<view class="content">
									成人普通票价的50%<br>免机场管理建设费，燃油费为成人的50%
								</view>
							</view>

							<view class="notice-tab-list">
								<view class="title">证件</view>
								<view class="content">身份证、护照、户口簿</view>
							</view>

							<view class="notice-tab-list">
								<view class="title">注意事项</view>
								<view class="content">每位成人旅客(满18周岁)最多携带2名儿童<br>儿童旅客必须有同舱位成人(满18周岁)陪伴乘机，无成人陪伴儿童请提前联系航空公司进行预订</view>
							</view>

						</view>
					</view>

					<view class="notice-list">
						<view class="titles"><i class="iconfont icon-quanmianshidai-"></i>婴儿票</view>
						<view class="notice-tab">
							<view class="notice-tab-list">
								<view class="title">年龄规定</view>
								<view class="content">14天(含) - 2周岁(不含)</view>
							</view>
							<view class="notice-tab-list">
								<view class="title">票价</view>
								<view class="content">
									成人普通票价的10%<br>免机场管理建设费，燃油费
								</view>
							</view>

							<view class="notice-tab-list">
								<view class="title">证件</view>
								<view class="content">身份证、护照、户口簿、出生证明</view>
							</view>

							<view class="notice-tab-list">
								<view class="title">注意事项</view>
								<view class="content">每位成人旅客最多携带1名婴儿<br>婴儿票不提供座位，如需单独占用座位，可为婴儿买儿童票</view>
							</view>

						</view>
					</view>

					<view class="notice-list">
						<view class="titles"><i class="iconfont icon-wenti"></i>常见问题</view>
						<view class="faq">
							不满14天的新生儿能乘机吗？<br>新生婴儿抵抗力差，呼吸功能不完善，飞机起飞、降落时气压变化大，易对其造成伤害。因此，航空公司规定出生不足14天的新手婴儿和出生不足90天的早产婴儿不能乘机出行。若仍需携带新手婴儿乘机，请联系航空公司。
						</view>
					</view>

				</view>
			</view>
		</view>
		<!--儿童婴儿购票说明结束-->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'picker',
				array: ['护照', '回乡证', '台胞证', '外国人永久居留身份证', '港澳台居民居住证'],
				index: 0
			}
		},
		methods: {

		}
	}
</script>

<style>
	.editpassenger-box {
		display: block;
		background: linear-gradient(#0086F6 1%, #f5f6f7 50%);
	}

	.passenger-content {
		width: 96%;
		margin: 0px auto;
		background: #fff;
		border-radius: 10upx;
		overflow: hidden;
		padding-bottom: 0upx;
	}

	.remind {
		display: block;
		height: 60upx;
		line-height: 60upx;
		background: #FFEFDF;
		font-size: 22upx;
		position: relative;
	}

	.remind text {
		color: #f60;
		margin-left: 20upx;
	}

	.remind em {
		position: absolute;
		right: 20upx;
		height: 60upx;
		line-height: 60upx;
		color: #0086F6;
	}

	.remind em i {
		font-size: 20upx;
	}

	.passenger-list {
		display: flex;
		width: 96%;
		margin: 0px auto;
		border-bottom: 1upx solid #eee;
	}

	.passenger-list:last-child {
		border-bottom: none;
	}

	.passenger-list view {
		height: 100upx;
		line-height: 100upx;
	}

	.passenger-list view.left {
		width: 160upx;
	}

	.passenger-list view.right {
		flex: 1;
		position: relative;
	}

	.passenger-list view.right input {
		font-size: 28upx;
		height: 100upx;
		line-height: 100upx;
	}

	.passenger-list view.right i {
		position: absolute;
		right: 0;
		font-size: 24upx;
		color: #999;
		top: 0upx;
	}

	.certificate {
		position: relative;
		font-size: 28upx;
		color: #0086F6;
	}

	.certificate view {
		line-height: 100upx;
	}

	.explain-del {
		width: 96%;
		margin: 0px auto;
		display: flex;
		justify-content: space-between;
	}

	.explain-del view {
		height: 100upx;
		line-height: 100upx;
		color: #999;
	}

	.explain-del view:first-child {
		color: #0086F6;
	}

	.explain-del view:first-child i {
		font-size: 24upx;
	}

	.icon-shanchu {
		vertical-align: -2upx;
		margin-right: 6upx;
	}



	.fill-explain {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		background: #fff;
		border-top-left-radius: 10upx;
		border-top-right-radius: 10upx;
	}

	.fill-title {
		display: block;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		position: relative;
		border-bottom: 1upx solid #eee;
	}

	.fill-title em {
		position: absolute;
		right: 0;
		width: 80upx;
		height: 80upx;
		text-align: center;
		color: #999;

	}

	.fill-content {
		display: block;
		width: 90%;
		margin: 0px auto;
		padding: 10upx 0;
	}

	.fill-content view {
		display: block;
		margin-top: 10upx;
	}

	.fill-content p {
		font-size: 24upx;
		margin-bottom: 18upx;
		color: #666;
		line-height: 36upx;
	}
</style>
