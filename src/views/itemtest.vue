<template>
  <div>
    <!-- 當頁內容開始 -->
    <div class="shopping_main_block">
      <!-- 側邊欄開始 -->
      <div class="shopping_nav_block">
        <h2 class="show_out_block">商品一覽</h2>
        <hr />
        <div class="show_box_block">
          <div class="shopping_box_block">
            <h3 class="shopping_box_slide">
              蔬果箱
              <img src="@/assets/images/shopping_page/shopping_arrow_icon.svg" alt="" />
            </h3>
            <div class="shopping_box_link">
              <a href="#">防疫蔬果箱</a>
              <a href="#">活力蔬果箱</a>
              <a href="#">防癌蔬果箱</a>
            </div>
          </div>
          <div class="shopping_veg_block">
            <h3 class="shopping_veg_slide">
              蔬菜
              <img src="@/assets/images/shopping_page/shopping_arrow_icon.svg" alt="" />
            </h3>
            <div class="shopping_veg_link">
              <a href="#">高麗菜</a>
              <a href="#">地瓜</a>
              <a href="#">大番茄</a>
              <a href="#">小白菜</a>
              <a href="#">玉米</a>
              <a href="#">紅蘿蔔</a>
              <a href="#">白蘿蔔</a>
              <a href="#">萵苣</a>
              <a href="#">青椒</a>
              <a href="#">甜椒</a>
              <a href="#">青江菜</a>
              <a href="#">地瓜葉</a>
              <a href="#">A菜</a>
              <a href="#">玉米筍</a>
              <a href="#">南瓜</a>
              <a href="#">小黃瓜</a>
              <a href="#">洋蔥</a>
            </div>
          </div>
          <div class="shopping_fruit_block">
            <h3 class="shopping_fruit_slide">
              水果
              <img src="@/assets/images/shopping_page/shopping_arrow_icon.svg" alt="" />
            </h3>
            <div class="shopping_fruit_link">
              <a href="#">草莓</a>
              <a href="#">小番茄</a>
              <a href="#">甜橙</a>
              <a href="#">芒果</a>
              <a href="#">香蕉</a>
              <a href="#">番石榴</a>
              <a href="#">檸檬</a>
              <a href="#">鳳梨</a>
              <a href="#">柿子</a>
              <a href="#">哈密瓜</a>
              <a href="#">香瓜</a>
              <a href="#">木瓜</a>
            </div>
          </div>
          <div class="shopping_customer_block">
            <h3>
              <a href="#">客製蔬果箱</a>
            </h3>
          </div>
        </div>
      </div>
      <!-- 側邊欄結束 -->

      <div class="shopping_page_list">
        <div class="card_wapper">
            <div class="card">
                <div class="products_imgs">
                  <img src="@/assets/images/item/小蔬加雞腿.png" width="100%" id="ProductImg">
                  <div class="small-img-row">
                      <div class="small-img-col">
                          <img src="@/assets/images/item/小蔬加雞腿.png" width="100%" class="small-img">
                      </div>
                      <div class="small-img-col">
                          <img src="@/assets/images/item/1152_G_1456771861418.png" width="100%" class="small-img">
                      </div>
                      <div class="small-img-col">
                          <img src="@/assets/images/item/194590840_4466085006736125_5934408763994830268_n.png" width="100%" class="small-img">
                      </div>
                      <div class="small-img-col">
                          <img src="@/assets/images/item/S__56893488.png" width="100%" class="small-img">
                      </div>
                  </div>
                </div>
                <div class="products_content">
                    <h2 class = "product_title">活力蔬菜箱</h2>
                    <br>
                    <div class = "product-price">
                      <p class = "last-price">價錢: <span>500元</span></p>
                      <p class = "new-price">數量: <span><input type = "number" min = "0" value = "1"></span></p>
                    </div>
        
                  <div class = "product-detail">
                    <br>
                    <h2>商品內容</h2>
                    <br>
                    <p> 良耕野菜有機農場自產野菜</p>
                    <br>
                    <ul>
                      <li>- 內含6~8種精選蔬菜，凡購買即贈送辛香料</li>
                      <li>- 菇類：金針菇 x2、小木耳 x1、杏鮑菇 x1</li>
                      <li>- 根莖類：洋蔥 x2、紅蘿蔔 x1、番茄 x1、玉米 x1</li>
                      <li>- 青菜類：青江菜 x1、大陸妹 x1、小白菜 x1、油菜 x1、空心菜 x1</li>
                      <li>※ 因皆為每日新鮮採購，若品項有缺貨會選其他當季蔬菜替補</li>
                    </ul>
                    <br>
                  </div>
                  <div class = "purchase-info">
                    <a href="">加入購物車 </a>
                    <a href="">結帳去</a>
                  </div>
                </div>
            </div>
        </div>
        <div class="card_wapper_2">
          <!-- <div class="productList"> -->
            <h3>商品詳細說明</h3>
            <div class="card_content">
              <ul>
                <li>適合對象：一般3~4人小家庭</li>
                <br>
                <li>配送內容：當季新鮮蔬果，會依產期配送6~8種葉菜及2~3種果菜</li>
                <br>
                <li>蔬果項目：近期的蔬菜配送內容，依照季節配送</li>
                <br>
                <li>付款方式：信用卡、貨到付款</li>
                <br>
                <li>運送方式：冷藏宅配服務(免運費)</li>
              </ul>
            </div>
            <h3>商品圖片</h3>
            <div><img src="@/assets/images/item/S__56893488.png" alt=""></div>
            <div><img src="@/assets/images/item/小蔬加雞腿.png" alt=""></div>
            <div><img src="@/assets/images/item/1152_G_1456771861418.png" alt=""></div>
            
          <!-- </div> -->
        </div>
      </div>
    </div>
    <!-- 當頁內容結束 -->
  </div>
</template>
