<?php

include('../config/config.php');



$data = json_decode(file_get_contents("php://input"));
$idUser = $data->idUser;
$identyfikator = $data->identyfikator;
$Marka = $data->Marka;
$Rejestracja = $data->Rejestracja;
$Pojemnosc_silnika = $data->Pojemnosc_silnika;
$Stawka = $data->Stawka;
$id = $data->id;

if ($id == 0){
    $q = "INSERT INTO `pojazdy`(`Identyfikator`, `Marka`, `Rejestracja`, `Pojemnosc_silnika`, `Stawka`, `id_user`) 
    VALUES ('$identyfikator','$Marka','$Rejestracja','$Pojemnosc_silnika','$Stawka','$idUser')";
    $r = mysqli_query($abc, $q);
}
else{
    $q = "UPDATE `pojazdy` SET `Identyfikator`='$identyfikator',`Marka`='$Marka',`Rejestracja`='$Rejestracja',`Pojemnosc_silnika`='$Pojemnosc_silnika',`Stawka`='$Stawka' WHERE `id`='$id'
    ";

    $r = mysqli_query($abc, $q);

}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($q);
?>