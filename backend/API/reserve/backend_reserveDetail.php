<?php

$id = $_POST["id"];

include("../../../php/connection.php");
  $pdo = MemberDB();


  $sql = "SELECT * FROM `tibamefe_tfd102g4`.APPOINTMENT WHERE APPOINTMENT_ID LIKE ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $id);
  $statement->execute();

  $data = $statement->fetch();

  echo json_encode($data);

?>