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
  <h1>Página principal</h1>
  <form action="home.php" method="post">
    <input type="submit" value="Deslogar" name="logout">
  </form>
</body>
</html>

<?php 
  if (isset($_POST["logout"])) {
    session_destroy(); // deslogar
    header("Location: sessao.php");
  }

?>