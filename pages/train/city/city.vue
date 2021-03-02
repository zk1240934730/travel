<template>
	<view>
		<!--搜索-->
		<view class="city-search">
			<i class="iconfont icon-sousuo"></i>
			<input type="text" placeholder="中文/拼音/首字母" />
			<!--输入内容显示<i class="iconfont icon-guanbi"></i>-->
		</view>
		<!--搜索结束-->

		<view class="city-content">

			<!--当前城市-->
			<view class="city-menu">当前城市</view>
			<view class="current-city"><i class="iconfont icon-weizhi"></i> 北京</view>
			<!--当前城市结束-->

			<!--历史-->
			<view class="city-menu">历史选择</view>
			<view class="hot-city">
				<text>上海</text>
				<text>合肥</text>
				<text>福建</text>
				<text>西安</text>
				<text>昆明</text>
			</view>
			<!--历史结束-->

			<!--热门-->
			<view class="city-menu">热门城市</view>
			<view class="hot-city">
				<text>北京</text>
				<text>上海</text>
				<text>广州</text>
				<text>深圳</text>
				<text>苏州</text>
				<text>杭州</text>
				<text>天津</text>
				<text>南京</text>
				<text>成都</text>
				<text>西安</text>
				<text>重庆</text>
				<text>郑州</text>
				<text>长沙</text>
				<text>合肥</text>
				<text>昆山</text>
				<text>宁波</text>
			</view>
			<!--热门结束-->

			<!--列表-->
			<view class="city-list">
				<h5>A</h5>
				<text>阿尔山</text>
				<text>安康</text>
				<text>阿克苏</text>
				<text>阿里河</text>
				<text>安平</text>
				<text>安庆</text>
			</view>
			<view class="city-list">
				<h5>B</h5>
				<text>北京南</text>
				<text>蚌埠</text>
				<text>北海</text>
			</view>
			<view class="city-list">
				<h5>C</h5>
				<text>重庆北</text>
				<text>长春</text>

			</view>
			<view class="city-list">
				<h5>D</h5>
				<text>丹东</text>
				<text>敦煌</text>
				<text>都江堰</text>
			</view>
			<!--列表结束-->
		</view>

		<!--右边导航-->
		<view class="city-r">
			<text>当前</text>
			<text>历史</text>
			<text>热门</text>
			<text>A</text>
			<text>B</text>
			<text>C</text>
			<text>D</text>
			<text>E</text>
			<text>F</text>
			<text>G</text>
			<text>H</text>
			<text>J</text>
			<text>K</text>
			<text>L</text>
			<text>M</text>
			<text>N</text>
			<text>P</text>
			<text>Q</text>
			<text>R</text>
			<text>S</text>
			<text>T</text>
			<text>W</text>
			<text>X</text>
			<text>Y</text>
			<text>Z</text>
		</view>
		<!--右边导航结束-->

		<!--城市快速检索-->
		<view class="city-search-list" style="display: none;">
			<text>北京南</text>
			<text>北安</text>
		</view>
		<!--城市快速检索结束-->

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
	
</style>
