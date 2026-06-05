<?php 

  $comidas = array("maçã", "laranja", "banana", "pera");

  echo "<h3>Primeiro exemplo: </h3>";
  echo $comidas[0] . "<br>" . $comidas[1] . "<br>" .   $comidas[2] . "<br>" . $comidas[3] . "<br>"; 

  $comidas[0] = "abacaxi"; //substitui
  array_push($comidas, "abacate", "kiwi"); //coloca no final
  array_pop($comidas); //tira o último
  array_shift($comidas); //tira o primeiro
  $comidasReversas = array_reverse($comidas); //reverte a ordem
  echo count($comidas);


  echo "<h3>Segundo exemplo: </h3>";
  foreach ($comidas as $comida) {
    echo "<br>" . $comida . "<br>";
  }

  echo "<h3>Terceiro exemplo: </h3>";
  foreach ($comidasReversas as $comidaReversa) {
    echo "<br>" . $comidaReversa . "<br>";
  }
?>