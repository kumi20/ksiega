<?php


    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name; 
    $mail = $data->mail;
    $message = $data->message;
    
      // Naglowki mozna sformatowac tez w ten sposob.
   $naglowki = "Reply-to: $mail  <$mail>".PHP_EOL;
   $naglowki .= "From: $mail  <$mail>".PHP_EOL;
   $naglowki .= "MIME-Version: 1.0".PHP_EOL;
   $naglowki .= "Content-type: text/html; charset=utf-8".PHP_EOL; 

    $text = "
      <b>Imie:</b>$name<br>
      <b>E-mail:</b>$mail<br><br>
      $message<br>
    ";

    mail('kumi.muscle@gmail.com', 'Wiadomosc ze strony', $text, $naglowki);

    
?>