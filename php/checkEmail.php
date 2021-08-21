<?php

    $account = htmlspecialchars($_POST['account']);

    include("./connection.php");
    $pdo = MemberDB();

    //---------------------------------------------------

    //建立SQL
    $sql = 'SELECT * FROM CUSTOMER WHERE EMAIL = ? and QUALIFY =1';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $account);
    $statement->execute();
    $data = $statement->fetchAll();

    if(count($data) > 0){
        echo 'have';
    }else{
        echo 'done';
    }





?>