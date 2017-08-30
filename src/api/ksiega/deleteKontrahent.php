<?php

	include('../config/config.php');

	$data = json_decode(file_get_contents("php://input"));

	$idKontrahenta = $data->id;
	
	$q = "DELETE FROM kontrahenci WHERE id='$idKontrahenta';
	 ";

	$r = mysqli_query($abc, $q);

	header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($idPrzychodu);

?>