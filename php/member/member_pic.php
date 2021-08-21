<?php

    include("../connection.php");
    $pdo = MemberDB();

    //建立SQL語法

    include("../Lib/Member.php");
    getMemberID();
    $memberID = $_SESSION['MemberID'];


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
            $filePath = $ServerRoot."/tfd102/project/g4/images/member_pic/".$fileName;

            //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);

            $img = '../images/message/'.$fileName;

            $sql = "UPDATE `CUSTOMER` SET IMG = ? WHERE CUSTOMER_ID = ? and QUALIFY = 1";

            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $img);
            $statement->bindValue(2, $memberID);
            $statement->execute();

            echo $img;

        }
    }


    //取得檔案副檔名
    function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }

    function getFilePath() {
        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

        //Apache根目錄之下的檔案存放路徑
        $filePath = "/tfd102_g4/images/upload/";

        return $ServerRoot . $filePath;
    }


?>