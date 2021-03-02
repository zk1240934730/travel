<template>
	<view>
		<view class="search-top">
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
					<input type="text" placeholder="关键词/位置/品牌/酒店名" />
					<i class="iconfont icon-sousuo"></i>
				</view>
			</view>
		</view>

		<view class="search-box">
			<!--列表开始-->
			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-remen"></i>热搜酒店</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>苏州金河湾温泉酒店</text>
					<text>苏州古城门酒店</text>
				</view>
			</view>

			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-pinpai"></i>品牌</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>如家小镇</text>
					<text>星程</text>
					<text>瑞士</text>
					<text>南苑e家连锁</text>
					<text>格盟</text>
					<text>中青旅山水</text>
					<text>书香府邸</text>
					<text>书香门第</text>
				</view>
			</view>

			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-shebeisheshi"></i>设施</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>wifi上网</text>
					<text>有限宽带</text>
					<text>免费停车</text>
					<text>停车场</text>
					<text>代客泊车</text>
					<text>接送服务</text>
					<text>班车服务</text>
					<text>游泳池</text>
				</view>
			</view>

			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-ditie"></i>地铁</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>苏州乐园</text>
					<text>临顿路</text>
					<text>星湖街</text>
					<text>骑河</text>
					<text>陆慕</text>
					<text>劳动路</text>
					<text>尹中路</text>
					<text>金古路</text>
				</view>
			</view>

			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-shangquanyouhui"></i>商圈</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>石路商业区</text>
					<text>大阳山风景区</text>
					<text>相城经济开发区</text>
					<text>工业园区独墅湖高教区</text>
					<text>太湖风景区</text>
					<text>木渎风景区</text>
					<text>盘门地区</text>
					<text>金鸡湖商业区</text>
				</view>
			</view>

			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-jurassic_railway-station"></i>火车站</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>苏州园区火车站</text>
					<text>苏州新区火车站</text>
					<text>苏州北火车站</text>
				</view>
			</view>

			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-jingquxiangqing"></i>景点/景区</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>同里古镇</text>
					<text>纸箱王主题创意园区</text>
					<text>观前街</text>
					<text>虎区</text>
					<text>苏州大学</text>
					<text>诚品书店</text>
					<text>周庄</text>
					<text>苏州乐园</text>
				</view>
			</view>

			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-feiji1"></i>飞机场</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>苏州机场</text>
				</view>
			</view>

			<view class="search-list">
				<view class="search-title">
					<view><i class="iconfont icon-icon_anhangzhengquchaxun"></i>行政区</view>
					<em><i class="iconfont icon-arrow_b"></i></em>
				</view>
				<view class="search-content">
					<text>姑苏区</text>
					<text>虎丘区</text>
					<text>吴中区</text>
					<text>相城区</text>
					<text>吴江区</text>
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

	.search-top {
		position: fixed;
		width: 100%;
		top: 0upx;
		left: 0;
		z-index: 9;
		background: #fff;
		border-bottom: 1upx solid #f2f2f2;
		height: 120upx;
	}

	
	.search-box {
		width: 94%;
		margin: 0px auto;
		padding-top: 56upx;
	}

	.search-list {
		display: block;
		background: #fff;
		border-radius: 10upx;
		margin-bottom: 20upx;
	}

	.search-title {
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #f2f2f2;
	}

	.search-title view {
		margin-left: 20upx;
		height: 80upx;
		line-height: 80upx;
		color: #0086F6;
	}

	.search-title view i {
		color: #0086F6;
		vertical-align: middle;
		margin-right: 10upx;
		font-size: 30upx;
	}

	.search-title view i.icon-remen {
		font-size: 40upx;
	}

	.search-title view i.icon-jurassic_railway-station {
		font-size: 36upx;
	}

	.search-title view i.icon-feiji1 {
		font-size: 36upx;

	}

	.search-title em {
		width: 80upx;
		text-align: center;
	}

	.search-title em i {
		color: #999;
		margin-top: 14upx;
	}

	.search-content {
		display: block;
		overflow: hidden;
	}

	.search-content text {
		float: left;
		width: 25%;
		height: 80upx;
		border-bottom: 1upx solid #f2f2f2;
		border-right: 1upx solid #f2f2f2;
		box-sizing: border-box;
		text-align: center;
		font-size: 26upx;
		padding: 0 10upx;
		line-height: 32upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		-webkit-box-pack: center;
		margin-bottom: -2upx;
		color: #505050;
	}

	.search-content text:nth-child(4n+0) {
		border-right: none;
	}
</style>
