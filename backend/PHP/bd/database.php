<?php 
  $bd_server = "localhost";
  $bd_usuario = "root";
  $bd_senha = "";
  $bd_nome = "negociosdb";
  $conn = "";

  try {
    
  $conn = mysqli_connect( $bd_server, 
                          $bd_usuario, 
                          $bd_senha, 
                          $bd_nome);
  } catch(mysqli_sql_exception) {
    echo "Erro de conexão <br> ";
  }
  if ($conn) {
    echo "Você está conectado <br>";
  }
?>