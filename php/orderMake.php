<?php

    $email = htmlspecialchars($_POST['EMAIL']);
    $phone = htmlspecialchars($_POST['PHONE']);
    $recipient = htmlspecialchars($_POST['RECIPIENT']);
    $order_phone = htmlspecialchars($_POST['ORDER_PHONE']);
    $city = htmlspecialchars($_POST['CITY']);
    $area = htmlspecialchars($_POST['AREA']);
    $address = htmlspecialchars($_POST['ADDRESS']);
    $total_price = htmlspecialchars($_POST['TOTAL_PRICE']);
    $remarks = htmlspecialchars($_POST['REMARKS']);
    $discount = ($_POST['discount']);


    include("./connection.php");
    $pdo = MemberDB();

    include("./Lib/Member.php");
    getMemberID();
    
    
    //建立SQL語法

    // 判斷是SESSION是否有MemberID存在
    if(isset($_SESSION['MemberID'])){
        $memberID = $_SESSION['MemberID'];
        $sql = "INSERT INTO `tfd102-g4`.ORDER(CUSTOMER_ID, RECIPIENT , ORDER_PHONE , CITY, AREA, ADDRESS,DELIVERY,PAYMENT,EMAIL,ADD_DATE,TOTAL_PRICE,REMARKS,ORDER_STATUS) VALUES ($memberID, ?, ?, ?, ?, ?, '宅配', '信用卡', ?, NOW(), ?, ? , '未配送')";
    
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        // $statement = $pdo->query($sql);
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $recipient);
        $statement->bindParam(2, $order_phone);
        $statement->bindParam(3, $city);
        $statement->bindParam(4, $area);
        $statement->bindParam(5, $address);
        $statement->bindParam(6, $email);
        $statement->bindParam(7, $total_price);
        $statement->bindParam(8, $remarks);

        $statement->execute();
    
        //抓出全部且依照順序封裝成一個二維陣列
        $data = $statement->fetchAll();

        echo 'yes'; 
    }else{
        $sql = "INSERT INTO `tfd102-g4`.CUSTOMER(EMAIL, PWD, PHONE , QUALIFY, ADD_DATE, STATUS) VALUES (?, null, ?, 0, NOW(), 1)";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $email);
        $statement->bindParam(2, $phone);

        $statement->execute();

        $sql = "SELECT * FROM `tfd102-g4`.CUSTOMER WHERE ADD_DATE = NOW()";

        $statement = $pdo->prepare($sql);
        $statement->execute();
        $data = $statement->fetchAll();

        //將二維陣列取出顯示其值
        foreach($data as $index => $row){
            $memberID =  $row["CUSTOMER_ID"];   //欄位名稱     
        }

        $sql = "INSERT INTO `tfd102-g4`.ORDER(CUSTOMER_ID, RECIPIENT , ORDER_PHONE , CITY, AREA, ADDRESS,DELIVERY,PAYMENT,EMAIL,ADD_DATE,TOTAL_PRICE,REMARKS,ORDER_STATUS) VALUES ($memberID, ?, ?, ?, ?, ?, '宅配', '信用卡', ?, NOW(), ?, ? , '未配送')";
    
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        // $statement = $pdo->query($sql);
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $recipient);
        $statement->bindParam(2, $order_phone);
        $statement->bindParam(3, $city);
        $statement->bindParam(4, $area);
        $statement->bindParam(5, $address);
        $statement->bindParam(6, $email);
        $statement->bindParam(7, $total_price);
        $statement->bindParam(8, $remarks);

        $statement->execute();
    
        //抓出全部且依照順序封裝成一個二維陣列
        $data = $statement->fetchAll();

        echo 'yes'; 

    }
    

?>