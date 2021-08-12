<template>
  <div>
    <div class="checkout_shopping_step">
      <div class="first_step">
        <section class="step_on">1</section>
        <p>購物車明細</p>
      </div>
      <span class="step_line"></span>
      <div class="second_step">
        <section>2</section>
        <p>聯絡人資料</p>
      </div>
      <span class="step_line"></span>
      <div class="third_step">
        <section>3</section>
        <p>訂單完成</p>
      </div>
    </div>

    <div id="checkout1">
      <div class="checkout_shopping_detail">
        <h3>購物車明細</h3>
        <div class="checkout_shopping_detail_block">
          <section class="checkout_shopping_detail_img">商品圖片</section>
          <section class="checkout_shopping_detail_name">商品名稱</section>
          <section class="checkout_shopping_detail_sum">數量</section>
          <section class="checkout_shopping_detail_price">單價</section>
          <section class="checkout_shopping_detail_total">小計</section>
          <section class="checkout_shopping_detail_delete">刪除</section>
        </div>
        <div class="checkout_shopping_product_detail">
          <section class="checkout_shopping_product_detail_img">
            <img src="@/assets/images/checkout/checkout_01.jpg" />
          </section>
          <section class="checkout_shopping_product_detail_name">
            防疫蔬果箱
          </section>
          <section class="checkout_shopping_product_detail_sum">
            <button>-</button>
            <input type="text" value="1" />
            <button>+</button>
          </section>
          <section class="checkout_shopping_product_detail_price">399</section>
          <section class="checkout_shopping_product_detail_total">399</section>
          <section class="checkout_shopping_product_detail_delete">
            <img src="@/assets/images/checkout/delete_icon.svg" alt="" />
          </section>
        </div>
        <a
          class="checkout_shopping_detail_keep_shopping"
          href="./shopping_page.html"
          >繼續購物</a
        >
      </div>

      <div class="checkout_shopping_checkform">
        <div class="checkout_shopping_checkform_sending_block">
          <h3>送貨及付款方式</h3>
          <section class="checkout_location">
            <p>送貨地點</p>
            <select class="city">
              <option disable>請選擇送貨縣市</option>
              <option v-for="(city, index) in citys" :key="index">{{
                city
              }}</option>
            </select>
          </section>
          <section class="checkout_sending">
            <p>送貨方式</p>
            <select>
              <option value="home">宅配</option>
            </select>
          </section>
          <section class="checkout_sending_intro">
            <p>配送說明</p>
            <p style="line-height: 1.2;">
              目前僅能以線上刷卡付款，落實無接觸外送！<br />
              ------------<br />
              ▌到貨須知<br />

              蔬果箱送達後請儘速開箱確認，如商品有瑕疵、貨品毀損或品項錯誤，
              請於到貨後2小時內拍照存證並與小幫手聯繫。
              生鮮蔬果請於到貨一小時內冷藏保存，為確保新鮮品質，盡速在3日內食用完畢。
              因葉菜類不易保存，建議優先食用。<br /><br />

              ▌退換貨注意事項<br />

              1.
              請注意！冷凍及冷藏食品、生鮮商品、短效期消耗性食物等，除商品本身有瑕疵或冷凍、冷藏商品於運送過程失溫導致變質外，恕將不另提供退換貨服務。<br /><br />

              2.
              冷凍及冷藏食品、生鮮商品、短效期消耗性食物等容易腐敗之商品，若簽收商品時發現有失溫現象(已退冰、失溫軟化)或包裝遭受破壞，或是數量、品項有誤之情形，請維持商品原狀拍照留存，以便後續為您處理。
            </p>
          </section>
          <section class="checkout_payment">
            <p>付款方式</p>
            <select>
              <option value="信用卡付款">信用卡付款</option>
              <option value="貨到付款" disabled>貨到付款(疫情不開放)</option>
            </select>
          </section>
        </div>
        <div class="checkout_shopping_checkform_orderblock">
          <h3>訂單資訊</h3>
          <section>
            <p>商品小記: <span>399</span></p>
            <p>本次運費: <span>0</span></p>
            <p>使用購物金</p>
            <hr />
            <p class="checkout_shopping_checkform_orderblock_total">
              本次合計: <span>399</span>
            </p>
          </section>

          <a href="./checkout_s2.html">直接前往結帳</a>
          <a href="./login.html">登入會員</a>
          <a href="./login.html">註冊會員</a>
          <a href="./shopping_page.html">繼續購物</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      citys: [
        "臺北市",
        "新北市",
        "桃園市",
        "臺中市",
        "臺南市",
        "高雄市",
        "新竹縣",
        "苗栗縣",
        "彰化縣",
        "南投縣",
        "雲林縣",
        "嘉義縣",
        "屏東縣",
        "宜蘭縣",
        "花蓮縣",
        "臺東縣",
        "澎湖縣",
        "金門縣",
        "連江縣",
        "基隆市",
        "新竹市",
        "嘉義市",
      ],
    };
  },
};
</script>
