<?php
    include("../../php/Lib/Member.php");

    //清空session
    clearSession();

    echo "<script>alert('登出成功!'); location.href = '../back_login.html';</script>";  
?>