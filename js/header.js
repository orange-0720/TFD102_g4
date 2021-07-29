
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
});

$('.black_block').click(function(){
  $('.index_contact_box').fadeToggle();
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