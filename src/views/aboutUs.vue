<template>
  <div class="aboutUs">
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

    <div class="about_us_box">
      <!-- 檸檬裝飾圖案 -->
      <div class="bg_lemon_pic">
        <img src="@/assets/images/farm/bg_lemon.png" alt="黃檸檬" />
      </div>
      <h1>農場介紹</h1>
      <div class="about_us_content">
        <div class="about_us_title">
          <h2 class="farm_title_h2">農場的源起</h2>
        </div>

        <div class="about_us_text">
          <p>
            我們是一群熱血的青農，因共同理念而於2021年一同創業投入農業領域，希望帶給人們營養、美味、新鮮的蔬果，農場採用友愛生態環境的有機農法栽種，蔬果也生長的碩大、香甜可口。
          </p>
        </div>
        <div class="farm_managers_box">
          <div class="farm_managers_items_box">
            <div class="farm_managers_items items_up">
              <div class="manager_photo">
                <img src="@/assets/images/farm/managers/01.jpg" />
              </div>
              <div class="manager_name">
                <p>楊紹暐</p>
              </div>
            </div>
          </div>

          <div class="farm_managers_items_box">
            <div class="farm_managers_items items_down">
              <div class="manager_photo">
                <img src="@/assets/images/farm/managers/02.jpg" />
              </div>
              <div class="manager_name">
                <p>林晏聖</p>
              </div>
            </div>
          </div>
          <div class="farm_managers_items_box">
            <div class="farm_managers_items items_up">
              <div class="manager_photo">
                <img src="@/assets/images/farm/managers/03.jpg" />
              </div>
              <div class="manager_name">
                <p>陳双淋</p>
              </div>
            </div>
          </div>

          <div class="farm_managers_items_box">
            <div class="farm_managers_items items_down">
              <div class="manager_photo">
                <img src="@/assets/images/farm/managers/04.jpg" />
              </div>
              <div class="manager_name">
                <p>陳葳</p>
              </div>
            </div>
          </div>

          <div class="farm_managers_items_box">
            <div class="farm_managers_items items_up">
              <div class="manager_photo">
                <img src="@/assets/images/farm/managers/05.jpg" />
              </div>
              <div class="manager_name">
                <p>林晏</p>
              </div>
            </div>
          </div>

          <div class="farm_managers_items_box">
            <div class="farm_managers_items items_down">
              <div class="manager_photo">
                <img src="@/assets/images/farm/managers/06.jpg" />
              </div>
              <div class="manager_name">
                <p>鄒璦蓮</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 輪播 -->
    <div class="farm_introduction_box">
      <h2 class="farm_title_h2">關於農場</h2>
      <div class="farm_introduction_scroll">
        <div class="farm_environment_box">
          <div class="farm_photo">
            <img src="@/assets/images/farm/farm_scroll_01.jpg" />
          </div>
          <div class="introduction_box">
            <div class="introduction_para">
              <h3 class="item_title">概述</h3>
              <p>
                本農場座落於台灣中南部，占地三千公頃，主打採用守護環境的栽培方式，生產多樣化蔬菜、水果，農場內也有規劃相關體驗活動，適合親子一同前來體驗農事的樂趣，親近大自然。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 農場介紹 -->
    <div class="farm_description_box">
      <div class="farm_descript_item">
        <div class="farm_description_item_box">
          <!-- 農場使用建材 -->
          <div class="about_farm farm_building_materials farm_left ">
            <!-- 裝飾小動物 -->
            <div class="farm_decoration_pic">
              <img
                src="@/assets/images/farm/animal_alpaca_suri .png"
                alt="decoration_animal"
              />
            </div>
            <div class="farm_photo">
              <img src="@/assets/images/farm/farm01.jpg" />
            </div>
            <div class="farm_text">
              <h3 class="item_title">農場的建材</h3>
              <p>
                本農場農舍建材來自農場自產之蕈菇菌絲體的「生物基材料」所組成，菌絲體可以吸收自己重量
                2 倍的二氧化碳量，因此能夠抵銷建築物的碳足跡。
              </p>
            </div>
          </div>
          <!-- 生物多樣性 -->
          <div class="about_farm  biodiversity farm_right">
            <!-- 裝飾植物 -->
            <div class="farm_decoration_pic">
              <img
                src="@/assets/images/farm/y_flower.png"
                alt="decoration_animal"
              />
            </div>
            <div class="farm_photo">
              <img src="@/assets/images/farm/wild_animal.jpg" />
            </div>
            <div class="farm_text">
              <h3 class="item_title">生物多樣性</h3>
              <p>
                果園採用草生栽培，雜草的存在可以豐富農田生態的多樣性，不只提供了生物棲息地，還能培養地利，留住土壤中的水分，有的雜草還能降低作物受到病蟲害影響。
              </p>
            </div>
          </div>

          <!-- 生產的設備 -->
          <div class="about_farm production_equipment farm_left">
            <!-- 裝飾動物 -->
            <div class="farm_decoration_pic">
              <img
                src="@/assets/images/farm/animal_alpaca_suri .png"
                alt="decoration_animal"
              />
            </div>
            <div class="farm_photo">
              <img src="@/assets/images/farm/farm02.jpg" />
            </div>
            <div class="farm_text">
              <h3 class="item_title">生產的設備</h3>
              <p>
                蔬菜採室內栽培，溫室採用先進AI自動化控制系統，可保持室內溫度，也能防風、防寒、防蟲，並導入自動化設備，達到省工及穩定產能與品質的目的。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
