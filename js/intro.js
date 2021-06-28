$(function () {
    $('#iphone-se').height($(window).height());

    // 手機變換動畫
    var cnt=0;
    var timer = setInterval(function () {
        if(cnt==0)
        {
            $(".case1").css("display", "block");
            $(".case2").css("display", "none");
            $(".case3").css("display", "none");
        }
        else if(cnt==1)
        {
            $(".case1").css("display", "none");
            $(".case2").css("display", "block");
            $(".case3").css("display", "none");
        }
        else
        {
            $(".case1").css("display", "none");
            $(".case2").css("display", "none");
            $(".case3").css("display", "block");
        }
        if(cnt==2) cnt=0;
        else cnt=cnt+1;
    }, 2000);

    
		$(".step").click(function () {
			// 點選的與之前的都要加上active，之後的則取消active
			$(this).addClass("active").prevAll().addClass("active");
			$(this).nextAll().removeClass("active");
		});

		// 依點選者控制長度與顯示文字
		$(".step01").click(function () {
			$("#line-progress").css("width", "3%");
			$(".discovery").addClass("active").siblings().removeClass("active");
		});

		$(".step02").click(function () {
			$("#line-progress").css("width", "25%");
			$(".strategy").addClass("active").siblings().removeClass("active");
		});

		$(".step03").click(function () {
			$("#line-progress").css("width", "50%");
			$(".buy").addClass("active").siblings().removeClass("active");
		});

		$(".step04").click(function () {
			$("#line-progress").css("width", "75%");
			$(".transport").addClass("active").siblings().removeClass("active");
		});

		$(".step05").click(function () {
			$("#line-progress").css("width", "100%");
			$(".arrive").addClass("active").siblings().removeClass("active");
		});
  });
  
  // 滑動顯示效果
  $(window).on('scroll', function () {
    //   滑動頁面百分比
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // 顯示   
    // 一開始顯示的沒有出現期
    showHideText($('.phone'), scrolled, -1, 0, 0.05, 0.14);
    showHideText($('.phoneIntro'), scrolled, -1, 0, 0.05, 0.11);

    showHideText($('.designer .designIntro'),  scrolled, 0.14, 0.2, 0.33, 0.36);
    showHideText($('.wrapper'),  scrolled, 0.18, 0.195, 0.42, 0.46);

    showHideText($('.bar h1'), scrolled, 0.42, 0.5, 0.64, 0.67);
    showHideText($('.process-wrapper'), scrolled, 0.54, 0.6, 0.66, 0.70);

    showHideText($('.last h1'), scrolled, 0.71, 0.72);
    showHideText($('.last .logo'), scrolled, 0.78, 0.83);
    showHideText($('.last a'), scrolled, 0.85, 0.9); 
  });
//隨滾動頁面顯示文字
  function showHideText(el, current, showFrom, showTo, hideFrom, hideTo) {
    //   還沒到出現
    if (current < showFrom) {
      $(el).css('opacity', 0);
    }
    // 出現期間(透明度增加)
    if (current >= showFrom && current <= showTo) {
      $(el).css('opacity', (current - showFrom) / (showTo - showFrom));
    }
    // 消失期間(透明度減少)
    if (typeof hideFrom !== 'undefined' && typeof hideTo !== 'undefined') {
      if (current > hideFrom && current <= hideTo) {
        $(el).css('opacity', (hideTo - current) / (hideTo - hideFrom));
      }
    //   隱藏
      if (current > hideTo) {
        $(el).css('opacity', 0);
      }
    }
  }