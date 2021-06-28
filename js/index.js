// 載入、視窗大小改變、手機橫屏依等比例縮放
$(function(){
    //左按鈕 右按鈕 所有圖
    let oLeft = document.querySelector("#wrap .arrow .left"),
        oRight = document.querySelector("#wrap .arrow .right"),
        aImg = document.querySelectorAll("#wrap .img img");
    // 圖片數量
    let len = aImg.length;
    // 當前是第幾張圖片
    let index = 0;

    // 左按钮
    oLeft.onclick = function () {
      //重置timer 避免按完按鈕很快遇到timer把圖換掉
      clearInterval(timer);
      left();
      timer=setInterval(right, 3000);
    };

    // 右按钮
    oRight.onclick = function () {
       //重置timer 避免按完按鈕很快遇到timer把圖換掉
      clearInterval(timer);
      right();
      timer=setInterval(right, 3000);
    };

    // 每3秒輪播
    var timer=setInterval(right,3000); //降速

  function right()
  {
    aImg[index].classList.remove("show");
      index++;
      if (index == len) index = 0;
      aImg[index].classList.add("show");
  }
  function left()
  {
      aImg[index].classList.remove("show");
      index--;
      if (index == -1) index = len - 1;
      aImg[index].classList.add("show");
  }

});

var ww=$(this).width(); 
var wh=$(this).width(); 
var cw, ch;
$(window).on('load resize orientationchange',function(){
    
    ww=$(this).width(); 
    wh=$(this).width(); 
    cw, ch;

    // 計算新寬
    cw=ww;
    // 計算新高
    ch=cw*0.46;
  
    $("#wrap").css("width", cw+"px");
    $("#wrap").css("height", ch+"px");
});