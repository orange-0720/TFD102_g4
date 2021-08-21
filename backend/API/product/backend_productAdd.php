<?php
      //取得POST過來的值
      $productTypeId = $_POST["PRODUCT_TYPE_ID"];
      $productName = $_POST["PRODUCT_NAME"];
      $ProductPrice = $_POST["PRODUCT_PRICE"];
      $productShortInfo = $_POST["PRODUCT_SHORTINFO"];
      $productLongInfo = $_POST["PRODUC_LONGINFO"];
      $productStatus = $_POST["add_PRODUCT_STATUS_TYPE"];


      // print_r($_FILES);
      // die();
      // print_r($_POST);


      include("../../../php/connection.php");
      $pdo = MemberDB();

      //建立SQL
      $sql = "INSERT INTO `tibamefe_tfd102g4`.`PRODUCT` (`PRODUCT_NAME`, `PRODUCT_TYPE_ID`, `PRODUCT_PRICE`, `PRODUCT_SHORTINFO`, `PRODUC_LONGINFO`, `PRODUCT_STATUS_TYPE`) VALUES (?, ?, ?, ?, ?, ?);";
            
      //執行
      $statement = $pdo->prepare($sql);
      $statement->bindValue(1, $productName);
      $statement->bindValue(2, $productTypeId);
      $statement->bindValue(3, $ProductPrice);
      $statement->bindValue(4, $productShortInfo);
      $statement->bindValue(5, $productLongInfo);
      $statement->bindValue(6, $productStatus);
      $statement->execute();

      $last_id = $pdo->lastInsertId(); //抓剛剛新增的id
      // print_r($last_id);
      

      $sql2 = "UPDATE `tibamefe_tfd102g4`.`PRODUCT` SET `PRODUCT_NAME` = ?, `PRODUCT_TYPE_ID` = ?, `PRODUCT_PRICE` = ?, `PRODUCT_SHORTINFO` = ?, `PRODUC_LONGINFO` = ?, `PRODUCT_STATUS_TYPE` = ?";
      
      foreach ($_FILES as $key => $file) {
        $path = upload($_FILES[$key]);

        if ($path) {
          switch ($key) {
            case 'file1':
              $sql2 = $sql2 . ", `PRODUCT_IN_IMG_1` = '{$path}'";
              break;
            case 'file2':
              $sql2 = $sql2 . ", `PRODUCT_IN_IMG_2` = '{$path}'";
              break;
            case 'file3':
              $sql2 = $sql2 . ", `PRODUCT_IN_IMG_3` = '{$path}'";
              break;
            case 'file4':
              $sql2 = $sql2 . ", `PRODUCT_IN_IMG_4` = '{$path}'";
              break;
            default:
              $sql2 = $sql2 . ", `PRODUCT_OUT_IMG` = '{$path}'";
              break;
          }
        }
      }

      $sql2 = $sql2 . " WHERE (`PRODUCT_ID` = ?);";
      
      // echo $sql2;
      $statement = $pdo->prepare($sql2);
      $statement->bindValue(1, $productName);
      $statement->bindValue(2, $productTypeId);
      $statement->bindValue(3, $ProductPrice);
      $statement->bindValue(4, $productShortInfo);
      $statement->bindValue(5, $productLongInfo);
      $statement->bindValue(6, $productStatus);
      $statement->bindValue(7, $last_id);
      $statement->execute();


      //導頁            
      echo "<script>alert('新增成功!'); location.href = '../../backend_product.html';</script>";


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
          return '../images/upload/'.$file["name"];
        }
      }

        return false;
      }

      function getFilePath() {        
        //Apache實際的根目錄路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

        //Apache根目錄之下的檔案存放路徑
        $filePath = $ServerRoot.'/tfd102/project/g4/images/upload/';
        // $filePath = "/tfd102_g4/images/upload/";

        return $ServerRoot . $filePath;
      }
      

?>