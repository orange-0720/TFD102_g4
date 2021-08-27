<?php

    include("../connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    include("../Lib/Member.php");
    getMemberID();
    $memberID = $_SESSION['MemberID'];

    // $sql = "SELECT * FROM ORDER WHERE CUSTOMER_ID = $_SESSION(memberID)";
    $sql = "SELECT * FROM `tibamefe_tfd102g4`.ORDER A1 
	            join `tibamefe_tfd102g4`.ORDER_STATUS_TYPE A2 
		            on A1.ORDER_STATUS_ID = A2.ORDER_STATUS_ID         
            WHERE CUSTOMER_ID = ?";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    // $statement = $pdo->query($sql);
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $memberID);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if($data >= 1) {
        echo json_encode($data);
    }
    
?>