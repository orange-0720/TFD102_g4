<?php
  //取得POST過來的值
  $qualify = $_POST["QUALIFY"];
  $customerID = $_POST["CUSTOMER_ID"];

  // print_r($_POST);

  include("../../../php/connection.php");
  $pdo = MemberDB();
  

  //建立SQL
  $sql = "UPDATE `tfd102-g4`.`CUSTOMER` SET `QUALIFY` = ? WHERE (`CUSTOMER_ID` = ?)";
    
  //執行
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1 , $qualify);
  $statement->bindValue(2 , $customerID);
  $statement->execute();
    
  //導頁    
  echo "SUCCESS";

?>