<template>
  <div>
    <div class="table">
      <h2>活動表單</h2>
      <div class="table_body">
        <div class="table_left">
          <div>
            <span>希望日期</span>
            <input type="datetime-local" accept="middle" />
          </div>
          <div>
            <span>姓名</span>
            <input type="text" />
          </div>
          <div>
            <span>電話</span>
            <input type="text" />
          </div>
          <div>
            <span>電子郵件</span>
            <input type="email" />
          </div>
          <div>
            <span>報名活動</span>
            <select>
              <option>請選擇活動</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Hamster</option>
            </select>
          </div>
          <div>
            <span>人數</span>
            <select>
              <option>請選擇人數</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        <div class="table_right">
          <div>
            <span>集合場地</span>
            <em>台北市</em>
          </div>
          <div>
            <span>舉辦期間</span>
            <em>5月到7月中</em>
          </div>
          <div>
            <span>花費時間</span>
            <em>2個小時</em>
          </div>
          <div>
            <span>價錢</span>
            <em>250元</em>
          </div>
          <div>
            <span>突發狀況</span>
            <em>其活動視天氣做更動</em>
          </div>
          <div>
            <span>衣著</span>
            <em>請穿適合活動的衣物及鞋子</em>
          </div>
        </div>
      </div>
    </div>
    <div class="event_info_btn"><a href="">送出</a></div>
  </div>
</template>
