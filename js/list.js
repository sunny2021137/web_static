// 使實現手風琴選單之radio button可以取消選擇
$(function(){
    $('input:radio[name="acc"]').click(function(){
        var $radio = $(this);
        if ($radio.data('waschecked') == true){
            $radio.prop('checked', false);
            $("input:radio[name='acc']").data('waschecked',false);
        } else {
            $radio.prop('checked', true);
            $("input:radio[name='acc']").data('waschecked',false);
            $radio.data('waschecked', true);
        }
    });

    let listIndex=$(".listIndex").text();
    // 更改樣式
    const maxPhoneColor=5;
    const maxPhoneCaseColor=5;
    const PNs=['i12', 'ise'];
    const PCs=[['i12-white', 'i12-black', 'i12-green', 'i12-red', 'i12-blue'], ['ise-white', 'ise-black', 'ise-red']];
    const PCCs=[['i12-whitecase', 'i12-pinkcase', 'i12-purplecase', 'i12-bluecase', 'i12-graycase'],['ise-whitecase', 'ise-pinkcase', 'ise-purplecase', 'ise-bluecase', 'ise-graycase']];
    var PN='i12'; //機型
    var PC=PCs[0]; //機色
    var PCC=PCCs[0];    //機殼色
    var PCCIndex=0;
    var phoneShow=$("#phone");  //手機部分
    var phoneCaseShow=$("#phoneCase");  //手機殼部分
    var phoneCasePicture=$("#phoneCasePicture");    //訂購頁面的手機殼
    var patternPicture=$("#patternPicture");    //訂購頁面的圖案
    var PCbutton=$(".color");
    // 換機型
    $('input[type=radio][name=phoneName]').change(function(){
        let pn=this.value;
        PCC=PCCs[pn];

        // 更換機型css
        phoneShow.removeClass(PN+"");
        PN=PNs[pn];
        phoneShow.addClass(PN+"");

        // 更換機色選項
        let prePC=PC;
        PC=PCs[pn];
        for(let i=0; i<maxPhoneColor; i++)
        {
            if(i<prePC.length)
            {
                PCbutton.eq(i).removeClass(prePC[i]+"");
            }
            if(i<PC.length)
            {
                PCbutton.eq(i).css("display", "block");
                PCbutton.eq(i).addClass(PC[i]+"");
            }
            else
            {
                // 多的顏色選項移除
                PCbutton.eq(i).css("display", "none");
            }
        }

        //初始展示白機、最後挑選的殼色
        phoneShow.attr("src", "images/"+PC[0]+".jpg");
        phoneCaseShow.attr("src", "images/"+PCC[PCCIndex]+".PNG");
        // 更新訂購頁面機殼
        phoneCasePicture.attr("src", "images/"+PCC[PCCIndex]+".PNG");
        // 按鈕初始選白機
        $("input[type='radio'][name='phoneColor'][value='0']").prop("checked", true);
    });
    // 換機色
    $('input[type=radio][name=phoneColor]').change(function(){
        let i=this.value;
        phoneShow.attr("src", "images/"+PC[i]+".jpg");
    });
    //換殼色
    $('input[type=radio][name=caseColor]').change(function(){
        PCCIndex=this.value;
        phoneCaseShow.attr("src", "images/"+PCC[PCCIndex]+".PNG");
        // 更新訂購頁面機殼
        phoneCasePicture.attr("src", "images/"+PCC[PCCIndex]+".PNG");
    });

    // 換圖案
    var patternAmount=$(".patternAmount").text();
    var itemDisplay=$(".item img");
    var patternIndex=0;
    //點右鍵
    $('#right').click(function(){
        //換字           
        if(patternIndex==patternAmount-1)
        {
            patternIndex=0;
        }
        else
        {
            patternIndex++;            
        }
        $('#patternNumber').text('#'+(patternIndex+1));
        $('#patternNumber2').text('#'+(patternIndex+1));
        //動畫
        itemDisplay.css("opacity", "0");
        itemDisplay.removeClass("itemUp");
        setTimeout(function(){
            // 換圖
            itemDisplay.eq(3).attr("src", "images/"+listIndex+"/"+(patternIndex+1)+".png");
            itemDisplay.css("opacity", "1");
            itemDisplay.addClass("itemUp");
        },50);
        // 更新訂購頁面圖案
        patternPicture.attr("src", "images/"+listIndex+"/"+(patternIndex+1)+".png");
                    
    });

    //點左鍵
    $('#left').click(function(){
        //換字           
        if(patternIndex==0)
        {
            patternIndex=patternAmount-1;
        }
        else
        {
            patternIndex--;            
        }
        $('#patternNumber').text('#'+(patternIndex+1));
        $('#patternNumber2').text('#'+(patternIndex+1));
        //動畫
        itemDisplay.css("opacity", "0");
        itemDisplay.removeClass("itemUp");
        setTimeout(function(){
            //換圖
            itemDisplay.eq(3).attr("src", "images/"+listIndex+"/"+(patternIndex+1)+".png");
            itemDisplay.css("opacity", "1");
            itemDisplay.addClass("itemUp");
        },50);
        // 更新訂購頁面圖案
        patternPicture.attr("src", "images/"+listIndex+"/"+(patternIndex+1)+".png");
    });

    // 訂購統計價錢
    var amount;
    var price=parseInt($("#price").text().substr(1));
    $("#amount").change(function(){
        if($("#amount").val()=="") $("#amount").val("1");
        amount=parseInt($("#amount").val());
        $("#total").text("$"+amount*price);
    });
});
// 切換彈出視窗的開與關
function toggle(){
    var blur=document.getElementById("blur"); 
    blur.classList.toggle("active"); 
    var popup=document.getElementById("popup");
    popup.classList.toggle("active");
}


