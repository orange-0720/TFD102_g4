var put_in = document.getElementById("put_in");
var price = 0

function shopping_cart(){

};


put_in.addEventListener("click",function(){
    alert("已將此商品加入購物車")
    let inside_cart = document.getElementById("inside_cart");
    let cart_list = document.getElementsByClassName("cart_list")[0];
    let img_el = document.getElementsByClassName("img_el")[0];
    let product_name = document.getElementsByClassName("product_name")[0].innerHTML;
    let product_value = document.getElementById("number_change").value;
    let count_price = document.getElementById("count_price").innerHTML;
    let pay_money = document.getElementsByClassName("pay_money")[0];
    var small_pic = document.getElementById("big_photo");
    let shopping_cart = document.getElementsByClassName("shopping_cart")[0];
    price = parseInt(count_price);
    console.log(price)


    inside_cart.style.display = "none";
    pay_money.innerHTML = "進入結帳頁面";
    pay_money.href = "#";
    let item_id = Date.now();
    cart_list.insertAdjacentHTML("beforeend",`
        <li data-id="${item_id}">
            <div class="shopping_li_list">
                <p>商品圖片</p>
                <p>商品名稱</p>
                <p>商品數量</p>
                <p>金額小計</p>
                <i>刪除</i>
            </div>
            <div class="shopping_detail_list">
                <div class=""cart_pic>
                    <img class="shoppimg_img" src="`+ img_el.src +`"></img>
                    <img class="logo_img" src="`+ small_pic.src +`"></img>
                </div>
                <p>`+ product_name +`</p>
                <section>
                    <button type="button" class ="cart_minus">  </button>
                    <input type = "text" class="in_cart_number" value="`+ product_value +`" disabled>
                    <button type="button" class ="cart_plus">  </button>
                </section>
                <p class="cart_total_price"><span class="cart_detail_price">`+ count_price +`</span>元</p>
                <button class='remove'></button>
            </div>
        </li>`
    )
    if(pay_money.previousElementSibling){
        let cart_all_price = document.getElementsByClassName("cart_all_price")[0];
        document.getElementsByClassName("cart_all_price")[0].innerHTML = parseInt(cart_all_price.innerHTML) + price;
        
    }else{
        pay_money.insertAdjacentHTML("beforebegin",
        `
            <p class="cart_total">金額總計 :<span class="cart_all_price">` + price + `</span>元</p>
        `)
    }
    if(shopping_cart.querySelector("img").nextElementSibling){
        let cart_number = document.getElementsByClassName("cart_number")[0];
        document.getElementsByClassName("cart_number")[0].innerHTML = parseInt(cart_number.innerHTML) + 1;
    }else{
        shopping_cart.insertAdjacentHTML("beforeend",
        `
            <p class="cart_number">1</p>
        `)
    }
  

    let task = {
        item_id: item_id,
        item_img: img_el.src,
        item_name: product_name,
        item_number: product_value,
        item_price: count_price,
        item_logo: small_pic.src
    };
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        // 若存在
        tasks.unshift(task);
    } else {
        // 若不存在
        tasks = [task];
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
})


