// 手機板heade

$(".fixed_top").append(`
  <div class="fixed_top_logo">
  <a href="./index.html">
    <img src="./images/fixed_top_logo.svg" alt="top_logo">
  </a>
  </div>
  <div class="shop_car">
  <img src="./images/shopping_cart.svg" alt="shopping_cart" />
  </div>
  <div class="ham">
  <div class="ham_top"></div>
  <div class="ham_middle"></div>
  <div class="ham_bottom"></div>
  </div>
`);

//手機板header結束
$(".menu").append(`
  <div class="logo_img">
  <a href="./index.html">
    <img src="./images/logo.svg" alt="logo" />
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
`);

//漢堡彈窗

$(".jump_hamburger_block").append(`

<div class="jump_hamburger_block">
  <div class="hamburger_logo">
    <a href="./index.html">
      <img src="./images/logo.svg" alt="logo">
    </a>
  </div>
  <div class="header_nav_block">
    <div class="nav_block_contact">
      <img src="./images/nav_block_pen.svg" >
      聯絡我們
    </div>
    <a class="nav_block_log" href="./login.html">
      <img src="./images/nav_block_log.svg">
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
    <img src="./images/header_vegetable.svg" alt="vegetable" class="header_vegetable">
    <img src="./images/header_lemon.svg" alt="vegetable" class="header_lemon">
    <img src="./images/header_kiwi.svg" alt="vegetable" class="header_kiwi">
  </div>
</div>

`);

