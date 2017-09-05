<?php

include('../config/config.php');

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;





$q = "DELETE FROM `pojazdy` WHERE `id`='$id';
 ";

$r = mysqli_query($abc, $q);
	
	
	# JSON-encode the response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($id);

?>