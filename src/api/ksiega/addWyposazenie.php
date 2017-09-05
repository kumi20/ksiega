<?php

include('../config/config.php');



$data = json_decode(file_get_contents("php://input"));

$idUser = $data->idUser;
$data_nabycia = $data->data_nabycia;

$numer_dokumentu = $data->numer_dokumentu;
$nazwa = $data->nazwa;
$miejsce_uzytkowania = $data->miejsce_uzytkowania;
$warotsc_poczatkowa = $data->warotsc_poczatkowa;
$zlikwidowane = $data->zlikwidowane;
$data_likwidacj= $data->data_likwidacji;
if (isset($data->data_likwidacji)) $data_likwidacji = $data->data_likwidacji;
else $data_likwidacji = "0000-00-00";
$id = $data->id;

$przyczyna_likwidacji = $data->przyczyna_likwidacji;

if ($id ==  0){
    $q = "INSERT INTO `wyposazenie`(`data_nabycia`, `numer_dokumentu`, `nazwa`, `miejsce_uzytkowania`, `warotsc_poczatkowa`, `zlikwidowane`, 
      `data_likwidacji`, `przyczyna_likwidacji`, `id_user`) 
      VALUES ('$data_nabycia','$numer_dokumentu','$nazwa','$miejsce_uzytkowania','$warotsc_poczatkowa','$zlikwidowane ','$data_likwidacji','$przyczyna_likwidacji','$idUser')";
    $r = mysqli_query($abc, $q);
}
else{
    $q = "UPDATE `wyposazenie` SET `data_nabycia`='$data_nabycia',`numer_dokumentu`='$numer_dokumentu',
      `nazwa`='$nazwa',`miejsce_uzytkowania`='$miejsce_uzytkowania',`warotsc_poczatkowa`='$warotsc_poczatkowa',`zlikwidowane`='$zlikwidowane',
      `data_likwidacji`='$data_likwidacji',`przyczyna_likwidacji`='$przyczyna_likwidacji' WHERE `id`='$id'
     ";

    $r = mysqli_query($abc, $q);
}



header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($q);
?>