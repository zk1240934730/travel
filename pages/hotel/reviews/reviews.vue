<template>
	<view>

		<view class="reviews-top">
			<view class="reviews-top-l">
				<p><text>4.6</text>挺好哒</p>
				<p>来自523条点评</p>
			</view>
			<view class="reviews-top-r">

				<view class="grade">
					<view>设施</view>
					<view class="grade-line">
						<em style="width: 86%;"></em>
					</view>
					<view>4.5</view>
				</view>
				<view class="grade">
					<view>服务</view>
					<view class="grade-line">
						<em style="width: 96%;"></em>
					</view>
					<view>4.9</view>
				</view>
				<view class="grade">
					<view>卫生</view>
					<view class="grade-line">
						<em style="width: 80%;"></em>
					</view>
					<view>4.3</view>
				</view>

				<view class="grade">
					<view>位置</view>
					<view class="grade-line">
						<em style="width: 93%;"></em>
					</view>
					<view>4.6</view>
				</view>
			</view>
		</view>

		<!--内容-->
		<view class="reviews-content">
			<view class="reviews-type">
				<view class="active"><text>全部(1562)</text></view>
				<view><text>有图(1356)</text></view>
				<view><text>差评(268)</text></view>
			</view>

			<!--关键词-->
			<view class="reviews-keyword">
				<text>服务周到(893)</text>
				<text>位置好(675</text>
				<text>环境不错(296)</text>
				<text>早餐丰富(358)</text>
				<text>干净卫生(671)</text>
				<text>交通方便(252)</text>
			</view>
			<!--关键词结束-->

			<!--暂无-->
			<view class="no-data" style=" display: none;">
				<image src="/static/train/no-data.png"></image>
				<text>暂无相关评论哦~</text>
			</view>
			<!--暂无结束-->

			<view class="reviews-box">
				<!--列表-->
				<view class="reviews-list">
					<view class="reviews-contents">
						<view class="reviews-list-l">
							<view class="head-portrait">
								<image src="../../../static/common/head-portrait.png"></image>
							</view>
							<view class="reviews-member">
								<p>会员7167</p>
								<p>5.0分</p>
							</view>
						</view>
						<view class="reviews-list-r">
							<p>2020-03入住</p>
							<P>大床房</P>
						</view>
					</view>

					<view class="reviews-introduction">
						哇！这个我真的非常推荐！我住了那么多酒店，这家宜必思真的值5星！以后只认准宜必思了...地理位置很好，后面就是豫园，去哪里都挺方便的！前台那个史姐姐人很nice很温柔，给我升级了景观大床房，感恩啊。床也很舒服，早餐也不错，挺多选择，可以慢悠悠的听个音乐吃个早饭了。下次来还住这里哈哈哈
					</view>

					<view class="reviews-pic">
						<view>
							<image src="//dimg04.c-ctrip.com/images/230t1f000001g45smE6D2_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg04.c-ctrip.com/images/230h1f000001g5oo0001C_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg01.c-ctrip.com/images/23011f000001gh1bsF8EA_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg02.c-ctrip.com/images/230u1f000001g432bB0CA_C_150_150_Q30.jpg_.webp"></image>
						</view>
					</view>

					<view class="hotel-reply">
						酒店回复：尊敬的贵宾您好！感谢您对小宜的支持，看到您如此用心的点评，不忘初心，方得始终，庆幸我们的努力有感动到您，我们会坚持将酒店最好的产品和您意想不到的优惠惊喜展示在您的面前。期待您的再次光临！
					</view>
				</view>

				<view class="reviews-list">
					<view class="reviews-contents">
						<view class="reviews-list-l">
							<view class="head-portrait">
								<image src="../../../static/common/head-portrait.png"></image>
							</view>
							<view class="reviews-member">
								<p>会员7167</p>
								<p>5.0分</p>
							</view>
						</view>
						<view class="reviews-list-r">
							<p>2020-03入住</p>
							<P>大床房</P>
						</view>
					</view>

					<view class="reviews-introduction">
						哇！这个我真的非常推荐！我住了那么多酒店，这家宜必思真的值5星！以后只认准宜必思了...地理位置很好，后面就是豫园，去哪里都挺方便的！前台那个史姐姐人很nice很温柔，给我升级了景观大床房，感恩啊。床也很舒服，早餐也不错，挺多选择，可以慢悠悠的听个音乐吃个早饭了。下次来还住这里哈哈哈
					</view>

					<view class="reviews-pic">
						<view>
							<image src="//dimg04.c-ctrip.com/images/230t1f000001g45smE6D2_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg04.c-ctrip.com/images/230h1f000001g5oo0001C_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg01.c-ctrip.com/images/23011f000001gh1bsF8EA_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg02.c-ctrip.com/images/230u1f000001g432bB0CA_C_150_150_Q30.jpg_.webp"></image>
						</view>
					</view>

					<view class="hotel-reply">
						酒店回复：尊敬的贵宾您好！感谢您对小宜的支持，看到您如此用心的点评，不忘初心，方得始终，庆幸我们的努力有感动到您，我们会坚持将酒店最好的产品和您意想不到的优惠惊喜展示在您的面前。期待您的再次光临！
					</view>
				</view>
				<view class="reviews-list">
					<view class="reviews-contents">
						<view class="reviews-list-l">
							<view class="head-portrait">
								<image src="../../../static/common/head-portrait.png"></image>
							</view>
							<view class="reviews-member">
								<p>会员7167</p>
								<p>5.0分</p>
							</view>
						</view>
						<view class="reviews-list-r">
							<p>2020-03入住</p>
							<P>大床房</P>
						</view>
					</view>

					<view class="reviews-introduction">
						哇！这个我真的非常推荐！我住了那么多酒店，这家宜必思真的值5星！以后只认准宜必思了...地理位置很好，后面就是豫园，去哪里都挺方便的！前台那个史姐姐人很nice很温柔，给我升级了景观大床房，感恩啊。床也很舒服，早餐也不错，挺多选择，可以慢悠悠的听个音乐吃个早饭了。下次来还住这里哈哈哈
					</view>

					<view class="reviews-pic">
						<view>
							<image src="//dimg04.c-ctrip.com/images/230t1f000001g45smE6D2_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg04.c-ctrip.com/images/230h1f000001g5oo0001C_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg01.c-ctrip.com/images/23011f000001gh1bsF8EA_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg02.c-ctrip.com/images/230u1f000001g432bB0CA_C_150_150_Q30.jpg_.webp"></image>
						</view>
					</view>

					<view class="hotel-reply">
						酒店回复：尊敬的贵宾您好！感谢您对小宜的支持，看到您如此用心的点评，不忘初心，方得始终，庆幸我们的努力有感动到您，我们会坚持将酒店最好的产品和您意想不到的优惠惊喜展示在您的面前。期待您的再次光临！
					</view>
				</view>
				<view class="reviews-list">
					<view class="reviews-contents">
						<view class="reviews-list-l">
							<view class="head-portrait">
								<image src="../../../static/common/head-portrait.png"></image>
							</view>
							<view class="reviews-member">
								<p>会员7167</p>
								<p>5.0分</p>
							</view>
						</view>
						<view class="reviews-list-r">
							<p>2020-03入住</p>
							<P>大床房</P>
						</view>
					</view>

					<view class="reviews-introduction">
						哇！这个我真的非常推荐！我住了那么多酒店，这家宜必思真的值5星！以后只认准宜必思了...地理位置很好，后面就是豫园，去哪里都挺方便的！前台那个史姐姐人很nice很温柔，给我升级了景观大床房，感恩啊。床也很舒服，早餐也不错，挺多选择，可以慢悠悠的听个音乐吃个早饭了。下次来还住这里哈哈哈
					</view>

					<view class="reviews-pic">
						<view>
							<image src="//dimg04.c-ctrip.com/images/230t1f000001g45smE6D2_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg04.c-ctrip.com/images/230h1f000001g5oo0001C_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg01.c-ctrip.com/images/23011f000001gh1bsF8EA_C_150_150_Q30.jpg_.webp"></image>
						</view>
						<view>
							<image src="//dimg02.c-ctrip.com/images/230u1f000001g432bB0CA_C_150_150_Q30.jpg_.webp"></image>
						</view>
					</view>

					<view class="hotel-reply">
						酒店回复：尊敬的贵宾您好！感谢您对小宜的支持，看到您如此用心的点评，不忘初心，方得始终，庆幸我们的努力有感动到您，我们会坚持将酒店最好的产品和您意想不到的优惠惊喜展示在您的面前。期待您的再次光临！
					</view>
				</view>

				<!--列表结束-->

			</view>

		</view>
		<!--内容结束-->

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

	.reviews-top {
		display: flex;
		background: #fff;
		overflow: hidden;
		padding: 20upx 0;
	}

	.reviews-top-l {
		float: left;
		width: 210upx;
		border-right: 1upx solid #f2f2f2;
		margin-right: 20upx;
	}

	.reviews-top-l p {
		display: block;
		text-align: center;
		font-size: 24upx;
		line-height: 30upx;
		color: #0086F6;
	}

	.reviews-top-l p text {
		font-weight: bold;

		font-size: 40upx;
		margin-right: 6upx;
	}

	.reviews-top-l p:last-child {
		margin-top: 20upx;
		color: #999;
	}

	.reviews-top-r {
		flex: 1;
	}

	.grade {
		float: left;
		width: 45%;
		display: flex;
		justify-content: space-between;
		margin-right: 5%;
	}

	.grade-line {
		width: 50%;
		height: 6upx;
		background: #ccc;
		border-radius: 6upx;
		position: relative;
		margin-top: 20upx;
	}

	.grade-line em {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 6upx;
		border-radius: 6upx;
		background: #0086F6;
	}

	.grade view {
		font-size: 24upx;
		color: #666;
	}

	.grade view:last-child {
		color: #0086F6;
	}

	.reviews-content {
		display: block;
		margin-top: 20upx;
	}

	.reviews-type {
		display: flex;
		justify-content: space-between;
		background: #fff;
		height: 80upx;
		border-bottom: 1upx solid #f2f2f2;
	}

	.reviews-type view {
		width: 33.33%;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}

	.reviews-type view.active text {
		color: #0055AA;
	}

	.reviews-keyword {
		display: block;
		border-bottom: 1upx solid #f8f8f8;
		padding-top: 20upx;
		background: #fff;
	}

	.reviews-keyword text {
		display: inline-block;
		height: 60upx;
		line-height: 60upx;
		border-radius: 60upx;
		padding: 0 20upx;
		background: #E8F4FF;
		margin-bottom: 20upx;
		margin-left: 20upx;
		font-size: 26upx;
		color: #505050;
	}

	.reviews-box {
		display: block;
		background: #fff;
	}

	.reviews-list {
		width: 96%;
		margin: 0px auto;
		border-bottom: 1upx solid #f2f2f2;
		padding-top: 30upx;
	}

	.reviews-contents {
		display: flex;
		justify-content: space-between;
	}

	.reviews-list-l {
		display: block;
	}

	.reviews-list-r p {
		display: block;
		text-align: right;
		font-size: 24upx;
		color: #999;
	}

	.reviews-list-r p:last-child {
		color: #0086F6;
	}

	.head-portrait {
		display: inline-block;
		vertical-align: middle;
		width: 100upx;
		height: 100upx;
		border-radius: 100upx;
		background: #eee;
		margin-right: 20upx;
	}

	.head-portrait image {
		width: 100upx;
		height: 100upx;
		border-radius: 100upx;
	}

	.reviews-member {
		display: inline-block;
		vertical-align: middle;
		font-weight: bold;
	}

	.reviews-member p:last-child {
		color: #0086F6;
	}

	.reviews-introduction {
		display: block;
		padding: 20upx 0 20upx 100upx;
		font-size: 26upx;
		color: #505050;
		line-height: 40upx;
	}

	.reviews-pic {
		display: block;
		padding: 20upx 0 0upx 100upx;
	}

	.reviews-pic view {
		display: inline-block;
		width: 135upx;
		height: 135upx;
		background: #eee;
		margin-bottom: 10upx;
		margin-right: 10upx;
	}

	.reviews-pic view image {
		width: 135upx;
		height: 135upx;
		border-radius: 10upx;
	}

	.hotel-reply {
		display: block;
		margin: 10upx 0 30upx 100upx;
		background: #F0F8FF;
		font-size: 24upx;
		padding: 10upx;
		color: #999;
	}
</style>
