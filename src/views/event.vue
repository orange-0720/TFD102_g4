<template>
  <div>
    <header class="header">
      <!-- 手機板header -->
      <div class="fixed_top">
        <div class="fixed_top_logo">
          <a href="./index.html">
            <img src="@/assets/images/fixed_top_logo.svg" alt="top_logo" />
          </a>
        </div>
        <div class="shop_car">
          <img src="@/assets/images/shopping_cart.svg" alt="shopping_cart" />
        </div>
        <div class="ham">
          <div class="ham_top"></div>
          <div class="ham_middle"></div>
          <div class="ham_bottom"></div>
        </div>
      </div>
      <!-- 手機板header結束 -->
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
          <a href="./index.html">
            <img src="@/assets/images/logo.svg" alt="logo" />
          </a>
        </div>
        <div class="page_list">
          <a href="./event.html">農村體驗</a>
          <a href="./fruit_box.html">客製蔬果箱</a>
          <a href="./game.html">蔬果知識小遊戲</a>
          <a href="./aboutUs.html">關於我們</a>
          <a href="./q_a.html">問與答</a>
          <a href="./shopping_page.html">新鮮蔬果</a>
        </div>
      </div>
      <div class="title">
        <div class="title_btn">
          <button class="comm_us">
            聯絡我們 <img src="@/assets/images/cotact_us.svg" width="25px" alt="" />
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
          <h1>活動體驗</h1>
        </div>
      </div>

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

    <section class="test">
      <div class="test_container">
        <div class="test_row">
          <div class="row_left">
            <header>
              <h2>摘採野菜體驗</h2>
            </header>
            <p>活動期間 2021年6月5日～2021年9月30日</p>
            <p>所要時間 約3.5時間〜</p>
            <p>参加料金 300元</p>
            <br />
            <p>
              在良耕農場與溫室棚裡都可以親身體驗都市少有的自然農作，即使是最常見的青菜蘋果草莓，也能從觸摸摘採的過程中感受最純粹的土地回饋！
            </p>
            <div>
              <!-- <a href=""><button class="event_btn">詳細內容</button></a> -->
              <a href="./event_info.html"
                ><button class="event_btn">預約去</button></a
              >
            </div>
          </div>
          <div class="row_right">
            <span class="row_img">
              <img src="@/assets/images/event/large_ph_newopen_03.jpg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="test">
      <div class="test_container">
        <div class="test_row">
          <div class="row_right">
            <span class="row_img">
              <img src="@/assets/images/event/large_ph_newopen_03.jpg" alt="" />
            </span>
          </div>
          <div class="row_left">
            <header>
              <h2>摘採野菜體驗</h2>
            </header>
            <p>活動期間 2021年6月5日～2021年9月30日</p>
            <p>所要時間 約3.5時間〜</p>
            <p>参加料金 300元</p>
            <br />
            <p>
              在良耕農場與溫室棚裡都可以親身體驗都市少有的自然農作，即使是最常見的青菜蘋果草莓，也能從觸摸摘採的過程中感受最純粹的土地回饋！
            </p>
            <div>
              <!-- <a href=""><button class="event_btn">詳細內容</button></a> -->
              <a href="./event_info.html"
                ><button class="event_btn">預約去</button></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="test">
      <div class="test_container">
        <div class="test_row">
          <div class="row_left">
            <header>
              <h2>摘採野菜體驗</h2>
            </header>
            <p>活動期間 2021年6月5日～2021年9月30日</p>
            <p>所要時間 約3.5時間〜</p>
            <p>参加料金 300元</p>
            <br />
            <p>
              在良耕農場與溫室棚裡都可以親身體驗都市少有的自然農作，即使是最常見的青菜蘋果草莓，也能從觸摸摘採的過程中感受最純粹的土地回饋！
            </p>
            <div>
              <!-- <a href=""><button class="event_btn">詳細內容</button></a> -->
              <a href="./event_info.html"
                ><button class="event_btn">預約去</button></a
              >
            </div>
          </div>
          <div class="row_right">
            <span class="row_img">
              <img src="@/assets/images/event/large_ph_newopen_03.jpg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
    <div class="push_item">
      <h2>良耕好物</h2>
    </div>
    <div class="ProductList">
      <a href=""
        ><div
          class="ProductList__item"
          style="background-image: url(@/assets/images/farm/fruit/s_cherry_tomato.jpg);"
        ></div
      ></a>
      <a href=""
        ><div
          class="ProductList__item"
          style="background-image: url(@/assets/images/farm/fruit/s_persimmon.jpg);"
        ></div
      ></a>
      <a href=""
        ><div
          class="ProductList__item"
          style="background-image: url(@/assets/images/farm/vagatable/s_cabbage.jpg);"
        ></div
      ></a>
      <a href=""
        ><div
          class="ProductList__item"
          style="background-image: url(@/assets/images/farm/vagatable/s_onion.jpg);"
        ></div
      ></a>
      <a href=""
        ><div
          class="ProductList__item"
          style="background-image: url(@/assets/images/farm/fruit/lemon01.jpg);"
        ></div
      ></a>
      <a href=""
        ><div
          class="ProductList__item"
          style="background-image: url(@/assets/images/farm/fruit/guava.jpg);"
        ></div
      ></a>
    </div>

    <footer class="footer_bg">
      <div class="footer">
        <button class="go_top" id="go_top">
          <img src="@/assets/images/top.svg" alt="top" />
        </button>
        <div class="footer_logo">
          <a href="./index.html">
            <img src="@/assets/images/logo.svg" alt="logo" />
          </a>
        </div>
        <div class="footer_center">
          <h4>電話:02-26938800</h4>
          <h5>營業時間: 星期二至星期日(10:00 - 17:00)</h5>
          <h5>※農曆過年假期本農場也公休 網路接單為24小時</h5>
          <h5>※當日訂單最晚收到17:00</h5>
          <h5>(17:00後下單視為隔日下單)</h5>
          <div class="btn_pos">
            <button class="mail_btn">
              <img src="@/assets/images/mail.svg" alt="mail" />MAIL
            </button>
          </div>
          <div class="footer_icon">
            <img src="@/assets/images/icon-fb.svg" alt="fb" />
            <img src="@/assets/images/icon-line.svg" alt="line" />
            <img src="@/assets/images/icon-ig.svg" alt="ig" />
          </div>
        </div>
        <div class="footer_right">
          <div class="right_main">
            <a href="./index.html">首頁</a>
            <a href="./event.html">農村體驗</a>
            <a href="./game.html">蔬果知識小遊戲</a>
            <a href="./aboutUs.html">關於我們</a>
            <a href="./q_a.html">問與答</a>
          </div>
          <div class="right_buy">
            <a href="./fruit_box.html">客製蔬果箱</a>
            <a href="./shopping_page.html">蔬菜</a>
            <a href="./shopping_page.html">水果</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
