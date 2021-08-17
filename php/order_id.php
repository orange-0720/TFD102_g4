<?php
    include("./connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    if(!isset($_SESSION)){
        session_start(); 
    };

    $order_id = $_SESSION['ORDER_ID'];

    $sql =' SELECT * FROM `tfd102-g4`.ORDER WHERE ORDER_ID = ? ';
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $order_id);
    $statement->execute(); 

    $data = $statement->fetchAll();

    echo json_encode($data);
    


?>