<?php

header('Content-Type: text/html; charset=utf-8');

include('../config/config.php');



$data = json_decode(file_get_contents("php://input"));

$id = $data->idUser;
$wartosc = (double)$data->wartosc;
$id_dow = $data->id;

if($wartosc > 0){

	$q = "SELECT `data`, `numer`, `okreslenie_wydatku`, `wartosc`, czy_zaksiegowane FROM `zestawienie_eksploatacja` WHERE `id`='$id_dow'";
	$r = mysqli_query($abc, $q);

	$w = mysqli_fetch_row($r);

	$data_zd = $w['0'];

	$numer_dokumentu = $w[1];
	$okreslenie_wydatku = $w[2];
	$koszt = (double)$w[3];
	$czy_ksiegowane = $w[4];

	if ($czy_ksiegowane == "0"){
		
		
		$pom = explode("-", $data_zd);
		$rok = $pom[0];
		$miesiac = $pom[1];

		if ($koszt > $wartosc) $koszt = $wartosc;

		$q = "INSERT INTO `kpir`(`nr_dow`, `id_kont`, `przych`, `pozostale_przychody`, `razem_przychod`, `zakup_towarow`, `koszty_uboczne`, `wynagrodzenie_gotowka`, 
		`pozostale_wydatki`, `razem_wydatki`, `opis_zdarzenia`, `rok`, `miesiac`, `uwagi`, `data_zd`, `czy_przy`, `id_user`) 
		VALUES ('$numer_dokumentu','',0,0,0,'$koszt',0,0,0,'$koszt','$okreslenie_wydatku','$rok ','$miesiac','rozliczenie kilometrówki','$data_zd',0,'$id')";
		$r = mysqli_query($abc, $q);
		
		$q = "UPDATE `zestawienie_eksploatacja` SET `czy_zaksiegowane`=1  WHERE `id`='$id_dow'";
		$r = mysqli_query($abc, $q);
		
		$status = "Zaksięgowano kwote: ".$koszt." zł";
	}
	else{
		$status = "Dokument został już zaksięgowany";
	}
}
else{
	$status ="Nie można zaksięgować wydatku";
}
	# JSON-encode the response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($status , JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_ERROR_UTF8);

?>