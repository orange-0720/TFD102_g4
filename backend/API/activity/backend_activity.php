<?php

  include("../../../php/connection.php");
  $pdo = MemberDB();

  $keyword = $_POST["keyword"];

  //建立SQL語法
  $sql = "SELECT * FROM `tfd102-g4`.ACTIVITY";

  if ($keyword) {
    $sql = $sql . " WHERE ACTIVITY_NAME LIKE '%{$keyword}%'";
  }

  $sql = $sql . " order by ACTIVITY_ID desc";

  $statement = $pdo->prepare($sql);
  $statement->execute();

  //抓出全部且依照順序封裝成一個二維陣列
  $data = $statement->fetchAll();

  echo json_encode($data);

?>