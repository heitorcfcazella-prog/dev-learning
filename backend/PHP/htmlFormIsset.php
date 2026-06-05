<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forms</title>
</head>
<body>
  <form action="htmlFormIsset.php" method="post">
    <label>Usuário: </label>
    <input type="text" name="usuario"><br>
    <label>Senha: </label>
    <input type="password" name="senha"><br>
    <input type="submit" name="login" value="Logado"><br>
  </form>
</body>
</html>
<?php 

  if (isset($_POST["login"])) {
    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];

    if(empty($usuario)){
      echo "Falta usuário";
    } elseif (empty($senha)) {
      echo "Falta a senha";
    }
    else {
      echo "Olá {$usuario}";
    }
  }

  //foreach ($_POST as $key => $value) {
  //   echo "{$key} - {$value} <br>";
  //}

?>