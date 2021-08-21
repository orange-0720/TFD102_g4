<?php
require_once 'ECPay.Payment.Integration.php';

$name = $_POST['name'];
$price = $_POST['price'];
$Quantity = $_POST['Quantity'];


$obj = new \ECPay_AllInOne();
 
//服務參數
$obj->ServiceURL  = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';
$obj->HashKey     = '5294y06JbISpM5x9';
$obj->HashIV      = 'v77hoKGq4kWxNNIS';
$obj->MerchantID  = 2000132;


$obj->Send['MerchantTradeNo'] = 'order'.time();
$obj->Send['MerchantTradeDate'] = date('Y/m/d H:i:s');
$obj->Send['PaymentType'] = $_POST['PaymentType'];
$obj->Send['TotalAmount'] = (int)$_POST['TotalAmount'];
$obj->Send['TradeDesc'] = '良耕野菜';
$obj->Send['ReturnURL'] = 'https://tibamef2e.com/tfd102/project/g4/front_end/checkout_s3.html';
// $obj->Send['OrderResultURL'] = 'http://localhost/tfd102_g4/front_end/checkout_s3.html';
$obj->Send['ClientBackURL'] = 'https://tibamef2e.com/tfd102/project/g4/front_end/checkout_s3.html';

$obj->Send['ChoosePayment'] = 'Credit';
$obj->Send['CreditInstallment'] = '';
 
//訂單的商品資料
for ($i=0; $i < count($name) ; $i++) { 
    array_push($obj->Send['Items'], array(
            'Name' => $name[$i],
            'Price' => $price[$i],
            'Currency' => "元",
            'Quantity' => (int)$Quantity[$i]
        )
    );
}
if(isset($_POST['cuppon'])){
    array_push($obj->Send['Items'], array(
        'Name' => '購物金折抵',
        'Price' => '-'.$_POST['cuppon'],
        'Currency' => "元",
        'Quantity' => (int)1
    )
);
}

 
//產生訂單(auto submit至ECPay)
//$obj->CheckOut();
$Response = (string)$obj->CheckOutString();
echo $Response;
 
// 自動將表單送出
echo '<script>document.getElementById("__ecpayForm").submit();</script>';