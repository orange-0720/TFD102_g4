shopping_cart();

// 固定header
var menu = document.getElementsByClassName("menu")[0];
document.addEventListener("scroll", function(){
  // console.log(window.scrollY);
  // // console.log(menu)
  // // console.log(menu_top);
  // console.log(menu.style.top)
  menu.style.top = (0 - (scrollY)) + "px";
});

// 漢堡列表展開

function ham(){
  if(window.innerWidth > 1200){
    $('.jump_hamburger_block').fadeToggle();
  }else{
    $('.jump_hamburger_block').toggleClass('ham_block_move')
  }
  $('.ham_top').toggleClass('ham_top_move');
  $('.ham_middle').toggleClass('ham_middle_move')
  $('.ham_bottom').toggleClass('ham_bottom_move');
}

$('.ham').on("click",ham);
$('.ham').on('click', function(){
  if($('.header_shopping_cart').hasClass('cart_into')){
    $('.header_shopping_cart').removeClass('cart_into')
  }
})



// header 聯絡我們
$('.comm_us').on('click', function(e){
  $('.index_contact_box').fadeToggle();
});

$('.nav_block_contact').on('click', function(){
  $('.index_contact_box').fadeToggle()
  ham();
});

$('.contact_block_Xmark').click(function(){
  $('.index_contact_box').fadeToggle()
  $('.order_find').fadeOut();
});

$('.black_block').click(function(){
  $('.index_contact_box').fadeToggle();
  $('.order_find').fadeOut();
});


//購物車彈窗
$('.shop_car').click(function(){
  $('.header_shopping_cart').toggleClass('cart_into');
  if($('.jump_hamburger_block').hasClass('ham_block_move')){
    ham();
  }
})

$('.cart_close').click(function(){
  $('.header_shopping_cart').toggleClass('cart_into');
})


$('.search_icon').on('click',order_find);

// 確認是否是會員
function ifMember(){
  $.ajax({
        method: 'POST',
        url: '../php/ifMember.php',
        data:{},
        dataType: 'text',
        success: function(response) {
          console.log(response);
          if(response == 'yes'){
            $('.nav_block_log > span').text('會員中心');
            $('.login').click(function(){
              window.location.href = 'member.html';
            });
          }else{
            $('.login').click(function(){
              window.location.href = 'login.html';
            });
          }
        },
        error: function(exception) {
            console.log(exception)
            alert("發生錯誤: " + exception.status);
        },
  });  
}




// 聯絡我們找訂單
function order_find(){
  $.ajax({
    method: 'POST',
    url: '../php/orderFind.php',
    data:{
      order_id: $('#order_search').val(),
    },
    dataType: 'json',
    success: function(response) {
      console.log(response);
      if(response == 2){
        alert('查無此訂單')
      }else{
        response.forEach(function(index,i){
          $('.order_time').text(index['ADD_DATE']);
          $('.order_id').text(index['ORDER_ID']);
          $('.order_price').text(index['ORDER_PRICE']);
          $('.order_status').text(index['ORDER_STATUS_TYPE_NAME']);
        })
        $('.order_find').fadeIn();
      }
    },
    error: function(exception) {
      alert("發生錯誤: " + exception.status);
      console.log(exception);
    },  
  })
}
// 聯絡我們找訂單結束


//購物車彈窗bg
function showbg() {
  $(".cart_bk").toggleClass('-active')
}
function closebg() {
  $(".cart_bk").toggleClass('-active')
}

$('.cart_bk').click(function(){
  $(".cart_bk").toggleClass('-active');
  $('.header_shopping_cart').toggleClass('cart_into');
})  