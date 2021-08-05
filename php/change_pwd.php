<?php

    $old_pwd = htmlspecialchars($_POST['old_pwd']);
    $new_pwd = htmlspecialchars($_POST['new_pwd']);

    include("./connection.php");
    $pdo = MemberDB();

    //---------------------------------------------------

    //建立SQL
    $sql = "SELECT * FROM `tfd102-g4`.CUSTOMER WHERE CUSTOMER_ID = 1 and PWD = ? and QUALIFY = 1";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $old_pwd);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    if($data >= 1){
        $sql = "UPDATE `tfd102-g4`.`CUSTOMER` SET PWD = ? WHERE (`CUSTOMER_ID` = '1');";
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $new_pwd);
        $statement->execute();

        echo json_encode(1);
    }else{
        echo json_encode(2);
    }

       
?>