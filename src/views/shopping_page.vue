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
          <span class="cart_nothing">目前購物車空無一物</span>
        </div>
        <div class="incart_total">
          總和
          <span class="cart_total_price">0</span>元
        </div>
        <div class="incart_checkout_block">
          <a class="incart_checkout_btn" href="./checkout.html">結帳去</a>
        </div>
      </div>
      <!-- 購物車彈窗結束  -->
    </header>

    <!-- 當頁內容開始 -->
    <div id="shopping_page">
      <div class="shopping_main_block">
        <!-- 側邊欄開始 -->
        <img
          class="shopping_aside_pic"
          src="@/assets/images/shopping_page/shopping_side.svg"
          alt="aside"
        />
        <div class="shopping_nav_block">
          <h2 class="show_out_block">商品一覽</h2>
          <hr />
          <div class="show_box_block">
            <div class="shopping_box_block">
              <h3 class="shopping_box_slide">
                蔬果箱
                <img
                  class="shopping_aside_arrow"
                  src="@/assets/images/shopping_page/shopping_arrow_icon.svg"
                  alt=""
                />
              </h3>
              <div class="shopping_box_link">
                <a href="#" v-for="(box, index) in boxs" :key="index">{{
                  box
                }}</a>
              </div>
            </div>
            <div class="shopping_veg_block">
              <h3 class="shopping_veg_slide">
                蔬菜
                <img
                  class="shopping_aside_arrow"
                  src="@/assets/images/shopping_page/shopping_arrow_icon.svg"
                  alt=""
                />
              </h3>
              <div class="shopping_veg_link">
                <a href="#" v-for="(veg, index) in vegs" :key="index">{{
                  veg
                }}</a>
              </div>
            </div>
            <div class="shopping_fruit_block">
              <h3 class="shopping_fruit_slide">
                水果
                <img
                  class="shopping_aside_arrow"
                  src="@/assets/images/shopping_page/shopping_arrow_icon.svg"
                />
              </h3>
              <div class="shopping_fruit_link">
                <a href="#" v-for="(fruit, index) in fruits" :key="index">{{
                  fruit
                }}</a>
              </div>
            </div>
            <div class="shopping_customer_block">
              <h3>
                <a href="./fruit_box.html">客製蔬果箱</a>
              </h3>
            </div>
          </div>
        </div>
        <!-- 側邊欄結束 -->

        <div class="shopping_page_list">
          <!-- 資料庫撈出資料迴圈秀出 -->
          <div
            class="shopping_product_block"
            v-for="(item, index) in page_products"
            :key="index"
          >
            <a href="./itemtest.html">
              <div class="shopping_product_pic">
                <img :src="item.PRODUCT_IMG" :alt="item.ID" />
                <span
                  @click.prevent="incart(index)"
                  class="shopping_product_incart"
                ></span>
              </div>
              <h4 class="shopping_product_name">{{ item.PRODUCT_NAME }}</h4>
              <h5 class="shopping_product_intro">
                {{ item.PRODUCT_INFO }}
              </h5>
              <h4 class="shopping_product_price">{{ item.PRODUCT_PRICE }}元</h4>
            </a>
          </div>

          <!-- 換頁 -->
          <div class="shooping_change_page">
            <div class="change_page_block">
              <div class="circle_base_prev"></div>
              <div class="page_prev" @click="prevPage">
                <img
                  src="@/assets/images/shopping_page/shopping_prev_arrow.svg"
                  alt="上一頁"
                />
              </div>
              <div class="shopping_page_01" @click="move_page(1)">
                1
              </div>
              <div class="shopping_page_02" @click="move_page(2)">
                2
              </div>
              <div class="shopping_page_03" @click="move_page(3)">
                3
              </div>
              <div class="shopping_page_04" @click="move_page(4)">
                4
              </div>
              <div class="page_next" @click="nextPage">
                <img
                  src="@/assets/images/shopping_page/shopping_prev_arrow.svg"
                  alt="下一頁"
                />
              </div>
              <div class="circle_base_next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 當頁內容結束 -->
  </div>
