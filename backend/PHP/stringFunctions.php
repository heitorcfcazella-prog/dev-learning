<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>String Functions</title>
  <style>
    body{
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>
</head>
<body>
  <h1>String Functions</h1>
</body>
</html>

<?php 
  $usuario = "        Bartolomeu  Diaz          ";
  $telefone = "123-456-7890";

  echo "<p>Usuário Original: " . $usuario . "</p>";
  echo "<p>Telefone Original: " . $telefone . "</p>";
  echo "<hr>";

  echo "<ul>";
    
    $usuarioMinusculo = strtolower($usuario);
    echo "<li><p>strtolower(): é usado para torna a string em minusculo: " . $usuarioMinusculo . "</p></li>";

    $usuarioMaiusculo = strtoupper($usuario);
    echo "<li><p>strtoupper(): é usado para torna a string em maiusculo: " . $usuarioMaiusculo . "</p></li>";

    $usuarioEspacos = trim($usuario);
    echo "<li><p>trim(): é usado para remover os espaços em branco de uma string: " . $usuarioEspacos . "</p></li>";

    $usuarioMaisCaracteres = str_pad($usuario, 40, 0);
    echo "<li><p>str_pad(): é usado para colocar mais de um certo caractere em uma string: " . $usuarioMaisCaracteres . "</p></li>";

    $telefoneSemTracos = str_replace("-", "", $telefone);
    echo "<li><p>str_replace(): é usado para substituir um caracter por outro na string: " . $telefoneSemTracos . "</p></li>";

    $usuarioInvertido = strrev($usuario);
    echo "<li><p>strrev(): é usado para inverter uma string: " . $usuarioInvertido . "</p></li>";

    $usuarioEmbaralhado = str_shuffle($usuario);
    echo "<li><p>str_shuffle(): é usado para embaralhar os caracteres de uma string: " . $usuarioEmbaralhado . "</p></li>";

    $igual = strcmp($usuario, "        Bartolomeu  Diaz          ");
    echo "<li><p>strcmp(): é usado para comparar duas strings e dizer se elas são iguais: " . $igual . "</p></li>";

    $contar = strlen($usuario);
    echo "<li><p>strlen(): é usado para retornar o tamanho de uma string: " . $contar . " caracteres </p></li>";

    $posicao = strpos($usuario, "a");
    echo "<li><p>strpos(): é usado para retornar a posição de um caractere em uma string: " . $posicao . " é a posição do caracter 'a' </p></li>";

    $primeiroNome = substr($usuario, 8, 10);
    echo "<li><p>substr(): é usado para retornar uma parte da string, como o primeiro nome: " . $primeiroNome . "</p></li>";

  echo "</ul>"
?>