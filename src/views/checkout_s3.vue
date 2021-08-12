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
              <a href="./q_a.html">蔬果知識小遊戲</a>
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
    <div class="checkout_shopping_step">
      <div class="first_step">
        <section>1</section>
        <p>購物車明細</p>
      </div>
      <span class="step_line"></span>
      <div class="second_step">
        <section>2</section>
        <p>聯絡人資料</p>
      </div>
      <span class="step_line"></span>
      <div class="third_step">
        <section class="step_on">3</section>
        <p>訂單完成</p>
      </div>
    </div>
    <div class="checkout_s3_ordercheck">
      <img src="@/assets/images/checkout/checkout_s3_01.svg" alt="order_check" />
      <h2>訂單完成</h2>
    </div>
    <div class="checkout_s3_order_num_block">
      <span class="order_num">訂單編號</span>
      <span class="order_num_detail">A1234567890</span>
    </div>

    <div class="checkout_s3_order_detail">
      <h3>訂單明細</h3>
      <div class="checkout_s3_order_detail_block">
        <section class="checkout_s3_order_detail_img">商品圖片</section>
        <section class="checkout_s3_order_detail_name">商品名稱</section>
        <section class="checkout_s3_order_detail_sum">數量</section>
        <section class="checkout_s3_order_detail_price">單價</section>
        <section class="checkout_s3_order_detail_total">小計</section>
      </div>
      <div class="checkout_s3_order_product_detail">
        <section class="checkout_s3_order_product_detail_img">
          <img src="@/assets/images/checkout/checkout_01.jpg" />
        </section>
        <section class="checkout_s3_order_product_detail_name">
          防疫蔬果箱
        </section>
        <section class="checkout_s3_order_product_detail_sum">
          1
        </section>
        <section class="checkout_s3_order_product_detail_price">399</section>
        <section class="checkout_s3_order_product_detail_total">399</section>
      </div>
      <hr />
      <p class="order_total_price">總金額:<span>399</span></p>
    </div>

    <div class="checkout_s3_other_product">
      <h2>其他熱銷商品</h2>
      <div class="product_link_block">
        <a href="./itemtest.html">
          <img src="@/assets/images/checkout/tomato.svg" alt="" />
        </a>
        <a href="./itemtest.html">
          <img src="@/assets/images/checkout/cabbage.svg" alt="" />
        </a>
        <a href="./itemtest.html">
          <img src="@/assets/images/checkout/corn.svg" alt="" />
        </a>
      </div>
      <a class="order_keep_shopping" href="#">繼續購物</a>
    </div>


  </div>
</template>
