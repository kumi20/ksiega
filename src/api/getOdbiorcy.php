<?php

	include('../config/config.php');
	
	$idUser = '1484923258195547';
	
	$q = "SELECT id, name FROM kontrahenci
	WHERE odbiorca = 1 AND user_id='$idUser';
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