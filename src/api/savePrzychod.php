<?php
	include('../config/config.php');
	$idUser = '1484923258195547';

	$data = json_decode(file_get_contents("php://input"));
	$idPrzychodu = $data->id;

	$miesiac = $data->miesiac;
	$rok = $data->rok;
	$dataZd = $data->dataZd;
	$nr_dow = $data->nr_dow;
	$opis_zdarzenia = $data->opis_zdarzenia;
	$id_kont = $data->id_kont;
	$przych = $data->przych;
	$pozostale_przychody = $data->pozostale_przychody;
	$uwagi = $data->uwagi;
	$razem_przychod = $przych + $pozostale_przychody;

	
	if ($idPrzychodu != 0)
	{
		$q = "UPDATE kpir SET 
			nr_dow='$nr_dow',
			id_kont='$id_kont',
			przych='$przych',
			pozostale_przychody='$pozostale_przychody',
			razem_przychod='$razem_przychod',
			opis_zdarzenia='$opis_zdarzenia',
			rok='$rok', 
			miesiac= '$miesiac',
			uwagi='$uwagi',
			data_zd='$dataZd' 
			WHERE id = '$idPrzychodu';
	 	";
		$r = mysqli_query ($abc, $q);
		$test = "jest";
	}
	else{
		$q = "INSERT INTO kpir(nr_dow, id_kont, przych, pozostale_przychody, razem_przychod, zakup_towarow, koszty_uboczne, wynagrodzenie_gotowka, pozostale_wydatki,
		  razem_wydatki, opis_zdarzenia, rok, miesiac, uwagi, data_zd, czy_przy, id_user) 
		  VALUES (
			'$nr_dow',
			'$id_kont',
			'$przych',
			'$pozostale_przychody',
			'$razem_przychod',
			'0.00',
			'0.00',
			'0.00',
			'0.00',
			'0.00',
			'$opis_zdarzenia',
			'$rok',
			'$miesiac',
			'$uwagi',
			'$dataZd',
			1,
			'$idUser'
		  )";
		$r = mysqli_query ($abc, $q);
		$test = "nie ma";
	}

	header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($test);
?>