<?php

  include("../../../php/connection.php");
  $pdo = MemberDB();

  $keyword = $_POST["keyword"];

  //建立SQL語法
  $sql = "SELECT * FROM `tibamefe_tfd102g4`.APPOINTMENT a JOIN `tibamefe_tfd102g4`.ACTIVITY b ON a.ACTIVITY_ID = b.ACTIVITY_ID";

  if ($keyword) {
    $sql = $sql . " WHERE a.APPOINTMENT_EMAIL LIKE '%{$keyword}%'";
  }

  $sql = $sql . " order by a.APPOINTMENT_ID desc";

  $statement = $pdo->prepare($sql);
  $statement->execute();

  //抓出全部且依照順序封裝成一個二維陣列
  $data = $statement->fetchAll();

  echo json_encode($data);

?>
