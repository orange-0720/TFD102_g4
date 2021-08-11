
function shopping_cart(){
    let cart_items = JSON.parse(sessionStorage.getItem("cart_items"));
    let fruit_boxs = JSON.parse(sessionStorage.getItem("fruit_boxs"));
    if(cart_items || fruit_boxs){
        $('.cart_nothing').fadeOut();
        if(cart_items){
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
            let cart_price_now = parseInt($('.cart_total_price').html());
            count_price += cart_price_now;
            console.log(count_price);
            
            $('.cart_total_price').text(count_price);
            $('.cart_buy_list').append(cart_items_list);
        };
        if(fruit_boxs){
            let fruit_boxs_list = [];
            fruit_boxs.forEach(function(box, i){
                let product_name_list=[];
                box.product_name.forEach(function(index,i){
                product_name_list += `<li>${index}</li>`
                })
                fruit_boxs_list += 
                `
                <div class="fruit_box_list" data-id="${box.item_id}">
                    <div class="fruit_box_inside">
                    <div class="fruit_box_img">
                        <img src="${box.item_img}"/>  
                    </div>
                    <div class="fruit_box_name">${box.item_name}</div>
                    <div class="fruit_box_number">
                        <button class="fruit_box_minus">-</button>
                        <input type="text" value="${box.item_number}"/ disabled>
                        <button class="fruit_box_plus">+</button>
                    </div>
                    <div class="fruit_box_price">${box.total_price}</div>
                    <div class="fruit_box_delete">
                        <img src="./images/checkout/delete_icon.svg"/>  
                    </div>
                    </div>
                    <div class="fruit_detail">
                    <img class="cart_arrow" src="./images/shopping_page/shopping_arrow_icon.svg"/>
                    <ul>
                        ${product_name_list}
                    </ul>
                    </div>
                </div>
                `
            });
            let count_price = 0;
            fruit_boxs.forEach(function(box, i){
                count_price += parseInt(box.total_price)
            });
            let cart_price_now = parseInt($('.cart_total_price').html());
            count_price += cart_price_now;

            $('.cart_total_price').html(count_price);
            $('.cart_buy_list').append(fruit_boxs_list);
        }
    }
};

// 購物車刪除(一般商品)
$('.cart_buy_list').on('click','.cart_item_delete',function(e){
    let delete_price = $(this).prev().text();
    let current_price = $('.cart_total_price').text()
    let total_price = parseInt(current_price) - parseInt(delete_price);
    if(confirm('確定刪除此商品?')){
        if($('.cart_inside_item').length <= 1){
        $('.cart_nothing').fadeIn();
        $('.cart_total_price').html(0);
        $(e.target).closest('div.cart_inside_item').fadeOut().remove();
        sessionStorage.removeItem('cart_items');
        sessionStorage.removeItem('fruit_boxs');
        }else{
            $(e.target).closest('div.cart_inside_item').fadeOut().remove();
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

    }
})

// 購物車刪除(客製化商品)
$('.cart_buy_list').on('click','.fruit_box_delete',function(e){
    let delete_price = $(this).prev().text();
    let current_price = $('.cart_total_price').text();
    let total_price = parseInt(current_price) - parseInt(delete_price);
    if(confirm('確定刪除此商品?')){
        console.log($('.cart_inside_item').length);
        if($('.cart_inside_item').length <= 1){
            $(e.target).closest('div.cart_inside_item').fadeOut().remove();
            $('.cart_nothing').fadeIn();
            $('.cart_total_price').text(0);
            sessionStorage.removeItem('fruit_boxs');
        }else{
            $(e.target).closest('div.cart_inside_item').fadeOut().remove();
            $('.cart_total_price').text(total_price);
        
            // 清除sesstion_storage裡的資料
            let this_id = $(e.target).closest('div.cart_inside_item').attr("data-id");  //找出該項目的item_id
            let fruit_boxs = JSON.parse(sessionStorage.getItem("fruit_boxs"));    // 從 localStorage 取得資料
            let updated_cart_items = [];   // 準備用來放要存到 localStorage 裡的資料
        
            fruit_boxs.forEach(function(box, i){
                if(this_id != box.item_id){
                updated_cart_items.push(box);
                }
            });
        
            // 回存至 localStorage
            sessionStorage.setItem("fruit_boxs", JSON.stringify(updated_cart_items));
        }
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
        count_price += parseInt(cart.total_price);
    });

    let price_now = parseInt($('.cart_total_price').text());
    let new_price = price_now + this_item_price;
    $('.cart_total_price').html(new_price);

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
    
    let price_now = parseInt($('.cart_total_price').text());
    let new_price = price_now + this_item_price;
    $('.cart_total_price').html(new_price);
})


$('.cart_buy_list').on('click','.fruit_detail',function(e){
    console.log(e.target);
    $(e.target).next().slideToggle();
})