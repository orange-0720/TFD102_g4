<template>
  <div>
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
            src="@/assets/images/shopping_page/shopping_page01.jpg"
            alt="checkout_pic"
            style="padding-bottom: 100px"
          />
          <span class="bkc_black"></span>
          <h1>活動預約</h1>
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

    <div class="table">
      <h2>活動表單</h2>
      <div class="table_body">
        <div class="table_left">
          <div>
            <span>希望日期</span>
            <input type="datetime-local" accept="middle" />
          </div>
          <div>
            <span>姓名</span>
            <input type="text" />
          </div>
          <div>
            <span>電話</span>
            <input type="text" />
          </div>
          <div>
            <span>電子郵件</span>
            <input type="email" />
          </div>
          <div>
            <span>報名活動</span>
            <select>
              <option>請選擇活動</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Hamster</option>
            </select>
          </div>
          <div>
            <span>人數</span>
            <select>
              <option>請選擇人數</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div class="table_right">
          <div>
            <span>集合場地</span>
            <em>台北市</em>
          </div>
          <div>
            <span>舉辦期間</span>
            <em>5月到7月中</em>
          </div>
          <div>
            <span>花費時間</span>
            <em>2個小時</em>
          </div>
          <div>
            <span>價錢</span>
            <em>250元</em>
          </div>
          <div>
            <span>突發狀況</span>
            <em>其活動視天氣做更動</em>
          </div>
          <div>
            <span>衣著</span>
            <em>請穿適合活動的衣物及鞋子</em>
          </div>
        </div>
      </div>
    </div>
    <div class="event_info_btn"><a href="">送出</a></div>
  </div>
</template>
