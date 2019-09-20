<template>
	<view class="">
		<view class="wrap">
			<ul class="turntable">
				<li id="num2"> <div class="title">2</div> </li>
				<li id="num3"> <div class="title">3</div> </li>
				<li id="num4"> <div class="title">4</div> </li>
				<li id="num5"> <div class="title">5</div> </li>
				<li id="num6"> <div class="title">6</div> </li>
				<li id="num7"> <div class="title">7</div> </li>
				<li id="num8"> <div class="title">8</div> </li>
				<li id="num9"> <div class="title">9</div> </li>
				<li id="num10"> <div class="title">10</div> </li>
				<li id="num11"> <div class="title">11</div> </li>
				<li id="num12"> <div class="title">12</div> </li>
				<li id="num1"> <div class="title">1</div> </li>
			</ul>
			<view class="pointerDisk">
				<view class="triangleUp"></view>
				<text class="internal">begin</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.wrap ul {
	      width: 90%;
	      height: 90%;
	      position: absolute;
	      left: 50%;
	      margin-left: -45%;
	      top: 50%;
	      margin-top: -45%;
	      border-radius: 50%;
	      overflow: hidden;
	      background: #166dab;
	      box-shadow: 0px 0px 12px 2px #152c3c;
	    }
	    
	    .wrap ul li:nth-child(1) {
	      position: absolute;
	      left: 50%;
	      margin-left: -90px;
	      transform: rotate(30deg);
	      transform-origin: center 315px 10px;
	    }
	    /*  依次类推到第12个... */
	    
	    .wrap ul li:nth-child(odd):after {
	      content: '';
	      display: block;
	      width: 0;
	      height: 0;
	      border-left: 89px solid transparent;
	      border-right: 89px solid transparent;
	      border-top: 308px solid #1b7b54;
	    }
</style>
