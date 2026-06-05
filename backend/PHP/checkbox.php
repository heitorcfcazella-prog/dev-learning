<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="checkbox.php" method="post">
    <input type="checkbox" name="comidas[]" value="Pizza">Pizza <br>
    <input type="checkbox" name="comidas[]" value="Hamburger">Hamburger <br>
    <input type="checkbox" name="comidas[]" value="Cachorro quente">Cachorro Quente <br>
    <input type="checkbox" name="comidas[]" value="Taco">Taco <br>
    <input type="submit" name="confirmar"value="Confirmar">
  </form>
</body>
</html>
<?php 
  if (isset($_POST["confirmar"])) {
    $comidas = $_POST["comidas"];
    echo "Suas comidas favoritas são: <br>";

    /*
    $tamanho = count($comidas);
    $valor = 1;
    foreach ($comidas as $comida) {
      if($valor == 1){
        echo $comida . ", ";
        $valor++;
      } 
      elseif ($valor == $tamanho - 1) {
        echo $comida;
        $valor++;
      } 
      elseif ($valor == $tamanho) {
        echo " e " . $comida;
      } 
      else {
        echo  $comida . " , ";
        $valor++;
      } 
    }
    */

    foreach ($comidas as $comida) {
      echo $comida . "<br>";
    }
  }

?>