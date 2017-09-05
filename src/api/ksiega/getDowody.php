<?php

include('../config/config.php');

$data = json_decode(file_get_contents("php://input"));
$id = $data->idUser;



$rok = $data->year;




$q = "SELECT * FROM `dow_wewnetrzne` WHERE `id_user` = '$id' AND `data`>='$rok-01-01' AND `data`<='$rok-12-31'";

$r = mysqli_query($abc, $q);
	
	$arr = array();

	while ($row = mysqli_fetch_assoc($r)){
		$arr[] = $row;
	}
	# JSON-encode the response
header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($arr);

?>