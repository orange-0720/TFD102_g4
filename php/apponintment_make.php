<?php

    $date = htmlspecialchars($_POST['DATE']);
    $phone = htmlspecialchars($_POST['PHONE']);
    $pepolenum = htmlspecialchars($_POST['PEPOLENUM']);
    $name = htmlspecialchars($_POST['NAME']);
    $email = htmlspecialchars($_POST['EMAIL']);
    $activity_id = htmlspecialchars($_POST['ACTIVITY_ID']);
    
    
    include("./connection.php");
    $pdo = MemberDB();

    include("./Lib/Member.php");
    getMemberID();
    
    //建立SQL語法

    // 判斷是SESSION是否有MemberID存在
    if(isset($_SESSION['MemberID'])){
        $memberID = $_SESSION['MemberID'];
        $sql = "INSERT INTO `tfd102-g4`.APPOINTMENT
        (ACTIVITY_ID , CUSTOMER_ID , APPOINTMENT_DATE, PEOPLE_NUM, APPOINTMENT_NAME,APPOINTMENT_EMAIL,APPOINTMENT_PHONE) VALUES 
        (?, ?, ?, ?, ?, ?, ?)";
    
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        // $statement = $pdo->query($sql);
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $activity_id);
        $statement->bindParam(2, $memberID);
        $statement->bindParam(3, $date);
        $statement->bindParam(4, $pepolenum);
        $statement->bindParam(5, $name);
        $statement->bindParam(6, $email);
        $statement->bindParam(7, $phone);
        $statement->execute();
    
        // 抓出全部且依照順序封裝成一個二維陣列
        $data = $statement->fetchAll();

        echo 'yes'; 
    }else{

        echo 'NO'; 

    }
    

?>