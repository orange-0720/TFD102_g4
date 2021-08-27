<?php

$keyword = $_POST["keyword"];

include("../../../php/connection.php");
  $pdo = MemberDB();


  $sql = "SELECT PRODUCT_NAME FROM `tibamefe_tfd102g4`.PRODUCT WHERE PRODUCT_NAME LIKE ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, "%".$keyword."%");
  $statement->execute();

  $data = $statement->fetchAll();

  if(count($data) > 0){
    foreach($data as $index => $row){
    echo $row["PRODUCT_NAME"];   //欄位名稱	  
    echo "<br>";
    }
  }else{
    echo "查無此商品";
  }



?>