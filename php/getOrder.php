<?php

    include("./connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    include("./Lib/Member.php");
    getMemberID();
    $memberID = $_SESSION['MemberID'];

    // 從$_SETTION抓出顧客ID，透過顧客ID撈出此顧客的活動預約。
    // $sql = "SELECT * FROM `tfd102-g4`.ORDER WHERE CUSTOMER_ID = $_SESSION(memberID)";
    $sql = "SELECT * FROM `tfd102-g4`.ORDER A1 
	            join `tfd102-g4`.ORDER_STATUS_TYPE A2 
		            on A1.ORDER_STATUS_ID = A2.ORDER_STATUS_ID         
            WHERE CUSTOMER_ID = $memberID";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    // $statement = $pdo->query($sql);
    $statement = $pdo->prepare($sql);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    if($data >= 1) {
        echo json_encode($data);
    }
        
    // $sql = "SELECT * FROM `tfd102-g4`.ORDER A1 
	//             join `tfd102-g4`.ORDER_STATUS_TYPE A2 
	// 	            on A1.ORDER_STATUS_ID = A2.ORDER_STATUS_ID 
    //             left join `tfd102-g4`.ORDER_DETAIL A3
	// 	            on A1.ORDER_ID = A3.ORDER_ID
	//             left join `tfd102-g4`.CUSTOM_MADE A4
	// 	            on A3.CUSTOM_MADE_ID = A4.CUSTOM_MADE_ID 
    //             left join `tfd102-g4`.PRODUCT A5
    //                 on A3.PRODUCT_ID = A5.PRODUCT_ID             
    //         WHERE CUSTOMER_ID = $memberID";
    

?>