<?php

include('../config/config.php');


$data = json_decode(file_get_contents("php://input"));
$rok = $data->rok;

	
$q = "SELECT `chorobowe`,`zus_sp`,`zus_zdr`,`zus_fp`,`chorobowe_ulg`,`zus_sp_ul` FROM `zus` WHERE `rok`='$rok'";
$r = mysqli_query($abc, $q);

$arr = array();

	while ($row = mysqli_fetch_assoc($r)){
		$arr[] = $row;
	}
	
	header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');

	# JSON-encode the response*/
	echo $json_response = json_encode($arr);

?>