<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="getPost.php" method="post">
    <label>Nome do Usuário</label><br>
    <input type="text" name="usuario"><br>
    <label>Senha</label><br>
    <input type="password" name="senha"><br>
    <button type="submit">Logar</button>
  </form>
</body>
</html>
<?php 
  echo $_POST["usuario"] . "<br>";
  echo "{$_POST["senha"]} <br>";
?>