<?php

	include('../config/config.php');

	$data = json_decode(file_get_contents("php://input"));

	$idPrzychodu = $data->id;
	
	$q = "DELETE FROM kpir WHERE id='$idPrzychodu';
	 ";

	$r = mysqli_query($abc, $q);

	header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($idPrzychodu);

?>