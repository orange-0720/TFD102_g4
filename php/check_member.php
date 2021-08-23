<?php

include("./connection.php");//與資料庫連線
$pdo = MemberDB();

// 寫AJAX的function
// button click ajax function

//建立SQL語法

include("./Lib/Member.php"); //取得會員資料
getMemberID(); 


// 從$_SETTION抓出顧客ID，透過顧客ID撈出此顧客的活動預約。
// $sql = "SELECT * FROM APPOINTMENT WHERE CUSTOMER_ID = $_SESSION(memberID)";

// $_SESSION['MemberID'] =true

//檢查sesion變數是否存在，表示已成功登入

if(isset($_SESSION['MemberID'])){//讓PHP只做檢查這件事情
    $memberID = $_SESSION['MemberID'];
    $sql = "SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = $memberID and DISCOUNT=0 and DISCOUNT_HAVE=0 and QUALIFY=1 ";
    //等所有會員登入狀態PHP完成後開啟上列，關閉下列
    $statement = $pdo->prepare($sql);//用來事先編譯好一個SQL敍述
    $statement->execute();//用來執行不會取得數據(result set)的指令

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // count(陣列變數):傳回陣列中元素的個數，要用count去卡而不是用二維陣列
    if(count($data) >= 1){  
        echo "yes";
    }else{
        echo 'used';//""""字串HTML字串比較好處理
    }
    //寫入session，session名稱是MemberID
}else{
    echo "no";
    //如果沒有session，就去登入頁

}

?>