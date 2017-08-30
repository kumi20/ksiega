<?php

include('../config/config.php');




$data = json_decode(file_get_contents("php://input"));
$idUser = $data->idUser;
$miesiac = $data->podatek->miesiac;
$rok = $data->podatek->rok;
$suma_przychodow = $data->podatek->przychod;
$suma_kosztow = $data->podatek->koszt;
$dochod = $data->podatek->przychod - $data->podatek->koszt;
$suma_zdrowotnych = $data->podatek->zdrowotne;
$kwata_zaliczki = $data->podatek->zaliczka;

$q = "INSERT INTO `podatek_dochodowy`(`miesiac`, `rok`, `suma_przychodow`, `suma_kosztow`, `dochod`, `suma_zdrowotnych`, `kwota_zaliczki`, `user_id`) 
VALUES ('$miesiac ', '$rok','$suma_przychodow','$suma_kosztow', '$dochod','$suma_zdrowotnych','$kwata_zaliczki','$idUser')";
$r = mysqli_query($abc, $q);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($q);
?>