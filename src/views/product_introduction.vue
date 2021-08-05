<template>
<div>
  <header class="header">
    <!-- 手機板header -->
    <div class="fixed_top">
      <div class="fixed_top_logo">
        <a href="./index.html">
          <img src="@/assets/images/fixed_top_logo.svg" alt="top_logo">
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
        <a class="buy_now" href="./shopping_page.html">
          立即買<img src="@/assets/images/buy_now.svg" width="25px" alt="" />
        </a>
      </div>
      <div class="title_pic product_title_pic">
        <img src="@/assets/images/farm/product_introduction/bg01.jpg" alt="checkout_pic" />
        <span class="bkc_black"></span>
        <h1>生產介紹</h1>
      </div>
    </div>
     <!-- 漢堡彈窗 -->
     <div class="jump_hamburger_block">
      <div class="hamburger_logo">
        <a href="./index.html">
          <img src="@/assets/images/logo.svg" alt="logo">
        </a>
      </div>
      <div class="header_nav_block">
        <div class="nav_block_contact">
          <img src="@/assets/images/nav_block_pen.svg" >
          聯絡我們
        </div>
        <a class="nav_block_log" href="./login.html">
          <img src="@/assets/images/nav_block_log.svg">
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
        <img src="@/assets/images/header_vegetable.svg" alt="vegetable" class="header_vegetable">
        <img src="@/assets/images/header_lemon.svg" alt="vegetable" class="header_lemon">
        <img src="@/assets/images/header_kiwi.svg" alt="vegetable" class="header_kiwi">
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
          <img src="@/assets/images/checkout/X_mark.svg">
        </button>
        <div class="incart_car_block">
          <img src="@/assets/images/header_incart.svg" alt="">
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

  <div class="production_introduction_title">
    <h2 class="farm_title_h2">生產介紹</h2>
  </div>

  <div class="production_box">
    <div class="production_item">
      <!-- 蔬菜 -->
      <div class="production_box about_vagatable_box">
          <a href="./vagatable_introduction.html"></a>
          <!-- 黃色箱子圖案 -->
          <div class="production_box_entrance vagatable_box">
            <div class="vagatable_box_box">
              <img src="@/assets/images/farm/box/empty_box.png" alt="蔬菜箱">
              <!-- 蔬菜箱裡的蔬菜們 -->
              <div class="vagatable_box_pic">
                <div class="vagatable_box_pic_item box01">
                  <img src="@/assets/images/farm/box/vagatable_box01.png" alt="蔬菜">
                </div>
                <div class="vagatable_box_pic_item box02">
                  <img src="@/assets/images/farm/box/vagatable_box02.png" alt="蔬菜">
                </div>
                <div class="vagatable_box_pic_item box03">
                  <img src="@/assets/images/farm/box/vagatable_box03.png" alt="蔬菜">
                </div>
                <div class="vagatable_box_pic_item box04">
                  <img src="@/assets/images/farm/box/vagatable_box04.png" alt="蔬菜">
                </div>
              </div>
              <p>關於蔬菜</p>
            </div>
          </div>
          <div class="production_box_entrance_title"> <p>關於蔬菜</p></div>
      </div>
           
      <!-- 水果 -->
      <div class="production_box about_fruit_box">
        <a href="./fruit_introduction.html"> </a>  
           <!-- 黃色箱子圖案 -->
          <div class="production_box_entrance fruit_box">
            <div class="fruit_box_box">
              <img src="@/assets/images/farm/box/empty_box.png" alt="水果箱">
               <!-- 水果箱裡的蔬菜們 -->
               <div class="fruit_box_pic">
                <div class="fruit_box_pic_item box05">
                  <img src="@/assets/images/farm/box/fruit_box01.png" alt="蔬菜">
                </div>
                <div class="fruit_box_pic_item box06">
                  <img src="@/assets/images/farm/box/fruit_box02.png" alt="蔬菜">
                </div>
                <div class="fruit_box_pic_item box07">
                  <img src="@/assets/images/farm/box/fruit_box03.png" alt="蔬菜">
                </div>
                <div class="fruit_box_pic_item box08">
                  <img src="@/assets/images/farm/box/fruit_box04.png" alt="蔬菜">
                </div>
              </div>
              <p>關於水果</p>
            </div>
          </div>   
          <div class="production_box_entrance_title"> <p>關於水果</p></div>
      </div>
      <!-- 調整用 -->
      <div class="adjust"></div>         
    </div>
  </div>

  <div class="promise_box">
    <div class="promise_content">
      <div class="promise_title">
        <h2 class="farm_title_h2">生產五大保證</h2>
      </div>
      <div class="promise_item_box">
        <div class="promise_item_first">
          <img src=" @/assets/images/farm/promise/05.jpg">
          <h3>減少碳足跡</h3>
          <p>碳足跡指的是一項活動或產品的整個生命週期中，直接與間接產生的溫室氣體排放量。也就是從一個產品的開採與製造、組裝、運輸，一直到使用及廢棄處理或回收時所產生的溫室氣體排放量。
            選擇吃什麼食物，對碳足跡的影響很大。一般來說，植物性飲食比肉食的碳排低上許多，另外，當季、當地的食物，不但最新鮮，也少了遠程運輸或者長期冷凍保存的不必要能源使用，不僅健康便宜，碳足跡也最低。
          </p>
        </div>
        <div class="promise_item">
          <div class="promise_item_content">
            <img src=" @/assets/images/farm/promise/07.jpg">
            <h3>生態友善
            </h3>
            <p>
              果園採草生栽培，除了具水土保持功能，也可改善土壤理化性質，割下的草覆蓋在土壤還能增加有機質，不只維護了生物多樣性，兼顧環境保育與生態平衡，人們吃的也更安心。

            </p>
          </div>
          <div class="promise_item_content">
            <img src=" @/assets/images/farm/promise/06.jpg">
            <h3>
              產銷履歷認證
            </h3>
            <p>
              本農場生產的農產品有通過產銷履歷驗證，產銷履歷驗證是自願性農產品驗證制度，資訊公開可追溯，並且受法律保障相關權益。
              大家可透過查詢產銷履歷農產品追溯碼或掃描QR Code，確認產銷履歷農產品的生產者、驗證機構、產地、生產紀錄及包裝日期等資訊。
            </p>
          </div>
          <div class="promise_item_content">
            <img src=" @/assets/images/farm/promise/08.jpg">
            <h3>
              無農藥
            </h3>
            <p>
              大部分農藥由於其作用為殺蟲、殺菌或除草等特性，或多或少對人體、動物或環境會造成某種程度的風險或危害。
              我們相信不使用農藥，一樣可以生產出品質優良的蔬果，讓消費者食的更安心。
            </p>
          </div>
          <div class="promise_item_content">
            <img src=" @/assets/images/farm/promise/04.jpg">
            <h3>
              無重金屬汙染
            </h3>
            <p>
              大部分的農地汙染是因為引灌遭受汙染的灌溉水所導致
              我們的農地經檢驗無重金屬汙染，附近無工業活動所排放之廢水，灌溉水源乾淨安全，蔬果品質值得信賴。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 裝飾圖片 -->
  <div class="product_introduction_footer_decoration_pic"><img src="@/assets/images/farm/tree_sugi.png" alt=""></div>

  <footer class="footer_bg">
    <div class="footer">
      <button class="go_top" id="go_top">
        <img src="@/assets/images/top.svg" alt="top">
      </button>
      <div class="footer_logo">
        <a href="./index.html">
          <img src="@/assets/images/logo.svg" alt="logo" />
        </a>
      </div>
      <div class="footer_center">
        <h4>電話:02-26938800</h4>

        <h5>營業時間: 星期二至星期日(10:00 - 17:00)</h5>
        <h5>※農曆過年假期本農場也公休
          網路接單為24小時</h5>
        <h5>※當日訂單最晚收到17:00</h5>
        <h5>(17:00後下單視為隔日下單)</h5>
        <div class="btn_pos">
          <button class="mail_btn">
            <img src="@/assets/images/mail.svg" alt="mail">MAIL
          </button>
        </div>
        <div class="footer_icon">
          <img src="@/assets/images/icon-fb.svg" alt="fb">
          <img src="@/assets/images/icon-line.svg" alt="line">
          <img src="@/assets/images/icon-ig.svg" alt="ig">
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
