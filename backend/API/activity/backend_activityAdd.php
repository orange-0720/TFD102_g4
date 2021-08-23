<?php

  //取得POST過來的值
  $activityName = $_POST["ACTIVITY_NAME"];
  $activityPrice = $_POST["ACTIVITY_PRICE"];
  $activityInfo = $_POST["ACTIVITY_INFO"];
  $activityStatus = $_POST["add_ACTIVITY_STATUS_ID"];
  $activityDate = $_POST["ACTIVITY_DATE"];
  $activityTime = $_POST["ACTIVITY_TIME"];
  

  include("../../../php/connection.php");
  $pdo = MemberDB();

  //建立SQL
  $sql = "INSERT INTO `tibamefe_tfd102g4`.`ACTIVITY` (`ACTIVITY_NAME`, `ACTIVITY_PRICE`, `ACTIVITY_INFO`, `ACTIVITY_STATUS_ID`, `ACTIVITY_DATE`, `ACTIVITY_TIME`) VALUES (?, ?, ?, ?, ?, ?);";
            
  //執行
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1, $activityName);
  $statement->bindValue(2, $activityPrice);
  $statement->bindValue(3, $activityInfo);
  $statement->bindValue(4, $activityStatus);
  $statement->bindValue(5, $activityDate);
  $statement->bindValue(6, $activityTime);
  $statement->execute();

  $last_id = $pdo->lastInsertId(); //抓剛剛新增的id


  $sql2 = "UPDATE `tibamefe_tfd102g4`.`ACTIVITY` SET `ACTIVITY_NAME` = ?, `ACTIVITY_PRICE` = ?, `ACTIVITY_INFO` = ?, `ACTIVITY_STATUS_ID` = ?, `ACTIVITY_DATE` = ?, `ACTIVITY_TIME` = ?";


  if (isset($_FILES["file"])) {
    $path = upload($_FILES["file"]);
    if ($path) {
      $sql2 = $sql2 . ", `ACTIVITY_IMG` = '{$path}'";
    }
  }

  $sql2 = $sql2 . " WHERE (`ACTIVITY_ID` = ?)";



  //執行
  $statement = $pdo->prepare($sql2);
  $statement->bindValue(1, $activityName);
  $statement->bindValue(2, $activityPrice);
  $statement->bindValue(3, $activityInfo);
  $statement->bindValue(4, $activityStatus);
  $statement->bindValue(5, $activityDate);
  $statement->bindValue(6, $activityTime);
  $statement->bindValue(7, $last_id);
  $statement->execute();



  //導頁            
  echo "<script>alert('新增成功!'); location.href = '../../backend_activity.html';</script>";



  function upload($file = [])
  {
    if (count($file) > 0 && $file['size'] > 0) {
      // 上傳圖片
      //Server上的暫存檔路徑含檔名
      $filePath_Temp = $file["tmp_name"];

      //欲放置的檔案路徑
      $filePath = getFilePath() . $file["name"];

      //將暫存檔搬移到正確位置
      if(copy($filePath_Temp, $filePath)){
        return '../images/event/' . $file["name"];
      }
    }

    return false;
  }

  function getFilePath() {        
    //Apache實際的根目錄路徑
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

    //Apache根目錄之下的檔案存放路徑
    $filePath = '/tfd102/project/g4/images/event/';
    // $filePath = "/tfd102_g4/images/event/";

    return $ServerRoot . $filePath;
  }


?>