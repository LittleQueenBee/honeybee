(function(){
	function resize(){
		var deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 500) deviceWidth = 500;
		if(deviceWidth < 320) deviceWidth = 320;
		document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
	}
	resize();
	window.onresize = resize;
})()

