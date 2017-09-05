<?php

include('../config/config.php');



$data = json_decode(file_get_contents("php://input"));
$idUser = $data->idUser;
$id = $data->id;


if (isset($data->data)) $data_zd  = $data->data;
else $data_zd = "0000-00-00";


if (isset($data->numer)) $numer = $data->numer;
else $numer = "";

if (isset($data->nazwa)) $nazwa = $data->nazwa;
else $nazwa = "";

if (isset($data->ilosc)) $ilosc = $data->ilosc;
else $ilosc = "";

if (isset($data->jednostka)) $jednostka = $data->jednostka;
else $jednostka = "";

if (isset($data->cena)) $cena = $data->cena;
else $cena = "";

if (isset($data->osoba)) $osoba = $data->osoba;
else $osoba = "";

if (isset($data->opis)) $opis = $data->opis;
else $opis = "";

if (isset($data->selectedDow)) $selectedDow = $data->selectedDow;
else $selectedDow = "";

if ($selectedDow == "7" || $selectedDow == "8") $rodzaj = "Przychodowy";
else $rodzaj = "Kosztowy";

if ($id == 0){
    $q = "INSERT INTO `dow_wewnetrzne`(`rodzaj`, `numer`, `data`, `nazwa`, `ilosc`, `cena`, `jednostka`, `osoba`, `kol_ksiegi`, `opis`, `czy_zaksiegowano`, `id_user`) 
    VALUES ('$rodzaj','$numer','$data_zd','$nazwa','$ilosc','$cena','$jednostka','$osoba','$selectedDow','$opis',0,'$idUser')";
    $r = mysqli_query($abc, $q);
}
else{
    
    $q = "UPDATE `dow_wewnetrzne` SET `rodzaj`='$rodzaj',`numer`='$numer',`data`='$data_zd',`nazwa`='$nazwa',`ilosc`='$ilosc',`cena`='$cena',`jednostka`='$jednostka',`osoba`='$osoba',`kol_ksiegi`='$selectedDow',`opis`='$opis' WHERE id='$id' ";

    $r = mysqli_query($abc, $q);
}


	# JSON-encode the response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($selectedDow);

?>