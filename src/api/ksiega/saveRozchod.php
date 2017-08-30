<?php
	include('../config/config.php');

	

	$data = json_decode(file_get_contents("php://input"));
	$idPrzychodu = $data->id;
  $idUser = $data->idUser;

	$miesiac = $data->miesiac;
	$rok = $data->rok;
	$dataZd = $data->dataZd;
	$nr_dow = $data->nr_dow;
	$opis_zdarzenia = $data->opis_zdarzenia;
	$id_kont = $data->id_kont;
	$zakup_towarow = $data->zakup_towarow;
	$wynagrodzenie_gotowka = $data->wynagrodzenie_gotowka;
	$koszty_uboczne = $data->koszty_uboczne;
	$pozostale_wydatki = $data->pozostale_wydatki;
	$uwagi = $data->uwagi;
	$razem_wydatki = $zakup_towarow + $wynagrodzenie_gotowka + $koszty_uboczne + $pozostale_wydatki;

	
	if ($idPrzychodu != 0)
	{
		$q = "UPDATE kpir SET 
				nr_dow='$nr_dow',
				id_kont='$id_kont',
				zakup_towarow='$zakup_towarow',
				koszty_uboczne='$koszty_uboczne',
				wynagrodzenie_gotowka='$wynagrodzenie_gotowka',
				pozostale_wydatki = '$pozostale_wydatki',
				razem_wydatki = '$razem_wydatki',
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
			'0.00',
			'0.00',
			'0.00',
			'$zakup_towarow',
			'$koszty_uboczne',
			'$wynagrodzenie_gotowka',
			'$pozostale_wydatki',
			'$razem_wydatki',
			'$opis_zdarzenia',
			'$rok',
			'$miesiac',
			'$uwagi',
			'$dataZd',
			0,
			'$idUser'
		  )";
		$r = mysqli_query ($abc, $q);
		$test = "nie ma";
	}

	header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($q);
?>