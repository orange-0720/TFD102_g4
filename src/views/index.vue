<template>
  <div class="index">
    <header class="header ">
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

    <!-- 首頁本體 -->
    <div class="body_area">
      <!-- 最新消息 -->
      <div class="news">
        <div class="news_title">
          <h2>最新消息</h2>
          <div class="text_underline"></div>
        </div>
        <div class="news_board">
          <div class="news_board_card">
            <a href="./fruit_box.html">
              <div class="card_cover">
                <img src="@/assets/images/index/01_1.jpg" />
              </div>
              <div class="news_card_text">
                <h4>蔬果箱熱賣中</h4>
                <p>
                  客製蔬果箱新上市！三種價格任你選擇，心動那不如馬上行動～趕快來挑選妳自己獨一無二的蔬果箱吧！
                </p>
                <h5>2021-07-01</h5>
              </div>
            </a>
          </div>
          <div class="news_board_card">
            <a href="./game.html">
              <div class="card_cover">
                <img src="@/assets/images/index/01_2.jpg" />
              </div>
              <div class="news_card_text">
                <h4>蔬果知識小遊戲</h4>
                <p>
                  你對青菜水果的知識非常豐富嗎？帶上你的信心，歡迎你來挑戰～用知識賺取你的買菜購物金！
                </p>
                <h5>2021-07-01</h5>
              </div>
            </a>
          </div>
          <div class="news_board_card">
            <a href="./event.html">
              <div class="card_cover">
                <img src="@/assets/images/index/01_3.jpg" />
              </div>
              <div class="news_card_text">
                <h4>體驗活動快訊</h4>
                <p>
                  想親自體驗農活樂趣？那你不妨來這裡看看，總會有一種是你沒有嘗試過的精采體驗！
                </p>
                <h5>2021-07-01</h5>
              </div>
            </a>
          </div>
        </div>
        <!-- 手機版輪播 -->
        <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide">
              <a href="./fruit_box.html"
                ><img src="@/assets/images/index/01_1.jpg"
              /></a>
            </div>
            <div class="swiper-slide">
              <a href="./game.html"><img src="@/assets/images/index/01_2.jpg"/></a>
            </div>
            <div class="swiper-slide">
              <a href="./event.html"><img src="@/assets/images/index/01_3.jpg"/></a>
            </div>
          </div>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

          <!-- If we need navigation buttons -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
      <!-- 立即買 -->
      <section class="go_buy_all">
        <!-- 觸發點 -->
        <div id="keypoint"></div>
        <div class="go_buy">
          <div class="buy_scroll"></div>
          <div class="go_buy_title">
            <a href="./shopping_page.html">
              <h2>立即買 ></h2>
            </a>
            <div class="text_underline"></div>
          </div>
        </div>
        <div class="buy_item">
          <div class="buy_card">
            <div class="buy_card_hover">
              <a href="./fruit_box.html"
                ><img class="buycard_img" src="@/assets/images/index/03_05.png"
              /></a>
            </div>
            <a href="./fruit_box.html"
              ><img class="buycard_bg" src="@/assets/images/index/03_01.jpg"
            /></a>
            <img class="mb_mask" src="@/assets/images/index/03_09.png" />
            <div class="rotateOutder">
              <div class="rotate">
                <p>熱賣中</p>
              </div>
            </div>
          </div>
          <div class="buy_card">
            <div class="buy_card_hover">
              <a href="./fruit_box.html">
                <img class="buycard_img" src="@/assets/images/index/03_06.png"
              /></a>
            </div>
            <a href="./fruit_box.html"
              ><img class="buycard_bg" src="@/assets/images/index/03_02.jpg"/>
              <img class="mb_mask" src="@/assets/images/index/03_10.png"
            /></a>
          </div>
          <div class="buy_card">
            <div class="buy_card_hover">
              <a href="./shopping_page.html">
                <img class="buycard_img" src="@/assets/images/index/03_07.png"
              /></a>
            </div>
            <a href="./shopping_page.html"
              ><img class="buycard_bg" src="@/assets/images/index/03_03.jpg"/>
              <img class="mb_mask" src="@/assets/images/index/03_11.png"
            /></a>
          </div>
          <div class="buy_card">
            <div class="buy_card_hover">
              <a href="./shopping_page.html">
                <img class="buycard_img" src="@/assets/images/index/03_08.png"
              /></a>
            </div>
            <a href="./shopping_page.html"
              ><img class="buycard_bg" src="@/assets/images/index/03_04.jpg"/>
              <img class="mb_mask" src="@/assets/images/index/03_12.png"
            /></a>
          </div>
        </div>
      </section>
      <!-- 栽培方式 -->
      <div class="plant_methods">
        <div class="plant_title">
          <a href="./fruit_introduction.html">
            <h2>栽培方式 ></h2>
          </a>
          <div class="text_underline"></div>
        </div>
        <div class="marquee">
          <div class="content">
            <a href="./fruit_introduction.html"
              ><img src="@/assets/images/index/04.png"
            /></a>
          </div>
        </div>
      </div>
      <!-- 農場體驗 -->
      <div class="farm_expr">
        <div class="farm_expr_title">
          <a href="./event.html">
            <h2>精選農村體驗 ></h2>
          </a>
          <div class="text_underline"></div>
        </div>
        <div class="farm_expr_board">
          <div class="farm_expr_card">
            <img src="@/assets/images/index/05_01.jpg" />
            <div class="farm_expr_text">
              <h4>摘採野菜體驗</h4>
              <h5>
                在良耕農場與溫室棚裡都可以親身體驗都市少有的自然農作，即使是最常見的青菜蘋果草莓，也能從觸摸摘採的過程中感受最純粹的土地回饋！
              </h5>
            </div>
            <center>
              <button class="farm_expr_btn">
                <a href="./event.html"> <h5>詳細內容</h5></a>
              </button>
            </center>
          </div>
          <div class="farm_expr_card">
            <img src="@/assets/images/index/05_02.jpg" />
            <div class="farm_expr_text">
              <h4>摘採野菜體驗</h4>
              <h5>
                在良耕農場與溫室棚裡都可以親身體驗都市少有的自然農作，即使是最常見的青菜蘋果草莓，也能從觸摸摘採的過程中感受最純粹的土地回饋！
              </h5>
            </div>
            <center>
              <button class="farm_expr_btn">
                <a href="./event.html"> <h5>詳細內容</h5></a>
              </button>
            </center>
          </div>
          <div class="farm_expr_card">
            <img src="@/assets/images/index/05_03.jpg" />
            <div class="farm_expr_text">
              <h4>摘採野菜體驗</h4>
              <h5>
                在良耕農場與溫室棚裡都可以親身體驗都市少有的自然農作，即使是最常見的青菜蘋果草莓，也能從觸摸摘採的過程中感受最純粹的土地回饋！
              </h5>
            </div>
            <center>
              <button class="farm_expr_btn">
                <a href="./event.html"> <h5>詳細內容</h5></a>
              </button>
            </center>
          </div>
        </div>
        <img class="bg_img1" src="@/assets/images/index/07_01.svg" alt="" />
        <img class="bg_img2" src="@/assets/images/index/07_02.svg" alt="" />
      </div>
      <!-- 關於我們 -->
      <div class="about_board">
        <div class="about_us">
          <h4 class="us_title1">想知道關於我們的故事嗎？</h4>

          <a href="./aboutUs.html"></a>
          <h2 class="us_title2">
            關於我們 >
            <div class="text_underline"></div>
          </h2>

          <img class="us_bg1" src="@/assets/images/index/06_about_bg1.svg" alt="" />
          <img class="us_bg2" src="@/assets/images/index/06_about_bg2.svg" alt="" />
        </div>
        <div class="about_img_all">
          <div class="about_img1">
            <a class="popup-btn" href="#letmeopen1"
              ><img src="@/assets/images/index/06_cabbage.png"
            /></a>
            <span class="about_text_hover">
              <h4 class="title">高麗菜</h4>
              <h5 class="category">
                營養相當豐富，含有大量維生素C、纖維素、碳水化合物和各種礦物質。
              </h5>
            </span>
          </div>
          <div class="about_img2">
            <a class="popup-btn" href="#letmeopen2"
              ><img src="@/assets/images/index/06_carrot.png"
            /></a>
            <span class="about_text_hover">
              <h4 class="title">紅蘿蔔</h4>
              <h5 class="category">
                含較多的維生素，鈣、磷、鐵等礦物質，澱粉、纖維素等醣類物質。
              </h5>
            </span>
          </div>
          <div class="about_img3">
            <a class="popup-btn" href="#letmeopen3"
              ><img src="@/assets/images/index/06_corn.png"
            /></a>
            <span class="about_text_hover">
              <h4 class="title">玉米</h4>
              <h5 class="category">
                不僅有碳水化合物，還含有豐富的維生素A及維生素E，含有豐富的膳食纖維。
              </h5>
            </span>
          </div>
          <div class="about_img4">
            <a class="popup-btn" href="#letmeopen4"
              ><img src="@/assets/images/index/06_daikon.png"
            /></a>
            <span class="about_text_hover">
              <h4 class="title">白蘿蔔</h4>
              <h5 class="category">
                豐富膳食纖維，且同時含有鉀、鈉、維生素、葉酸等人體必須營養素。
              </h5>
            </span>
          </div>
          <div class="about_img5">
            <a class="popup-btn" href="#letmeopen5"
              ><img src="@/assets/images/index/06_negi.png"
            /></a>
            <span class="about_text_hover">
              <h4 class="title">蔥</h4>
              <h5 class="category">
                其葉部綠色部份稱「蔥管」，含多量的葉紅素(維他命A)，鱗莖稱「蔥頭」，富含維他命B、C。
              </h5>
            </span>
          </div>
          <div class="about_img6">
            <a class="popup-btn" href="#letmeopen6"
              ><img src="@/assets/images/index/06_orange.png"
            /></a>
            <span class="about_text_hover">
              <h4 class="title">甜橙</h4>
              <h5 class="category">
                含有醣類、膳食纖維、維生素B群、維生素C、類胡蘿蔔素、鈣、磷、鉀、檸檬酸、果膠等營養素，是鉀含量頗高的水果。
              </h5>
            </span>
          </div>
          <div class="about_img7">
            <a class="popup-btn" href="#letmeopen7"
              ><img src="@/assets/images/index/06_tomato.png"
            /></a>
            <span class="about_text_hover">
              <h4 class="title">小番茄</h4>
              <h5 class="category">
                茄紅素具有抗氧化能力。因環境、壓力、作息不正常會引起氧化壓力自由基，茄紅素可減少身體被自由基傷害，並延緩身體老化。
              </h5>
            </span>
          </div>
          <div class="about_img8">
            <a class="popup-btn" href="#letmeopen8"
              ><img src="@/assets/images/index/06_yacon.png"
            /></a>
            <span class="about_text_hover">
              <h4 class="title">地瓜</h4>
              <h5 class="category">
                含有維生素 C
                ，並含有豐富的鈣質、葉酸、鉀及β-胡蘿蔔素；β-胡蘿蔔素是能夠在體內轉換為維生素
                A 的抗氧化物。
              </h5>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 蔬果popup -->
    <div class="pop_info">
      <div class="popup-wrap" id="letmeopen1">
        <div class="popup-box transform-out">
          <h2>高麗菜</h2>
          <h3>
            營養相當豐富，含有大量維生素C、纖維素、碳水化合物和各種礦物質。
          </h3>
          <a class="close-btn popup-close" href="#"
            ><img src="@/assets/images/index/close.png"
          /></a>
        </div>
      </div>
      <div class="popup-wrap" id="letmeopen2">
        <div class="popup-box transform-out">
          <h2>紅蘿蔔</h2>
          <h3>含較多的維生素，鈣、磷、鐵等礦物質，澱粉、纖維素等醣類物質。</h3>
          <a class="close-btn popup-close" href="#"
            ><img src="@/assets/images/index/close.png"
          /></a>
        </div>
      </div>
      <div class="popup-wrap" id="letmeopen3">
        <div class="popup-box transform-out">
          <h2>玉米</h2>
          <h3>
            不僅有碳水化合物，還含有豐富的維生素A及維生素E，含有豐富的膳食纖維。
          </h3>
          <a class="close-btn popup-close" href="#"
            ><img src="@/assets/images/index/close.png"
          /></a>
        </div>
      </div>
      <div class="popup-wrap" id="letmeopen4">
        <div class="popup-box transform-out">
          <h2>白蘿蔔</h2>
          <h3>
            豐富膳食纖維，且同時含有鉀、鈉、維生素、葉酸等人體必須營養素。
          </h3>
          <a class="close-btn popup-close" href="#"
            ><img src="@/assets/images/index/close.png"
          /></a>
        </div>
      </div>
      <div class="popup-wrap" id="letmeopen5">
        <div class="popup-box transform-out">
          <h2>蔥</h2>
          <h3>
            其葉部綠色部份稱「蔥管」，含多量的葉紅素(維他命A)，鱗莖稱「蔥頭」，富含維他命B、C。
          </h3>
          <a class="close-btn popup-close" href="#"
            ><img src="@/assets/images/index/close.png"
          /></a>
        </div>
      </div>
      <div class="popup-wrap" id="letmeopen6">
        <div class="popup-box transform-out">
          <h2>甜橙</h2>
          <h3>
            含有醣類、膳食纖維、維生素B群、維生素C、類胡蘿蔔素、鈣、磷、鉀、檸檬酸、果膠等營養素，是鉀含量頗高的水果。
          </h3>
          <a class="close-btn popup-close" href="#"
            ><img src="@/assets/images/index/close.png"
          /></a>
        </div>
      </div>
      <div class="popup-wrap" id="letmeopen7">
        <div class="popup-box transform-out">
          <h2>小番茄</h2>
          <h3>
            茄紅素具有抗氧化能力。因環境、壓力、作息不正常會引起氧化壓力自由基，茄紅素可減少身體被自由基傷害，並延緩身體老化。
          </h3>
          <a class="close-btn popup-close" href="#"
            ><img src="@/assets/images/index/close.png"
          /></a>
        </div>
      </div>
      <div class="popup-wrap" id="letmeopen8">
        <div class="popup-box transform-out">
          <h2>地瓜</h2>
          <h3>
            含有維生素 C
            ，並含有豐富的鈣質、葉酸、鉀及β-胡蘿蔔素；β-胡蘿蔔素是能夠在體內轉換為維生素
            A 的抗氧化物。
          </h3>
          <a class="close-btn popup-close" href="#"
            ><img src="@/assets/images/index/close.png"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "index",
  components: {},
};
</script>
