<?php


  include("../../php/connection.php");
  $pdo = MemberDB();


    //建立SQL
    $sql = "SELECT * FROM `tfd102-g4`.CUSTOMER WHERE QUALIFY = 1 AND EMAIL = ? AND PWD = ?";

    //執行
    $statement = $pdo->prepare($sql);    
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["pwd"]);
    $statement->execute();
    $data = $statement->fetchAll();

    //依資料筆數判斷是否為會員
    if(count($data) > 0){

        include("../../php/Lib/Member.php");
        //將登入資訊寫入session
        setSessionB($_POST["account"]);

        //導回後台首頁        
        header("Location: ../backend_member.html");

    }else{

        //跳出提示停留在後台登入頁
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../back_login.html';</script>"; 
    }

?>