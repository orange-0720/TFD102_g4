<template>
  <div>
    <div class="checkout_shopping_step">
      <div class="first_step">
        <section>1</section>
        <p>購物車明細</p>
      </div>
      <span class="step_line"></span>
      <div class="second_step">
        <section>2</section>
        <p>聯絡人資料</p>
      </div>
      <span class="step_line"></span>
      <div class="third_step">
        <section class="step_on">3</section>
        <p>訂單完成</p>
      </div>
    </div>
    <div class="checkout_s3_ordercheck">
      <img src="@/assets/images/checkout/checkout_s3_01.svg" alt="order_check" />
      <h2>訂單完成</h2>
    </div>
    <div class="checkout_s3_order_num_block">
      <span class="order_num">訂單編號</span>
      <span class="order_num_detail">A1234567890</span>
    </div>

    <div class="checkout_s3_order_detail">
      <h3>訂單明細</h3>
      <div class="checkout_s3_order_detail_block">
        <section class="checkout_s3_order_detail_img">商品圖片</section>
        <section class="checkout_s3_order_detail_name">商品名稱</section>
        <section class="checkout_s3_order_detail_sum">數量</section>
        <section class="checkout_s3_order_detail_price">單價</section>
        <section class="checkout_s3_order_detail_total">小計</section>
      </div>
      <div class="checkout_s3_order_product_detail">
        <section class="checkout_s3_order_product_detail_img">
          <img src="@/assets/images/checkout/checkout_01.jpg" />
        </section>
        <section class="checkout_s3_order_product_detail_name">
          防疫蔬果箱
        </section>
        <section class="checkout_s3_order_product_detail_sum">
          1
        </section>
        <section class="checkout_s3_order_product_detail_price">399</section>
        <section class="checkout_s3_order_product_detail_total">399</section>
      </div>
      <hr />
      <p class="order_total_price">總金額:<span>399</span></p>
    </div>

    <div class="checkout_s3_other_product">
      <h2>其他熱銷商品</h2>
      <div class="product_link_block">
        <a href="./itemtest.html">
          <img src="@/assets/images/checkout/tomato.svg" alt="" />
        </a>
        <a href="./itemtest.html">
          <img src="@/assets/images/checkout/cabbage.svg" alt="" />
        </a>
        <a href="./itemtest.html">
          <img src="@/assets/images/checkout/corn.svg" alt="" />
        </a>
      </div>
      <a class="order_keep_shopping" href="#">繼續購物</a>
    </div>


  </div>
</template>
