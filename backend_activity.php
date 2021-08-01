<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./css/style.css" />
  <link rel="icon" href="./images/logo-02.svg">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <title>良耕野菜-後臺頁面</title>
</head>

<body id="backend_page">
  <div class="container fluid">
    <?php 
      include 'backend_header.php';
    ?>
    <div class="row" id="BackEnd_main">
      <!-- ==側邊攔== -->
      <?php
        include 'backend_aside.php';
      ?>
      <section class="col-10 " id="main">
        <div class="backend_search">
          <span class="icon"><i class="fa fa-search"></i></span>
          <input type="text" class="rounded-pill" placeholder="Search...">
          <button type="button" class="btn btn-success rounded-pill pill_type_new">新增商品</button>
        </div>
        <div class="table_scroll">
        <table class="table table-striped">
          <thead class="tr_color">
            <tr class="col_set">
              <th scope="col">#</th>
              <th scope="col">活動編號</th>
              <th scope="col">新增日期</th>
              <th scope="col">修改日期</th>
              <th scope="col">訂單金額</th>
              <th scope="col">活動描述</th>
              <th scope="col">狀態</th>
            </tr>
          </thead>
          <tbody class="tbody_color">
            <tr class="col_set">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>slfnefjdkfln</td>
              <td><button type="button" class="btn btn-warning rounded-pill pill_type">上架</button></td>
              <td><button type="button" class="btn btn-danger rounded-pill pill_type">修改</button></td>
            </tr>
            <tr class="col_set">
              <th scope="row">2</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>slfnefjdkfln</td>
              <td><button type="button" class="btn btn-warning rounded-pill pill_type">上架</button></td>
              <td><button type="button" class="btn btn-danger rounded-pill pill_type">修改</button></td>
            </tr>
            <tr class="col_set">
              <th scope="row">3</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>slfnefjdkfln</td>
              <td><button type="button" class="btn btn-warning rounded-pill pill_type">上架</button></td>
              <td><button type="button" class="btn btn-danger rounded-pill pill_type">修改</button></td>
            </tr>
          </tbody>
        </table>
    </div>
</div>
    <div class="row justify-content-center">
      <nav aria-label="Page navigation example ">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  </section>
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
  <!-- <script type="text/javascript" src="/src/assets/backend.js"></script>
    <script type="text/javascript" src="/src/main.js"></script> -->

    <script src="./js/backend_search.js"></script>
</body>

</html>