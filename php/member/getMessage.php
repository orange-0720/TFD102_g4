<?php

    include("../connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    include("../Lib/Member.php");
    getMemberID();
    $memberID = $_SESSION['MemberID'];

    $sql = "SELECT * FROM MESSAGE_BOARD WHERE CUSTOMER_ID = $memberID and MESSAGE_IMG is null ";

    $statement = $pdo->prepare($sql);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if($data >= 1) {
        echo json_encode($data);
    }else{
        echo json_encode(2);
    }



?>