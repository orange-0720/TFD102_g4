<?php    
    include("../../../php/connection.php");
    $pdo = MemberDB();

    //取得POST過來的值
    $product_id = $_POST["PRODUCT_ID"]; //PK

    //建立SQL
    $sql = "SELECT * FROM `tfd102-g4`.PRODUCT WHERE PRODUCT_ID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1 , $product_id);    
    $statement->execute();
    $data = $statement->fetchAll();    

    //回傳json
    echo json_encode($data);
?>