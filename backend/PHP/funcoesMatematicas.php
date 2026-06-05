<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body{
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>
  <title>Document</title>
</head>
<body>
  <form action="funcoesMatematicas.php" method="post">
    <label>X: </label>
    <input type="text" name="x"><br>
    <label>Y: </label>
    <input type="text" name="y"><br>
    <label>Z: </label>
    <input type="text" name="z"><br>
    <input type="submit" value="total"><br>
  </form>
</body>
</html>
<?php 
  $x = $_POST["x"];
  $y = $_POST["y"];
  $z = $_POST["z"];

  echo "X: " . $x . "<br>";
  echo "Y: " . $y . "<br>"; 
  echo "Z: " . $z . "<br>"; 

  echo "<p>abs: Torna negativo em positivo: </p>";
  echo abs($x);

  echo "<br><p>round: Arredondar: </p>";
  echo round($x);

  echo "<br><p>floor: Arredondar para baixo: </p>";
  echo floor($x);
  
  echo "<br><p>ceil: Arredondar para cima: </p>";
  echo ceil($x);

  echo "<br><p>pow: Potenciação: </p>";
  echo pow($x, $y);

  echo "<br><p>sqrt: Raiz quadrada: </p>";
  echo sqrt($x);

  echo "<br><p>max: Retorna o maior valor das variáveis: </p>";
  echo max($x, $y, $z);

  echo "<br><p>min: Retorna o menor valor das variáveis: </p>";
  echo min($x, $y, $z);

  echo "<br><p>pi: Retorna os digitos de Pi</p>";
  echo pi();

  echo "<br><p>rand: Retorna um número aleatório, podendo limitar os valores de retorno: </p>";
  echo "<p>Sem limites: </p>" . rand() . "<br>";
  echo "<p>Com limite de um d20: </p>" . rand(1, 20);
?>