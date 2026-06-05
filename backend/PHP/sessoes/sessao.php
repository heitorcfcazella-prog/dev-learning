<?php 

  // session = usada para armazenar informações sobre o 
  //usuário em varias páginas. ex: credenciais de login

  session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Página de login</h1>
  <a href="home.php">Página principal</a><br>

  <form action="sessao.php" method="post">
    <label>Usuario</label><br>
    <input type="text" name="usuario"><br>
    <label>Senha</label><br>
    <input type="password" name="senha"><br>
    <input type="submit" name="enviar" value="Logar">
  </form>
</body>
</html>

<?php 
  if (isset($_POST["enviar"])) {
    if (!empty($_POST["usuario"]) && !empty($_POST["senha"])) {
      $_SESSION["usuario"] = $_POST["usuario"];
      $_SESSION["senha"] = $_POST["senha"];
      
      header("Location: home.php"); //redirecionar para outra página
    } else {
      echo "<p style='color: red;'>PREENCHA OS CAMPOS SOLICITADOS!</p><br>";
    }
  }
?>