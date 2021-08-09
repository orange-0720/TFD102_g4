      Vue.component('memberShow', {
        template:
            `
            <div>
              <div class="member_right_member">
                <h3>會員資料</h3>
                <div class="member_right_detail">
                  <div class="member_pic_block">
                    <img src="./images/member/member_fake_img.svg" alt="大頭照">
                    <button class="member_pwd_change" @click="show_up">
                      <img src="./images/member/member_pen.svg" alt="pen">變更密碼
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
                  <img src="./images/member/member_pen.svg" alt="筆">
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
            </div>
            `
        ,
        data(){
            return{
                member_name:"",
                member_hb:"",
                member_phone:"",
                member_address:"",
                onChange:true,
            }
        },
        methods: {
            changeWord() {
                this.onChange = !this.onChange;
                if(this.onChange == false){
                  $('.member_change_detail > span').text('儲存變更');
                  $('.member_detail_info input').css('background-color', '#FFF')
                }else{
                  $('.member_change_detail > span').text('編輯會員資料');
                  $('.member_detail_info input').css('background-color', '#FFF7D2');
                  this.change_detail();
                }
            },
            show_up(){
                $('.change_pwd_box').fadeToggle();
                console.log('aaa')
            },
            change_detail(){
                $.ajax({
                  method:'POST',
                  url:'../php/change_detail.php',
                  data:{
                    name: this.member_name,
                    hb: this.member_hb,
                    phone: this.member_phone,
                    address: this.member_address,
                  },
                  dataType: 'json',
                  success: function(response){
                    if(response == 1){
                      alert('會員資料更新完成');
                    }
                  },
                  error: function(exception) {
                      alert("發生錯誤: " + exception.status);
                      console.log(exception)
                  },
                })
            },
            change_pwd(){
                if($('#old_pwd1').val() == $('#old_pwd2').val()){
                  $.ajax({
                    method:'POST',
                    url:'..php/change_pwd.php',
                    data:{
                      old_pwd: $('#old_pwd1').val(),
                      new_pwd: $('#new_pwd').val(),
                    },
                    dataType: 'json',
                    success: function(response){
                      if(response == 1){
                        alert('密碼變更完成');
                      }else{
                        alert('密碼錯誤');
                      }
                    },
                    error: function(exception) {
                        alert("發生錯誤: " + exception.status);
                        console.log(exception)
                    },
                  })
                }else{
                  alert('請確認兩次密碼是否相同')
                }
            }
        },
        mounted() {
            $.ajax({
                method: 'POST',
                url: '../php/getMember.php',
                data:{},
                dataType: 'json',
                success: function(response) {
                  console.log(response);
                  response.forEach(function(index,i){
                    member_block.member_name = index['NAME'];
                    member_block.member_hb = index['PHONE'];
                    member_block.member_phone = index['PHONE'];
                    member_block.member_address = index['ADDRESS'];
                  })
                },
                error: function(exception) {
                    console.log(exception);
                    alert("發生錯誤: " + exception.status);
                },
            })
        },
      })
