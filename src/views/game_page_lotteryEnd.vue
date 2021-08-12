<template>
  <div id="game_page">
    <div id="app">
      <div id="game_title_lottery">
        <h2 class="game_title">蔬果知識小遊戲-轉蛋趣</h2>
      </div>

      <section class="game_play_border_lottery">
        <div id="game_decorate_testNumberCircle_3">
          <h1 id="inside_testNumber">會員扭蛋</h1>
        </div>
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_1" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_2" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_3" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_4" />
        <div class="game_test_3">
          <transition>
            <img
              src="@/assets/images/game/cooking_nabe_top.png"
              id="cooking_nabe_top"
              v-show="resultShow"
              class="animate__animated animate__bounce animate__infinite	infinite"
              style="left: 16%;"
            />
          </transition>
          <div
            id="bowl"
            class="animate__animated animate__pulse animate__infinite	infinite"
            style="left:21.5%;top:15%;"
          >
            <img
              src="@/assets/images/game/lottery_Beetroot.svg"
              alt=""
              id="Beetroot"
            />
            <img
              src="@/assets/images/game/lottery_Bell pepper.svg"
              alt=""
              id="pepper"
            />
            <img
              src="@/assets/images/game/lottery_Chinese cabbage.svg"
              alt=""
              id="cabbage"
            />
            <img src="@/assets/images/game/lottery_onion.svg" alt="" id="onion" />
            <img
              src="@/assets/images/game/lottery_greenapple.svg"
              alt=""
              id="greenapple"
            />
            <img src="@/assets/images/game/lottery_orange.svg" alt="" id="orange" />
            <img src="@/assets/images/game/lottery_potato.svg" alt="" id="potato" />
            <img src="@/assets/images/game/lottery_pumpkin.svg" alt="" id="pumpkin" />
          </div>
          <transition>
            <img
              src="@/assets/images/game/cooking_nabe_bottom.png"
              id="cooking_nabe_bottom"
              v-show="resultShow"
              class="animate__animated animate__bounce animate__infinite	infinite"
              style="left: 16%;top:50% ;"
            />
          </transition>
        </div>
        <div id="game_question">
          <h2>會員每日小確幸 <br />點擊湯勺，撈出今日會員限定購物金</h2>
        </div>

        <transition>
          <div id="lottery_result" v-show="isShow">
            <h1>恭喜你獲得200元購物金</h1>
          </div>
        </transition>

        <div id="game_bottom_part_lottery">
          <transition>
            <div id="game_answer" v-show="resultShow">
              <button type="submit" id="submit_11" @click="show_result">
                <div id="action1">點擊</div>
                <img
                  src="@/assets/images/game/rightArrow.svg"
                  alt=""
                  id="rightArrow"
                />
              </button>
              <span id="submit_11"
                ><img src="@/assets/images/game/cooking_otama.png" alt="" id="start"
              /></span>
            </div>
          </transition>
          <transition>
            <div id="get_coin" v-show="isShow">
              <button type="submit" id="submit_12" @click=" show_coin">
                <div id="action1">點擊查看購物金</div>
                <img
                  src="@/assets/images/game/rightArrow.svg"
                  alt=""
                  id="rightArrow"
                />
              </button>
              <span id="submit_12"
                ><img
                  src="@/assets/images/game/money_kinbut_texta.png"
                  alt=""
                  id="pig"
                  class="animate__animated animate__headShake animate__repeat-2 2	"
              /></span>
            </div>
          </transition>

          <img
            src="@/assets/images/game/game_img_Farmer.svg"
            alt=""
            class="decorate icon_11"
            style="top: 0%;left:30%"
          />
        </div>
        <!-- 用js去寫換圖 -->
        <!-- button在外層直接換內層 -->
      </section>
    </div>
  </div>
</template>
<script></script>
