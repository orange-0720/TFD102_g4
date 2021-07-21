
// 固定header
var menu = document.getElementsByClassName("menu")[0];
document.addEventListener("scroll", function(){
  console.log(window.scrollY);
  // console.log(menu)
  // console.log(menu_top);
  console.log(menu.style.top)
  menu.style.top = (0 - (scrollY)) + "px";
});

// 漢堡列表展開
$('.ham').on("click",function(){
  if(window.innerWidth > 1200){
    $('.jump_hamburger_block').fadeToggle();
  }else{
    $('.jump_hamburger_block').toggleClass('ham_block_move')
  }
  $('.ham_top').toggleClass('ham_top_move');
  $('.ham_middle').toggleClass('ham_middle_move')
  $('.ham_bottom').toggleClass('ham_bottom_move');
})

// header 聯絡我們
$('.comm_us').on('click', function(){
  $('.index_contact_box').fadeToggle()
});

$('.nav_block_contact').on('click', function(){
  $('.index_contact_box').fadeToggle()
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
})