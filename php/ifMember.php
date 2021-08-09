<?php
    include("./connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    include("./Lib/Member.php");
    getMemberID();

    if(isset($_SESSION['MemberID'])){
        echo 'yes';
    }else{
        echo 'no';
    }
?>