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
            聯絡我們
            <img src="@/assets/images/cotact_us.svg" width="25px" alt="" />
          </button>
          <a class="buy_now" href="./shopping_page.html">
            立即買<img src="@/assets/images/buy_now.svg" width="25px" alt="" />
          </a>
        </div>
        <div class="title_pic">
          <img
            src="@/assets/images/farm/product_introduction/vagatable_introduction_bg.jpg"
            alt="checkout_pic"
          />
          <span class="bkc_black"></span>
          <h1>蔬菜介紹</h1>
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
    <div class="production_summary">
      <div class="production_summary_para">
        <div class="production_summary_title">
          <h2 class="farm_title_h2">生產過程特點</h2>
        </div>
        <p>
          採用對環境友善的栽培方式種植，栽培過程不使用農藥，並搭配AI智慧監控技術，有效控制環境含氮量、溫度、病蟲害防治，提高生產力。
        </p>
      </div>
    </div>
    <!-- 生產流程介紹 -->
    <div class="production_process_box vagatable_production_process_box">
      <div class="production_process">
        <div clss="production_process_title">
          <h2 class="farm_title_h2">生產流程介紹</h2>
        </div>
        <div class="process_content_box">
          <div class="process_content">
            <div class="process_item">
              <h4>1.育苗</h4>
              <img
                src="@/assets/images/farm/vagatable_page/process01.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>2.土壤準備</h4>
              <img
                src="@/assets/images/farm/vagatable_page/process02.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>3.移植</h4>
              <img
                src="@/assets/images/farm/vagatable_page/process03.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>4.肥料</h4>
              <img
                src="@/assets/images/farm/vagatable_page/process04.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>5.疏苗</h4>
              <img
                src="@/assets/images/farm/vagatable_page/process05.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>6.灌溉</h4>
              <img
                src="@/assets/images/farm/vagatable_page/process06.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>7.採收</h4>
              <img
                src="@/assets/images/farm/vagatable_page/process07.jpg"
                alt="process"
              />
            </div>
          </div>
          <!-- 進度條 -->
          <div class="process_bar">
            <div class="bar_item">
              <div class="small_bar bar_01"></div>
              <div class="small_bar bar_02"></div>
              <div class="small_bar bar_03"></div>
              <div class="small_bar bar_04"></div>
              <div class="small_bar bar_05"></div>
              <div class="small_bar bar_06"></div>
              <div class="small_bar bar_07"></div>
            </div>
          </div>
        </div>
        <div class="vagatable_process_box">
          <div class="vagatable_process_content">
            <div class="vagatable_process_pic">
              <img
                src="@/assets/images/farm/vagatable_page/process_b01.jpg"
                alt="process"
              />
            </div>
            <div class="vagatable_process_descript">
              <h3>01.育苗</h3>
              <p>選用優良苗株，並種植在穴盤內</p>
            </div>
          </div>

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/vagatable_page/process_b02.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>02.土壤準備</h3>
            <p>使用富含益生菌、多種有益微生物的培養土，土壤無污染，不含病菌及害蟲。</p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/vagatable_page/process_b03.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>03.移植</h3>
            <p>待種子於育苗盤中培育25~30天，發芽長出4~5枚本葉，便可將蔬菜苗移植至田壟。
              由於育苗蔬菜之幼苗生長勢弱，加上為了易於去除雜草，故需控制植株間栽培之行株距，而行株距通常也會依氣候的差異進行調整。
            </p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/vagatable_page/process_b04.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>04.肥料</h3>
            <p>採用黑水虻幼蟲分解廚餘所轉換的虻糞施肥。
            </p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/vagatable_page/process_b05.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>05.疏苗</h3>
            <p>目的主要為避免蔬菜於栽培期間幼苗生長過密導致徒長及空氣不流通，而於適當時期進行拔除採收部分蔬菜，以利其生長。
            </p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/vagatable_page/process_b06.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>06.灌溉</h3>
            <p>通常於清晨或傍晚引水灌溉，提供植株水分。但需注意排水，避免水分過多及淹水過久，以免土壤水分過多使土中空氣稀少而阻礙根部呼吸作用。
            </p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/vagatable_page/process_b07.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>07.採收</h3>
            <p>待蔬菜生長到達生長週期即可採收。
            </p>
          </div>
        </div> -->
        </div>
      </div>
      <div class="bg_white_radish_pic">
        <img src="@/assets/images/farm/box_1.png" alt="大根" />
      </div>
    </div>

    <!-- 蔬果產期表 -->
    <div class="vagatable_vagatable_table">
      <h2>蔬菜產期表</h2>
      <div class="vagatable_tb">
        <!-- 月份 -->
        <div class="v_row" id="vagatable_months">
          <div class="v_tr">
            <div class="v_th">月份</div>
            <div class="v_td">1</div>
            <div class="v_td">2</div>
            <div class="v_td">3</div>
            <div class="v_td">4</div>
            <div class="v_td">5</div>
            <div class="v_td">6</div>
            <div class="v_td">7</div>
            <div class="v_td">8</div>
            <div class="v_td">9</div>
            <div class="v_td">10</div>
            <div class="v_td">11</div>
            <div class="v_td">12</div>
          </div>
        </div>

        <div class="v_row" id="cabbage">
          <div class="v_tr">
            <div class="v_th">高麗菜</div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
          </div>
        </div>

        <div class="v_row" id="chinese_cabbage">
          <div class="v_tr">
            <div class="v_th">小白菜</div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
          </div>
        </div>

        <div class="v_row" id="lettuce">
          <div class="v_tr">
            <div class="v_th">萵苣</div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
          </div>
        </div>

        <div class="v_row" id="carrot">
          <div class="v_tr">
            <div class="v_th">紅蘿蔔</div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
          </div>
        </div>

        <div class="v_row" id="white_radish">
          <div class="v_tr">
            <div class="v_th ">白蘿蔔</div>
            <div class="v_td y"></div>
            <div class="v_td y"></div>
            <div class="v_td y"></div>
            <div class="v_td y"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td y"></div>
          </div>
        </div>

        <div class="v_row" id="corn">
          <div class="v_tr">
            <div class="v_th">玉米</div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
          </div>
        </div>

        <div class="v_row" id="tomato">
          <div class="v_tr">
            <div class="v_th">大番茄</div>
            <div class="v_td y"></div>
            <div class="v_td y"></div>
            <div class="v_td y"></div>
            <div class="v_td y"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
          </div>
        </div>

        <div class="v_row" id="sweet_potato">
          <div class="v_tr">
            <div class="v_th">地瓜</div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
            <div class="v_td y"></div>
            <div class="v_td y"></div>
            <div class="v_td y"></div>
            <div class="v_td"></div>
            <div class="v_td"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="vagatable_detail_introduce_box">
      <div class="vagatable_detail_introduce_content">
        <div class="vagatable_etail_introduce_title">
          <h2 class="farm_title_h2">品種介紹</h2>
        </div>
        <div class="vagatable_detail_introduce_item_box">
          <div class="vagatable_detail_introduce_item">
            <img
              src="@/assets/images/farm/vagatable/cabbage.png"
              alt="cabbage"
            />
          </div>
          <div class="vagatable_detail_introduce_item">
            <img
              src="@/assets/images/farm/vagatable/chinese_cabbage.png"
              alt="chinese_cabbage"
            />
          </div>
          <div class="vagatable_detail_introduce_item">
            <img
              src="@/assets/images/farm/vagatable/lettuce_01.png"
              alt="lettuce"
            />
          </div>
          <div class="vagatable_detail_introduce_item">
            <img src="@/assets/images/farm/vagatable/carrot.png" alt="carrot" />
          </div>
          <div class="vagatable_detail_introduce_item">
            <img
              src="@/assets/images/farm/vagatable/white_radish.png"
              alt="white_radish"
            />
          </div>
          <div class="vagatable_detail_introduce_item">
            <img src="@/assets/images/farm/vagatable/corn.png" alt="corn" />
          </div>
          <div class="vagatable_detail_introduce_item">
            <img src="@/assets/images/farm/vagatable/tomato.png" alt="tomato" />
          </div>
          <div class="vagatable_detail_introduce_item">
            <img
              src="@/assets/images/farm/vagatable/sweet_potato.png"
              alt="sweet_potato"
            />
          </div>
        </div>
        <!-- 品種介紹內容 -->
        <div class="vagatable_detail_introduce_detail_content_box">
          <div class="vagatable_detail_introduce_detail_content">
            <div class="vagatable_detail_introduce_detail_pic">
              <img
                src="@/assets/images/farm/vagatable/cabbage.jpg"
                alt="cabbage"
              />
            </div>
            <div class="vagatable_detail_introduce_detail_pic_title">
              <h3>高麗菜</h3>
            </div>
            <div class="vagatable_introduce">
              <div class="vagatable_vertify_name">
                <h5>品種名稱:</h5>
                <p>台南1號(夏初秋)</p>
              </div>
              <div class="vagatable_planting_conditions">
                <h5>種植條件:</h5>
                <p>充足水分，適合溫度為15~21度，排水良好的砂質土壤</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="farm_products_box">
      <div class="farm_products">
        <div class="farm_products_title">
          <h2 class="farm_title_h2">生產的農產品</h2>
        </div>
        <div class="farm_products_item_box">
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/vagatable/s_cabbage.jpg"
              alt="cabbage"
            />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/vagatable/s_tomato.jpg"
              alt="tomato"
            />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/vagatable/s_white_radish.jpg"
              alt="white_radish"
            />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/vagatable/s_carrot.jpg"
              alt="carrot"
            />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/vagatable/s_corn.jpg" alt="corn" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/vagatable/s_onion.jpg" alt="onion" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/vagatable/s_lettuce.jpg"
              alt="lettuce"
            />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/vagatable/s_chinese_cabbage.jpg"
              alt="chinese_cabbage"
            />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/vagatable/s_sweet_potato.jpg"
              alt="sweet_potato"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
