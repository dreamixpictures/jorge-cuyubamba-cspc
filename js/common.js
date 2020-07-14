var headerAction = {
	init:function(){
		this.stickyNavigationTop = $('#topNavWrapper').position().top;
		var timeoutId = setInterval(function(){
			headerAction.stickyNavigation();
		},1);
	},
	stickyNavigationTop:0,
	stickyNavigation:function(){
		if ($(window).scrollTop() >= this.stickyNavigationTop) { 
			$('body').addClass('floatingMenu');
		} else {
			$('body').removeClass('floatingMenu');
		}
	}
};

function changeLanguage(newLanguage) {
	var url=window.location.href;
	if(url.indexOf("/en/")!=-1 || url.indexOf("/tc/")!=-1 || url.indexOf("/sc/")!=-1){
	var regex = /\/(en|tc|sc)\//;
	var p =url.replace(regex,"/"+newLanguage+"/");
	window.location.href = p;
	}
}

$(function() {
	headerAction.init(); //Top Navigation always on top
	pulldownSelction(); //Top Navigation show pulldown
	homeKeyProductsSelection(); //Home - tab selection
	actLeftNav();
});

function homeKeyProductsSelection() {
	$("#categoryWrapper .btn_cat").click(function() {
		new_act = $(this).attr('id');
		$('#keyProducts .btn_cat').removeClass('act');
		$('#keyProducts #'+new_act).addClass('act');
		
		$('#keyProducts .content_cat').removeClass('act');
		$('#keyProducts #cat'+new_act).addClass('act');
	});
}

function pulldownSelction() {
	
	$('#menuWrapper ul li, .pulldownWrapper').hover(function() {
		selectedName = $(this).attr('id');
		$('.pulldownWrapper#'+selectedName).addClass('act');
		$('#menuWrapper ul li#'+selectedName+' a div').addClass('act');
		$('#topNavWrapper').addClass('shadow');
	}, function() {
		$('.pulldownWrapper').removeClass('act');
		$('#menuWrapper ul li div').removeClass('act');
		$('#topNavWrapper').removeClass('shadow');
	});
	$('.pulldownWrapper ul li a').hover(function() {
		$(this).parent('li').addClass('act');
	}, function() {
		$('.pulldownWrapper ul li').removeClass('act');
	});
	
	//if isiPad , no hover on pulldown
	var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
 
	if (isiDevice) {
		$('.pulldownWrapper ul li').on('click touchend', function(e) {
			var link = $(this).children('a').attr('href');
			window.location = link;
		});
		$('.pulldownWrapper ul li a').on('click touchend', function(e) {
			var link = $(this).attr('href');
			window.location = link;
		});
	}
	else { 
	}
}

function actLeftNav(){
	$('#leftNav li a').each(function(){
		var page = $('.title').html().trim();
		var nav = $(this).html().trim();
		if(nav==page)
		$(this).addClass("act");
	});
}
/*
// JavaScript Document
$(function() {
    // Stick the #nav to the top of the window
    var nav = $('#topNavWrapper');
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    $w.scroll(function() {
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: 'fixed',
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
                position: 'static'
            });
            isFixed = false;
        }
    });
});*/

/* Product Box Control Start */


$(function(){

	if(/#\d+$/.test(window.location.href)){
      $("#changeview").addClass('listview');
	  
	  if($("#changeview").hasClass('listview')){
      $(".listset").css("display", "block");
	}
  }
		
  $(".productPhoto").mouseover(function(){
    $(".active").removeClass("active");
    if($("#changeview").hasClass('listview')){
      return false;
    }
    $(this).parents("li").addClass('active');
  })
  
  $(".productBox").mouseleave(function(e) {
		$(this).parents("li").removeClass("active");
  });
   $(".close").click(function(e) {
		$(this).parents("li").removeClass("active");
  });
	
    $(".listbtn").click(function(){
         $("#changeview").addClass('listview');
		 $(".listset").css("display", "block");
    })
	$(".gridbtn").click(function() {
		$("#changeview").removeClass('listview');
		 $(".listset").css("display", "none");
    });
	
})


/* Product Box Control End */