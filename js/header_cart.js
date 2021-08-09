let pullfruit = []

$(document).ready(function() {
    $.getJSON('js/_fruitBoxData_399.json', function(json){
         pullfruit.push(...json) 
    });
    
    $.getJSON('js/_fruitBoxData_499.json', function(json){
        pullfruit.push(...json) 
    });

    $.getJSON('js/_fruitBoxData_599.json', function(json){
        pullfruit.push(...json) 
    });
})



//當購物車按鈕被按下 呼叫localStorage內檔案
function get_shopping_cart() {
  let cart_list = localStorage.getItem("goto_cart").split(',');
  // let cart_price = localStorage.getItem("price");
  let shoppinglist = []
  let prod_item = ""
  
  pullfruit.forEach(prod => {
      cart_list.forEach(list => {
          if (prod.id === Number(list)){
            shoppinglist.push(prod)
          } 
      });
  });
  
  // shoppinglist.forEach(prod => {
  //   prod_item += `

  //       <div class="cart_inside_item" 
  //          data-id="${prod.id}">
  //          <div class="cart_item_img">
  //          <img src="${prod.image}"/>  
  //          </div>
  //          <div class="cart_item_name">${prod.title}</div> 
  //       </div>
        
  //   </div>
    
  //   `
  // })

  //購物車
  // $(".cart_buy_list").append(`
      
  //       <div class="box_list">
  //         <img class="img_pic"src="./images/fruit_box/cart/${ cart_price }_cart.png" width="100px" height="100px" >
  //         <div class="box_name">客製蔬果箱$${cart_price}</div>
  //         <img class="member_arrow_icon"src="./images/member/member_arrow_icon.svg" >
  //         <div class="cart_item_delete">
  //           <img src="./images/checkout/delete_icon.svg"/>  
  //         </div>
  //       </div>
  //       ${prod_item}
  //     </div>
  // `);
  // $('.cart_total_price').text(cart_price);
}

