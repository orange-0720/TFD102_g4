<template>
  <div class="title">
    <div class="title_btn">
      <button class="comm_us">
        聯絡我們
        <img src="@/assets/images/cotact_us.svg" width="25px" alt="" />
      </button>
      <a class="buy_now">
        立即買<img src="@/assets/images/buy_now.svg" width="25px" alt="" />
      </a>
    </div>
    <!-- 型態1 video -->
    <div class="video">
      <iframe
        src="https://www.youtube.com/embed/cmY5IYFWsJ0?start=100"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!-- 型態2 picture -->
    <div class="title_pic">
      <!--img slot -->
      <img
        src="@/assets/images/farm/product_introduction/fruit_introduction_bg.jpg"
        alt="checkout_pic"
      />
      <span class="bkc_black"></span>
      <!--text slot -->
      <h1>水果介紹</h1>
    </div>
    <!-- 型態3 Carousel -->
    <div class="title_pic pic_index">
      <div>
        <img src="@/assets/images/index/00_index.jpg" />
      </div>
      <div>
        <img src="@/assets/images/index/00_index2.jpg" />
      </div>
      <div>
        <img src="@/assets/images/index/00_index3.jpg" />
      </div>
      <div>
        <img src="@/assets/images/index/00_index4.jpg" />
      </div>
      <div>
        <img src="@/assets/images/index/00_index5.jpg" />
      </div>
    </div>
    <!-- 型態4 無放置 -->

    <!-- 首頁才會出現 -->
    <div class="mouse_down">
      <div class="mouse"></div>
      <p>Scroll</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderTitle",
  // ...
};
</script>
