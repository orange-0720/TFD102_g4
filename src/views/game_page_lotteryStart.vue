<template>
  <div id="game_page">
    <div id="game_title">
      <h2 class="game_title">蔬果知識小遊戲</h2>
    </div>
    <section id="game_play_border">
      <div id="game_decorate_testNumberCircle">
        <h1 id="inside_testNumber">開始</h1>
      </div>
      <img
        src="@/assets/images/game/cabage_group.svg"
        alt=""
        class="game icon_1"
      />
      <img
        src="@/assets/images/game/cabage_group.svg"
        alt=""
        class="game icon_2"
      />
      <img
        src="@/assets/images/game/cabage_group.svg"
        alt=""
        class="game icon_3"
      />
      <img
        src="@/assets/images/game/game_img_Tomato.png"
        alt=""
        class="game icon_4"
      />
      <div id="count"><h1>10</h1></div>
      <div class="game_test">
        <img
          src="@/assets/images/game/game_img_Avocado.svg"
          alt=""
          id="game_test"
        />
      </div>
      <div id="game_question">
        <h2>
          腦力激盪，測試蔬果知識!5題答對才能挑戰扭蛋獲取購物金，準備好了嗎?
        </h2>
      </div>
      <div id="game_bottom_part">
        <button type="submit" id="submit" class="green">遊戲開始</button>
        <img
          src="@/assets/images/game/game_img_Farmer.svg"
          alt=""
          class="decorate icon_11"
        />
      </div>
      <!-- 用js去寫換圖 -->
      <!-- button在外層直接換內層 -->
    </section>

    <section id="game_slideshow_step">
      <div id="game_slideshow">
        <img
          src="@/assets/images/game/game_scroll_1.png"
          class="game_slideshow"
          alt=""
        />
        <img
          src="@/assets/images/game/game_scroll_2.png"
          class="game_slideshow"
          alt=""
        />
        <img
          src="@/assets/images/game/game_scroll_3.png"
          class="game_slideshow"
          alt=""
        />
        <img
          src="@/assets/images/game/game_scroll_4.png"
          class="game_slideshow"
          alt=""
        />
        <img
          src="@/assets/images/game/game_scroll_5.png"
          class="game_slideshow"
          alt=""
        />
      </div>
    </section>
  </div>
</template>
<script></script>
