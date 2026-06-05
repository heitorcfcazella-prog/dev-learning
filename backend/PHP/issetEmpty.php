<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Isset e Empty</title>
</head>
<body>
  
</body>
</html>
<?php 
  $nome = "Diego";
  echo $nome . "<br>";

  // echo isset($nome); //True (1) se for declarada e não nula

  if (isset($nome)) {
    echo "Essa variavel está setada";
  } else {
    echo "Essa variavel não está setada";
  }

  echo "<br>";

  if (empty($nome)) {
    echo "Essa variavel não está declarada, está no booleano false, null ou é uma string vazia";
  } else {
    echo "Essa variavel não é vazia";
  }


?>