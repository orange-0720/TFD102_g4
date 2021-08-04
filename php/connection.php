<?php
 
    function MemberDB(){ //可能會有一大堆的資料庫DB，給名稱去區分
        //MySQL相關資訊
        $db_host = "127.0.0.1";
        $db_user = "root";
        $db_pass = "apple905";
        $db_select = "pdo";
    
        //建立資料庫連線物件
        $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
    
        //建立PDO物件，並放入指定的相關資料
        $pdo = new PDO($dsn, $db_user, $db_pass);
        return $pdo;
    }

?>