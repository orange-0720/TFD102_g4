<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>良耕野菜-管理員登入</title>
  <link rel="icon" href="./images/logo-02.svg">
  <link rel="stylesheet" href="./css/style.css" />
</head>
<body class="back_log_body">

  <div id="back_back">
    <div class="backLeft"><img src="./images/backend/loginbg.jpg"/></div>
  </div>

    <div class="back_right">
      <div class="back_content">
        <h2>管理員登入</h2>
        <form method="post" onsubmit="return false;">
          <div class="form_group">
            <label for="username" class="form_label">User name</label>
            <input class="back_input" type="text" />
            <label for="password" class="form_label">Password</label>
            <input class="back_input" type="text" />
          </div>
          <button class="back_login" id="login" type="submit">Login</button>
        </form>
      </div>
    </div>

  <!-- <script type="text/javascript" src="/src/assets/backend.js"></script>
    <script type="text/javascript" src="/src/main.js"></script> -->
</body>
</html>