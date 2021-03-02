<template>
	<view>
		<!--类型-->
		<view class="order-type">
			<view class="active"><text>待支付</text></view>
			<view><text>已完成</text></view>
			<view><text>已取消</text></view>
		</view>
		<!--类型结束-->

		<!--暂无-->
		<view class="no-data" style="display:none;">
			<image src="/static/train/no-data.png"></image>
			<text>您还没有相关订单哦~</text>
		</view>
		<!--暂无结束-->

		<view class="order-box">
			
			<!--列表-->
			<view class="order-list">
				<view class="order-list-l">
					<view class="city">上海<em>
							<image src="/static/train/go-arrow.png"></image>
						</em>昆山南</view>
					<view>04-10<text>05:53至06:12</text></view>
					<view class="train-number">G7032<text>02车02A号等</text></view>
				</view>
				<view class="order-list-r">
					<p><text>¥</text>68.8</p>
					<p>待支付</p>
				</view>
			</view>

			<view class="order-list">
				<view class="order-list-l">
					<view class="city">上海虹桥<em>
							<image src="/static/train/go-arrow.png"></image>
						</em>北京南</view>
					<view>04-10<text>07:53至13:28</text></view>
					<view class="train-number">G136<text>05车16F号</text></view>
				</view>
				<view class="order-list-r">
					<p><text>¥</text>553</p>
					<p>待支付</p>
				</view>
			</view>
			
			<view class="order-list gray">
				<view class="order-list-l">
					<view class="city">上海<em>
							<image src="/static/train/go-arrow.png"></image>
						</em>昆明</view>
					<view>04-10<text>05:53至06:12</text></view>
					<view>G7032<text>02车02A号等</text></view>
				</view>
				<view class="order-list-r">
					<p><text>¥</text>68.8</p>
					<p>已取消</p>
				</view>
			</view>

			<view class="order-list gray">
				<view class="order-list-l">
					<view class="city">合肥<em>
							<image src="/static/train/go-arrow.png"></image>
						</em>南京南</view>
					<view>04-10<text>07:53至13:28</text></view>
					<view>G136<text>05车16F号</text></view>
				</view>
				<view class="order-list-r">
					<p><text>¥</text>553</p>
					<p>已完成</p>
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
	

	
</style>
