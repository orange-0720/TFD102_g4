<template>
  <div>
    <div class="login_block">
      <div class="form_block">
        <form class="login_form" action="#" method="POST">
          <h2>會員登入</h2>
          <input type="text" placeholder="註冊信箱" id="login_email" />
          <input
            type="password"
            placeholder="會員密碼"
            id="login_pwd"
            autocomplete="current_password"
          />
          <input type="button" value="登入" id="login_btn" />
          <!-- <a href="./member.html" id="login_btn">登入</a> -->
          <div class="login_notice">
            <a id="signup_btn">立即註冊</a>
            <span>|</span>
            <a class="pwd_btn">忘記密碼</a>
          </div>
        </form>

        <!-- 忘記密碼 -->
        <div class="pwd_block">
          <div class="pwd_block_inside">
            <h3>請輸入註冊信箱</h3>
            <input class="pwd_resend" id="pwd_resend" type="text" />
            <input class="pwd_resend_btn" type="button" value="送出" />
            <button class="cancel_btn">
              <img src="@/assets/images/checkout/X_mark.svg" alt="" />
            </button>
          </div>
        </div>
        <!-- 忘記密碼 -->

        <div class="signup_form">
          <h2>會員註冊</h2>
          <form action="">
            <input
              class="sign_email"
              type="text"
              placeholder="註冊信箱"
              id="sign_email"
            />
            <input
              class="sign_pwd"
              type="password"
              placeholder="會員密碼"
              id="sign_pwd"
              autocomplete="new_password"
            />
            <input
              class="pwd_confirm"
              type="password"
              placeholder="密碼確認"
              autocomplete="new_password"
            />
            <input
              class="sign_tel"
              type="text"
              placeholder="09XX-XXX-XXX"
              id="sign_tel"
            />
          </form>
          <label>
            <input type="checkbox" />
            我已閱讀並同意會員條款
          </label>
          <input type="button" value="註冊" id="sign_confirm_btn" />
          <div class="signin_notice">
            <a id="change_to_log">已有帳號請按此登入</a>
          </div>
        </div>
      </div>

      <!-- 驗證碼彈窗 -->
      <div class="sign_block">
        <div class="sign_block_inside">
          <h3>請輸入驗證碼</h3>
          <input class="sign_confirm" type="text" />
          <input class="sign_send_btn" type="submit" value="送出" />
          <button class="sign_cancel_btn">
            <img src="@/assets/images/checkout/X_mark.svg" alt="" />
          </button>
        </div>
      </div>
      <!-- 驗證碼彈窗 -->

      <div class="login_pic">
        <img
          id="login_img"
          src="@/assets/images/login&out/login_01.jpg"
          alt="login_pic"
        />
      </div>
    </div>
  </div>
</template>
