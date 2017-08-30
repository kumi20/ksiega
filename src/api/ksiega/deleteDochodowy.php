<?php

include('../config/config.php');

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$q = "DELETE FROM `podatek_dochodowy` WHERE `id`='$id';
 ";

$r = mysqli_query($abc, $q);
	
	header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
	# JSON-encode the response
	echo $json_response = json_encode($id);

?>