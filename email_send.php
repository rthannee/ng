<?php
error_reporting(0);

    print_r($_REQUEST);
	
	$name = $_REQUEST[name];
	$phone = $_REQUEST[phone];
	$email = $_REQUEST[email];
	
	$msg = "Name: $name";
	$msg .= "Phone: $phone";
	$msg .= "Email: $email";
	
	mail('alphaomega.techsol@gmail.com','New User interested!', $msg);

?>