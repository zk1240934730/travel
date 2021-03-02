<template>
	<view>
		<view class="passenger-box">
			<!--搜索-->
			<view class="passenger-search">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="输入姓名搜索" />
				<i class="iconfont icon-guanbi" style="display: none;"></i>
			</view>
			<!--搜索结束-->

			<!--添加-->
			<view class="guest-add">
				<view class="add-ipt"><input type="text" placeholder="添加入住人姓名"></view>
				<view class="add-btn"><button>添加</button></view>
			</view>
			<!--添加结束-->


			<view class="passenger-content guest-content">

				<!--暂无-->
				<view class="no-data passenger-no" style="display:none;">
					<image src="/static/train/no-data.png"></image>
					<text>您当前还没有入住人哦~</text>
				</view>
				<!--暂无结束-->

				<!--列表-->
				<view class="guest-list">
					<view class="guest-name">
						杨小二
					</view>
					<view class="guest-set">
						<checkbox-group name="checkbox">
							<checkbox class="uni-checkbox-input" value="checkbox1" />
						</checkbox-group>
					</view>
				</view>

				<view class="guest-list">
					<view class="guest-name">
						马冬冬
					</view>
					<view class="guest-set">
						<checkbox-group name="checkbox">
							<checkbox class="uni-checkbox-input" value="checkbox1" />
						</checkbox-group>
					</view>
				</view>

				<view class="guest-list">
					<view class="guest-name">
						周围
					</view>
					<view class="guest-set">
						<checkbox-group name="checkbox">
							<checkbox class="uni-checkbox-input" value="checkbox1" />
						</checkbox-group>
					</view>
				</view>

				<view class="guest-list">
					<view class="guest-name">
						王思
					</view>
					<view class="guest-set">
						<checkbox-group name="checkbox">
							<checkbox class="uni-checkbox-input" value="checkbox1" />
						</checkbox-group>
					</view>
				</view>

				<!--列表结束-->
			</view>
		</view>

		<!--底部-->
		<view class="passenger-footer">
			<button>确定(0)</button>
		</view>
		<!--底部结束-->
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
	.guest-content {
		padding-bottom: 0upx;
	}

	.guest-add {
		width: 96%;
		margin: 0px auto;
		height: 100upx;
		background: #fff;
		margin-bottom: 20upx;
		border-radius: 10upx;
		display: flex;
	}

	.add-ipt {
		flex: 1;
		padding: 0 15upx;
	}

	.add-ipt input {
		background: #f2f3f4;
		height: 70upx;
		line-height: 70upx;
		border-radius: 10upx;
		text-indent: 20upx;
		font-size: 28upx;
		margin-top: 15upx;
	}

	.add-btn {
		float: right;
		width: 120upx;
		margin-right: 15upx;
		margin-top: 15upx;
	}

	.add-btn button {
		height: 70upx;
		line-height: 70upx;
	}

	.guest-list {
		display: flex;
		justify-content: space-between;
		border-bottom: 1upx solid #f2f2f2;
		padding: 0 20upx;
	}

	.guest-list view {
		height: 90upx;
		line-height: 90upx;
	}
</style>
