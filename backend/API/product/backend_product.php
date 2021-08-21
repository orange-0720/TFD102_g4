<?php

  include("../../../php/connection.php");
  $pdo = MemberDB();

  $keyword = $_POST["keyword"];

  //建立SQL語法
    $sql = "SELECT * FROM `tfd102-g4`.PRODUCT";

    if ($keyword) {
      $sql = $sql . " WHERE PRODUCT_NAME LIKE '%{$keyword}%'";
    }
    
    $sql = $sql . " order by PRODUCT_ID desc";

    $statement = $pdo->prepare($sql);

    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    echo json_encode($data);

?>
