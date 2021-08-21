<?php
  //取得POST過來的值
  $activityName = $_POST["ACTIVITY_NAME"];
  $activityPrice = $_POST["ACTIVITY_PRICE"];
  $activityInfo = $_POST["ACTIVITY_INFO"];
  $activityStatus = $_POST["ACTIVITY_STATUS_ID"];
  $activityDate = $_POST["ACTIVITY_DATE"];
  $activityTime = $_POST["ACTIVITY_TIME"];
  $activityID = $_POST["ACTIVITY_ID"];

  include("../../../php/connection.php");
  $pdo = MemberDB();



  //建立SQL
  $sql = "UPDATE `tibamefe_tfd102g4`.`ACTIVITY` SET `ACTIVITY_NAME` = ?, `ACTIVITY_PRICE` = ?, `ACTIVITY_INFO` = ?, `ACTIVITY_STATUS_ID` = ?, `ACTIVITY_DATE` = ?, `ACTIVITY_TIME` = ? WHERE (`ACTIVITY_ID` = ?)";
    
  //執行
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1 , $activityName);     
  $statement->bindValue(2 , $activityPrice);
  $statement->bindValue(3 , $activityInfo);
  $statement->bindValue(4 , $activityStatus);
  $statement->bindValue(5 , $activityDate);
  $statement->bindValue(6 , $activityTime);
  $statement->bindValue(7 , $activityID);
  $statement->execute();
    
  //導頁    
  echo "SUCCESS";

?>