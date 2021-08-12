<template>
  <div>
    <header class="header">
      <!-- 漢堡彈窗 -->
      <div class="jump_hamburger_block">
        <div class="hamburger_logo">
          <a href="./index.html">
            <img src="@/assets/images/logo.svg" alt="logo" />
          </a>
        </div>
        <div class="header_nav_block">
          <div class="nav_block_contact">
            <img src="@/assets/images/nav_block_pen.svg" />
            聯絡我們
          </div>
          <a class="nav_block_log" href="./login.html">
            <img src="@/assets/images/nav_block_log.svg" />
            登入註冊
          </a>
          <div class="nav_right_block">
            <div class="nav_active">
              <a href="./event.html">農村體驗</a>
              <a href="./event_info.html">預約去</a>
            </div>
            <div class="nav_buy_now">
              <a href="./shopping_page.html">立即買</a>
              <a href="./fruit_box.html">客製蔬果箱</a>
              <a href="./shopping_page.html">新鮮蔬果</a>
            </div>
            <div class="nav_knowledge">
              <a href="./game.html">蔬果知識小遊戲</a>
            </div>
          </div>
          <div class="nav_left_block">
            <div class="nav_about_us">
              <a href="./aboutUs.html">關於我們</a>
              <a href="./aboutUs.html">農場介紹</a>
              <a href="./product_introduction.html">生產介紹</a>
            </div>
            <div class="nav_QA">
              <a href="./q_a.html">問與答</a>
            </div>
          </div>
          <img
            src="@/assets/images/header_vegetable.svg"
            alt="vegetable"
            class="header_vegetable"
          />
          <img
            src="@/assets/images/header_lemon.svg"
            alt="vegetable"
            class="header_lemon"
          />
          <img
            src="@/assets/images/header_kiwi.svg"
            alt="vegetable"
            class="header_kiwi"
          />
        </div>
      </div>
      <!-- 漢堡彈窗結束 -->

      <!-- 聯絡我們彈窗 -->
      <div class="index_contact_box">
        <div class="black_block"></div>
        <div class="cotanct_block">
          <div class="contact_block_head">
            <button class="contact_block_Xmark"></button>
          </div>
          <h2>聯絡我們</h2>
          <div class="contact_search_bar">
            <input type="text" id="order_search" placeholder="請輸入訂單編號" />
            <button class="search_icon">
              <img src="@/assets/images/header_search_icon.svg" alt="search" />
            </button>
          </div>
          <h3>若有其他問題可以點擊下方按鈕寄信</h3>
          <div class="mailto_block">
            <a class="contact_mailto" href="mailto:goodvegetablebox@gmail.com"
              >寄送問題</a
            >
          </div>
        </div>
      </div>
      <!-- 聯絡我們彈窗結束 -->

      <!-- 購物車彈窗  -->
      <div class="header_shopping_cart">
        <button class="cart_close">
          <img src="@/assets/images/checkout/X_mark.svg" />
        </button>
        <div class="incart_car_block">
          <img src="@/assets/images/header_incart.svg" alt="" />
        </div>
        <div class="cart_buy_list">
          目前購物車空無一物
        </div>
        <div class="incart_total">
          總和
          <span>$0</span>
        </div>
        <div class="incart_checkout_block">
          <a class="incart_checkout_btn" href="./checkout.html">結帳去</a>
        </div>
      </div>
      <!-- 購物車彈窗結束  -->
    </header>

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
