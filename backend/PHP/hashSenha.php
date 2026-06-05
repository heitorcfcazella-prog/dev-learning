<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hash de Senha</title>
</head>
<body>
  <form action="hashSenha.php" method="post">
    <label>Usuário</label><br>
    <input type="text" name="usuario"><br>
    <label>Senha</label><br>
    <input type="password" name="senha"><br>
    <label>Confirme a senha</label><br>
    <input type="password" name="senhaConfirmacao"><br>
    <input type="submit" value="Enviar"><br>
  </form>
</body>
</html>
<?php 

  //hashing = "encriptar" informações sensiveis, como senhas

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $senha = $_POST["senha"];
    $senhaConfirmacao = $_POST["senhaConfirmacao"];
    $hash = password_hash($senha, PASSWORD_DEFAULT);


    if (password_verify($senhaConfirmacao, $hash)) {
      echo "Senhas Iguais";
    } else {
      echo "Senhas Diferentes";
    }

  }

?>