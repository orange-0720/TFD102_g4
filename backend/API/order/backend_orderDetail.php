<?php

$id = $_POST["id"];

include("../../../php/connection.php");
  $pdo = MemberDB();


  $sql = "SELECT * FROM `tfd102-g4`.ORDER WHERE ORDER_ID LIKE ?";
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $id);
  $statement->execute();

  $data = $statement->fetch();

  echo json_encode($data);

?>