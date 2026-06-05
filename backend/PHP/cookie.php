<?php 

  setcookie("comida_fav", "pizza", time() + (86400 * 2), "/");
  setcookie("bebida_fav", "café", time() + (86400 * 3), "/");
  setcookie("sobremesa_fav", "sorvete", time() + (86400 * 10), "/");
  setcookie("banda_fav", "Maroon 5", time() - 0, "/");

  foreach ($_COOKIE as $key => $value) {
    echo "{$key} = {$value} <br>";
  }
    if (isset($_COOKIE["comida_fav"])) {
      echo "COMPRE ALGUNS {$_COOKIE['comida_fav']} !!!";
    } else {
      echo "Num sei sua comida favorita";
    }

?>