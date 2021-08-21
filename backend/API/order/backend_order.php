<?php

  include("../../../php/connection.php");
  $pdo = MemberDB();


    $keyword = $_POST["keyword"];

  //建立SQL語法
    $sql = "SELECT * FROM `tfd102-g4`.ORDER A1 join `tfd102-g4`.ORDER_STATUS_TYPE A2 on A1.ORDER_STATUS_ID = A2.ORDER_STATUS_ID";

    if ($keyword) {
      $sql = $sql . " WHERE ORDER_ID LIKE '%{$keyword}%'";
    }

    $sql = $sql . " order by A1.ORDER_ID desc";


    $statement = $pdo->prepare($sql);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    echo json_encode($data);

?>
