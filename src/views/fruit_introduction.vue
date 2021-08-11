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
          <a class="buy_now" href="./shopping_page.html">
            立即買<img src="@/assets/images/buy_now.svg" width="25px" alt="" />
          </a>
        </div>
        <div class="title_pic">
          <img
            src="@/assets/images/farm/product_introduction/fruit_introduction_bg.jpg"
            alt="checkout_pic"
          />
          <span class="bkc_black"></span>
          <h1>水果介紹</h1>
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

      <!-- 聯絡我們 -->
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
    <div class="production_summary">
      <div class="production_summary_para">
        <div class="production_summary_title">
          <h2>生產過程特點</h2>
        </div>
        <p>
          採用對環境友善的栽培方式種植，栽培過程不使用農藥，並搭配AI智慧監控技術，
          <br />
          有效控制環境含氮量、溫度、病蟲害防治，提高生產力。
        </p>
      </div>
    </div>
    <!-- 生產流程介紹 -->
    <div class="production_process_box">
      <div class="production_process">
        <div clss="production_process_title">
          <h2>生產流程介紹</h2>
        </div>
        <div class="process_content_box">
          <div class="process_content">
            <div class="process_item">
              <h4>1.苗木</h4>
              <img
                src="@/assets/images/farm/fruit_page/process_s01.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>2.種植行株距</h4>
              <img
                src="@/assets/images/farm/fruit_page/process_s02.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>3.施肥</h4>
              <img
                src="@/assets/images/farm/fruit_page/process_s03.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>4.整枝</h4>
              <img
                src="@/assets/images/farm/fruit_page/process_s04.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>5.開花</h4>
              <img
                src="@/assets/images/farm/fruit_page/process_s05.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>6.結果</h4>
              <img
                src="@/assets/images/farm/fruit_page/process_s06.jpg"
                alt="process"
              />
            </div>
            <div class="process_item">
              <h4>7.採收</h4>
              <img
                src="@/assets/images/farm/fruit_page/process_s07.jpg"
                alt="process"
              />
            </div>
          </div>
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
        <div class="fruit_process_box">
          <div class="fruit_process_content">
            <div class="fruit_process_pic">
              <img
                src="@/assets/images/farm/fruit_page/process_L01.jpg"
                alt="process"
              />
            </div>
            <div class="fruit_process_descript">
              <h3>01.苗木</h3>
              <p>
                選用無病蟲害，有完整密集分布均勻根系，並且擁有較多的側根和鬚根的強壯苗株。
              </p>
            </div>
          </div>

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/fruit_page/process_L02.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>02.種植行株距</h3>
            <p>依據果樹不同而有各自適合的行距，適宜的行距可使果樹有良好的日照通風、以及便於後續採果。</p>
          </div>
        </div> -->
          <!-- 
        <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/fruit_page/process_L03.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>03.施肥</h3>
            <p>採用黑水虻幼蟲分解廚餘所轉換的虻糞施肥。
              
            </p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/fruit_page/process_L04.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>04.整枝</h3>
            <p>讓果樹能吸收足夠的水分與養分，並將具有生產能力的芽做適度的分
              配，使之能均勻分配到整個生產基地所佔的空間，以及提高果樹的生產潛能。
            </p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/fruit_page/process_L05.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>05.開花</h3>
            <p>經採花、取粉、授粉後，還須具備其他條件，果樹才會開始結果。
            </p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/fruit_page/process_L06.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>06.結果</h3>
            <p>會因品種不同而實施套袋作業，使果實外觀著色均勻，並防止病蟲害。
            </p>
          </div>
        </div> -->

          <!-- <div class="vagatable_process_content">
          <div class="vagatable_process_pic">
            <img src="@/assets/images/farm/fruit_page/process_L07.jpg" alt="process">
          </div>
          <div class="vagatable_process_descript">
            <h3>07.採收</h3>
            <p>待果樹果實生長成熟即可採收。
            </p>
          </div>
        </div> -->
        </div>
      </div>
      <div class="bg_strawberry_pic">
        <img src="@/assets/images/farm/bg_strawberry.png" alt="草莓" />
      </div>
    </div>
    <!-- 蔬果產期表 -->
    <div class="fruit_fruit_table">
      <h2>水果產期表</h2>
      <div class="fruit_tb">
        <!-- 月份 -->
        <div class="f_row" id="fruit_months">
          <div class="f_tr">
            <div class="f_th">月份</div>
            <div class="f_td">1</div>
            <div class="f_td">2</div>
            <div class="f_td">3</div>
            <div class="f_td">4</div>
            <div class="f_td">5</div>
            <div class="f_td">6</div>
            <div class="f_td">7</div>
            <div class="f_td">8</div>
            <div class="f_td">9</div>
            <div class="f_td">10</div>
            <div class="f_td">11</div>
            <div class="f_td">12</div>
          </div>
        </div>

        <div class="f_row" id="strawberry">
          <div class="f_tr">
            <div class="f_th">草莓</div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td y"></div>
          </div>
        </div>

        <div class="f_row" id="mango">
          <div class="f_tr">
            <div class="f_th">芒果</div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
          </div>
        </div>

        <div class="f_row" id="orange">
          <div class="f_tr">
            <div class="f_th">柳丁</div>
            <div class="f_td y"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
          </div>
        </div>

        <div class="f_row" id="cherry_tomato">
          <div class="f_tr">
            <div class="f_th">小番茄</div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
          </div>
        </div>

        <div class="f_row" id="banana">
          <div class="f_tr">
            <div class="f_th">香蕉</div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td y"></div>
          </div>
        </div>

        <div class="f_row" id="guava">
          <div class="f_tr">
            <div class="f_th">芭樂</div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
          </div>
        </div>

        <div class="f_row" id="lemon">
          <div class="f_tr">
            <div class="f_th">檸檬</div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
          </div>
        </div>

        <div class="f_row" id="persimmon">
          <div class="f_tr">
            <div class="f_th">柿子</div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td"></div>
            <div class="f_td y"></div>
            <div class="f_td y"></div>
            <div class="f_td"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="fruit_detail_introduce_box">
      <div class="fruit_detail_introduce_content">
        <div class="fruit_detail_introduce_title">
          <h2>品種介紹</h2>
        </div>
        <div class="fruit_detail_introduce_item_box">
          <div class="fruit_detail_introduce_item strawberry">
            <img src="@/assets/images/farm/fruit/strawberry.png" alt="strawberry" />
          </div>
          <div class="fruit_detail_introduce_item mango">
            <img src="@/assets/images/farm/fruit/mango.png" alt="mango" />
          </div>
          <div class="fruit_detail_introduce_item orange">
            <img src="@/assets/images/farm/fruit/orange.png" alt="orange" />
          </div>
          <div class="fruit_detail_introduce_item cherry_tomato">
            <img
              src="@/assets/images/farm/fruit/cherry_tomato_01.png"
              alt="cherry_tomato"
            />
          </div>
          <div class="fruit_detail_introduce_item banana">
            <img src="@/assets/images/farm/fruit/banana.png" alt="banana" />
          </div>
          <div class="fruit_detail_introduce_item guava">
            <img src="@/assets/images/farm/fruit/guava.png" alt="guava" />
          </div>
          <div class="fruit_detail_introduce_item lemon">
            <img src="@/assets/images/farm/fruit/lemon.png" alt="lemon" />
          </div>
          <div class="fruit_detail_introduce_item persimmon">
            <img src="@/assets/images/farm/fruit/persimmon.png" alt="persimmon" />
          </div>
        </div>
        <!-- 品種介紹內容 -->
        <div class="fruit_detail_introduce_detail_content_box">
          <div class="fruit_detail_introduce_detail_content">
            <div class="fruit_detail_introduce_detail_pic">
              <img src="@/assets/images/farm/fruit/strawberry.jpg" alt="cabbage" />
            </div>
            <div class="fruit_detail_introduce_detail_pic_title">
              <h3>草莓</h3>
            </div>
            <div class="fruit_introduce">
              <div class="fruit_vertify_name">
                <h5>品種名稱:</h5>
                <p>台農1號 (結合香水與豐香的新品種)</p>
              </div>
              <div class="fruit_planting_conditions">
                <h5>種植條件:</h5>
                <p>
                  草莓喜溫涼氣候，宜生長於肥沃、疏鬆透氣、保水保肥好，以及pH值為5.5-6.5之土壤，土壤含水量至少需70%。
                </p>
              </div>
              <div class="swetness">
                <h5>甜度:</h5>
                <p>約為10～12度，最高可達14度</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="farm_products_box">
      <div class="farm_products">
        <div class="farm_products_title">
          <h2>生產的農產品</h2>
        </div>
        <div class="farm_products_item_box">
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/fruit/s_strawberry.jpg" alt="strawberry" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/fruit/s_mango.jpg" alt="mango" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/fruit/s_cherry_tomato.jpg"
              alt="cherry_tomato"
            />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/fruit/s_banana.jpg" alt="banana" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/fruit/s_guava.jpg" alt="guava" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/fruit/s_persimmon.jpg" alt="persimmon" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/fruit/s_lemon.jpg" alt="lemon" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img src="@/assets/images/farm/fruit/s_orange.jpg" alt="orange" />
          </div>
          <div class="farm_products_item">
            <a href="./shopping_page.html"></a>
            <img
              src="@/assets/images/farm/fruit/s_cherry_tomato01.jpg"
              alt="cherry_tomato"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
