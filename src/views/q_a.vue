<template>
  <div>
    <!-- 插圖-水果 -->
    <div class="kiwi">
      <img src="@/assets/images/q_a/kiwi.svg" alt="kiwi" />
    </div>

    <!-- QA開始 -->
    <div class="qa_step">
      <div class="notice">
        <img src="@/assets/images/q_a/egg.svg" />
        <section class="light">
          <h4>最新公告</h4>
        </section>
      </div>
      <div class="up">
        <marquee
          behavior="scroll"
          direction="up"
          style="height:4vh"
          scrollamount="1.6"
          onmouseover="this.stop();"
          onmouseout="this.start();"
        >
          <h4>
            即日起疫情期間，無法保證於指定到貨日期、指定時段送達，敬請見諒。
          </h4>
          <h4>農場小羊剛出生，快預約體驗活動，來餵羊羊喝奶奶!</h4>
          <h4>帶上你的信心，歡迎你來挑戰～用知識賺取你的買菜購物金！</h4>
          <h4>客製蔬果箱上市，趕快來挑選妳自己獨一無二的蔬果箱吧！</h4>
        </marquee>
      </div>
    </div>

    <!-- QA 全部 -->
    <div class="qa_item">
      <!-- 左側QA總欄 -->
      <div class="aside">
        <div class="sticky">
          <div class="qa_list">
            <h4>Q&A總覽</h4>
          </div>
          <div class="hr"></div>
          <ul>
            <li>
              <a id="or" href="#order"
                ><img src="@/assets/images/q_a/carrot.svg" />訂購與訂單</a
              >
            </li>
            <li>
              <a id="py" href="#pay"
                ><img src="@/assets/images/q_a/carrot.svg" />付款問題</a
              >
            </li>
            <li>
              <a id="sd" href="#send"
                ><img src="@/assets/images/q_a/carrot.svg" />寄送及物流相關</a
              >
            </li>
            <li>
              <a id="mr" href="#member"
                ><img src="@/assets/images/q_a/carrot.svg" />會員帳號</a
              >
            </li>
            <li>
              <a id="rn" href="#return"
                ><img src="@/assets/images/q_a/carrot.svg" />退換貨及退款</a
              >
            </li>
            <li>
              <a id="ot" href="#other"
                ><img src="@/assets/images/q_a/carrot.svg" />其他</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- 問題Q&A -->
      <div class="qa_problem">
        <div class="qa_01" id="order">
          <h3 class="title1">訂購與訂單</h3>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp; ;
            除了上網（電腦、平板裝置或手機）訂購外，還有其他訂購方式嗎？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp; 服務專線
            02-77788855，由專人為您服務，或下載訂購單，e-mail
            至howcome@buyfruit.com.tw 或傳真至 02-77788855。
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            同時預購多樣商品，運費如何計算？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            有！相關額外優惠，請撥打客服專線
            02-23778017，由專人依據您的性質或需求，為您客製服務。
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            如何知道我已完成訂購？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            訂購成功後，系統將發送訂單信至e-mail
            內，或可登入會員帳號後至【會員中心-->訂單查詢】查看訂單明細。
          </p>
        </div>

        <div class="qa_01" id="pay">
          <h3 class="title1">付款問題</h3>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            請問有哪些付款方式？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            我們提供「貨到付款(限會員)」、「線上刷卡」
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            刷卡失敗的可能原因是？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            <br />
            ◉
            輸入的卡片資料不正確，包括尚未開卡、卡號輸入錯誤、有效期限或驗證碼不正確等原因。倘為信用卡相關問題，可洽詢發卡銀行。<br />
            ◉ 發卡銀行目前未開放信用卡網路購物。<br />
            ◉ 信用卡額度已滿，請與發卡銀行連絡，增加額度即可。<br />
            ◉
            網路傳輸環境壅塞，無法傳輸完整有效的訊息，可重新載入頁面試試，或稍後回來登入會員帳號至【會員中心-->訂單查詢-->重新付款】，與網頁有關問題可洽客服專線(02)23778017。<br />
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            若刷卡失敗，我的信用卡還是會被扣款嗎？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            有！相關額外優惠，請撥打客服專線
            02-23778017，由專人依據您的性質或需求，為您客製服務。
          </p>
        </div>

        <div class="qa_01" id="send">
          <h3 class="title1">寄送與物流相關</h3>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            請問配合的宅配公司是哪一家呢？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            為確保較好的服務品質，目前僅提供黑貓宅急便（統一速達）配送服務。
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            宅配可以選擇哪些配送的時段？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            您可選擇黑貓宅急便的配送時段為「9-13時」、「14-18時」；如遇端午節、中秋節、除夕等重大節慶，
            二週前（含）恕無法指定到貨時段；另遇有颱風、地震等自然災害，配送時間可能異動，實際送達時間請以宅配通知為主。配送詳細規定以物流公司為準。
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            請問訂購後何時會出貨呢？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            新鮮水果為預購商品，於農夫採收後，依訂單順序出貨。以上均請以到貨通知為準。如遇國定假日或連續假期，請留意公告出貨日，並以到貨通知為準，恕不另行通知。其他與訂單、到貨等相關疑問，請洽客服專線02-23778017。
          </p>
          <div class="hr"></div>
          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            宅配可以選擇哪些配送的時段？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            您可選擇黑貓宅急便的配送時段為「9-13時」、「14-18時」；如遇端午節、中秋節、除夕等重大節慶，
            二週前（含）恕無法指定到貨時段；另遇有颱風、地震等自然災害，配送時間可能異動，實際送達時間請以宅配通知為主。配送詳細規定以物流公司為準。
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            請問出貨會通知嗎？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            出貨前將以簡訊及email通知，若無收到到貨通知，請確認通信服務是否設定拒收企業簡訊，或郵件被歸類為垃圾信件。
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            是否可以寄送多筆地址？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            一張訂單只能指定寄送一筆地址，如需分開寄送，請另外下訂單，或請客服協助分開寄送，運費將依商品規定按地址分開計算。
          </p>
        </div>

        <div class="qa_01" id="member">
          <h3 class="title1">會員帳號</h3>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp; 如何註冊為會員？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            桌機版網頁：於頁面最上方右邊，點擊標籤「加入會員」，輸入基本資料後按註冊即可成為會員。
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            加入會員有什麼優惠？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp; ; 優惠如下:<br />
            ◉可以在蔬果小遊戲中，抽到驚喜優惠。<br />
            ◉優先獲得水果和食材開放預購通知及優惠。<br />
          </p>

          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp; 忘記帳號怎麼辦？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            輸入當初註冊的email，系統將發送新的密碼通知信至您的註冊email內；為了保障帳號安全，建議您立即至會員中心，更新您的密碼。
          </p>
          <div class="hr"></div>
          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp; 忘記密碼怎麼辦？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            請至「會員登入」內點選「
            忘記密碼」，輸入當初註冊的email，系統將發送新的密碼通知信至您的註冊email內；為了保障帳號安全，建議您立即至會員中心，更新您的密碼。
          </p>
        </div>

        <div class="qa_01" id="return">
          <h3 class="title1">退換貨及退款</h3>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            收到的商品有瑕疵或破損要怎麼辦？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            生鮮商品除本身生長痕跡外，倘商品本身有嚴重瑕疵，例如因運輸造成貨品失溫或毀損、品項錯誤等，請於到貨後三小時內拍照存證，
            保留原包裝及宅配託運單，並立即與客服聯繫，以便安排後續退換貨事宜。如產品係因送達指定地點精通知收件人卻未被領取、拒收、轉寄等人為因素，導致
            延後到貨影響商品新鮮度與品質，恕不受理退換貨及相關賠償責任。
          </p>
        </div>

        <div class="qa_01" id="other">
          <h3 class="title1">其他</h3>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            請問可寄送離島或海外嗎？運費如何計算？
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp; ;
            離島地區包含澎湖、金門、馬祖、綠島，採空運宅配，運費將依宅即便公告另外計算，費用可撥打客服專線
            02-77788855詢問。
            如有大量需求寄送海外地區，歡迎來信howcome@buyfruit.com.tw
            或撥打客服專線02-77788855另行報價。
          </p>
          <div class="hr"></div>

          <p class="question">
            <img src="@/assets/images/q_a/q_green.svg" />&nbsp;
            如何知道我已經完成訂購
          </p>
          <p class="answer">
            <img src="@/assets/images/q_a/a_orange.svg" />&nbsp;
            訂購成功後，系統將發送訂單信至e-mail
            內，或可登入會員帳號後至【會員中心-->訂單查詢】查看訂單明細。
          </p>
        </div>
      </div>
    </div>

    <br />

    <!-- 插圖-羊 -->
    <div class="animal_huacaya">
      <img src="@/assets/images/q_a/animal_alpaca_huacaya.png" alt="huacaya" />
    </div>
  </div>
</template>
