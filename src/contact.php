<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $lastName = $_POST['last_name'];
  $firstName = $_POST['first_name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // destinataire
  $to = 'mgillot.pro@gmail.com';

  // Sujet
  $subject = 'Nouveau message de '.$lastName.' '.$firstName;

  // message
  $messageContent = '
    <html>
      <head>
        <title>'.$subject.'</title>
      </head>
      <body>
        <p>Nom : '.$lastName.'</p>
        <p>Prénom : '.$firstName.'</p>
        <p>Email : '.$email.'</p>
        <p>Message : '.$message.'</p>
      </body>
    </html>
  ';

  // En-têtes
  $headers[] = 'MIME-Version: 1.0';
  $headers[] = 'Content-type: text/html; charset=utf-8';
  $headers[] = 'From: '.$lastName.' '.$firstName.' <'.$email.'>';

  // Envoyer
  if (mail($to, $subject, $messageContent, implode("\r\n", $headers))) {
    echo 'Le message a été envoyé avec succès';
  } else {
    echo 'Une erreur s\'est produite lors de l\'envoi du message';
  }
}
?>
