<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
    <label>Usuário</label><br>
    <input type="text" name="usuario"><br>
    <input type="submit" value="Enviar"><br>
  </form>
</body>
</html>
<?php 
  
  // $_SERVER

  //echo $_SERVER["REQUEST_METHOD"]; 
  //GET por padrão, POST depois do botão

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo $_SERVER["REQUEST_METHOD"] . " é o método atual.";
  }
  
  
?>