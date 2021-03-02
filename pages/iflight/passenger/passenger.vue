<template>
	<view>
		<view class="passenger-box">
			
			<!--搜索-->
			<view class="passenger-search">
				<i class="iconfont icon-sousuo"></i>
				<input type="text" placeholder="输入中文/拼音" />
				<i class="iconfont icon-guanbi" style="display: none;"></i>
			</view>
			<!--搜索结束-->

			<view class="passenger-content">
				<view class="passenger-add"><i class="iconfont icon-jiahao"></i>新增乘机人</view>

				<!--暂无-->
				<view class="no-data passenger-no" style="display:none;">
					<image src="/static/train/no-data.png"></image>
					<text>您当前还没有乘机人哦~</text>
				</view>
				<!--暂无结束-->

				<!--列表-->
				<view class="passenger-list">
					<view class="edit-icon"><i class="iconfont icon-icon-"></i></view>
					<view class="passenger-info">
						<p>YANG/XIAOER</p>
						<p>护照<text>98586789</text><text>男</text><text>有效期2025-12-30</text></p>
					</view>
					<view class="passenger-set">
						<checkbox-group name="checkbox">
							<checkbox class="uni-checkbox-input" value="checkbox1" />
						</checkbox-group>
					</view>
				</view>

				<view class="passenger-list">
					<view class="edit-icon"><i class="iconfont icon-icon-"></i></view>
					<view class="passenger-info">
						<p>WANG/XIAOSAN<em>儿童</em></p>
						<p>护照<text>98586789</text><text>女</text><text>有效期2025-12-30</text></p>
					</view>
					<view class="passenger-set">
						<checkbox-group name="checkbox">
							<checkbox class="uni-checkbox-input" value="checkbox1" />
						</checkbox-group>
					</view>
				</view>

				<view class="passenger-list">
					<view class="edit-icon"><i class="iconfont icon-icon-"></i></view>
					<view class="passenger-info">
						<p>YANG/ER<em>婴儿</em></p>
						<p>护照<text>98586789</text><text>男</text><text>有效期2025-12-30</text></p>
					</view>
					<view class="passenger-set">
						<checkbox-group name="checkbox">
							<checkbox class="uni-checkbox-input" value="checkbox1" />
						</checkbox-group>
					</view>
				</view>

				<view class="passenger-list">
					<view class="edit-icon"><i class="iconfont icon-icon-"></i></view>
					<view class="passenger-info">
						<p>WANG/XIAOSAN</p>
						<p>护照<text>98586789</text><text>女</text><text>有效期2025-12-30</text></p>
					</view>
					<view class="passenger-set">
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
			<button>确定</button>
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

</style>