/* 購物車點擊刪除等功能 */
document.addEventListener("click", function(e){
    if(e.target.classList.contains("remove")){
        let shopping_list = e.target.closest("li");
        let cart_list = e.target.closest("ul").querySelectorAll("li");
        let pay_money = document.getElementsByClassName("pay_money")[0];
        let cart_total_price = document.getElementsByClassName("cart_total_price")[0];
        let cart_all_price = document.getElementsByClassName("cart_all_price")[0].innerHTML;
        let cart_number = document.getElementsByClassName("cart_number")[0]
        let delete_alert = document.getElementById("delete_alert");
        let delete_question = document.getElementById("delete_question");
        let delete_confirm = document.getElementById("delete_confirm");
        let delete_cancele = document.getElementById("delete_cancele");

        // delete_alert.classList.add("fadein");
        // delete_alert.style.display = "block";

        if(confirm("確認是否刪除")){
            let target_price = e.target.previousElementSibling.querySelector("span").innerHTML;

            delete_alert.classList.remove("fadein");
            delete_alert.style.display = "none";

            shopping_list.closest("li").classList.add("fade_out");
            setTimeout(function(){
                shopping_list.closest("li").remove()    
            },500);
            document.getElementsByClassName("cart_all_price")[0].innerHTML = parseInt(cart_all_price) - parseInt(target_price);
            let list_number = cart_list.length;
            console.log(list_number)
            document.getElementsByClassName("cart_number")[0].innerHTML =  parseInt(list_number) -1;


            // localStorage內刪除再更新
            let this_id = e.target.closest("li").getAttribute("data-id");  //找出該項目的item_id
            let tasks = JSON.parse(localStorage.getItem("tasks"));    // 從 localStorage 取得資料
            let updated_tasks = [];   // 準備用來放要存到 localStorage 裡的資料

            tasks.forEach(function(task, i){
                if(this_id != task.item_id){
                updated_tasks.push(task);
                }
            });

            // 回存至 localStorage
            localStorage.setItem("tasks", JSON.stringify(updated_tasks));
            

            if(cart_list.length == 1){
                setTimeout(function(){
                    inside_cart.style.display = "block";
                    pay_money.innerHTML = "商品一覽";
                    pay_money.href = "./shopping _page.html";
                    pay_money.previousElementSibling.remove();
                },500)

                let shopping_cart = document.getElementsByClassName("shopping_cart")[0];
                shopping_cart.lastElementChild.remove();
                
                // 清空localStorage
                localStorage.clear();
            }
        };

        // delete_cancele.addEventListener("click", function(){
        //     delete_alert.classList.remove("fadein");
        //     delete_alert.style.display = "none";
        // });

        // document.addEventListener("click", function(e){
        //     if(e.target.closest("section#delete_question")){
        //         let delete_question = e.target.closest("section");
        //         if(delete_question.classList.contains("qa_jump")){
        //         console.log("點擊在頁面上")
        //         }
        //     }else if(e.target.closest("div#delete_alert")){
        //         delete_alert.classList.remove("fadein");
        //         delete_alert.style.display = "none";
        //     }
        // })
    }
})



document.addEventListener("click", function(e){
    if(e.target.classList.contains("cart_plus")){
        let in_cart_number = e.target.closest("section").querySelector("input");
        let cart_detail_price = e.target.closest("li").querySelector("span.cart_detail_price");
        let cart_all_price = document.getElementsByClassName("cart_all_price")[0].innerHTML;
         
        e.target.closest("section").querySelector("input").value = parseInt(in_cart_number.value) + 1;
        cart_detail_price.innerHTML = parseInt(cart_detail_price.innerHTML) + 490;
        document.getElementsByClassName("cart_all_price")[0].innerHTML = parseInt(cart_all_price) + 490;

        let this_id = e.target.closest("li").getAttribute("data-id");  //找出該項目的item_id
        let this_number = e.target.closest("section").querySelector("input").value;
        let this_money = document.getElementsByClassName("cart_all_price")[0].innerHTML;
        let tasks = JSON.parse(localStorage.getItem("tasks"));    // 從 localStorage 取得資料
        let updated_tasks = [];   // 準備用來放要存到 localStorage 裡的資料

        tasks.forEach(function(task, i){
            if(this_id = task.item_id){
                task.item_number = this_number;
                task.item_price = this_money
                updated_tasks.push(task);
            }
            });

            // 回存至 localStorage
            localStorage.setItem("tasks", JSON.stringify(updated_tasks));
    }
})

document.addEventListener("click", function(e){
    if(e.target.classList.contains("cart_minus")){
        let in_cart_number = e.target.closest("section").querySelector("input");
        let cart_detail_price = e.target.closest("li").querySelector("span.cart_detail_price");
        let cart_all_price = document.getElementsByClassName("cart_all_price")[0].innerHTML;
        if(in_cart_number.value > 1){
            e.target.closest("section").querySelector("input").value = parseInt(in_cart_number.value) - 1 ;
            cart_detail_price.innerHTML = parseInt(cart_detail_price.innerHTML) - 490;
            document.getElementsByClassName("cart_all_price")[0].innerHTML = parseInt(cart_all_price) - 490;

            let this_id = e.target.closest("li").getAttribute("data-id");  //找出該項目的item_id
            let this_number = e.target.closest("section").querySelector("input").value;
            let this_money = document.getElementsByClassName("cart_all_price")[0].innerHTML;
            let tasks = JSON.parse(localStorage.getItem("tasks"));    // 從 localStorage 取得資料
            let updated_tasks = [];   // 準備用來放要存到 localStorage 裡的資料

            tasks.forEach(function(task, i){
                if(this_id = task.item_id){
                    task.item_number = this_number;
                    task.item_price = this_money
                    updated_tasks.push(task);
                }
                });

            // 回存至 localStorage
            localStorage.setItem("tasks", JSON.stringify(updated_tasks));
        }
        
    }
})