</template>
<script>
const $ = window.$;
export default {
  data() {
    return {
      page: 1,
      limit: 9,
      boxs: ["防疫蔬果箱", "活力蔬果箱", "防果箱"],
      vegs: [
        "高麗菜",
        "地瓜",
        "大番茄",
        "小白菜",
        "玉米",
        "紅蘿蔔",
        "白蘿蔔",
        "萵苣",
        "青椒",
        "甜椒",
        "青江菜",
        "地瓜葉",
        "A菜",
        "玉米筍",
        "南瓜",
        "小黃瓜",
        "洋蔥",
      ],
      fruits: [
        "草莓",
        "小番茄",
        "甜橙",
        "芒果",
        "香蕉",
        "番石榴",
        "檸檬",
        "鳳梨",
        "柿子",
        "哈密瓜",
        "香瓜",
        "木瓜",
      ],
      products: [],
      totalPrice: 0,
    };
  },
  methods: {
    // 購物車功能
    incart(index) {
      console.log(this.products[index]);
      console.log(this.products[index].PRODUCT_NAME);
      let product_name = this.products[index].PRODUCT_NAME;
      let product_price = parseInt(this.products[index].PRODUCT_PRICE);
      let product_img = this.products[index].PRODUCT_IMG;
      let product_value = 1;
      let item_id = Date.now();
      alert("已加入購物車");
      $(".cart_nothing").fadeOut();
      $(".cart_buy_list").append(
        `
                <div class="cart_inside_item" data-id="${item_id}">
                  <div class="cart_item_img">
                    <img src="${product_img}"/>  
                  </div>
                  <div class="cart_item_name">${product_name}</div>
                  <div class="cart_item_number">
                    <button>-</button>
                    <input type="text" value="${product_value}"/ disabled>
                    <button>+</button>
                  </div>
                  <div class="cart_item_price">${product_price}</div>
                  <div class="cart_item_delete">
                    <img src="./images/checkout/delete_icon.svg"/>  
                  </div>
                </div>
              `
      );
      this.totalPrice += product_price;
      // $('.cart_total_price').html('');
      // $(".cart_total_price").html(shopping_page.totalPrice);

      let cart_item = {
        item_id: item_id,
        item_img: product_img,
        item_name: product_name,
        item_number: product_value,
        item_price: product_price,
      };
      let cart_items = JSON.parse(localStorage.getItem("cart_items"));
      if (cart_items) {
        // 若存在
        console.log("已存在");
        cart_items.unshift(cart_item);
      } else {
        // 若不存在
        console.log("不存在");
        cart_items = [cart_item];
      }
      localStorage.setItem("cart_items", JSON.stringify(cart_items));
    },
    move_page(index) {
      this.page = index;
      console.log(this.products);
    },
    prevPage() {
      if (this.page != 1) {
        this.page -= 1;
      }
    },
    nextPage() {
      if (this.page != 4) {
        this.page += 1;
      }
    },
  },
  mounted() {
    // $.getJSON('./js/products.json').then(res => this.products = res);
    // $.ajax({
    //   method: "POST",
    //   url: "php/getProduct.php",
    //   data: {},
    //   dataType: "json",
    //   success: function(response) {
    //     // shopping_page.products = response;
    //   },
    //   error: function(exception) {
    //     alert("發生錯誤: " + exception.status);
    //   },
    // });
  },
  computed: {
    page_products() {
      const last_index = this.page * (this.limit - 1);
      const first_index = (this.page - 1) * (this.limit - 1);
      const page_product = [];
      for (let i = first_index; i < this.products.length; i++) {
        if (last_index < i) break;
        page_product.push(this.products[i]);
      }
      return page_product;
    },
  },
};
</script>
