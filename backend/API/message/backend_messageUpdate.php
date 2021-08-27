<?php
  //取得POST過來的值
  $comments = $_POST["COMMENTS"];
  $reply = $_POST["REPLY"];
  $messageStatus = $_POST["MESSAGE_STATUS_ID"];
  $messageBoardId = $_POST["MESSAGE_BOARD_ID"];


  include("../../../php/connection.php");
  $pdo = MemberDB();


  //建立SQL
  $sql = "UPDATE `tibamefe_tfd102g4`.`MESSAGE_BOARD` SET `COMMENTS` = ?, `REPLY` = ?, `MESSAGE_STATUS_ID` = ? WHERE (`MESSAGE_BOARD_ID` = ?)";
    
  //執行
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1 , $comments);     
  $statement->bindValue(2 , $reply);
  $statement->bindValue(3 , $messageStatus);
  $statement->bindValue(4 , $messageBoardId);
  $statement->execute();
    
  //導頁    
  echo "SUCCESS";

?>