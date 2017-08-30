<?php

include('../config/config.php');

$data = json_decode(file_get_contents("php://input"));

$idUser = $data->idUser;
$rok = $data->year;




$q = "SELECT `id`,`rok`,`miesiac`,`termin_platnosci`,`skladka_spoleczne`,`skladka_zdrowotne`,`skladka_fundusz_pracy`
FROM skladki_zus
WHERE `user_id`='$idUser' AND rok='$rok' ORDER BY `miesiac`;
 ";

$r = mysqli_query($abc, $q);
	
	$arr = array();

	while ($row = mysqli_fetch_assoc($r)){
		$arr[] = $row;
	}
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
	# JSON-encode the response
	echo $json_response = json_encode($arr);

?>