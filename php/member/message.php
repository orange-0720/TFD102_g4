<?php

    include("../connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    include("../Lib/Member.php");
    getMemberID();
    $memberID = $_SESSION['MemberID'];

    // 新建message進入table
    if(isset($_POST['text'])){
        $text = $_POST['text'];

        $sql = " INSERT INTO MESSAGE_BOARD(CUSTOMER_ID, COMMENTS, MESSAGE_STATUS_ID, ADD_DATE) VALUES (?, ?, 1, NOW())";
    
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $memberID);
        $statement->bindValue(2, $text);
        $statement->execute();
    
        echo json_encode('yes');
    }

    
    //判斷是否上傳成功
    if(isset($_FILES['file'])){
        if($_FILES["file"]["error"] > 0){
            echo "上傳失敗: 錯誤代碼".$_FILES["file"]["error"];
        }else{
    
            //取得上傳的檔案資訊=======================================
            $fileName = $_FILES["file"]["name"];    //檔案名稱含副檔名        
            $filePath_Temp = $_FILES["file"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
            $fileType = $_FILES["file"]["type"];    //檔案種類        
            $fileSize = $_FILES["file"]["size"];    //檔案尺寸
            //=======================================================
    
    
            //Web根目錄真實路徑
            $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
                
            //檔案最終存放位置
            $filePath = $ServerRoot."/tfd102/project/g4/images/message/".$fileName;
    

            //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);
    
            $img = '../images/message/'.$fileName;
    
            $sql = " INSERT INTO MESSAGE_BOARD(CUSTOMER_ID, MESSAGE_STATUS_ID, ADD_DATE, MESSAGE_IMG) VALUES (?, 1, NOW(),?)";
    
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $memberID);
            $statement->bindValue(2, $img);
            $statement->execute();
    
            echo json_encode('yes');
    
        }
    }


?>