<template>
  <div id="backend_page">
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
          <div class="nav_block_log">
            <img src="@/assets/images/nav_block_log.svg" />
            登入註冊
          </div>
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
        <section class="step_on">2</section>
        <p>聯絡人資料</p>
      </div>
      <span class="step_line"></span>
      <div class="third_step">
        <section>3</section>
        <p>訂單完成</p>
      </div>
    </div>
    <div id="shopping2_detail">
      <div class="checkout_s2_shopping_detail">
        <p>商品總金額 <span>399</span>元</p>
        <!-- 數字部分要用函數帶入 -->
        <p class="checkout_s2_shopping_detail_total">
          共計1件商品
          <img class="detail_icon_open" src="@/assets/images/checkout/plus_icon.svg" />
        </p>
        <div class="checkout_s2_detail">
          <div class="checkout_shopping_detail_block">
            <section class="checkout_shopping_detail_img">商品圖片</section>
            <section class="checkout_shopping_detail_name">商品名稱</section>
            <section class="checkout_shopping_detail_sum">數量</section>
            <section class="checkout_shopping_detail_price">單價</section>
            <section class="checkout_shopping_detail_total">小計</section>
          </div>
          <div class="checkout_shopping_product_detail">
            <section class="checkout_shopping_product_detail_img">
              <img src="@/assets/images/checkout/checkout_01.jpg" />
            </section>
            <section class="checkout_shopping_product_detail_name">
              防疫蔬果箱
            </section>
            <section class="checkout_shopping_product_detail_sum">
              1
            </section>
            <section class="checkout_shopping_product_detail_price">
              399
            </section>
            <section class="checkout_shopping_product_detail_total">
              399
            </section>
          </div>
        </div>
      </div>
      <div class="chekout_s2_order_detail_block">
        <div class="checkout_s2_receiver_infro">
          <h3>訂購人資料</h3>
          <div class="checkout_s2_receiver_infro_group">
            <label for="">訂購人名稱</label>
            <input type="text" class="receiver_name" />
          </div>
          <div class="checkout_s2_receiver_infro_group">
            <label for="">電子郵件</label>
            <input type="text" class="receiver_email" />
          </div>
          <div class="checkout_s2_receiver_infro_group">
            <label for="">聯絡電話(手機)</label>
            <input type="text" class="receiver_phone" />
          </div>
          <div class="checkout_s2_receiver_infro_group">
            <label for="">性別</label>
            <select>
              <option value="男">男</option>
              <option value="女" selected>女</option>
              <option value="其他">其他</option>
            </select>
          </div>
        </div>
        <div class="checkout_s2_deliver_infro">
          <h3>收件人資料</h3>
          <div class="checkout_s2_deliver_infro_check">
            <input type="checkbox" id="deliver_box" v-model="theSame" />
            <label for="deliver_box"> 收件人資料同訂購人資訊</label>
          </div>
          <div class="checkout_s2_deliver_infro_group">
            <label for="">收件人名稱</label>
            <input type="text" class="deliver_name" />
          </div>
          <div class="checkout_s2_deliver_infro_group">
            <label for="">收件人手機</label>
            <input type="text" class="deliver_phone" />
            <hr />
          </div>
          <div class="checkout_s2_deliver_infro_group">
            <label for="">送貨地址</label>
            <select class="checkout_s2_city" v-model="mainArea">
              <option disabled>請選擇縣市</option>
              <option
                v-for="(place, key) in area_data"
                :value="place.name"
                :key="key"
                >{{ place.name }}</option
              >
            </select>
            <select class="checkout_s2_area" v-model="subArea">
              <option disabled>請選擇分區</option>
              <option v-for="(area,key) in area_arr" :key="key">{{
                area
              }}</option>
            </select>
            <input type="text" v-model="address" />
            <hr />
          </div>
          <div class="checkout_s2_deliver_infro_group">
            <label for="">預計到貨</label>
            <input type="text" disabled value="兩天後送達" />
          </div>
        </div>
      </div>
      <div class="chekout_s2_order_other_block">
        <div class="chekout_s2_order_other_block_note">
          <h3>訂單備註</h3>
          <textarea rows="5" placeholder="有甚麼想告知我們的嗎??"></textarea>
        </div>
        <div class="chekout_s2_order_other_block_pay">
          <h3>付款方式</h3>
          <!-- 看是用v-model雙向綁定或span來寫 -->
          <p>已選擇付款方式:信用卡</p>
        </div>
      </div>
      <div class="chekout_s2_order_privacy">
        <input type="checkbox" id="checkout_privacy" v-model="privacy" />
        <label for="checkout_privacy">我已同意網站服務條款及隱私權</label>
        <div class="chekout_s2_order_privacy_next">
          <button @click="window.location.href = 'checkout.html'">
            返回購物車
          </button>
          <button @click="credit_confirm">提交訂單</button>
        </div>
        <div class="credit_bkc" v-if="isShow" @click="credit_confirm">
          <!-- @click="credit_confirm" 冒泡事件 -->
          <div class="credit_form" v-if="isShow" @click="stopPropagation">
            <h1>信用卡結帳系統</h1>
            <div class="step_back_btn" @click="credit_confirm">
              <img src="@/assets/images/checkout/X_mark.svg" alt="X" />
            </div>
            <div class="credit_form_block">
              <div class="credit_form_left_block">
                <div class="credit_card_img_front">
                  <img
                    class="card_img"
                    src="@/assets/images/checkout/credit_card.png"
                  />
                  <div class="left_block_name">
                    <p>cardholder Name:</p>
                    <p>{{ card_name }}</p>
                  </div>
                  <div class="left_block_number">
                    <p>card number</p>
                    <p>{{ card_number }}</p>
                  </div>
                </div>
                <div class="credit_card_img_back">
                  <img
                    class="card_img"
                    src="@/assets/images/checkout/credit_card.png"
                  />
                  <div class="left_block_name">
                    <p>cardholder Name:</p>
                    <p>{{ card_name }}</p>
                  </div>
                  <div class="left_block_other">
                    <section class="left_block_valid">
                      Valid Thru
                      <span>{{ card_valid }}</span>
                    </section>
                    <section class="left_block_security">
                      Security Code
                      <span>{{ card_security }}</span>
                    </section>
                  </div>
                </div>
              </div>
              <div class="credit_form_right_block">
                <section class="right_block_name">
                  <label>持有人名稱</label>
                  <input
                    type="text"
                    v-model="card_name"
                    placeholder="王大明"
                    @focus="turn_front"
                  />
                </section>
                <section class="right_block_number">
                  <label>信用卡號</label>
                  <input
                    type="text"
                    v-model="card_number"
                    oninput="value=value.replace(/[^\d]/g,'')"
                    @focus="turn_front"
                  />
                </section>
                <form class="right_block_other">
                  <section class="right_block_valid">
                    <label for="">有效期限</label>
                    <input
                      type="text"
                      v-model="card_valid"
                      placeholder="08/21"
                      oninput="value=value.replace(/[^\d]/g,'')"
                      @focus="turn_back"
                    />
                  </section>
                  <section class="right_block_security">
                    <label for="">安全碼</label>
                    <input
                      type="text"
                      v-model="card_security"
                      oninput="value=value.replace(/[^\d]/g,'')"
                      @focus="turn_back"
                    />
                  </section>
                </form>
              </div>
            </div>
            <!-- <input
              type="submit"
              value="確認送出"
              class="credit_detail_confirm"
            /> -->
            <a class="credit_detail_confirm" href="./checkout_s3.html"
              >確認送出</a
            >
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
const $ =window.$
export default {
  data() {
    return {
      isShow: false,
      card_name: "",
      card_number: "",
      card_valid: "",
      card_security: "",
      theSame: false, // 訂購資訊相同
      privacy: false, // 隱私

      address: "",
      mainArea: "請選擇縣市",
      subArea: "請選擇分區",
      area_arr: [],
      area_data: [
        {
          id: 1,
          name: "臺北市",
          area: [
            "中正區",
            "大同區",
            "中山區",
            "萬華區",
            "信義區",
            "松山區",
            "大安區",
            "南港區",
            "北投區",
            "內湖區",
            "士林區",
            "文山區",
          ],
        },
        {
          id: 2,
          name: "新北市",
          area: [
            "板橋區",
            "新莊區",
            "泰山區",
            "林口區",
            "淡水區",
            "金山區",
            "八里區",
            "萬里區",
            "石門區",
            "三芝區",
            "瑞芳區",
            "汐止區",
            "平溪區",
            "貢寮區",
            "雙溪區",
            "深坑區",
            "石碇區",
            "新店區",
            "坪林區",
            "烏來區",
            "中和區",
            "永和區",
            "土城區",
            "三峽區",
            "樹林區",
            "鶯歌區",
            "三重區",
            "蘆洲區",
            "五股區",
          ],
        },
        {
          id: 3,
          name: "基隆市",
          area: [
            "仁愛區",
            "中正區",
            "信義區",
            "中山區",
            "安樂區",
            "暖暖區",
            "七堵區",
          ],
        },
        {
          id: 4,
          name: "桃園市",
          area: [
            "桃園區",
            "中壢區",
            "平鎮區",
            "八德區",
            "楊梅區",
            "蘆竹區",
            "龜山區",
            "龍潭區",
            "大溪區",
            "大園區",
            "觀音區",
            "新屋區",
            "復興區",
          ],
        },
        {
          id: 5,
          name: "新竹縣",
          area: [
            "竹北市",
            "竹東鎮",
            "新埔鎮",
            "關西鎮",
            "峨眉鄉",
            "寶山鄉",
            "北埔鄉",
            "橫山鄉",
            "芎林鄉",
            "湖口鄉",
            "新豐鄉",
            "尖石鄉",
            "五峰鄉",
          ],
        },
        {
          id: 6,
          name: "新竹市",
          area: ["東區", "北區", "香山區"],
        },
        {
          id: 7,
          name: "苗栗縣",
          area: [
            "苗栗市",
            "通霄鎮",
            "苑裡鎮",
            "竹南鎮",
            "頭份鎮",
            "後龍鎮",
            "卓蘭鎮",
            "西湖鄉",
            "頭屋鄉",
            "公館鄉",
            "銅鑼鄉",
            "三義鄉",
            "造橋鄉",
            "三灣鄉",
            "南庄鄉",
            "大湖鄉",
            "獅潭鄉",
            "泰安鄉",
          ],
        },
        {
          id: 8,
          name: "臺中市",
          area: [
            "中區",
            "東區",
            "南區",
            "西區",
            "北區",
            "北屯區",
            "西屯區",
            "南屯區",
            "太平區",
            "大里區",
            "霧峰區",
            "烏日區",
            "豐原區",
            "后里區",
            "東勢區",
            "石岡區",
            "新社區",
            "和平區",
            "神岡區",
            "潭子區",
            "大雅區",
            "大肚區",
            "龍井區",
            "沙鹿區",
            "梧棲區",
            "清水區",
            "大甲區",
            "外埔區",
            "大安區",
          ],
        },
        {
          id: 9,
          name: "南投縣",
          area: [
            "南投市",
            "埔里鎮",
            "草屯鎮",
            "竹山鎮",
            "集集鎮",
            "名間鄉",
            "鹿谷鄉",
            "中寮鄉",
            "魚池鄉",
            "國姓鄉",
            "水里鄉",
            "信義鄉",
            "仁愛鄉",
          ],
        },
        {
          id: 10,
          name: "彰化縣",
          area: [
            "彰化市",
            "員林鎮",
            "和美鎮",
            "鹿港鎮",
            "溪湖鎮",
            "二林鎮",
            "田中鎮",
            "北斗鎮",
            "花壇鄉",
            "芬園鄉",
            "大村鄉",
            "永靖鄉",
            "伸港鄉",
            "線西鄉",
            "福興鄉",
            "秀水鄉",
            "埔心鄉",
            "埔鹽鄉",
            "大城鄉",
            "芳苑鄉",
            "竹塘鄉",
            "社頭鄉",
            "二水鄉",
            "田尾鄉",
            "埤頭鄉",
            "溪州鄉",
          ],
        },
        {
          id: 11,
          name: "雲林縣",
          area: [
            "斗六市",
            "斗南鎮",
            "虎尾鎮",
            "西螺鎮",
            "土庫鎮",
            "北港鎮",
            "莿桐鄉",
            "林內鄉",
            "古坑鄉",
            "大埤鄉",
            "崙背鄉",
            "二崙鄉",
            "麥寮鄉",
            "臺西鄉",
            "東勢鄉",
            "褒忠鄉",
            "四湖鄉",
            "口湖鄉",
            "水林鄉",
            "元長鄉",
          ],
        },
        {
          id: 12,
          name: "嘉義縣",
          area: [
            "太保市",
            "朴子市",
            "布袋鎮",
            "大林鎮",
            "民雄鄉",
            "溪口鄉",
            "新港鄉",
            "六腳鄉",
            "東石鄉",
            "義竹鄉",
            "鹿草鄉",
            "水上鄉",
            "中埔鄉",
            "竹崎鄉",
            "梅山鄉",
            "番路鄉",
            "大埔鄉",
            "阿里山鄉",
          ],
        },
        {
          id: 13,
          name: "嘉義市",
          area: ["東區", "西區"],
        },
        {
          id: 14,
          name: "台南市",
          area: [
            "中西區",
            "東區",
            "南區",
            "北區",
            "安平區",
            "安南區",
            "永康區",
            "歸仁區",
            "新化區",
            "左鎮區",
            "玉井區",
            "楠西區",
            "南化區",
            "仁德區",
            "關廟區",
            "龍崎區",
            "官田區",
            "麻豆區",
            "佳里區",
            "西港區",
            "七股區",
            "將軍區",
            "學甲區",
            "北門區",
            "新營區",
            "後壁區",
            "白河區",
            "東山區",
            "六甲區",
            "下營區",
            "柳營區",
            "鹽水區",
            "善化區",
            "大內區",
            "山上區",
            "新市區",
            "安定區",
          ],
        },
        {
          id: 15,
          name: "高雄市",
          area: [
            "楠梓區",
            "左營區",
            "鼓山區",
            "三民區",
            "鹽埕區",
            "前金區",
            "新興區",
            "苓雅區",
            "前鎮區",
            "小港區",
            "旗津區",
            "鳳山區",
            "大寮區",
            "鳥松區",
            "林園區",
            "仁武區",
            "大樹區",
            "大社區",
            "岡山區",
            "路竹區",
            "橋頭區",
            "梓官區",
            "彌陀區",
            "永安區",
            "燕巢區",
            "田寮區",
            "阿蓮區",
            "茄萣區",
            "湖內區",
            "旗山區",
            "美濃區",
            "內門區",
            "杉林區",
            "甲仙區",
            "六龜區",
            "茂林區",
            "桃源區",
            "那瑪夏區",
          ],
        },
        {
          id: 15,
          name: "屏東縣",
          area: [
            "屏東市",
            "潮州鎮",
            "東港鎮",
            "恆春鎮",
            "萬丹鄉",
            "長治鄉",
            "麟洛鄉",
            "九如鄉",
            "里港鄉",
            "鹽埔鄉",
            "高樹鄉",
            "萬巒鄉",
            "內埔鄉",
            "竹田鄉",
            "新埤鄉",
            "枋寮鄉",
            "新園鄉",
            "崁頂鄉",
            "林邊鄉",
            "南州鄉",
            "佳冬鄉",
            "琉球鄉",
            "車城鄉",
            "滿州鄉",
            "枋山鄉",
            "霧台鄉",
            "瑪家鄉",
            "泰武鄉",
            "來義鄉",
            "春日鄉",
            "獅子鄉",
            "牡丹鄉",
            "三地門鄉",
          ],
        },
        {
          id: 16,
          name: "宜蘭縣",
          area: [
            "宜蘭市",
            "羅東鎮",
            "蘇澳鎮",
            "頭城鎮",
            "礁溪鄉",
            "壯圍鄉",
            "員山鄉",
            "冬山鄉",
            "五結鄉",
            "三星鄉",
            "大同鄉",
            "南澳鄉",
          ],
        },
        {
          id: 17,
          name: "花蓮縣",
          area: [
            "花蓮市",
            "鳳林鎮",
            "玉里鎮",
            "新城鄉",
            "吉安鄉",
            "壽豐鄉",
            "秀林鄉",
            "光復鄉",
            "豐濱鄉",
            "瑞穗鄉",
            "萬榮鄉",
            "富里鄉",
            "卓溪鄉",
          ],
        },
        {
          id: 18,
          name: "臺東縣",
          area: [
            "臺東市",
            "成功鎮",
            "關山鎮",
            "長濱鄉",
            "海端鄉",
            "池上鄉",
            "東河鄉",
            "鹿野鄉",
            "延平鄉",
            "卑南鄉",
            "金峰鄉",
            "大武鄉",
            "達仁鄉",
            "綠島鄉",
            "蘭嶼鄉",
            "太麻里鄉",
          ],
        },
        {
          id: 19,
          name: "澎湖縣",
          area: ["馬公市", "湖西鄉", "白沙鄉", "西嶼鄉", "望安鄉", "七美鄉"],
        },
        {
          id: 20,
          name: "金門縣",
          area: ["金城鎮", "金湖鎮", "金沙鎮", "金寧鄉", "烈嶼鄉", "烏坵鄉"],
        },
        {
          id: 21,
          name: "連江縣",
          area: ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"],
        },
      ],
    };
  },
  methods: {
    credit_confirm() {
      this.isShow = !this.isShow;
      let total_address = this.mainArea + this.subArea + this.address;
      console.log(total_address);
    },
    stopPropagation(e) {
      e.stopPropagation();
    },
    turn_front() {
      $(".credit_card_img_front").css("transform", "rotateY(0deg)");
      $(".credit_card_img_back").css("transform", "rotateY(-180deg)");
    },
    turn_back() {
      $(".credit_card_img_front").css("transform", "rotateY(180deg)");
      $(".credit_card_img_back").css("transform", "rotateY(0deg)");
    },
  },
  watch: {
    mainArea: function(newArea) {
      if (newArea == "") {
        this.area_arr = [];
      } else {
        const tempItem = this.area_data.find((typeItem) => {
          return typeItem.name == newArea;
        });
        this.area_arr = tempItem.area;
      }
    },
    theSame: function() {
      if (this.theSame == true) {
        let name = $(".receiver_name").val();
        let phone = $(".receiver_phone").val();
        $(".deliver_name").val(name);
        $(".deliver_phone").val(phone);
      } else {
        $(".deliver_name").val("");
        $(".deliver_phone").val("");
      }
    },
  },
};
</script>
