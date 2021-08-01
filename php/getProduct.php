<?php

    include("./connection.php");
    $pdo = MemberDB();

    //建立SQL語法
    $sql = "SELECT * FROM `tfd102-g4`.PRODUCT";

    $statement = $pdo->prepare($sql);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();

    echo json_encode($data);

?>