<template>
	<view class="flight-index">
		<u-button>32</u-button>
		<view class="flight-content">
			<view class="flight-type">
				<view class="active"><text>单程</text></view>
				<view><text>往返{{ aaa }}</text></view>
			</view>
			<view class="flight-search-city">
				<view @tap="setcity">
					<text>出发城市</text>北京
				</view>
				<view class="flight-icon">
					<image src="/static/flight/flight-icon.png"></image>
				</view>
				<view @tap="setcity">
					<text>到达城市</text>上海
				</view>
			</view>
			<view class="flight-date">
				<view>3月19日<text>明天</text></view>
				<view style="display: none;">3月21日<text>周六</text></view>
			</view>
			<view class="carry-type">
				<view @tap="chooseCabinLevel">{{ CabinLevelLabel }}</view>
				<view>
					<label class="radio">
						<radio value="r1" />携带儿童</label>
					<text>2-12岁</text>
				</view>
				<view>
					<label class="radio">
						<radio value="r2" />携带婴儿</label>
					<text>14天-2岁</text>
				</view>
			</view>
			<view class="civil-servant">公务员机票 <view class="switch-icon">
					<switch name="switch" />
				</view>
				<view class="child-babies"><i class="iconfont icon-tishi"></i> 儿童婴儿预订说明</view>
			</view>
			<view class="sub-btn"><button type="primary" hover-class="none" @tap="searchBtn">查询</button></view>
		</view>

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
	
	var utils = require('@/scripts/util/utils.js');
	
	export default {
		data() {
			return {
				aaa:"", 
				CabinLevelLabel:'舱位不限',
				// ['舱位不限','经济舱', '公务舱', '头等舱']
			}
		},
		methods: {
			list:function(){
				console.log(utils);
				
				this.aaa= new  utils.typeUtil().browserType();
				console.log(this.aaa);
				
			},
			setcity(){ 
				debugger
				console.log()
				uni.navigateTo({
				    url: '../city/city'
				}); 
				
			},
			searchBtn(){
				debugger
				uni.request({
					url: "https://unidemo.dcloud.net.cn/api/news",                  
					method: 'get',
					dataType: 'json',
					success: (res) => {
						console.log(res.data);
						// this.productList = res.data;
					},                  
				});
				 
				uni.navigateTo({
				    url: '../list/list'
				}); 
			},
			chooseCabinLevel(){
				uni.showActionSheet({
				    itemList:this.itemListlist, 
				    success: function (res) {
						console.log(res,'rrrr')
				        console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				    },
				    fail: function (res) {
				        console.log(res.errMsg);
				    }
				});
				
				
			}
		},
		onLoad() {
			console.log("load")
			this.$u.post('/flight/query').then(res => {
				console.log(res);
			});
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
	}

	.flight-search-city view text {
		display: block;
		font-size: 20upx;
		color: #999;
	}

	.flight-icon image {
		display: block;
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

	.carry-type {
		border-bottom: 1upx solid #eee;
		text-align: right;
		padding: 30upx 0;
		position: relative;
	}

	.carry-type view {
		display: inline-block;
		vertical-align: middle;
		margin-left: 40upx;
		text-align: center !important;
		line-height: 36upx;
	}

	.carry-type view label {
		display: block;
	}

	.carry-type view text {
		font-size: 26upx;
		color: #999;
	}

	.carry-type view:first-child {
		position: absolute;
		left: 0;
		top: 45upx;
		margin-left: 0px;
	}

	.civil-servant {
		height: 100upx;
		line-height: 100upx;
		position: relative;
		border-bottom: 1upx solid #eee;
		position: relative;
	}

	.switch-icon {
		display: inline-block;
		margin-left: 20upx;
	}

	.sub-btn {
		width: 100%;
		padding: 40upx 0;
	}

	.child-babies {
		position: absolute;
		top: 0;
		right: 0;
		color: #999;
		font-size: 26upx;
		line-height: 100upx;
	}

	.child-babies i {
		color: #0086F6;
		vertical-align: -3upx;
		margin-right: 10upx;
	}
</style>
