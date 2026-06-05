<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="botoesRadio.php" method="post">
    <input type="radio" name="cartao_credito" value="Visa">Visa <br>
    <input type="radio" name="cartao_credito" value="Mastercard">Mastercard <br>
    <input type="radio" name="cartao_credito" value="Nubank">Nubank <br>
    <input type="radio" name="cartao_credito" value="Inter">Inter <br>
    <input type="submit" name="confirmar" value="Confirmar">
  </form>
</body>
</html>

<?php 
if (isset($_POST["confirmar"])) {
  if (isset($_POST["cartao_credito"])) {
    $cartao_credito = $_POST["cartao_credito"];
    echo "Você selecionou " . $cartao_credito;
  } else {
    echo "Por favor, selecione!";
  }
}

?>