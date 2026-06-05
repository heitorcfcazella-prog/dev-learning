<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pais</title>
</head>
<body>
  <form action="exArrAssoci.php" method="post">
    <label>Digite um país: </label>
    <input type="text" name="pais">
    <input type="submit" value="Enviar">
  </form>
</body>
</html>
<?php 
  $capitais = array(
    "EUA"=>"Washington DC", 
    "Brasil"=>"Brasilia", 
    "Rússia"=>"Moscou", 
    "Japão"=>"Tóquio");

    $capital = $capitais[$_POST["pais"]];

    echo "<p>A capital do pais selecionado é: " . $capital . "</p>";

?>