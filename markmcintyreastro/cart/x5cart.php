<?php

include ("../res/x5engine.php");
$ecommerce = new ImCart();
$ecommerce->setSettings(array(
	'force_sender' => false,
	'email_opening' => 'Dear Customer,<br /><br />Thank you for your purchase.  <br /><br />Below you can find the list of the ordered products, the billing information and the instructions about the shipping and the payment you have chosen.',
	'email_closing' => 'Please contact us if you need further information.<br /><br />Thanks for buying from me! Mary',
	'useCSV' => true,
	'header_bg_color' => '#808080',
	'header_text_color' => '#FFFFFF',
	'cell_bg_color' => '#FFFFFF',
	'cell_text_color' => '#000000',
	'border_color' => '#D3D3D3',
	'owner_email' => 'maryspicer02@yahoo.co.uk',
	'vat_type' => 'included'
));

if (@$_GET['action'] == 'sndrdr' && isset($_POST['orderData'])) {
	$orderNo = $_POST['orderData']['orderNo'];
	$ecommerce->setOrderData($_POST['orderData']);
	$ecommerce->sendOwnerEmail();
	$ecommerce->sendCustomerEmail();
	header('Content-type: application/json');
	echo '{ "orderNo": "' . $orderNo . '" }';
	exit();
}

// End of file x5cart.php