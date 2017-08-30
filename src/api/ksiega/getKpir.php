<?php

	include('../config/config.php');

	$data = json_decode(file_get_contents("php://input"));

	$idUser = $data->idUser;
	$y = $data->year;
	$m = $data->month;

	$q = "SELECT kpir.id, kpir.data_zd, kpir.nr_dow, kontrahenci.name, kpir.razem_przychod, kpir.zakup_towarow, kpir.koszty_uboczne, kpir.wynagrodzenie_gotowka, 
	kpir.pozostale_wydatki, kpir.opis_zdarzenia, kpir.czy_przy FROM kpir
	LEFT JOIN kontrahenci ON kontrahenci.id = kpir.id_kont
	WHERE kpir.miesiac = '$m' AND rok = '$y' AND id_user = '$idUser' ORDER BY kpir.data_zd;
	 ";

	$r = mysqli_query($abc, $q);
	
	$arr = array();

	while ($row = mysqli_fetch_assoc($r)){
		$arr[] = $row;
	}
	
	header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($arr);

?>