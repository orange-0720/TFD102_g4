<?php

$id = $_POST["id"];



include("../../../php/connection.php");
$pdo = MemberDB();


$sql = "SELECT
    `tfd102-g4`.ORDER.ORDER_ID AS ORDER_ORDER_ID,
    `tfd102-g4`.ORDER.CUSTOMER_ID AS ORDER_CUSTOMER_ID,
    (
        SELECT
            CONCAT(
                \"[\",
                GROUP_CONCAT(
                    CONCAT('{\"orderDetailId\":\"', `tfd102-g4`.ORDER_DETAIL.ORDER_DETAIL_ID, '\",'),
                    CONCAT('\"orderId\":\"', `tfd102-g4`.ORDER_DETAIL.ORDER_ID, '\",'),
                    CONCAT('\"customMadeId\":\"', IFNULL(`tfd102-g4`.ORDER_DETAIL.CUSTOM_MADE_ID, '0'),'\",'),
                    CONCAT('\"customMadeName\":\"', IFNULL(`tfd102-g4`.CUSTOM_MADE.CUSTOM_MADE_NAME, ''),'\",'),
                    CONCAT('\"productId\":\"', IFNULL(`tfd102-g4`.ORDER_DETAIL.PRODUCT_ID, '0'),'\",'),
                    CONCAT('\"productName\":\"', IFNULL(`tfd102-g4`.PRODUCT.PRODUCT_NAME, ''),'\",'),
                    CONCAT('\"quantity\":\"', IFNULL(`tfd102-g4`.ORDER_DETAIL.QUANTITY, '0'),'\",'),
                    CONCAT('\"orderDetailPrice\":\"', IFNULL(`tfd102-g4`.ORDER_DETAIL.ORDER_DETAIL_PRICE, '0'), '\"}')
                ),
                \"]\"
            )
        FROM `tfd102-g4`.ORDER_DETAIL
        LEFT JOIN `tfd102-g4`.PRODUCT ON `tfd102-g4`.PRODUCT.PRODUCT_ID = `tfd102-g4`.ORDER_DETAIL.PRODUCT_ID
        LEFT JOIN `tfd102-g4`.CUSTOM_MADE ON `tfd102-g4`.CUSTOM_MADE.CUSTOM_MADE_ID = `tfd102-g4`.ORDER_DETAIL.CUSTOM_MADE_ID
        WHERE `tfd102-g4`.ORDER_DETAIL.ORDER_ID = `tfd102-g4`.ORDER.ORDER_ID
        GROUP BY `tfd102-g4`.ORDER_DETAIL.ORDER_ID
    ) AS ORDER_DETAIL
FROM `tfd102-g4`.ORDER
WHERE `tfd102-g4`.ORDER.ORDER_ID = ?";


$statement = $pdo->prepare($sql);
$statement->bindValue(1, $id);
$statement->execute();

$data = $statement->fetch();

echo json_encode($data);

?>