<?php

include('../config/config.php');

$data = json_decode(file_get_contents("php://input"));
$id = $data->idUser;
$miesiac = $data->mounth;
$rok = $data->year;


$q = "SELECT wartosc FROM  ewidencja_przebiegu WHERE id_user = '$id' AND data >='$rok-$miesiac-01' AND data<='$rok-$miesiac-31';
 ";

$r = mysqli_query($abc, $q);

$wartosc = 0;
	
while($w = mysqli_fetch_assoc($r)) {
	$wartosc += (double)$w['wartosc'];
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
$arr = array('wartosc'=>$wartosc.' zł');	
	echo $json_response = json_encode($arr );

?>