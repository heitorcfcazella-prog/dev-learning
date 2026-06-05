<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validação e Higienização</title>
</head>
<body>
  <form action="valiSani.php" method="post">
    <label>Usuário: </label><br>
    <input type="text" name="usuario"><br>
    <label>Idade: </label><br>
    <input type="text" name="idade"><br>
    <label>Email: </label><br>
    <input type="text" name="email"><br>
    <input type="submit" name="login" value="Logar"><br>
  </form>
</body>
</html>
<?php 

  if (isset($_POST["login"])) {
    
    $usuario = filter_input(INPUT_POST, "usuario", FILTER_SANITIZE_SPECIAL_CHARS);
    
    $idade = filter_input(INPUT_POST, "idade", FILTER_SANITIZE_NUMBER_INT);

    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    
    echo "Olá {$usuario}, você tem {$idade} anos e seu e-mail é {$email}.<br>";
    

    $idade = filter_input(INPUT_POST, "idade", FILTER_VALIDATE_INT);

    $email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);

    if (empty($idade)) {
      echo "Idade inválida <br>";
    } else {
      echo "Você tem {$idade} anos <br>";
    }

    if (empty($email)) {
      echo "E-mail inválido <br>";
    } else {
      echo "O seu e-mail é {$email}";
    }


  }

?>