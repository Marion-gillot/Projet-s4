<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $lastName = $_POST['last-name'];
    $firstName = $_POST['first-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
  
    // destinataire
    $to = 'your@email.com';
  
    // Sujet
    $subject = 'Nouveau message de '.$firstName.' '.$lastName;
  
    // message
    $message = '
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
    $headers[] = 'From: '.$firstName.' '.$lastName.' <'.$email.'>';
  
    // Envoyer
    if (mail($to, $subject, $message, implode("\r\n", $headers))) {
      echo 'Le message a été envoyé avec succès';
    } else {
      echo 'Une erreur s\'est produite lors de l\'envoi du message';
    }
  }
?>


/* À mettre dans infomaniak */
<?php
if (isset($_POST['submit'])) {
  $to = "your@email.com"; // Votre adresse email
  $subject = "Contact Form Submission"; // Objet du message

  // Récupération des données du formulaire
  $lastName = $_POST['last-name'];
  $firstName = $_POST['first-name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Contenu du message
  $content = "Nom : $lastName \n Prénom : $firstName \n Email : $email \n Message : $message";

  // Envoi du message
  mail($to, $subject, $content);
}
?>