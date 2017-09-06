<?php

include('../config/config.php');

$data = json_decode(file_get_contents("php://input"));
$id = $data->idUser;


$miesiac = $data->mounth;
$rok = $data->year;



$q = "SELECT * FROM `zestawienie_eksploatacja` WHERE `id_user` = '$id' AND data >='$rok-$miesiac-01' AND data<='$rok-$miesiac-31';
 ";

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