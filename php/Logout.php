<?php
    include("./Lib/Member.php");

    //清空session
    clearSession();

    if(isset($_SESSION)){
        echo json_encode(1);
    };
    
?>