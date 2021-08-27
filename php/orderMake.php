<?php

    $email = htmlspecialchars($_POST['EMAIL']);
    $phone = htmlspecialchars($_POST['PHONE']);
    $recipient = htmlspecialchars($_POST['RECIPIENT']);
    $order_phone = htmlspecialchars($_POST['ORDER_PHONE']);
    $city = htmlspecialchars($_POST['CITY']);
    $area = htmlspecialchars($_POST['AREA']);
    $address = htmlspecialchars($_POST['ADDRESS']);
    $total_price = htmlspecialchars($_POST['TOTAL_PRICE']);
    $remarks = htmlspecialchars($_POST['REMARKS']);
    $discount = $_POST['discount'];
    $buyer = $_POST['buyer'];
    $gender = $_POST['gender'];
    $payment = $_POST['payment'];
    
    include("./connection.php");
    $pdo = MemberDB();

    include("./Lib/Member.php");
    getMemberID();
    
    if(!isset($_SESSION)){
        session_start(); 
    }

    // 清除之前存放之ORDER_ID
    if(isset($_SESSION['ORDER_ID'])){
        unset($_SESSION['ORDER_ID']);
    }

    // 判斷是SESSION是否有MemberID存在
    if(isset($_SESSION['MemberID'])){
        $memberID = $_SESSION['MemberID'];
        $sql = "INSERT INTO `tibamefe_tfd102g4`.ORDER(CUSTOMER_ID, RECIPIENT , ORDER_PHONE , CITY, AREA, ADDRESS,DELIVERY,PAYMENT,EMAIL,ADD_DATE,DISCOUNT,ORDER_PRICE,REMARKS,ORDER_STATUS_ID,GENDER,BUYER) VALUES ($memberID, ?, ?, ?, ?, ?, '宅配', ?, ?, NOW(),?, ?, ? ,1,? ,?)";
    
        
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        // $statement = $pdo->query($sql);
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $recipient);
        $statement->bindParam(2, $order_phone);
        $statement->bindParam(3, $city);
        $statement->bindParam(4, $area);
        $statement->bindParam(5, $address);
        $statement->bindParam(6, $payment);
        $statement->bindParam(7, $email);
        $statement->bindParam(8, $discount);
        $statement->bindParam(9, $total_price);
        $statement->bindParam(10, $remarks);
        $statement->bindParam(11, $gender);
        $statement->bindParam(12, $buyer);

        $statement->execute();
        
        // 抓出該筆訂單
        $sql = 'SELECT ORDER_ID from `tibamefe_tfd102g4`.ORDER WHERE ORDER_PRICE = ? and ORDER_PHONE =? and DISCOUNT =?';
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $total_price);
        $statement->bindParam(2, $order_phone);
        $statement->bindParam(3, $discount);
        $statement->execute();
        
        $data = $statement->fetchAll();
        foreach ($data as $index => $row) {
            $order_id = $row['ORDER_ID'];
        };

        // 將ORDER_ID 存入session
        $_SESSION["ORDER_ID"] = $order_id ; 

        // 判斷是不是有單品存在
        if(isset($_POST['cart_items'])){

            $cart_items = $_POST['cart_items'];
             
            for($i = 0; $i < count($cart_items); $i++){
                $sql = "INSERT INTO `tibamefe_tfd102g4`.ORDER_DETAIL(PRODUCT_ID, QUANTITY, ORDER_ID,ORDER_DETAIL_PRICE) VALUES(?, ?, ?,?)";
                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $cart_items[$i]['product_id']);
                $statement->bindParam(2, $cart_items[$i]['item_number']);
                $statement->bindParam(3, $order_id);
                $statement->bindParam(4, $cart_items[$i]['total_price']);

                $statement->execute();
            }
    
        };

        // 判斷是不是有客製化商品存在
        if(isset($_POST['fruit_boxs'])){
            $fruit_boxs = $_POST['fruit_boxs'];

            for($i = 0; $i < count($fruit_boxs); $i++){
                $sql = "INSERT INTO `tibamefe_tfd102g4`.ORDER_DETAIL(CUSTOM_MADE_ID, QUANTITY, ORDER_ID, ORDER_DETAIL_PRICE) VALUES(?, ?, ?, ?)";
                
                $pick_up = $fruit_boxs[$i]['product_id'];

                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $fruit_boxs[$i]['box_type']);
                $statement->bindParam(2, $fruit_boxs[$i]['item_number']);
                $statement->bindParam(3, $order_id);
                $statement->bindParam(4, $fruit_boxs[$i]['total_price']);
                $statement->execute();

                // 找出該筆訂單明細ID
                $sql = "SELECT * FROM `tibamefe_tfd102g4`.ORDER_DETAIL WHERE CUSTOM_MADE_ID = ? and QUANTITY = ? and ORDER_ID = ? and ORDER_DETAIL_PRICE =? ";

                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $fruit_boxs[$i]['box_type']);
                $statement->bindParam(2, $fruit_boxs[$i]['item_number']);
                $statement->bindParam(3, $order_id);
                $statement->bindParam(4, $fruit_boxs[$i]['total_price']);
                $statement->execute();

                $data = $statement->fetchAll();
                foreach ($data as $index => $row) {
                    $order_detail_id = $row['ORDER_DETAIL_ID'];
                };

                // 把值

                $sql = 'INSERT INTO `tibamefe_tfd102g4`.CUSTOM_SELECT (ORDER_DETAIL_ID, CUSTOM_ITEM_1_ID , CUSTOM_ITEM_2_ID, CUSTOM_ITEM_3_ID, CUSTOM_ITEM_4_ID, CUSTOM_ITEM_5_ID) VALUES(?, ?, ?, ?, ?,?)';
                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $order_detail_id);
                for($j = 0; $j < count($pick_up); $j++)
                $statement->bindParam($j+2, $pick_up[$j]);
                $statement->execute();
            };
        }

        // 扣除購物金
        if($discount != 0){
            $sql = 'SELECT * from CUSTOMER WHERE CUSTOMER_ID = ?';
            $statement = $pdo->prepare($sql);
            $statement->bindParam(1, $memberID);
            $statement->execute();
    
            $data = $statement->fetchAll();
            foreach ($data as $index => $row) {
                $discount_have = $row['DISCOUNT'];
            };
            $new_discount = $discount_have - $discount;
            if($new_discount == 0){
                $sql = "UPDATE `CUSTOMER` SET DISCOUNT = ?, DISCOUNT_HAVE = 0 WHERE CUSTOMER_ID = ?";
                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $new_discount);
                $statement->bindParam(2, $memberID);
                $statement->execute();
            }else{
                $sql = "UPDATE `CUSTOMER` SET DISCOUNT = ? WHERE CUSTOMER_ID = ?";
                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $new_discount);
                $statement->bindParam(2, $memberID);
                $statement->execute();
            }
        }

        echo json_encode('yes');
    }else{

        // 先幫訪客建造偽會員
        $sql = "INSERT INTO CUSTOMER(EMAIL, PWD, NAME, PHONE , QUALIFY, ADD_DATE, STATUS,DISCOUNT,DISCOUNT_HAVE) VALUES (?, null, ?, ?, 0, NOW(), 1, 0, 0)";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $email);
        $statement->bindParam(2, $buyer);
        $statement->bindParam(3, $phone);

        $statement->execute();

        $sql = "SELECT * FROM CUSTOMER WHERE EMAIL =? and PHONE = ?";

        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $email);
        $statement->bindParam(2, $phone);
        $statement->execute();
        $data = $statement->fetchAll();

        //將二維陣列取出顯示其值
        // 抓出偽會員ID
        foreach($data as $index => $row){
            $memberID =  $row["CUSTOMER_ID"];   //欄位名稱     
        }

        // 插入該筆訂單
        $sql = "INSERT INTO `tibamefe_tfd102g4`.ORDER(CUSTOMER_ID, RECIPIENT , ORDER_PHONE , CITY, AREA, ADDRESS,DELIVERY,PAYMENT,EMAIL,ADD_DATE,DISCOUNT,ORDER_PRICE,REMARKS,ORDER_STATUS_ID,GENDER,BUYER) VALUES (?, ?, ?, ?, ?, ?, '宅配', ?, ?, NOW(),?, ?, ? ,1,? ,?)";
    
    
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
        // $statement = $pdo->query($sql);
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $memberID);
        $statement->bindParam(2, $recipient);
        $statement->bindParam(3, $order_phone);
        $statement->bindParam(4, $city);
        $statement->bindParam(5, $area);
        $statement->bindParam(6, $address);
        $statement->bindParam(7, $payment);
        $statement->bindParam(8, $email);
        $statement->bindParam(9, $discount);
        $statement->bindParam(10, $total_price);
        $statement->bindParam(11, $remarks);
        $statement->bindParam(12, $gender);
        $statement->bindParam(13, $buyer);

        $statement->execute();
        
        // 抓出該筆訂單
        $sql = 'SELECT * FROM `tibamefe_tfd102g4`.ORDER WHERE CUSTOMER_ID =? and ORDER_PRICE = ? and ORDER_PHONE =? and DISCOUNT =?';
        $statement = $pdo->prepare($sql);
        $statement->bindParam(1, $memberID);
        $statement->bindParam(2, $total_price);
        $statement->bindParam(3, $order_phone);
        $statement->bindParam(4, $discount);
        $statement->execute();
        
        $data = $statement->fetchAll();

        // 抓出該筆訂單的訂單編號
        foreach ($data as $index => $row) {
            $order_id = $row['ORDER_ID'];
        };

        // 將ORDER_ID 存入session
        if(!isset($_SESSION)){
            session_start(); 
        }
        $_SESSION["ORDER_ID"] = $order_id; 

        // 確認是否有單品存在
        if(isset($_POST['cart_items'])){

            $cart_items = $_POST['cart_items'];
             
            for($i = 0; $i < count($cart_items); $i++){
                $sql = "INSERT INTO ORDER_DETAIL(PRODUCT_ID, QUANTITY, ORDER_ID,ORDER_DETAIL_PRICE) VALUES(?, ?, ?, ?)";
                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $cart_items[$i]['product_id']);
                $statement->bindParam(2, $cart_items[$i]['item_number']);
                $statement->bindParam(3, $order_id);
                $statement->bindParam(4, $cart_items[$i]['total_price']);
                $statement->execute();
            }
    
        };

        // 確認是否有客製化商品存在
        if(isset($_POST['fruit_boxs'])){
            $fruit_boxs = $_POST['fruit_boxs'];

            for($i = 0; $i < count($fruit_boxs); $i++){
                $sql = "INSERT INTO ORDER_DETAIL(CUSTOM_MADE_ID, QUANTITY, ORDER_ID, ORDER_DETAIL_PRICE) VALUES(?, ?, ?, ?)";
                
                $pick_up = $fruit_boxs[$i]['product_id'];

                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $fruit_boxs[$i]['box_type']);
                $statement->bindParam(2, $fruit_boxs[$i]['item_number']);
                $statement->bindParam(3, $order_id);
                $statement->bindParam(4, $fruit_boxs[$i]['total_price']);
                $statement->execute();

                // 找出該筆訂單明細ID
                $sql = "SELECT * FROM ORDER_DETAIL WHERE CUSTOM_MADE_ID = ? and QUANTITY = ? and ORDER_ID = ? and ORDER_DETAIL_PRICE =? ";

                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $fruit_boxs[$i]['box_type']);
                $statement->bindParam(2, $fruit_boxs[$i]['item_number']);
                $statement->bindParam(3, $order_id);
                $statement->bindParam(4, $fruit_boxs[$i]['total_price']);
                $statement->execute();

                $data = $statement->fetchAll();
                foreach ($data as $index => $row) {
                    $order_detail_id = $row['ORDER_DETAIL_ID'];
                };

                // 把值存入 客製化訂單TABLE
                $sql = 'INSERT INTO CUSTOM_SELECT (ORDER_DETAIL_ID, CUSTOM_ITEM_1_ID , CUSTOM_ITEM_2_ID, CUSTOM_ITEM_3_ID, CUSTOM_ITEM_4_ID, CUSTOM_ITEM_5_ID) VALUES(?, ?, ?, ?, ?,?)';
                $statement = $pdo->prepare($sql);
                $statement->bindParam(1, $order_detail_id);
                for($j = 0; $j < count($pick_up); $j++)
                $statement->bindParam($j+2, $pick_up[$j]);
                $statement->execute();
            } 
        };
        echo json_encode('yes');    
    }
?>