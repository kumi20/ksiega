<?php

include('../config/config.php');



$data = json_decode(file_get_contents("php://input"));

$idUser = $data->idUser;
$id = $data->id;

if (isset($data->termin)) $termin  = $data->termin;
else $termin = "0000-00-00";

if (isset($data->trasa)) $trasa = $data->trasa;
else $trasa = "";

if (isset($data->km)) $km = $data->km;
else $km = 0;

if (isset($data->cel)) $cel = $data->cel;
else $cel = "";

if (isset($data->stawka)) $stawka = str_replace(',','.',$data->stawka);
else $stawka = 0;

if (isset($data->uwagi)) $uwagi = $data->uwagi;
else $uwagi = "";

if (isset($data->pojazdyid)) $pojazdyid = $data->pojazdyid;
else $pojazdyid = 0;

$wartosc = (double)$km * (double)$stawka;

if($id == 0){
    $q = "INSERT INTO `ewidencja_przebiegu`(`data`, `trasa`, `cel`, `km`, `stawka`, `wartosc`, `uwagi`, `id_pojazdu`, `id_user`) 
    VALUES ('$termin','$trasa','$cel','$km','$stawka','$wartosc','$uwagi','$pojazdyid','$idUser')";
    $r = mysqli_query($abc, $q);
}
else{
    $q = "UPDATE `ewidencja_przebiegu` SET `data`='$termin',`trasa`='$trasa',`cel`='$cel',`km`='$km',`stawka`='$stawka',`wartosc`='$wartosc',
    `uwagi`='$uwagi',`id_pojazdu`='$pojazdyid' WHERE id='$id';
     ";

    $r = mysqli_query($abc, $q);
}

	# JSON-encode the response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($q);

?>