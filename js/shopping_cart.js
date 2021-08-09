
function shopping_cart(){
    let cart_items = JSON.parse(sessionStorage.getItem("cart_items"));
    if(cart_items){
        $('.cart_nothing').fadeOut();
        let cart_items_list = [];
        cart_items.forEach(function(cart, i){
            cart_items_list += 
            `
                <div class="cart_inside_item" data-id="${cart.item_id}">
                  <div class="cart_item_img">
                    <img src="${cart.item_img}"/>  
                  </div>
                  <div class="cart_item_name">${cart.item_name}</div>
                  <div class="cart_item_number">
                    <button class="number_minus">-</button>
                    <input type="text" value="${cart.item_number}"/ disabled>
                    <button class="number_plus">+</button>
                  </div>
                  <div class="cart_item_price">${cart.total_price}</div>
                  <div class="cart_item_delete">
                    <img src="./images/checkout/delete_icon.svg"/>  
                  </div>
                </div>
            `
        });
        let count_price = 0;
        cart_items.forEach(function(cart, i){
            console.log(cart.total_price);
            count_price += parseInt(cart.total_price);
        });
        
        $('.cart_total_price').text(count_price);
        $('.cart_buy_list').append(cart_items_list);
        
    }
};

// 購物車測試
$('.cart_buy_list').on('click','.cart_item_delete',function(e){
    let delete_price = $(this).prev().text();
    let current_price = $('.cart_total_price').text()
    let total_price = parseInt(current_price) - parseInt(delete_price);
    if(confirm('確定刪除此商品?')){
        if($('.cart_inside_item').length == 1){
        $('.cart_nothing').fadeIn();
        $('cart_total_price').html(0);
        sessionStorage.removeItem('cart_items');
        }
        $(e.target).parent().parent('div.cart_inside_item').fadeOut().remove();
        $('.cart_total_price').text(total_price);
    
        // 清除sesstion_storage裡的資料
        let this_id = $(e.target).closest('div.cart_inside_item').attr("data-id");  //找出該項目的item_id
        let cart_items = JSON.parse(sessionStorage.getItem("cart_items"));    // 從 localStorage 取得資料
        let updated_cart_items = [];   // 準備用來放要存到 localStorage 裡的資料
    
        cart_items.forEach(function(cart, i){
            if(this_id != cart.item_id){
            updated_cart_items.push(cart);
            }
        });
    
        // 回存至 localStorage
        sessionStorage.setItem("cart_items", JSON.stringify(updated_cart_items));
    }
})
    
    
    //點擊增加
    $('.cart_buy_list').on('click','.number_plus',function(e){
    let current_number = parseInt($(e.target).siblings('input').val());
    let item_money = parseInt($(e.target).parent().next().html());
    $(e.target).siblings('input').val(current_number + 1)
    
    let this_id = $(e.target).closest('div.cart_inside_item').attr("data-id");  //找出該項目的item_id
    let cart_items = JSON.parse(sessionStorage.getItem("cart_items"));    // 從 localStorage 取得資料
    cart_items.forEach(function(cart, i){
        if(this_id == cart.item_id){
            return this_item_price = cart.unit_price;
        }
    });
    $(e.target).parent().next().html(item_money + this_item_price);
    
    console.log(this_id)
    // storage裡更新數量
    let new_number = parseInt($(e.target).siblings('input').val());
    let new_money = $(e.target).parent().next().html();
    cart_items.forEach(function(cart, i){
        if(this_id == cart.item_id){
            console.log(cart.item_name);
            cart.item_number = new_number;
            cart.total_price = new_money;
        }
    });
    // 回存至 localStorage
    sessionStorage.setItem("cart_items", JSON.stringify(cart_items));
    
    let count_price = 0;
    cart_items.forEach(function(cart, i){
        console.log(cart.total_price);
        count_price += parseInt(cart.total_price);
    });
    
    $('.cart_total_price').text(count_price);
    
})
    
    //點擊減少
    $('.cart_buy_list').on('click','.number_minus',function(e){
    let current_number = parseInt($(e.target).siblings('input').val());
    
    let item_money = parseInt($(e.target).parent().next().html());
    let this_id = $(e.target).closest('div.cart_inside_item').attr("data-id");  //找出該項目的item_id
    let cart_items = JSON.parse(sessionStorage.getItem("cart_items"));    // 從 localStorage 取得資料
    cart_items.forEach(function(cart, i){
        if(this_id == cart.item_id){
            return this_item_price = cart.unit_price;
        }
    });
    
    if(current_number == 1){
        alert('僅剩一個囉')
    }else{
        $(e.target).siblings('input').val(current_number -1 )
        $(e.target).parent().next().html(item_money - this_item_price);
    }
    
    // storage裡更新數量
    let new_number = parseInt($(e.target).siblings('input').val());
    let new_money = $(e.target).parent().next().html();
    cart_items.forEach(function(cart, i){
        if(this_id == cart.item_id){
            cart.item_number = new_number;
            cart.total_price = new_money;
        }
    });
    // 回存至 localStorage
    sessionStorage.setItem("cart_items", JSON.stringify(cart_items));
    
    let count_price = 0;
    cart_items.forEach(function(cart, i){
        count_price += parseInt(cart.total_price)
    });
    
    $('.cart_total_price').text(count_price);
})
    


function get_tasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if(tasks){
      let inside_cart = document.getElementById("inside_cart");
      let pay_money = document.getElementsByClassName("pay_money")[0];
      let ul_task_list = "";
      let price = 0;
      let shopping_cart = document.getElementsByClassName("shopping_cart")[0];
      inside_cart.style.display = "none";
      pay_money.innerHTML = "進入結帳頁面";
      pay_money.href = "#";
      tasks.forEach(function(item,i){
        ul_task_list += 
            `
                <li data-id="${item.item_id}">
                    <div class="shopping_li_list">
                        <p>商品圖片</p>
                        <p>商品名稱</p>
                        <p>商品數量</p>
                        <p>金額小計</p>
                        <i>刪除</i>
                    </div>
                    <div class="shopping_detail_list">
                        <div class=""cart_pic>
                            <img class="shoppimg_img" src="${item.item_img}"></img>
                            <img class="logo_img" src="${item.item_logo}"></img>
                        </div>
                        <p>${item.item_name}</p>
                        <section>
                            <button type="button" class ="cart_minus">  </button>
                            <input type = "text" class="in_cart_number" value="${item.item_number}" disabled>
                            <button type="button" class ="cart_plus">  </button>
                        </section>
                        <p class="cart_total_price"><span class="cart_detail_price">${item.item_price}</span>元</p>
                        <button class='remove'></button>
                    </div>
                </li>
            `;
            price += parseInt(item.item_price);
        });

        pay_money.insertAdjacentHTML("beforebegin",
        `
            <p class="cart_total">金額總計 :<span class="cart_all_price">` + price + `</span>元</p>
        `);

        let cart_list = document.getElementsByClassName("cart_list")[0];
        cart_list.innerHTML = ul_task_list;

        let list_number = cart_list.children.length;
        shopping_cart.insertAdjacentHTML("beforeend",
        `
            <p class="cart_number">`+ list_number +`</p>
        `)
    }
}

/* localStorage 存取完成 */

$('.cart_inside_item').on('click', function(){
    $('.show_down').fadeIn();
})