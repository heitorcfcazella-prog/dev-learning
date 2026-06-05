<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="restaurante.php" method="post">
    <label>Quantidade: </label>
    <input type="text" name="quantidade"><br>
    <input type="submit" value="total">
  </form>
</body>
</html>
<?php 
  $item = "nhoque";
  $preco = "18.99";
  $quantidade = $_POST["quantidade"] ;
  $total = $quantidade * $preco;

  echo "Você pediu {$quantidade} {$item} <br>";
  echo "Seu total é {$total} reais";
?>