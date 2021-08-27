<?php


include("./connection.php");//與資料庫連線
$pdo = MemberDB();

include("./Lib/Member.php");
getMemberID();

if(isset($_SESSION['MemberID'])){// ISSET判斷是否有值
    //建立SQL語法
    $memberID = $_SESSION['MemberID'];
    $sql="SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = ? and DISCOUNT > 0";

    $statement = $pdo->prepare($sql);
    $statement->bindParam(1, $memberID);
    $statement->execute();

    $data = $statement->fetchAll();

    if($data != []){
        foreach ($data as $index => $row) {
            $discount = $row['DISCOUNT'];
        };
        echo $discount;
    }else{
        echo 2;
    };
}else{
    echo 3;
}



?>