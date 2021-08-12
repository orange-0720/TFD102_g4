<template>
  <div>
    <!-- 本頁內容 -->
    <div class="member_logout_block">
        <button onclick="Logout()">登出<img src="@/assets/images/member/logout_icon.svg" alt=""></button>
        <h3>持有購物金:<span>0</span>元</h3>
    </div>

    <!-- vue範圍開始 -->
    <div class="member_block" id="member_block">
        <div class="member_block_nav">
            <div @click="show_member" class="member_detail">會員資料</div>
            <div @click="show_order" class="member_order">訂單查詢</div>
            <div @click="show_active" class="member_active">活動查詢</div>
            <div @click="show_message" class="member_message">留言板</div>
        </div>
        <div class="member_right_member" v-if="memberShow">
          <h3>會員資料</h3>
          <div class="member_right_detail">
            <div class="member_pic_block">
              <img src="@/assets/images/member/member_fake_img.svg" alt="大頭照">
              <button class="member_pwd_change" @click="show_up">
                <img src="@/assets/images/member/member_pen.svg" alt="pen">變更密碼
              </button>
            </div>
            <!-- 會員資料印出 -->
            <div class="member_detail_info">
              <div class="member_info_name">
                姓名:
                <input type="text" :disabled="onChange" v-model="member_name">
              </div>
              <div class="member_info_hb">
                生日:
                <input type="text" placeholder="1992/05/27" :disabled="onChange" v-model="member_hb">
              </div>
              <div class="member_info_phone">
                手機:
                <input type="text" :disabled="onChange" v-model="member_phone">
              </div>
              <div class="member_info_address">
                地址:
                <input type="text" :disabled="onChange" v-model="member_address">
              </div>
            </div> 
          </div>
          <button class="member_change_detail" @click="changeWord">
            <img src="@/assets/images/member/member_pen.svg" alt="筆">
            <span>編輯會員資料</span>
          </button>
        </div>
        <!-- 變更密碼彈窗 -->
        <div class="change_pwd_box" >
          <div class="pwd_black_block" @click="show_up"></div>
          <div class="change_pwd_block">
              <div class="pwd_block_head">
                <button class="pwd_block_Xmark" @click="show_up"></button>
              </div>
              <h2>變更密碼</h2>
              <div class="change_box">
                <input type="text" id="old_pwd1" placeholder="請輸入原本密碼">
                <input type="text" id="old_pwd2" placeholder="請再次輸入">
                <input type="text" id="new_pwd" placeholder="請輸入新密碼">
              </div>
              <input type="button" class="change_send" value="確認變更" @click="change_pwd">
          </div>
        </div>

        <!-- 訂單開始 -->
        <div class="member_order_detail" v-if="orderShow">
            <h3>訂單查詢</h3>
            <div class="member_order_block">
              <div class="order_box">
                <div class="order_line">
                  <h4>下單時間</h4>
                  <h4>訂單編號</h4>
                  <h4>付款方式</h4>
                  <h4>訂單金額</h4>
                  <h4>配送狀態</h4>
                </div>
                <div class="order_inside_detail">
                  <h4>2021/09/01</h4>
                  <h4>A0001</h4>
                  <h4>信用卡</h4>
                  <h4>399</h4>
                  <h4>配送中</h4>
                </div>
              </div>
              <hr>
              <div @click="turn_on" class="show_order_detail">
                訂單內容
                <img class="member_arrow_icon" src="@/assets/images/member/member_arrow_icon.svg" alt="">
                <div class="member_check_order_detail">
                  <div class="check_order_box">
                    <div class="show_order_detail_block">
                      <section class="show_order_detail_img">商品圖片</section>
                      <section class="show_order_detail_name">商品名稱</section>
                      <section class="show_order_detail_sum">數量</section>
                      <section class="show_order_detail_price">單價</section>
                      <section class="show_order_detail_total">小計</section>
                    </div>

                    <!-- 訂單內容迴圈出現 -->
                    <div class="show_order_product_detail">
                      <section class="show_order_product_detail_img">
                        <img src="@/assets/images/checkout/checkout_01.jpg">
                      </section>
                      <section class="show_order_product_detail_name">防疫蔬果箱</section>
                      <section class="show_order_product_detail_sum">
                        1
                      </section>
                      <section class="show_order_product_detail_price">399</section>
                      <section class="show_order_product_detail_total">399</section>
                    </div>
                  </div>
                  <hr>
                  <p class="show_order_total_price">總金額:<span>399</span></p>
                </div>
              </div>
            </div>
          </div>

          <div class="member_active_detail" v-if="activeShow">
            <h3>活動查詢</h3>
            <div class="member_active_block">
              <div class="active_box">
                <div class="active_line">
                  <h4 v-for="(item,index) in active_line" :key="index">{{item}}</h4>
                </div>

                <!-- 撈出資料庫資料並秀出 使用v-for製造多個訂單資訊 -->
                <div class="active_inside_detail" v-for="(item,index) in actives" :key="index">
                  <h4>{{item.ACTIVITY_ID}}</h4>
                  <h4>{{item.APPOINTMENT_ID}}</h4>
                  <h4>{{item.START_DATE}}</h4>
                  <h4>399</h4>
                  <h4>{{item.PEOPLE_NUM}}</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="member_message_detail" v-if="messageShow">
            <h3>留言板</h3>
            <div class="member_message_block">
              <div class="message_line">良耕野菜</div>
              <div class="message_inside_detail">
                <h3 class="no_message">目前尚未收到您的任何訊息</h3>
                <textarea class="your_question" rows="5" placeholder="請寫下您的疑問" v-model="your_question"></textarea>
                <div class="member_message_button">
                  <input type="file" id="message_img">
                  <label for="message_img">加入圖片</label>
                  <input type="button" value="傳送" id="message_submit" @click ='send_message'>
                </div>
              </div>
            </div>
          </div>  
    </div>
  </div>
</template>
