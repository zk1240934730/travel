<template>
	<view>
		<!--顶部-->
		<view class="list-top">
			<view class="list-top-search">
				<view class="searchtop-content">
					<!--左-->
					<view class="searchtop-l">
						<view class="date-icon">
							<i class="iconfont icon-rili"></i>
						</view>
						<view class="dateday">
							<p>住<text>04-10</text></p>
							<p>离<text>04-11</text></p>
						</view>
					</view>
					<!--右-->
					<view class="searchtop-r">
						<span>关键词/位置/品牌/酒店名</span>
						<i class="iconfont icon-sousuo"></i>
					</view>
				</view>
			</view>


			<view class="screen-box">
				<view class="screen-menu">
					<view class="active">推荐/排序<i class="iconfont icon-arrow_b"></i></view>
					<view>星级/价格<i class="iconfont icon-arrow_b"></i></view>
					<view>酒店位置<i class="iconfont icon-arrow_b"></i></view>
					<view>综合筛选<i class="iconfont icon-arrow_b"></i></view>
				</view>
				<!--筛选内容-->
				<view class="screen-mask" style="display: none;">
					<view class="screen-mask-content">
						<!--推荐排序-->
						<view class="screen-sort">
							<text class="active">推荐排序</text>
							<text>低价优先</text>
							<text>高价优先</text>
							<text>好评优先</text>
							<text>距离优先</text>
						</view>
						<!--推荐排序结束-->

						<!--星级/价格-->
						<view class="starprice" style="display:none;">


							<view class="star-price">
								<h5>星级</h5>
								<text class="active">不限</text>
								<text>客栈/公寓</text>
								<text>二星/经济</text>
								<text>三星/舒适</text>
								<text>四星/高档</text>
								<text>五星/豪华</text>
							</view>
							<view class="star-price">
								<h5>价格</h5>
								<text class="active">不限</text>
								<text>¥150以下</text>
								<text>¥150-250</text>
								<text>¥250-350</text>
								<text>¥350-450</text>
								<text>¥450-700</text>
								<text>¥700以上</text>
							</view>

							<view class="star-operation">
								<button class="reset-btn">重置</button>
								<button hover-class="none">确认</button>
							</view>
						</view>
						<!--星级/价格结束-->

						<!--酒店位置-->
						<view class="tab-structure" style="display: none;">

							<view class="tab-content">
								<view class="tab-left">
									<text class="active">距离</text>
									<text>地铁</text>
									<text>商圈</text>
									<text>火车站</text>
									<text>景点/景区</text>
								</view>
								<view class="tab-right">

									<!--距离-->
									<view class="tab-right-list">
										<view class="active">不限<i class="iconfont icon-duigou"></i></view>
										<view>500米内<i class="iconfont icon-duigou"></i></view>
										<view>1公里内<i class="iconfont icon-duigou"></i></view>
										<view>2公里内<i class="iconfont icon-duigou"></i></view>
										<view>4公里内<i class="iconfont icon-duigou"></i></view>
										<view>8公里内<i class="iconfont icon-duigou"></i></view>
										<view>10公里内<i class="iconfont icon-duigou"></i></view>
									</view>
									<!--距离结束-->

									<!--地铁-->
									<view class="tab-right-list" style="display: none;">
										<view class="horizontal-row">
											<h5>1号线<p>展开<i class="iconfont icon-arrow_b"></i></p>
											</h5>
											<em class="active">不限</em>
											<em>苏州乐园</em>
											<em>临顿路</em>
											<em>星湖街</em>
											<em>玉山路</em>
											<em>乐桥</em>
											<em>时代广场</em>
											<em>钟南街</em>
											<em>汾湖路</em>
											<em>养育巷</em>
											<em>文化博览中心</em>
											<em>塔园路</em>
											<em>相门</em>
											<em>南市街</em>
											<em>东环路</em>
											<em>星塘街</em>
										</view>
										<view class="horizontal-row">
											<h5>2号线<p>展开<i class="iconfont icon-arrow_b"></i></p>
											</h5>
											<em class="active">不限</em>
											<em>骑河</em>
											<em>陆慕</em>
											<em>劳动路</em>
											<em>因中路</em>
											<em>乐桥</em>
											<em>时代广场</em>
											<em>钟南街</em>
											<em>汾湖路</em>
											<em>养育巷</em>
											<em>文化博览中心</em>
											<em>塔园路</em>
											<em>相门</em>
											<em>南市街</em>
											<em>东环路</em>
											<em>星塘街</em>
										</view>
									</view>
									<!--地铁结束-->

									<!--地铁-->
									<view class="tab-right-list" style="display: none;">
										<view class="active">不限<i class="iconfont icon-duigou"></i></view>
										<view>石路商业区<i class="iconfont icon-duigou"></i></view>
										<view>大阳山风景区<i class="iconfont icon-duigou"></i></view>
										<view>相城经济开发区<i class="iconfont icon-duigou"></i></view>
										<view>太湖风景区<i class="iconfont icon-duigou"></i></view>
										<view>木渎风景区<i class="iconfont icon-duigou"></i></view>
										<view>盘门地区<i class="iconfont icon-duigou"></i></view>
									</view>
									<!--地铁结束-->

									<!--火车站-->
									<view class="tab-right-list" style="display: none;">
										<view class="active">不限<i class="iconfont icon-duigou"></i></view>
										<view>苏州园区火车站<i class="iconfont icon-duigou"></i></view>
										<view>苏州新区火车站<i class="iconfont icon-duigou"></i></view>
										<view>苏州北火车站<i class="iconfont icon-duigou"></i></view>
									</view>
									<!--火车站结束-->

									<!--景点/景区-->
									<view class="tab-right-list" style="display: none;">
										<view class="active">不限<i class="iconfont icon-duigou"></i></view>
										<view>同里古镇<i class="iconfont icon-duigou"></i></view>
										<view>纸箱王主题创业园区<i class="iconfont icon-duigou"></i></view>
										<view>观前街<i class="iconfont icon-duigou"></i></view>
										<view>虎丘<i class="iconfont icon-duigou"></i></view>
										<view>苏州大学<i class="iconfont icon-duigou"></i></view>
										<view>周庄<i class="iconfont icon-duigou"></i></view>
									</view>
									<!--景点/景区结束-->

								</view>
							</view>
							<view class="star-operation">
								<button class="reset-btn">重置</button>
								<button hover-class="none">确认</button>
							</view>
						</view>
						<!--酒店位置结束-->

						<!--综合筛选-->
						<view class="tab-structure" style="display: none;">
							<view class="tab-content">
								<view class="tab-left">
									<text class="active">品牌</text>
									<text>设施服务</text>

								</view>
								<view class="tab-right">
									<!--品牌-->
									<view class="tab-right-list">
										<!--经济-->
										<view class="horizontal-row">
											<h5>经济型<p>展开<i class="iconfont icon-arrow_b"></i></p>
											</h5>
											<em class="active">不限</em>
											<em>如家小镇</em>
											<em>星程</em>
											<em>瑞士</em>
											<em>南苑e家连锁</em>
											<em>格萌</em>
											<em>中青旅山水</em>
											<em>书香府邸</em>
											<em>书香世家</em>
											<em>清沐</em>
											<em>都市花园</em>
											<em>都市118</em>
										</view>
										<!--经济结束-->
										<!--豪华-->
										<view class="horizontal-row">
											<h5>豪华型<p>展开<i class="iconfont icon-arrow_b"></i></p>
											</h5>
											<em>不限</em>
											<em>和颐</em>
											<em>建国饭店</em>
											<em>漫心</em>
											<em>锦江</em>
											<em>希尔顿</em>
											<em>费尔蒙</em>
											<em>铂尔曼</em>
											<em>书香世家</em>
											<em>清沐</em>
											<em>都市花园</em>
											<em>都市118</em>
										</view>
										<!--豪华结束-->
										<!--舒适-->
										<view class="horizontal-row">
											<h5>舒适型<p>展开<i class="iconfont icon-arrow_b"></i></p>
											</h5>
											<em>不限</em>
											<em>驿居</em>
											<em>如家</em>
											<em>莫泰</em>
											<em>怡莱</em>
											<em>海友</em>
											<em>汉庭</em>
											<em>速8</em>
											<em>书香世家</em>
											<em>清沐</em>
											<em>都市花园</em>
											<em>都市118</em>
										</view>
										<!--舒适结束-->
										<!--高档-->
										<view class="horizontal-row">
											<h5>高档型<p>展开<i class="iconfont icon-arrow_b"></i></p>
											</h5>
											<em>不限</em>
											<em>如家商旅</em>
											<em>如家精选</em>
											<em>宜必思</em>
											<em>全季</em>
											<em>桔子精选</em>
											<em>费尔蒙</em>
											<em>铂尔曼</em>
											<em>书香世家</em>
											<em>清沐</em>
											<em>都市花园</em>
											<em>都市118</em>
										</view>
										<!--高档结束-->
									</view>
									<!--品牌结束-->

									<!--设施服务-->
									<view class="tab-right-list" style="display: none;">
										<view class="horizontal-row">
											<h5>设施服务</h5>
											<em class="active">不限</em>
											<em>wifi上网</em>
											<em>有线宽带</em>
											<em>免费停车</em>
											<em>停车场</em>
											<em>代客泊车</em>
											<em>接送服务</em>
											<em>班车服务</em>
											<em>游泳池</em>
											<em>健身房</em>
											<em>SPA</em>
											<em>酒吧</em>
											<em>餐厅</em>
											<em>棋牌室</em>
											<em>高尔夫球场</em>
											<em>会议设施</em>
											<em>商务中心</em>
											<em>行李寄存</em>
											<em>叫醒服务</em>
											<em>洗衣服务</em>
											<em>吸烟区</em>
										</view>
									</view>
									<!--设施服务结束-->
								</view>
							</view>
							<view class="star-operation">
								<button class="reset-btn">重置</button>
								<button hover-class="none">确认</button>
							</view>
						</view>
						<!--综合筛选结束-->
					</view>
				</view>
				<!--筛选内容结束-->
			</view>
			<view class="keyword">
				<view class="keyword-list">
					<text>wifi上网</text>
					<text class="active">免费停车</text>
					<text>餐厅</text>
					<text>经济型</text>
					<text>舒适性</text>
					<text>免费取消</text>
					<text>钟点房</text>
				</view>
			</view>
		</view>
		<!--顶部结束-->

		<view class="hotel-list-box">

			<!--暂无-->
			<view class="no-data" style=" display: none;">
				<image src="/static/train/no-data.png"></image>
				<text>没有找到符合筛选条件的酒店</text>
			</view>
			<!--暂无结束-->

			<!--列表-->
			<view class="hotel-list">
				<view class="h-pic">
					<image src="//dimg12.c-ctrip.com/images/20061f000001fzinu01A6_R_200_200.jpg"></image>
				</view>
				<view class="h-info">
					<view class="list-name">苏州园区星海书香世家酒店</view>
					<view class="list-comment"><em><strong>4.7</strong>分</em><text>舒适型</text>766条评论</view>
					<view class="list-address">距我直线2.8km | 花桥地铁站附近</view>
					<view class="list-label"><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					<view class="list-price"><em><text>¥</text>128</em>起</view>
				</view>
			</view>

			<view class="hotel-list">
				<view class="h-pic">
					<image src="//dimg12.c-ctrip.com/images/200e1f000001g3mcg78AD_R_200_200.jpg"></image>
				</view>
				<view class="h-info">
					<view class="list-name">苏州轻枫印象酒店</view>
					<view class="list-comment"><em><strong>4.5</strong>分</em><text>舒适型</text>766条评论</view>
					<view class="list-address">距我直线2.8km | 花桥地铁站附近</view>
					<view class="list-label"><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					<view class="list-price"><em><text>¥</text>456</em>起</view>
				</view>
			</view>

			<view class="hotel-list">
				<view class="h-pic">
					<image src="//dimg13.c-ctrip.com/images/200s0u000000j00010ED5_R_200_200.jpg"></image>
				</view>
				<view class="h-info">
					<view class="list-name">苏州五云丰胜精品客栈</view>
					<view class="list-comment"><em><strong>4.9</strong>分</em><text>舒适型</text>766条评论</view>
					<view class="list-address">距我直线2.8km | 花桥地铁站附近</view>
					<view class="list-label"><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					<view class="list-price"><em><text>¥</text>558</em>起</view>
				</view>
			</view>

			<view class="hotel-list">
				<view class="h-pic">
					<image src="//dimg12.c-ctrip.com/images/20061f000001fzinu01A6_R_200_200.jpg"></image>
				</view>
				<view class="h-info">
					<view class="list-name">苏州园区星海书香世家酒店</view>
					<view class="list-comment"><em><strong>4.7</strong>分</em><text>舒适型</text>766条评论</view>
					<view class="list-address">距我直线2.8km | 花桥地铁站附近</view>
					<view class="list-label"><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					<view class="list-price"><em><text>¥</text>128</em>起</view>
				</view>
			</view>

			<view class="hotel-list">
				<view class="h-pic">
					<image src="//dimg12.c-ctrip.com/images/200e1f000001g3mcg78AD_R_200_200.jpg"></image>
				</view>
				<view class="h-info">
					<view class="list-name">苏州轻枫印象酒店苏州轻枫印象酒店</view>
					<view class="list-comment"><em><strong>4.5</strong>分</em><text>舒适型</text>766条评论</view>
					<view class="list-address">距我直线2.8km | 花桥地铁站附近</view>
					<view class="list-label"><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					<view class="list-price"><em><text>¥</text>456</em>起</view>
				</view>
			</view>

			<view class="hotel-list">
				<view class="h-pic">
					<image src="//dimg13.c-ctrip.com/images/200s0u000000j00010ED5_R_200_200.jpg"></image>
				</view>
				<view class="h-info">
					<view class="list-name">苏州五云丰胜精品客栈</view>
					<view class="list-comment"><em><strong>4.9</strong>分</em><text>舒适型</text>766条评论</view>
					<view class="list-address">距我直线2.8km | 花桥地铁站附近</view>
					<view class="list-label"><em class="confirm">立即确认</em><em class="cancel">不可取消</em></view>
					<view class="list-price"><em><text>¥</text>558</em>起</view>
				</view>
			</view>

			<!--列表结束-->
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

	.list-top {
		position: fixed;
		top: 0upx;
		left: 0;
		width: 100%;
		height: 300upx;
		background: #fff;
		z-index: 9;
	}

	.list-top-search {
		display: block;
		border-bottom: 1upx solid #f2f2f2;
		padding-bottom: 20upx;
	}

	.screen-box {
		display: block;
		position: relative;
		height: 80upx;
	}

	.screen-menu {
		display: block;
	}

	.screen-menu view {
		display: inline-block;
		width: 25%;
		text-align: center;
		height: 80upx;
		line-height: 80upx;
		color: #505050;
	}

	.screen-menu view i {
		font-size: 24upx;
		margin-left: 4upx;
	}

	.screen-menu view.active {
		color: #0086F6;
	}

	.screen-mask {
		position: fixed;
		top: 200upx;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		z-index: 1;
	}

	.screen-mask-content {
		position: absolute;
		top: 0upx;
		left: 0;
		width: 100%;
		z-index: 9;
		background: #fff;
		border-top: 1upx solid #f2f2f2;
	}

	.screen-sort {
		display: block;
	}

	.screen-sort text {
		display: block;
		height: 90upx;
		line-height: 90upx;
		border-bottom: 1upx solid #f2f2f2;
		text-indent: 15upx;
		color: #505050;
	}

	.screen-sort text.active {
		color: #0086F6;
	}

	.starprice {
		display: block;
	}

	.tab-structure {
		display: block;
	}

	.tab-content {
		display: flex;
		height: 600upx;
	}


	.tab-left {
		float: left;
		width: 200upx;
		background: #f8f8f8;
		height: 600upx;
		overflow-y: auto;
	}

	.tab-left text {
		display: block;
		border-bottom: 1upx solid #f2f2f2;
		text-align: center;
		height: 90upx;
		line-height: 90upx;
	}

	.tab-left text.active {
		background: #fff;
		color: #0086F6;
	}

	.tab-right {
		flex: 1;
		height: 600upx;
		overflow-y: auto;
	}

	.tab-right-list {
		display: block;
		margin-left: 20upx;
	}

	.tab-right-list view {
		display: block;
		border-bottom: 1upx solid #f2f2f2;
		height: 90upx;
		line-height: 90upx;
		position: relative;
	}

	.tab-right-list view i {
		position: absolute;
		top: 2upx;
		right: 20upx;
		font-size: 26upx;
		display: none;
	}

	.tab-right-list view.active {
		color: #0086F6;
	}

	.tab-right-list view.active i {
		display: block;
	}

	.tab-right-list view.horizontal-row {
		display: block;

		clear: both;
		border-bottom: none;
	}

	.tab-right-list view.horizontal-row h5 {
		display: flex;
		justify-content: space-between;
		text-align: left;
		font-size: 28upx;
		height: 90upx;
		line-height: 90upx;
		color: #0086F6;
		font-weight: normal;
	}

	.tab-right-list view.horizontal-row h5 p {
		padding: 0 20upx;
		font-size: 24upx;
		background: no-repeat;
		width: 80upx;
		position: relative;


	}

	.tab-right-list view.horizontal-row h5 p i {
		display: block;
		top: 0;

		vertical-align: middle;

	}

	.tab-right-list view.horizontal-row em {
		float: left;
		height: 80upx;
		line-height: 80upx;
		background: #f8f8f8;

		width: 22%;
		text-align: center;
		border-radius: 10upx;
		font-size: 26upx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;

		margin: 0 3% 3% 0;
	}

	.tab-right-list view.horizontal-row em.active {
		background: #F0F8FF;
		color: #0086F6;
	}




	.keyword {
		display: block;
		height: 90upx;
		background: #f5f6f7;
		width: 100%;
		overflow-x: auto;
	}

	.keyword-list {
		width: 136%;
	}

	.keyword-list text {
		display: inline-block;
		height: 50upx;
		line-height: 50upx;
		background: #fff;
		border-radius: 10upx;
		padding: 0 20upx;
		margin: 20upx 0 0 20upx;
		font-size: 26upx;
		color: #505050;
		border: 1upx solid #fff;
	}

	.keyword-list text.active {
		border: 1upx solid #0086F6;
		color: #0086F6;
	}

	.hotel-list-box {
		position: relative;
		width: 100%;
		top: 205upx;
	}

	.hotel-list {
		display: flex;
		border-bottom: 1upx solid #eee;
		padding: 20upx 0;
		background: #fff;
	}

	.h-pic {
		float: left;
		width: 240upx;
		height: 250upx;
		margin: 0 20upx;
	}

	.h-pic image {
		width: 240upx;
		height: 250upx;
		border-radius: 10upx;
	}

	.h-info {
		flex: 1;
		padding-right: 20upx;
		width: 1upx;
	}

	.list-name {
		display: block;
		height: 50upx;
		line-height: 50upx;
		overflow: hidden;
		font-size: 34upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 6upx;
	}

	.list-comment {
		display: block;
		font-size: 26upx;
		color: #999;
	}

	.list-comment em {
		color: #0086F6;
		margin-right: 10upx;
	}

	.list-comment em strong {
		font-size: 36upx;
		line-height: 100%;
	}


	.list-comment text {
		color: #0086F6;
		margin-right: 10upx;
	}

	.list-address {
		display: block;
		font-size: 24upx;
		color: #999;
	}

	.list-label em {
		border-radius: 10upx;
		font-size: 24upx;
		line-height: 30upx;
		padding: 0 6upx;
		margin-right: 10upx;
	}

	.list-price {
		font-size: 24upx;
		color: #999;
		text-align: right;
	}

	.list-price em {
		font-size: 44upx;
		color: #f60;
		font-weight: bold;
		margin-right: 6upx;
		line-height: 100%;
	}

	.list-price em text {
		font-size: 30upx;
		font-weight: normal;
	}
</style>
