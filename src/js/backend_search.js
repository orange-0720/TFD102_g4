// alert('location.pathname: '+location.pathname);
// console.log(location.pathname);

let url=location.pathname;
const ac = 'back_hover';

switch (url) {
  case '/tfd102_g4_test/backend_reserve.php':
    $('#back_reserve').addClass(ac);
    break;
  case '/tfd102_g4_test/backend_member.php':
    $('#back_member').addClass(ac);
    break;
  case '/tfd102_g4_test/backend_product.php':
    $('#back_product').addClass(ac);
    break;
  case '/tfd102_g4_test/backend_order.php':
    $('#back_order').addClass(ac);
    break;
  case '/tfd102_g4_test/backend_activity.php':
    $('#back_activity').addClass(ac);
    break;
  case '/tfd102_g4_test/backend_message.php':
    $('#back_message').addClass(ac);
    break;
  default:
    break;
}

function backChange(params) {
  window.location.href = params;
}