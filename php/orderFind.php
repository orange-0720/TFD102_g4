<?php

    $order_id = $_POST['order_id']; 

    include("./connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    $sql="SELECT * FROM `tibamefe_tfd102g4`.ORDER A1 join ORDER_STATUS_TYPE A2 on A1.ORDER_STATUS_ID = A2.ORDER_STATUS_ID  WHERE ORDER_ID = ?";
    
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $order_id);
    $statement->execute();

    $data = $statement->fetchAll();

    if(count($data) > 0){
        echo json_encode($data);
    }else{
        echo json_encode(2);
    }

?>