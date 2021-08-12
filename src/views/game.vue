<template>
  <div id="game_page">
    <div id="game_title">
      <h2 class="game_title">蔬果知識小遊戲</h2>
    </div>
    <!-- vue範圍開始 -->
    <section class="game_play_border" id="test_block">
      <div class="page1" v-show="page1show">
        <div id="game_decorate_testNumberCircle">
          <h1 id="inside_testNumber">開始</h1>
        </div>
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_1" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_2" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_3" />
        <img
          src="@/assets/images/game/game_img_Tomato.png"
          alt=""
          class="game icon_4"
        />
        <div id="count">
          <h1>10秒</h1>
        </div>
        <div class="game_test">
          <img src="@/assets/images/game/game_img_Avocado.svg" alt="" id="game_test" />
        </div>
        <div id="game_question">
          <h2>
            腦力激盪，測試蔬果知識!
            <br />5題答對才能挑戰扭蛋獲取購物金，準備好了嗎?
          </h2>
        </div>
        <div id="game_bottom_part">
          <button type="submit" id="submit" @click="show_Page2">
            遊戲開始
          </button>
          <img
            src="@/assets/images/game/game_img_Farmer.svg"
            alt=""
            class="decorate icon_11"
          />
        </div>
      </div>
      <!-- ===VUE第二頁第一題=== -->
      <div class="page2" V-show="page2show">
        <div id="game_decorate_testNumberCircle_2">
          <h1 id="inside_testNumber">1</h1>
        </div>
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_1" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_2" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_3" />
        <img
          src="@/assets/images/game/game_img_Tomato.png"
          alt=""
          class="game icon_4"
        />
        <div id="count"><h1>{{time+"秒"}}</h1></div>
        <div class="game_test_2">
          <img src="@/assets/images/game/game_tomato.svg" alt="" id="game_test" />
        </div>
        <div id="game_question">
          <h2>番茄最重要的營養素為?</h2>
        </div>
        <div id="game_bottom_part">
          <div id="game_answer">
            <button type="submit" id="submit_1" @click="show_Page3(20)">
              茄紅素
            </button>
            <button type="submit" id="submit_2" @click="show_Page3(0)">
              蛋白質
            </button>
          </div>
          <img
            src="@/assets/images/game/game_img_Farmer.svg"
            alt=""
            class="decorate icon_11"
          />
        </div>
      </div>
      <!-- ===VUE第三頁第二題=== -->
      <div class="page3" V-show="page3show">
        <div id="game_decorate_testNumberCircle_2">
          <h1 id="inside_testNumber">2</h1>
        </div>
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_1" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_2" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_3" />
        <img
          src="@/assets/images/game/game_img_Tomato.png"
          alt=""
          class="game icon_4"
        />
        <div id="count"><h1>{{time+"秒"}}</h1></div>
        <div class="game_test_2">
          <img
            src="@/assets/images/game/game_img_cabage_real.svg"
            alt=""
            id="game_test"
          />
        </div>
        <div id="game_question">
          <h2>為什麼同一品種的高麗菜有尖頭與平頭兩種外觀?</h2>
        </div>
        <div id="game_bottom_part">
          <div id="game_answer">
            <button type="submit" id="submit_1" @click="show_Page4(0)">
              運送過程<br />被擠壓到
            </button>
            <button type="submit" id="submit_2" @click="show_Page4(20)">
              溫度影響<br />花芽分化
            </button>
          </div>
          <img
            src="@/assets/images/game/game_img_Farmer.svg"
            alt=""
            class="decorate icon_11"
          />
        </div>
      </div>
      <!-- ===VUE第四頁第三題=== -->
      <div class="page4" V-show="page4show">
        <div id="game_decorate_testNumberCircle_2">
          <h1 id="inside_testNumber">3</h1>
        </div>
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_1" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_2" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_3" />
        <img
          src="@/assets/images/game/game_img_Tomato.png"
          alt=""
          class="game icon_4"
        />
        <div id="count"><h1>{{time+"秒"}}</h1></div>
        <div class="game_test_2">
          <img src="@/assets/images/game/game_img_onion.svg" alt="" id="game_test" />
        </div>
        <div id="game_question">
          <h2>洋蔥的種植方式為以下何者?</h2>
        </div>
        <div id="game_bottom_part">
          <div id="game_answer">
            <button type="submit" id="submit_1" @click="show_Page5(0)">
              水耕
            </button>
            <button type="submit" id="submit_2" @click="show_Page5(20)">
              土耕
            </button>
          </div>
          <img
            src="@/assets/images/game/game_img_Farmer.svg"
            alt=""
            class="decorate icon_11"
          />
        </div>
      </div>

      <!-- ===VUE第五頁第四題=== -->
      <div class="page5" V-show="page5show">
        <div id="game_decorate_testNumberCircle_2">
          <h1 id="inside_testNumber">4</h1>
        </div>
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_1" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_2" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_3" />
        <img
          src="@/assets/images/game/game_img_Tomato.png"
          alt=""
          class="game icon_4"
        />
        <div id="count"><h1>{{time+"秒"}}</h1></div>
        <div class="game_test_2">
          <img src="@/assets/images/game/game_img_potato.svg" alt="" id="game_test" />
        </div>
        <div id="game_question">
          <h2>本產馬鈴薯為一年幾獲?</h2>
        </div>
        <div id="game_bottom_part">
          <div id="game_answer">
            <button type="submit" id="submit_1" @click="show_Page6(20)">
              一年一穫
            </button>
            <button type="submit" id="submit_2" @click="show_Page6(0)">
              一年兩穫
            </button>
          </div>
          <img
            src="@/assets/images/game/game_img_Farmer.svg"
            alt=""
            class="decorate icon_11"
          />
        </div>
      </div>

      <!-- ===VUE第六頁第五題=== -->
      <div class="page6" V-show="page6show">
        <div id="game_decorate_testNumberCircle_2">
          <h1 id="inside_testNumber">5</h1>
        </div>
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_1" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_2" />
        <img src="@/assets/images/game/cabage_group.svg" alt="" class="game icon_3" />
        <img
          src="@/assets/images/game/game_img_Tomato.png"
          alt=""
          class="game icon_4"
        />
        <div id="count"><h1>{{time+"秒"}}</h1></div>
        <div class="game_test_2">
          <img
            src="@/assets/images/game/game_img_whiteRadish.svg"
            alt=""
            id="game_test"
          />
        </div>
        <div id="game_question">
          <h2>如何挑到好吃的白蘿蔔?</h2>
        </div>
        <div id="game_bottom_part">
          <div id="game_answer">
            <button type="submit" id="submit_1" @click="show_Page7(0)">
              底部根鬚很多的
            </button>
            <button type="submit" id="submit_2" @click="show_Page7(20)">
              聲音厚實、表皮硬
            </button>
          </div>
          <img
            src="@/assets/images/game/game_img_Farmer.svg"
            alt=""
            class="decorate icon_11"
          />
        </div>
      </div>
      <!-- 用js去寫換圖 -->
      <!-- button在外層直接換內層 -->
    </section>

    <!-- ==輪波圖== -->

    <section id="game_slideshow_step_lottery">
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
<style scoped>

</style>