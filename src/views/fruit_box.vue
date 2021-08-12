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

    <!-- 手機版標題 -->

    <div class="fruit_title">
      <h2>客製化蔬果箱</h2>
      <div class="under_line"></div>
    </div>

    <!-- 蔬果箱欄位 -->

    <div class="fruits_box_two">
      <!-- 移除選項 -->
      <div class="fruits_remove_menu">
        <div class="choose_text">
          <h4>已選擇商品</h4>
        </div>
        <div class="five_fruits">
          <div
            class="fruit_1"
            v-for="(goodbye, index) in delete_basket"
            :key="`remove-${index}`"
          >
            <button @click="green_remove(goodbye)">
              ×
            </button>
            <img :src="goodbye.image" width="100%" />
            <!-- {{goodbye}} -->
          </div>
        </div>
      </div>

      <!-- 蔬菜箱 -->

      <div class="fruits_basket">
        <!-- 木箱 -->
        <div class="outer_layer">
          <img src="@/assets/images/fruit_box/box_1.png" id="wooden" />

          <transition-group tag="div" class="img_src" name="fruits">
            <div
              v-for="(item, index) in picture_in_box"
              class="img_src"
              :id="item.id"
              :key="`item_in_img-${index}`"
              style="position: absolute"
            >
              <img
                :src="item.img_src"
                class="animate__animated animate__backInDown"
              />
              <!-- {{ go_item }} -->
            </div>
          </transition-group>
          <img src="@/assets/images/fruit_box/box.png" id="wooden_box" />
        </div>
      </div>

      <!-- 刪除按鈕、確認 @click="check" @click="bye"-->
      <div class="fruits_check_butten">
        <button class="box_check">
          <img src="@/assets/images/fruit_box/check.svg" width="25px" />
        </button>
        <button class="box_delete">
          <img src="@/assets/images/fruit_box/delete.svg" width="25px" />
        </button>
      </div>
    </div>

    <!-- 按確認購買 跳購買視窗 -->

    <!-- 價位按鈕 -->
    <div class="price_all">
      <div class="select_amount">
        <h3>step 1.請選擇金額</h3>
      </div>

      <div class="box_price_butten">
        <button
          v-for="price in priceList"
          :key="`priceList-${price}`"
          @click="change_fruits(price)"
          style="color:white"
          :class="{
            id1: price === go_price,
          }"
        >
          $ {{ price }}
        </button>
      </div>
    </div>
    <!-- 選擇蔬果第二大欄 -->
    <div class="select_fruits">
      <!-- 步驟2 -->
      <div class="select_second">
        <h3>step 2.選擇蔬果</h3>
      </div>
      <!-- 三種金額 -->
      <div class="butten_check_price">
        <button>$ {{ go_price }}</button>
      </div>
      <!-- {{basket}} -->
      <!-- 八樣青菜選擇五樣青菜 -->
      <div class="fruits_basket">
        <div class="fruits_first_row">
          <!-- 選擇內部 -->
          <div
            v-for="(fruit, index) in box"
            :key="`fruit_in_box-${index}`"
            class="box"
            @click="pull_basket(fruit.id)"
          >
            <img
              :src="fruit.image"
              :class="{
                togborder: isActive(fruit.id),
              }"
            />

            <p>{{ fruit.title }}</p>
            <h5>
              <pre>{{ fruit.unit }}</pre>
            </h5>
          </div>
          <!-- {{ basket }} -->
          <div class="product_directions">
            <h4>{{ weight[go_price] }}</h4>
          </div>
        </div>
        <!-- {{go_weight}} -->
      </div>
    </div>

    <!-- 滿額贈 -->
    <div class="free_give">
      <template>
        <div class="free_give_people">
          <div class="free_title">
            <h3>滿額贈</h3>
          </div>
          <div class="under_line"></div>

          <div class="free_all" style="display: flex">
            <!-- 商品贈品 -->

            <div
              data-aos="zoom-in"
              data-aos-easing="6000"
              style="display: flex"
            >
              <div v-show="go_price === 399">
                <div class="garlic">
                  <p>$399贈</p>
                  <img src="@/assets/images/fruit_box/give/garlic.png" />
                </div>
              </div>

              <div v-show="go_price === 499" style="display: contents">
                <div class="garlic">
                  <p>$499贈</p>
                  <img src="@/assets/images/fruit_box/give/garlic.png" />
                </div>
                <div class="ginger">
                  <p>$499贈</p>
                  <img src="@/assets/images/fruit_box/give/ginger.png" />
                </div>
              </div>
              <div v-show="go_price === 599" style="display: contents">
                <div class="garlic">
                  <p>$599贈</p>
                  <img src="@/assets/images/fruit_box/give/garlic.png" />
                </div>
                <div class="ginger">
                  <p>$599贈</p>
                  <div class="ginger">
                    <img src="@/assets/images/fruit_box/give/ginger.png" />
                  </div>
                </div>
                <div class="leek">
                  <p>$599贈</p>
                  <div class="leek">
                    <img src="@/assets/images/fruit_box/give/leek.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- 蔬果箱推薦 -->
    <div class="free_give">
      <div class="free_give_people">
        <div class="free_title">
          <h3>蔬果箱推薦</h3>
        </div>
        <div class="under_line"></div>

        <!-- 下面三品蔬果箱 -->
        <div class="fruit_box_board">
          <div class="fruit_box_1">
            <a href="./itemtest.html">
              <div class="_mask"></div>
              <img
                src="@/assets/images/fruit_box/fruit_box.jpg"
                alt="商品圖片"
              />
              <p class="product_name">
                <i class="bi bi-cart4">&nbsp;</i>防疫蔬果箱
              </p>
            </a>
          </div>

          <div class="fruit_box_2">
            <a href="./itemtest.html">
              <div class="_mask"></div>
              <p class="product_name">
                <i class="bi bi-cart4">&nbsp;</i>快樂蔬果箱
              </p>
              <img
                src="@/assets/images/fruit_box/fruit_box.jpg"
                alt="商品圖片"
              />
            </a>
          </div>

          <div class="fruit_box_3">
            <a href="./itemtest.html">
              <div class="_mask"></div>
              <p class="product_name">
                <i class="bi bi-cart4">&nbsp;</i>營養蔬果箱
              </p>
              <img
                src="@/assets/images/fruit_box/fruit_box.jpg"
                alt="商品圖片"
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 插圖&背景 -->
    <div class="bg_fruit_box">
      <img
        class="ufo_ushi"
        src="@/assets/images/fruit_box/ufo_ushi.png"
        alt="ufo_ushi"
      />
      <img class="bg_img2" src="@/assets/images/index/07_02.svg" alt="" />
    </div>


  </div>
