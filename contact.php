<?php

// CONFIGURE FOR EVERYTHING

// from email address
$from = 'My contact form <postmaster@clauser.ninja>';

// the to email address
$sendTo = 'postmaster <postmaster@clauser.ninja>';

// subject
$subject = 'New Message from contact';

// form field names and their translations
// array variable name => Text to appear in the email
$fields = array('name' => 'Name', 'email' => 'Email', 'message' => 'Message');

// message that will be displayed when everything is OK
$okMessage = 'Your message successfully submitted.  Thank you, I will get back to you soon!';

$errorMessage = 'There was an error while submitting the form.  Please try again later';

// SENDING

// for error reporting or debugging

//error_reporting(E_ALL & ~E_NOTICE);

try {
    if (count($_POST) == 0) throw new \Exception('Form is empty');

    $emailText = "You have a new message from your contact form\n=============================\n";

    foreach ($_POST as $key => $value) {
        // If the field exists in teh $fields array, include it n the email
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    // The necessary headers for email
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    // Send email
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
} catch (\Exception $e) {
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}


// if requested by AJAX request return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
} // else just display the message
else {
    echo $responseArray['message'];
}