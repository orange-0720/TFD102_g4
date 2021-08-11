<template>
  <div id="game_page">
    <header class="header">
      <div class="menu_fixed">
        <div class="icon">
          <div class="ham">
            <div class="ham_top"></div>
            <div class="ham_middle"></div>
            <div class="ham_bottom"></div>
          </div>
          <div class="login">
            <a href="./login.html">
              <img src="@/assets/images/login_icon.svg" alt="login_icon" />
            </a>
          </div>
          <div class="shop_car">
            <img src="@/assets/images/shopping_cart.svg" alt="shopping_cart" />
          </div>
        </div>
      </div>
      <div class="menu">
        <div class="logo_img">
          <img src="@/assets/images/logo.svg" alt="logo" />
        </div>
        <div class="page_list">
          <a href="#">農村體驗</a>
          <a href="#">客製蔬果箱</a>
          <a href="#">蔬果知識小遊戲</a>
          <a href="#">關於我們</a>
          <a href="#">問與答</a>
          <a href="#">新鮮蔬果</a>
        </div>
      </div>
      <div class="title">
        <div class="title_btn">
          <button class="comm_us">
            聯絡我們
            <img src="@/assets/images/cotact_us.svg" width="25px" alt="" />
          </button>
          <a class="buy_now">
            立即買<img src="@/assets/images/buy_now.svg" width="25px" alt="" />
          </a>
        </div>
        <div class="title_pic">
          <img
            src="@/assets/images/member/member_01.jpg"
            alt="checkout_pic"
            style="padding-bottom: 100px;"
          />
          <span class="bkc_black"></span>
          <h1>蔬果知識小遊戲</h1>
        </div>
      </div>

      <!-- 漢堡彈窗 -->
      <div class="jump_hamburger_block">
        <a href="./index.html">
          <img src="@/assets/images/logo.svg" alt="logo" />
        </a>
        <div class="header_nav_block">
          <div class="nav_block_contact">
            <img src="@/assets/images/nav_block_pen.svg" />
            聯絡我們
          </div>
          <div class="nav_block_log">
            <img src="@/assets/images/nav_block_log.svg" />
            登入註冊
          </div>
          <div class="nav_right_block">
            <div class="nav_active">
              <a href="#">農村體驗</a>
              <a href="#">預約去</a>
            </div>
            <div class="nav_buy_now">
              <a href="#">立即買</a>
              <a href="#">客製蔬果箱</a>
              <a href="#">新鮮蔬果</a>
            </div>
            <div class="nav_knowledge">
              <a href="#">蔬果知識小遊戲</a>
            </div>
          </div>
          <div class="nav_left_block">
            <div class="nav_about_us">
              <a href="#">關於我們</a>
              <a href="#">農場介紹</a>
              <a href="#">生產介紹</a>
            </div>
            <div class="nav_QA">
              <a href="#">問與答</a>
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
      <!-- 購物車彈窗  -->
      <div class="header_shopping_cart">
        <button class="cart_close">
          <img src="@/assets/images/checkout/X_mark.svg" />
        </button>
        <div class="incart_car_block">
          <img src="@/assets/images/header_incart.svg" alt="" />
        </div>
        <div class="cart_buy_list">目前購物車空無一物</div>
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

    <div id="game_title">
      <h2 class="game_title">蔬果知識小遊戲</h2>
    </div>
    <section id="game_play_border">
      <div id="game_decorate_testNumberCircle">
        <h1 id="inside_testNumber">開始</h1>
      </div>
      <img
        src="@/assets/images/game/cabage_group.svg"
        alt=""
        class="game icon_1"
      />
      <img
        src="@/assets/images/game/cabage_group.svg"
        alt=""
        class="game icon_2"
      />
      <img
        src="@/assets/images/game/cabage_group.svg"
        alt=""
        class="game icon_3"
      />
      <img
        src="@/assets/images/game/game_img_Tomato.png"
        alt=""
        class="game icon_4"
      />
      <div id="count"><h1>10</h1></div>
      <div class="game_test">
        <img
          src="@/assets/images/game/game_img_Avocado.svg"
          alt=""
          id="game_test"
        />
      </div>
      <div id="game_question">
        <h2>
          腦力激盪，測試蔬果知識!5題答對才能挑戰扭蛋獲取購物金，準備好了嗎?
        </h2>
      </div>
      <div id="game_bottom_part">
        <button type="submit" id="submit" class="green">遊戲開始</button>
        <img
          src="@/assets/images/game/game_img_Farmer.svg"
          alt=""
          class="decorate icon_11"
        />
      </div>
      <!-- 用js去寫換圖 -->
      <!-- button在外層直接換內層 -->
    </section>

    <section id="game_slideshow_step">
      <div id="game_slideshow">
        <img
          src="@/assets/images/game/game_scroll_1.png"
          class="game_slideshow"
          alt=""
        />
        <img
          src="@/assets/images/game/game_scroll_2.png"
          class="game_slideshow"
          alt=""
        />
        <img
          src="@/assets/images/game/game_scroll_3.png"
          class="game_slideshow"
          alt=""
        />
        <img
          src="@/assets/images/game/game_scroll_4.png"
          class="game_slideshow"
          alt=""
        />
        <img
          src="@/assets/images/game/game_scroll_5.png"
          class="game_slideshow"
          alt=""
        />
      </div>
    </section>
  </div>
</template>
<script></script>
