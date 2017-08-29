<?php

	include('../config/config.php');
	$idUser = '1484923258195547';

	$data = json_decode(file_get_contents("php://input"));
	$idPrzychodu = $data->id;

	$q = "SELECT kpir.miesiac, kpir.rok, kpir.data_zd, kpir.nr_dow, id_kont, kpir.przych, kpir.pozostale_przychody, 
	 kpir.opis_zdarzenia, kpir.uwagi FROM kpir
	WHERE kpir.id='$idPrzychodu';
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