<?php

	include('../config/config.php');

	$data = json_decode(file_get_contents("php://input"));
    $idUser = $data->idUser;

	$q = "SELECT * FROM `cms.static` WHERE `static_id`=2 AND `id_user`=$idUser
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