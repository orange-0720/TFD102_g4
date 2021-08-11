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
    $sql="UPDATED `tfd102-g4`.CUSTOMER(DISCOUNT) VALUES ('$money')";
    //執行
    $pdo->exec($sql);      
}else{
    echo "nodata";
    $sql="INSERT INTO  `tfd102-g4`.CUSTOMER(DISCOUNT) VALUES ('$money')";
    //執行
    $pdo->exec($sql); 
}




?>