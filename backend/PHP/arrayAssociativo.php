<?php 
  /*
  Array Associativo = um array feito de valores chave

  pais (chave) = capital (valor)
  */

  $capitais = array(
  "EUA"=>"Washington DC", 
  "Brasil"=>"Brasilia", 
  "Rússia"=>"Moscou", 
  "Japão"=>"Tóquio");

  $capitais["Brasil"] = "Rio de Janeiro";
  $capitais["Reino Unido"] = "Londres";
  array_pop($capitais); //remove o ultimo - UK
  array_shift($capitais); //remove o primeiro - EUA
  $chaves = array_keys($capitais); //retorna a chave
  $valores = array_values($capitais); //retorna o valor
  array_reverse($capitais); //inverte a ordem
  
  echo "<h3>Primeiro exemplo: </h3>";

  foreach($capitais as $key => $value){
    echo "{$key}: {$value} <br>";
  }
  echo "<h3>Segundo exemplo: </h3>";

  foreach($chaves as $key){
    echo "{$key}<br>";
  }
  echo "<h3>Terceiro exemplo: </h3>";

  foreach($valores as $value){
    echo "{$value}<br>";
  }

?>