</template>
<script>
// const $ = window.$;
export default {
  data() {
    return {
      box: [],
      priceList: [399, 499, 599],
      weight: {
        399: "2-2.5kg 請選擇五樣",
        499: "3kg-4kg 請選擇五樣",
        599: "5kg-6kg 請選擇五樣",
      },
      go_weight: "2-2.5kg 請選擇五樣",
      go_price: 399,
      basket: [],
      fruits_item: [
        //399
        {
          id: 1,
          img_src: "./images/fruit_box/399/down/salad_d.png",
          title: "青江菜",
        },

        {
          id: 2,
          img_src: "./images/fruit_box/399/down/carrot_d.png",
          title: "紅蘿蔔",
        },

        {
          id: 3,
          img_src: "./images/fruit_box/399/down/pepper_d.png",
          title: "青椒",
        },

        {
          id: 4,
          img_src: "./images/fruit_box/399/down/avocado_d.png",
          title: "酪 梨",
        },

        {
          id: 5,
          img_src: "./images/fruit_box/399/down/tomato_d.png",
          title: "番茄",
        },

        {
          id: 6,
          img_src: "./images/fruit_box/399/down/orange_d.png",
          title: "橘子",
        },

        {
          id: 7,
          img_src: "./images/fruit_box/399/down/spinach_d.png",
          title: "空心菜",
        },

        {
          id: 8,
          img_src: "./images/fruit_box/399/down/babycorn_d.png",
          title: "玉米筍",
        },

        //499

        {
          id: 9,
          img_src: "./images/fruit_box/499/down/lemon_d.png",
          title: "檸檬",
        },

        {
          id: 10,
          img_src: "./images/fruit_box/499/down/w_salad_d.png",
          title: "小白菜",
        },

        {
          id: 11,
          img_src: "./images/fruit_box/499/down/onion_d.png",
          title: "洋蔥",
        },

        {
          id: 12,
          img_src: "./images/fruit_box/499/down/babycorn_d.png",
          title: "玉米筍",
        },

        {
          id: 13,
          img_src: "./images/fruit_box/499/down/radish_d.png",
          title: "白蘿蔔",
        },

        {
          id: 14,
          img_src: "./images/fruit_box/499/down/cucumber_d.png",
          title: "胡瓜",
        },

        {
          id: 15,
          img_src: "./images/fruit_box/399/down/salad_d.png",
          title: "青江菜",
        },

        {
          id: 16,
          img_src: "./images/fruit_box/499/down/persimmon_d.png",
          title: "柿子",
        },

        //599

        {
          id: 17,
          img_src: "./images/fruit_box/599/down/banana_d.png",
          title: "香蕉",
        },

        {
          id: 18,
          img_src: "./images/fruit_box/599/down/corn_d.png",
          title: "玉米",
        },

        {
          id: 19,
          img_src: "./images/fruit_box/599/down/pumpkin_d.png",
          title: "南瓜",
        },

        {
          id: 20,
          img_src: "./images/fruit_box/599/down/salad_d.png",
          title: "地瓜葉",
        },

        {
          id: 21,
          img_src: "./images/fruit_box/599/down/guava_d.png",
          title: "芭樂",
        },

        {
          id: 22,
          img_src: "./images/fruit_box/599/down/strawberry_d.png",
          title: "草莓",
        },

        {
          id: 23,
          img_src: "./images/fruit_box/599/down/cabbage_d.png",
          title: "高麗菜",
        },

        {
          id: 24,
          img_src: "./images/fruit_box/599/down/tomato_d.png",
          title: "番茄",
        },
      ],
      showfree: 399,
    };
  },
  computed: {
    isActive() {
      return (id) => {
        return this.basket.includes(id);
      };
    },
    delete_basket() {
      let result = [];
      this.box.forEach((item) => {
        this.basket.forEach((id) => {
          if (item.id === id) {
            result.push(item);
          }
        });
      });
      return result;
    },
    picture_in_box() {
      let result = [];
      this.fruits_item.forEach((item) => {
        this.basket.forEach((id) => {
          if (item.id === id) {
            result.push(item);
          }
        });
      });
      return result;
    },
  },
  async mounted() {
    // await $.getJSON("./js/_d_fruitBoxData__399.json");
    // $.getJSON("./js/_d_fruitBoxData__499.json");
    // $.getJSON("./js/_d_fruitBoxData__599.json").done((res) => {
    //   this.fruits_item = res;
    // });
    //jQuery 輸出
    // this.change_fruits(this.go_price);

    //this.fruits_item(this.go_item)
  },

  methods: {
    checkTitle(theTitle) {
      return theTitle;
    },
    async change_fruits(price) {
      this.go_price = price;
      this.showfree = price;
      switch (price) {
        case 399:
          // data = "./js/_fruitBoxData_399.json";
          break;
        case 499:
          // data = "./js/_fruitBoxData_499.json";
          break;
        case 599:
          // data = "./js/_fruitBoxData_599.json";
          break;
      }
      // await $.getJSON(data).done((res) => {
      //   this.box = res;
      // });
    },
    pull_basket(id) {
      if (this.basket.length !== 5) {
        const pick = this.box.find((item) => item.id === id);
        this.basket.push(pick.id);
      } else {
        alert("不能超過五個");
      }
    },

    //移除用filter塞選來做
    green_remove(goodbye) {
      this.basket = this.basket.filter((fruit) => fruit !== goodbye.id);
    },
  },
};
</script>
