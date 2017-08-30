<?php

	include('../config/config.php');
	
	$data = json_decode(file_get_contents("php://input"));

	$idUser = $data->idUser;
    $year = $data->year;
	
	$q = "SELECT `id`,`rok`,`miesiac`,`suma_kosztow`,`suma_przychodow`,`kwota_zaliczki` FROM `podatek_dochodowy` WHERE `user_id`='$idUser' AND rok='$year';
	 ";

	$r = mysqli_query($abc, $q);

	$arr = array();

	while ($row = mysqli_fetch_assoc($r)){
		$arr[] = $row;
	}
	
	header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($arr);

?>