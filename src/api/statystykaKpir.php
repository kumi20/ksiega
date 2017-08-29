<?php

	include('../config/config.php');

	$data = json_decode(file_get_contents("php://input"));


	$id = "1484923258195547";
	$rok = $data->year;
	$miesiac = $data->month;

	$q = "SELECT razem_przychod, razem_wydatki FROM kpir
	WHERE rok = '$rok' AND miesiac <= '$miesiac' AND id_user='$id';
 	";

	$r = mysqli_query($abc, $q);

	$przychod_rok = 0;
	$wydatki_rok = 0;

	while ($row = mysqli_fetch_assoc($r)){
			$przychod_rok += $row['razem_przychod'];
			$wydatki_rok += $row['razem_wydatki'];
	}

	$q = "SELECT razem_przychod, razem_wydatki FROM kpir
		WHERE rok = '$rok' AND miesiac = '$miesiac' AND id_user='$id';
	 ";

	$r = mysqli_query($abc, $q);

	$przychod_miesiac = 0;
	$wydatki_miesiac = 0;

	while ($row = mysqli_fetch_assoc($r)){
			$przychod_miesiac += $row['razem_przychod'];
			$wydatki_miesiac += $row['razem_wydatki'];
	}

	$arr = array(
		"przychod_rok" => $przychod_rok,
		"wydatki_rok" => $wydatki_rok,
		"przychod_miesiac" => $przychod_miesiac,
		"wydatki_miesiac" => $wydatki_miesiac,
		"dochod_rok" => $przychod_rok - $wydatki_rok,
		"dochod_miesiac"=> $przychod_miesiac - $wydatki_miesiac
	);

	header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($arr);

?>