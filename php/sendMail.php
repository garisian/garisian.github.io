<?php

// Here we get all the information from the fields sent over by the form.

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$telephone = $_POST['telephone'];
$email_from = $_POST['email'];
$comments = $_POST['message'];



    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';      

  if(!preg_match($email_exp,$email_from)) { 
    $error_message .= 'Email Address, ';
  }
 
   $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'First Name, ';
  }
 
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'Last Name, ';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'Comments, ';
  }

  if(strlen($error_message) > 0) {
    echo "Invalid Entries. The following have errors: <br />".$error_message;
  }
  else
  {
    $to = 'garisian22@gmail.com';
    $subject = 'Email From Personal Profile';
    $message = 'FROM: '.$first_name." ".$last_name.' Email: '.$email_from.'Message: '.$comments;
    $headers = 'From: Website Yo' . "\r\n";

    
    mail($to, $subject, $message, $headers); //This method sends the mail.
   echo "Your email was sent! $first_name"; // success message
  }

?>