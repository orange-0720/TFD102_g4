<?php

$id = $_POST["id"];



include("../../../php/connection.php");
$pdo = MemberDB();


$sql = "SELECT
    `tibamefe_tfd102g4`.ORDER.ORDER_ID AS ORDER_ORDER_ID,
    `tibamefe_tfd102g4`.ORDER.CUSTOMER_ID AS ORDER_CUSTOMER_ID,
    (
        SELECT
            CONCAT(
                \"[\",
                GROUP_CONCAT(
                    CONCAT('{\"orderDetailId\":\"', `tibamefe_tfd102g4`.ORDER_DETAIL.ORDER_DETAIL_ID, '\",'),
                    CONCAT('\"orderId\":\"', `tibamefe_tfd102g4`.ORDER_DETAIL.ORDER_ID, '\",'),
                    CONCAT('\"customMadeId\":\"', IFNULL(`tibamefe_tfd102g4`.ORDER_DETAIL.CUSTOM_MADE_ID, '0'),'\",'),
                    CONCAT('\"customMadeName\":\"', IFNULL(`tibamefe_tfd102g4`.CUSTOM_MADE.CUSTOM_MADE_NAME, ''),'\",'),
                    CONCAT('\"productId\":\"', IFNULL(`tibamefe_tfd102g4`.ORDER_DETAIL.PRODUCT_ID, '0'),'\",'),
                    CONCAT('\"productName\":\"', IFNULL(`tibamefe_tfd102g4`.PRODUCT.PRODUCT_NAME, ''),'\",'),
                    CONCAT('\"quantity\":\"', IFNULL(`tibamefe_tfd102g4`.ORDER_DETAIL.QUANTITY, '0'),'\",'),
                    CONCAT('\"orderDetailPrice\":\"', IFNULL(`tibamefe_tfd102g4`.ORDER_DETAIL.ORDER_DETAIL_PRICE, '0'), '\"}')
                ),
                \"]\"
            )
        FROM `tibamefe_tfd102g4`.ORDER_DETAIL
        LEFT JOIN `tibamefe_tfd102g4`.PRODUCT ON `tibamefe_tfd102g4`.PRODUCT.PRODUCT_ID = `tibamefe_tfd102g4`.ORDER_DETAIL.PRODUCT_ID
        LEFT JOIN `tibamefe_tfd102g4`.CUSTOM_MADE ON `tibamefe_tfd102g4`.CUSTOM_MADE.CUSTOM_MADE_ID = `tibamefe_tfd102g4`.ORDER_DETAIL.CUSTOM_MADE_ID
        WHERE `tibamefe_tfd102g4`.ORDER_DETAIL.ORDER_ID = `tibamefe_tfd102g4`.ORDER.ORDER_ID
        GROUP BY `tibamefe_tfd102g4`.ORDER_DETAIL.ORDER_ID
    ) AS ORDER_DETAIL
FROM `tibamefe_tfd102g4`.ORDER
WHERE `tibamefe_tfd102g4`.ORDER.ORDER_ID = ?";


$statement = $pdo->prepare($sql);
$statement->bindValue(1, $id);
$statement->execute();

$data = $statement->fetch();

echo json_encode($data);

?>