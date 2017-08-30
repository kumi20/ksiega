<?php

include('../config/config.php');



$data = json_decode(file_get_contents("php://input"));

$id = $data->idUser;

$miesiac = $data->skladka->miesiac;

$rok = $data->skladka->rok;

$termin_platnosci = $data->skladka->termin;

$skladka_spoleczne = $data->skladka->spoleczne;

$data_spoleczne = $data->skladka->termin_spoleczne;

$skladka_zdrowotne = $data->skladka->zdrowotne;

$data_zdrowotne = $data->skladka->termin_zdrowotne;

$skladka_fundusz_pracy = $data->skladka->fundusz;

$data_fundusz_pracy = $data->skladka->termin_fundusz;

$q = "INSERT INTO `skladki_zus`(`rok`, `miesiac`, `termin_platnosci`, `skladka_spoleczne`, `data_spoleczne`, `skladka_zdrowotne`, 
`data_zdrowotne`, `skladka_fundusz_pracy`, `data_fundusz_pracy`, `user_id`) 
VALUES ('$rok','$miesiac','$termin_platnosci','$skladka_spoleczne','$data_spoleczne','$skladka_zdrowotne','$data_zdrowotne','$skladka_fundusz_pracy','$data_fundusz_pracy','$id'
	  )";
$r = mysqli_query($abc, $q);

	# JSON-encode the response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($q);

?>