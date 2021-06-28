function topggleForm() {
    var container = document.querySelector('.container');
    container.classList.toggle('active');
}
$(function(){
    // 打字特效
    var text = document.querySelectorAll('.typeText');
    const txt  =["最好看的手機殼都在這裡，","快來幫你的愛機換新裝！"]; 
        
       // 字的index
        var index=0;
        // 句子index
        var xiaBiao= 0;
        var huan = true;
     
        setInterval(function(){
            for(var i=0; i<text.length; i++)
            {
            if(huan){   
                    //句子打印中   
                    text[i].innerHTML = txt[xiaBiao].slice(0,++index);
                }
                else{
                    // 句子刪除中
                    text[i].innerHTML = txt[xiaBiao].slice(0,index--);
                }
                // 到底，游標閃3次，開始刪除該句子
                if(index==txt[xiaBiao].length+3)
                {
                    huan = false;
                }
                else if(index<0)    //刪完
                {
                    index = 0;
                    huan = true;
                    xiaBiao++;  //句子index++
                    if(xiaBiao>=txt.length)
                    {
                        xiaBiao=0; 
                    }
                }
            }     
        },200); //降速

        $(document).ready(function($) {
        
            $("#in").validate({
                submitHandler: function(form) {
                    form.submit();
                    // alert("歡迎回來~")
                },
                rules: {
                    "userName": {
                        required: true
                    },
                    "userPassword": {
                        required: true
                    }
                }
            });
            $("#up").validate({
                submitHandler: function(form) {
                    form.submit();
                    // alert("註冊成功！")
                },
                rules: {
                    "Name": {
                        required: true
                    },
                    "Mail": {
                        required: true,
                        email: true
                    },
                    "Password": {
                        required: true,
                        minlength: 6,
                        maxlength: 12
                    },
                    "passwordCheck": {
                        required: true,
                        equalTo: "#pd"
                    }
                },
                messages: {
                    "Password": {
                        minlength: "密碼長度需為 6~12",
                        maxlength: "密碼長度需為 6~12"
                    },
                    "passwordCheck": {
                        equalTo:"密碼不相符"
                    }
                }
            });
        });
});