// 手機板header

$(".fixed_top").append(`
  <div class="fixed_top">
    <div class="fixed_top_logo">
      <a href="./index.html">
        <img src="../images/fixed_top_logo.svg" alt="top_logo">
      </a>
    </div>
    <div class="shop_car" onclick="showbg();">
      <img src="../images/shopping_cart.svg" alt="shopping_cart" />
      <p class="buy_num">0<p>
    </div>
    <div class="ham">
      <div class="ham_top"></div>
      <div class="ham_middle"></div>
      <div class="ham_bottom"></div>
    </div>
  </div>
`);

// menu_fixed開始
$('.menu_fixed').append(`
    <div class="icon">
      <div class="ham">
        <div class="ham_top"></div>
        <div class="ham_middle"></div>
        <div class="ham_bottom"></div>
      </div>
      <div class="login">
        <a>
          <img src="../images/login_icon.svg" alt="login_icon" />
        </a>
      </div>
      <div class="shop_car" onclick="showbg();">
        <img src="../images/shopping_cart.svg" alt="shopping_cart" />
        <p class="buy_num">0<p>
      </div>
    </div>
`)

//漢堡彈窗

$(".jump_hamburger_block").append(`

    <div class="hamburger_logo">
      <a href="./index.html">
        <img src="../images/logo.svg" alt="logo">
      </a>
    </div>
    <div class="header_nav_block">
      <div class="nav_block_contact">
        <img src="../images/nav_block_pen.svg" >
        聯絡我們
      </div>
      <a class="nav_block_log">
        <img src="../images/nav_block_log.svg">
        <span>登入註冊</span>
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
      <img src="../images/header_vegetable.svg" alt="vegetable" class="header_vegetable">
      <img src="../images/header_lemon.svg" alt="vegetable" class="header_lemon">
      <img src="../images/header_kiwi.svg" alt="vegetable" class="header_kiwi">
    </div>

`);

// 聯絡我們
$('.index_contact_box').append(`

  <div class="black_block"></div>
  <div class="cotanct_block">
      <div class="contact_block_head">
        <button class="contact_block_Xmark"></button>
      </div>
      <h4>聯絡我們</h4>
      <div class="contact_search_bar">
        <input type="text" id="order_search" placeholder="請輸入訂單編號">
        <button class="search_icon">
          <img src="../images/header_search_icon.svg" alt="search">
        </button>
      </div>
      <div class="order_find">
          <div class="order_line">
            <h4>下單時間</h4>
            <h4>訂單編號</h4>
            <h4>訂單金額</h4>
            <h4>配送狀態</h4>
          </div>
          <div class="order_inside_detail">
            <h4 class="order_time"></h4>
            <h4 class="order_id"></h4>
            <h4 class="order_price"></h4>
            <h4 class="order_status"></h4>
          </div>
      </div>
      
      <h3>若有其他問題可以點擊下方按鈕寄信</h3>
      <div class="mailto_block">
        <a class="contact_mailto" href="mailto:goodvegetablebox@gmail.com">寄送問題</a>
      </div>
  </div>

`)

// 購物車
$('.header_shopping_cart').append(`
      <button class="cart_close" onclick="closebg();">
        <img src="../images/checkout/X_mark.svg">
      </button>
      <div class="incart_car_block">
        <img src="../images/header_incart.svg" alt="">
        <h5>Shop Cart</h5>
      </div>
      <div class="cart_buy_list">
        <span class="cart_nothing">目前購物車空無一物</span>
      </div>
      <div class="incart_total">
        總和
        <span class="cart_total_price">0</span>元
        <a class="incart_checkout_btn_mobile" href="./shopping_page.html">
          <h5>購物去</h5>
        </a>
      </div>
      <div class="incart_checkout_block">
        <a class="incart_checkout_btn" href="./shopping_page.html">購物去</a>
      </div>
`)
