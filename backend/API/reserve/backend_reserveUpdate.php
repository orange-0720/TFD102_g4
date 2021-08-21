<?php
  //取得POST過來的值
  $appointmentDate = $_POST["APPOINTMENT_DATE"];
  $appointmentName = $_POST["APPOINTMENT_NAME"];
  $appointmentEmail = $_POST["APPOINTMENT_EMAIL"];
  $peopleNum = $_POST["PEOPLE_NUM"];
  $appointmentID = $_POST["APPOINTMENT_ID"];


  include("../../../php/connection.php");
  $pdo = MemberDB();


  //建立SQL
  $sql = "UPDATE `tfd102-g4`.`APPOINTMENT` SET `APPOINTMENT_DATE` = ?, `APPOINTMENT_NAME` = ?, `APPOINTMENT_EMAIL` = ?, `PEOPLE_NUM` = ? WHERE (`APPOINTMENT_ID` = ?)";
    
  //執行
  $statement = $pdo->prepare($sql);  
  $statement->bindValue(1 , $appointmentDate);
  $statement->bindValue(2 , $appointmentName);
  $statement->bindValue(3 , $appointmentEmail);
  $statement->bindValue(4 , $peopleNum);
  $statement->bindValue(5 , $appointmentID);
  $statement->execute();
    
  //導頁    
  echo "SUCCESS";

?>