<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="exRaio.php" method="post">
    <label>Digite o Raio: </label>
    <input type="text" name="raio">
    <input type="submit" value="Calcular">
  </form>
</body>
</html>
<?php 

  $raio = $_POST["raio"];

  $circunferencia = $raio * pi() * 2;
  $area = pi() * ($raio ** 2);
  $volume = 4/3 * (pi() * ($raio ** 3));

  $circunferencia = round($circunferencia, 2);
  $area = round($area, 2);
  $volume = round($volume, 2);

  echo "<p> A circunferencia tem o valor de: {$circunferencia} cm</p> 
  <p>A area tem o valor de: {$area} cm²</p 
  <p>O volume tem valor de {$volume} cm³</p>";

?>