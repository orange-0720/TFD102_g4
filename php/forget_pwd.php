<?php

    $email = htmlspecialchars($_POST['account']);
    $new_pwd = $_POST['new_pwd'];

    include("./connection.php");
    $pdo = MemberDB();

    //---------------------------------------------------

    //建立SQL
    $sql = "SELECT * FROM `tfd102-g4`.CUSTOMER WHERE  EMAIL = ? and QUALIFY = 1";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $email);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    if(count($data) >= 1){
        $sql = "UPDATE `tfd102-g4`.`CUSTOMER` SET PWD = ? WHERE EMAIL = ? and QUALIFY = 1";
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $new_pwd);
        $statement->bindParam(2, $email);
        $statement->execute();

        echo json_encode('yes');
    }else{
        echo json_encode('no');
    }

       
?>