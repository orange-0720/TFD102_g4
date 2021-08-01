//  ajax結束

// 登入介面左右互換
var form_block = document.getElementsByClassName('form_block')[0];
var sign_btn = document.getElementById("signup_btn");
var change_to_log = document.getElementById('change_to_log');
var signup_form = document.getElementsByClassName('signup_form')[0];
let login_form = document.getElementsByClassName("login_form")[0];


sign_btn.addEventListener("click", function (e) {
e.preventDefault;
let login_img = document.getElementById("login_img");
let login_pic = document.getElementsByClassName("login_pic")[0];

if(window.innerWidth >= 768){
    form_block.classList.toggle("form_move");
    login_pic.classList.toggle("pic_move");
    if (form_block.classList.contains("form_move")) {
    console.log('aaa')
    login_img.src =
        "./images/login&out/logout_01.jpg";
    } else {
    login_img.src =
        "./images/login&out/login_01.jpg";
    }
    if(login_form.style.display = 'block'){
    login_form.style.display = 'none';
    signup_form.style.display = 'block';
    }
}else{
    $('.login_form').fadeToggle();
    setTimeout(function(){
        $('.signup_form').fadeToggle();
    },500);
    }
});

change_to_log.addEventListener('click', function(e){
e.preventDefault;
let login_img = document.getElementById("login_img");
let login_pic = document.getElementsByClassName("login_pic")[0];

if(window.innerWidth >= 768){  
    form_block.classList.toggle("form_move");
    login_pic.classList.toggle("pic_move");
    if (form_block.classList.contains("form_move")) {
    login_img.src =
        "./images/login&out/logout_01.jpg";
    } else {
    login_img.src =
        "./images/login&out/login_01.jpg";
    }
    if(login_form.style.display = 'none'){
    signup_form.style.display = 'none';
    login_form.style.display = 'block'
    }
}else{
    setTimeout(function(){
        $('.login_form').fadeToggle();
    },500);
    $('.signup_form').fadeToggle();
}
})

// 忘記密碼彈窗
$('.pwd_btn').click(function(){
$('.pwd_block').fadeToggle();
})

$('.pwd_block').click(function(){
$('.pwd_block').fadeToggle();
})

$('.cancel_btn').click(function(){
$('.pwd_block').fadeToggle();
})

$('.pwd_block_inside').click(e=>{
e.stopPropagation();
})

let pwd_resend_btn = document.getElementsByClassName("pwd_resend_btn")[0];
pwd_resend_btn.addEventListener("click", function () {
let val = document.getElementsByClassName("pwd_resend")[0].value;
if(val !== ""){
    Email.send({
    Host: "smtp.gmail.com",
    Username: "goodvegetablebox@gmail.com",
    Password: "tfd102g4",
    To: val,
    From: "良耕野菜<goodvegetablebox@gmail.com>",
    Subject: "良耕野菜",
    Body: "感謝您使用本網站，您的新密碼為11111111，請使用新密碼重新登入",
    }).then((message) => alert('已寄出新密碼，請使用新密碼進行登入'))
    .then($('.pwd_block').fadeToggle());
}else{
    alert('請輸入註冊信箱');
};
});
// 忘記密碼結束

// 註冊會員寄信

$('.sign_send_btn').click(function(){
$('.sign_block').fadeToggle();
})

$('.sign_block').click(function(){
$('.sign_block').fadeToggle();
})

$('.sign_block_inside').click(e=>{
e.stopPropagation();
})

$('.sign_cancel_btn').click(function(){
$('.sign_block').fadeToggle();
})

let sign_confirm_btn = document.getElementById('sign_confirm_btn');
let sign_send_btn = document.getElementsByClassName('sign_send_btn')[0]

// 去除紅色邊框
$('.sign_email').focus(function(){
    $('.sign_email').css('border', '1px solid #A07332');
})

$('.sign_pwd').focus(function(){
    $('.sign_pwd').css('border', '1px solid #A07332');
})

$('.pwd_confirm').focus(function(){
    $('.pwd_confirm').css('border', '1px solid #A07332');
})

$('.sign_tel').focus(function(){
    $('.sign_tel').css('border', '1px solid #A07332');
})

$('#login_pwd').focus(function(){
    $('#login_pwd').css('border','1px solid #A07332');
})


sign_confirm_btn.addEventListener('click', function(e){
    e.preventDefault();
    let sign_email = document.getElementsByClassName('sign_email')[0];
    let sign_pwd = document.getElementsByClassName('sign_pwd')[0].value;
    let pwd_confirm = document.getElementsByClassName('pwd_confirm')[0].value;
    let sign_tel = document.getElementsByClassName('sign_tel')[0].value;
    let val = sign_email.value;

    $('.sign_email').css('border', '1px solid #A07332');
    $('.sign_pwd').css('border', '1px solid #A07332');
    $('.pwd_confirm').css('border', '1px solid #A07332');
    $('.sign_tel').css('border', '1px solid #A07332');

    if(val !== "" && val.search('@') != -1 && val.search(`.`) != -1){
        if(sign_pwd === pwd_confirm){
            if(sign_tel.length == 10){
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "goodvegetablebox@gmail.com",
                    Password: "tfd102g4",
                    To: val,
                    From: "良耕野菜<goodvegetablebox@gmail.com>",
                    Subject: "良耕野菜",
                    Body: "感謝您成為良耕野菜的會員，您的驗證碼為為11111111，輸入驗證碼後即可完成註冊",
                }).then((message) => alert('已寄出驗證碼，請輸入驗證碼後完成註冊'))
                .then($('.sign_block').fadeToggle());
            }else{
                alert('請輸入正確電話格式');
                document.getElementsByClassName('sign_tel')[0].style.border = '3px solid red';
            }
        }else{
        alert('請確認密碼是否相同')
        document.getElementsByClassName('sign_pwd')[0].style.border = '3px solid red';
        document.getElementsByClassName('pwd_confirm')[0].style.border = '3px solid red';
        }
    }else{
        alert('請輸入正確信箱');
        sign_email.value = '';
        sign_email.style.border = '3px solid red';
    };
});

// 驗證碼輸入並執行撈資料庫資料
sign_send_btn.addEventListener('click', function(){
    let sign_confirm = document.getElementsByClassName('sign_confirm')[0];
    if(sign_confirm.value == 11111111){
        doInsert();
    }
})

// 判斷登入表單不能為空
document.getElementById('login_btn').addEventListener('click', function(){
    if($('#login_email').val() != ''){
        if($('#login_pwd').val() !=''){
            Login();
        }else{
            alert('請輸入密碼');
            $('#login_pwd').css('border','3px solid red');
        }
    }else{
        alert('信箱不能為空')
        $('#login_email').css('border','3px solid red')
    }
})


// $('#login_email').on(blur, IsEmail(this.value));


function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
