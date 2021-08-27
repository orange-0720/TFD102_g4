<?php

include("./connection.php");//與資料庫連線
$pdo = MemberDB();


//接前端送來的購物金值
$money=$_POST["money"];

include("./Lib/Member.php");
getMemberID();
// $memberID = $_SESSION['MemberID'];


if(isset($_SESSION['MemberID'])){// ISSET判斷是否有值
    //建立SQL語法
    $memberID = $_SESSION['MemberID'];
    // echo "value";
    $sql="UPDATE CUSTOMER set DISCOUNT = $money , DISCOUNT_HAVE = 1 WHERE CUSTOMER_ID = $memberID";
    // 同時update兩筆資料要用","
    //執行
    $pdo->exec($sql);    
    // echo $money;  
}else{
    echo "nodata";
    // $sql="INSERT INTO  CUSTOMER(DISCOUNT) VALUES ('$money')";
    //執行
    $pdo->exec($sql); 
}




?>