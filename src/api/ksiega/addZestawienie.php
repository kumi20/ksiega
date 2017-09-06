<?php

include('../config/config.php');


$data = json_decode(file_get_contents("php://input"));

$idUser = $data->idUser;
$id = $data->id;

if (isset($data->termin)) $termin  = $data->termin;
else $termin = "0000-00-00";

if (isset($data->numer)) $numer = $data->numer;
else $numer = "";

if (isset($data->okreslenie_wydatku)) $okreslenie_wydatku = $data->okreslenie_wydatku;
else $okreslenie_wydatku = 0;

if (isset($data->wartosc)) $wartosc = str_replace(',','.',$data->wartosc);
else $wartosc = 0;

if (isset($data->pojazdy)) $pojazdy = $data->pojazdy;
else $pojazdy = "";

if ($id == 0){
    $q = "INSERT INTO `zestawienie_eksploatacja`(`pojazd`, `data`, `numer`, `okreslenie_wydatku`, `wartosc`, `id_user`,`czy_zaksiegowane`) 
    VALUES ('$pojazdy','$termin','$numer','$okreslenie_wydatku','$wartosc','$idUser',0)";
    $r = mysqli_query($abc, $q);
}
else{
    $q = "UPDATE `zestawienie_eksploatacja` SET `pojazd`='$pojazdy',`data`='$termin',`numer`='$numer',`okreslenie_wydatku`='$okreslenie_wydatku',
    `wartosc`='$wartosc' WHERE `id`='$id'
     ";

    $r = mysqli_query($abc, $q);
}


	# JSON-encode the response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($pojazdy);

?>