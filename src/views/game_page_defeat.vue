<template>
  <div id="game_page">
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
    <section id="game_play_border_PassandDefeat">
      <div id="game_decorate_testNumberCircle_2">
        <h1 id="inside_testNumber">失敗</h1>
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
      <div class="game_test_2">
        <img
          src="@/assets/images/game/game_img_eggPlant.svg"
          alt=""
          id="game_test"
        />
      </div>
      <div id="game_question">
        <h2>
          好可惜!<br />購買蔬果、預約體驗農場<br />增加蔬果小知識再來挑戰吧
        </h2>
      </div>
      <div id="game_bottom_part_PassandDefeat">
        <div id="game_answer">
          <button type="submit" id="submit_1" class="green">
            <div id="action1"><a href="fruit_box.html">組裝你的蔬菜箱</a></div>
            <img
              src="@/assets/images/game/rightArrow.svg"
              alt=""
              id="rightArrow"
            />
          </button>
          <button type="submit" id="submit_2" class="green">
            <img
              src="@/assets/images/game/leftArrow.svg"
              alt=""
              id="leftArrow"
            />
            <div id="action2"><a href="event_info.html">預約體驗農場</a></div>
          </button>
        </div>
        <img
          src="@/assets/images/game/game_img_Farmer.svg"
          alt=""
          class="decorate icon_11"
        />
      </div>
      <!-- 用js去寫換圖 -->
      <!-- button在外層直接換內層 -->
    </section>

    <section id="game_slideshow_step_PassandDefeat">
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
