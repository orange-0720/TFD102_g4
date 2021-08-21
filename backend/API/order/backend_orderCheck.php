<?php
  //取得POST過來的值
  $orderStatus = $_POST["ORDER_STATUS_ID"];
  $orderID = $_POST["ORDER_ID"];

  include("../../../php/connection.php");
  $pdo = MemberDB();

  print_r($_POST);


  //建立SQL
  $sql = "UPDATE `tfd102-g4`.`ORDER` SET `ORDER_STATUS_ID` = '?' WHERE (`ORDER_ID` = '?')";
    
  //執行
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1 ,$orderStatus);     
  $statement->bindValue(2 ,$orderID);
  $statement->execute();
    
  //導頁    
  echo "SUCCESS";

?>