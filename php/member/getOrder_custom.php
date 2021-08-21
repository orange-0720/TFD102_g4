<?php

    $getdata = json_decode(file_get_contents('php://input'), true);
    
    $order_id = $getdata['order_id'];
    include("../connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    $sql = 'SELECT D.ORDER_ID, M.CUSTOM_MADE_IMG, M.CUSTOM_MADE_NAME, M.CUSTOM_MADE_PRICE, D.QUANTITY, D.ORDER_DETAIL_PRICE FROM ORDER_DETAIL D JOIN CUSTOM_MADE M on D.CUSTOM_MADE_ID = M.CUSTOM_MADE_ID WHERE D.ORDER_ID = ?  and D.CUSTOM_MADE_ID is not null ';

    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $order_id);
    $statement->execute(); 

    $data = $statement->fetchAll();

    echo json_encode($data);

?>