<template>
	<view>
		<view class="passenger-box">

			<view class="passenger-content">
				<view class="passenger-add"><i class="iconfont icon-jiahao"></i>新增乘客</view>

				<!--暂无-->
				<view class="no-data passenger-no" style="display:none;">
					<image src="/static/train/no-data.png"></image>
					<text>您当前还没有乘客哦~</text>
				</view>
				<!--暂无结束-->

				<!--列表-->
				<view class="passenger-list">
					<view class="edit-icon"><i class="iconfont icon-icon-"></i></view>
					<view class="passenger-info">
						<p>杨小二<em>成人票</em></p>
						<p>二代身份证<text>4122***********987</text></p>
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
						<p>王小三<em>成人票</em></p>
						<p>二代身份证<text>4122***********987</text></p>
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
						<p>杨二<em>学生票</em></p>
						<p>回乡证<text>H****821</text></p>
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
						<p>王小三<em>成人票</em></p>
						<p>二代身份证<text>4122***********987</text></p>
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
