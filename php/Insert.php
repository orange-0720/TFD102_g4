<?php

       $account = htmlspecialchars($_POST['account']);
       $pwd = htmlspecialchars($_POST['pwd']);
       $tel = htmlspecialchars($_POST['tel']);
   
       include("./connection.php");
       $pdo = MemberDB();
   
       //---------------------------------------------------
   
       //建立SQL
       // $sql = "INSERT INTO member(Name, PWD, CreateDate) VALUES ('".$account."', '".$pwd."', NOW())";
       $sql = "INSERT INTO `tfd102-g4`.CUSTOMER(EMAIL, PWD, PHONE , QUALIFY, ADD_DATE, STATUS,DISCOUNT) VALUES (?, ?, ?, 1, NOW(), 1,0)";
   
   
       //執行
       // $pdo->exec($sql);
       $statement = $pdo->prepare($sql);
       $statement->bindValue(1, $account);
       $statement->bindValue(2, $pwd);
       $statement->bindValue(3, $tel);
       $statement->execute();

       echo 'done';
?>