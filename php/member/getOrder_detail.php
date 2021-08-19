<?php

    $getdata = json_decode(file_get_contents('php://input'), true);
    
    $order_id = $getdata['order_id'];
    include("../connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    $sql =' SELECT * FROM `tfd102-g4`.ORDER_DETAIL WHERE ORDER_ID = ? and PRODUCT_ID is not null';

    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $order_id);
    $statement->execute(); 

    $data = $statement->fetchAll();

    // 存放單品之陣列
    $item = [];

    for($i=0; $i < count($data); $i++){
        $sql = 'SELECT P.PRODUCT_OUT_IMG, P.PRODUCT_NAME, P.PRODUCT_PRICE, D.QUANTITY, D.ORDER_DETAIL_PRICE FROM `tfd102-g4`.ORDER_DETAIL D JOIN `tfd102-g4`.PRODUCT P on D.PRODUCT_ID = P.PRODUCT_ID WHERE D.ORDER_ID = ? ';

        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $order_id);
        $statement->execute(); 

        $data = $statement->fetchAll();

        $item += $data;
    }
    echo json_encode($item);






?>