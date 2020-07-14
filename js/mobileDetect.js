
	var isIPhone=(window.navigator.userAgent.indexOf("iPhone")!=-1);
	var isIPad=(window.navigator.userAgent.indexOf("iPad")!=-1 );
	var isIPod=(window.navigator.userAgent.indexOf("iPod")!=-1 );
	var isAndroid=(window.navigator.userAgent.indexOf("Android")!=-1);
	var isBlackBerry=(window.navigator.userAgent.indexOf("BlackBerry")!=-1);
	
	
	$(function(){
		 
	if(isIPhone || isIPad || isIPod || isAndroid)
	{

	}
	else
	{
		$(".productBox .close").css("display", "none");
	}
	})
