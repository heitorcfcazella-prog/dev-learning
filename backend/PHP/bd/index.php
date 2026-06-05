<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="index.php" method="post">
    <label>Usuário</label><br>
    <input type="text" name="usuario"><br>
    <label>Senha</label><br>
    <input type="password" name="senha"><br>
    <input type="submit" name="enviar" value="Enviar"><br>
  </form>
</body>
</html>



<?php 
  include("database.php");

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];
    $hash = password_hash($senha, PASSWORD_DEFAULT);

    $sqlInsert = "INSERT INTO usuarios (nome_usuario, senha)
            VALUES ('$usuario', '$hash')";
    try {
      mysqli_query($conn, $sqlInsert);
      echo "Usuário foi registrado <br>";
    } catch (mysqli_sql_exception){
      echo "Erro no registro do usuário <br>";
    }
  }

  $sqlSelect = "SELECT * FROM usuarios";
  $resultado = mysqli_query($conn, $sqlSelect);

  if (mysqli_num_rows($resultado) > 0) {
    while ($linha = mysqli_fetch_assoc($resultado)) {
      echo $linha["nome_usuario"] . "<br>";
      echo $linha["senha"] . "<br>";
      echo $linha["id"] . "<br>";
    }
  } else {
    echo "Nenhum usuário foi encontrado <br>";
  }

  mysqli_close($conn);
?>