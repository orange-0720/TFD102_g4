<template>
  <div id="game_page">
    <div id="game_title">
      <h2 class="game_title">蔬果知識小遊戲</h2>
    </div>
    <section id="game_play_border_PassandDefeat">
      <div id="game_decorate_testNumberCircle_2">
        <h1 id="inside_testNumber">過關</h1>
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
      <div class="game_test_2">
        <img
          src="@/assets/images/game/game_img_Tomato.svg"
          alt=""
          id="game_test"
        />
      </div>
      <div id="game_question">
        <h2>
          恭喜你!<br />通過了蔬菜們的考驗<br />請註冊會員，或登入會員進行扭蛋遊戲
        </h2>
      </div>
      <div id="game_bottom_part_PassandDefeat">
        <div id="game_answer">
          <button type="submit" id="submit_1" class="green">
            <div id="action1"><a href="member.html">註冊會員</a></div>
            <img
              src="@/assets/images/game/rightArrow.svg"
              alt=""
              id="rightArrow"
            />
          </button>
          <button type="submit" id="submit_2" class="green">
            <img
              src="@/assets/images/game/leftArrow.svg"
              alt=""
              id="leftArrow"
            />
            <div id="action1">
              <a href="game_page_lotteryStart.html">登入會員，扭蛋去</a>
            </div>
          </button>
        </div>
        <img
          src="@/assets/images/game/game_img_Farmer.svg"
          alt=""
          class="decorate icon_11"
        />
      </div>
      <!-- 用js去寫換圖 -->
      <!-- button在外層直接換內層 -->
    </section>

    <section id="game_slideshow_step_PassandDefeat">
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
