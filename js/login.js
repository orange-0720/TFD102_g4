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
        "../images/login&out/logout_01.jpg";
    } else {
    login_img.src =
        "../images/login&out/login_01.jpg";
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
        forget_pwd();
        
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
    let sign_agree = document.getElementById('sign_agree');
    $('.sign_email').css('border', '1px solid #A07332');
    $('.sign_pwd').css('border', '1px solid #A07332');
    $('.pwd_confirm').css('border', '1px solid #A07332');
    $('.sign_tel').css('border', '1px solid #A07332');

    let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    let partten = /^09[0-9]{8}$/;

    let answer = 0;

    if(val.search(emailRule) === -1){
        sign_email.value = '';
        sign_email.style.border = '3px solid red';
        $('#sign_email_fail').show(); 
    }else{
        answer ++;
    }

    if(sign_pwd.length < 8 && pwd_confirm.length < 8){
        $('#sign_pwd_fail').show();
        $('#pwd_confirm_fail').show();
        document.getElementsByClassName('sign_pwd')[0].style.border = '3px solid red';
        document.getElementsByClassName('pwd_confirm')[0].style.border = '3px solid red';
    }else{
        answer ++;
    }

    if(sign_pwd != pwd_confirm){
        $('#pwd_confirm_fail').show();
        $('#sign_pwd_fail').show();
        document.getElementsByClassName('sign_pwd')[0].style.border = '3px solid red';
        document.getElementsByClassName('pwd_confirm')[0].style.border = '3px solid red';
    }else{
        answer ++;
    }
    
    if(partten.test(sign_tel) != true ){
        //alert('請輸入正確手機格式');
        document.getElementsByClassName('sign_tel')[0].style.border = '3px solid red';
        $('#sign_tel_fail').show(); 
    }else{
        answer ++;
    }

    if(sign_agree.checked){
        answer ++;
    }else{
        alert('請確認是否勾選會員條款')
    }

    if(answer == 5){
        let pass = Math.floor(Math.random()* 1000000000)
        Email.send({
            Host: "smtp.gmail.com",
            Username: "goodvegetablebox@gmail.com",
            Password: "tfd102g4",
            To: val,
            From: "良耕野菜<goodvegetablebox@gmail.com>",
            Subject: "良耕野菜",
            Body: `感謝您成為良耕野菜的會員，您的驗證碼為為${pass}，輸入驗證碼後即可完成註冊`,
        }).then((message) => alert('已寄出驗證碼，請輸入驗證碼後完成註冊'))
        .then($('.sign_block').fadeToggle());

        // 驗證碼輸入並執行撈資料庫資料
        sign_send_btn.addEventListener('click', function(){
            let sign_confirm = document.getElementsByClassName('sign_confirm')[0];
            if(sign_confirm.value == pass){
                doInsert();
            }
        })
    }
});


// 判斷登入表單不能為空
document.getElementById('login_btn').addEventListener('click', function(){
    if($('#login_email').val() != ''){
        $('#email_fail').hide();
        $('#pwd_fail').hide();
        if($('#login_pwd').val() !=''){
            Login();
        }else{
            $('#login_pwd').css('border','3px solid red');
            
        }
    }else{
        $('#login_email').css('border','3px solid red');
        $('#login_pwd').css('border','3px solid red');
        $('#email_fail').show();
        $('#pwd_fail').show();
    }
})


//註冊
function doInsert(){
    $.ajax({            
        method: "POST",
        url: "../php/Insert.php",
        data:{ 
            account: $('#sign_email').val(),
            pwd : $('#sign_pwd').val(),
            tel : $('#sign_tel').val(),
        },            
        dataType: "text",
        success: function (response) {
            if(response == 'done'){
                alert('註冊成功');
                let site_now = JSON.parse(sessionStorage.getItem('site_now'));
                if(site_now){
                let go_back = site_now
                sessionStorage.removeItem('site_now');
                window.location.href = go_back;
                }else{
                window.location.href = './index.html';  
                }
            }else{
                alert('此信箱已註冊過，請確認!')
            }
        },
        error: function(exception) {
            alert("發生錯誤: " + exception.status);
        }
    });
}

function forget_pwd(){
    let new_pwd = Math.floor(Math.random() * 1000000000);
    $.ajax({
      method: 'POST',
      url: '../php/forget_pwd.php',
      data:{
        account: $('#pwd_resend').val(),
        new_pwd: new_pwd,
      },
      dataType: 'json',
      success: function(response) {
          console.log(response);
          if(response === 'yes'){
              Email.send({
              Host: "smtp.gmail.com",
              Username: "goodvegetablebox@gmail.com",
              Password: "tfd102g4",
              To: $('#pwd_resend').val(),
              From: "良耕野菜<goodvegetablebox@gmail.com>",
              Subject: "良耕野菜",
              Body: `感謝您使用本網站，您的新密碼為${new_pwd}，請使用新密碼重新登入`,
              }).then((message) => alert('已寄出新密碼，請使用新密碼進行登入。並請至會員中心更改密碼'))
              .then($('.pwd_block').fadeToggle());
          }else{
              console.log(response)
              alert('查無此信箱')
          }
      },
      error: function(exception) {
          alert("發生錯誤: " + exception.status);
      },
    })
};

// 登入
function Login(){
    $.ajax({
      method: 'POST',
      url: '../php/login.php',
      data:{
        account: $('#login_email').val(),
        pwd : $('#login_pwd').val(),
      },
      dataType: 'json',
      success: function(response) {
          console.log(response);
          let site_now = JSON.parse(sessionStorage.getItem('site_now'));
          if(response == 1){
              alert('登入成功');
              if(site_now){
                let go_back = site_now
                console.log(go_back);
                sessionStorage.removeItem('site_now');
                window.location.href = go_back;
              }else{
                window.location.href = './member.html';  
              }
          }else{
              console.log(response)
              alert('查無會員')
          }
      },
      error: function(exception) {
          alert("發生錯誤: " + exception.status);
      },
    })
};