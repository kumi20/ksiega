<?php

include('../config/config.php');

$data = json_decode(file_get_contents("php://input"));
$id = $data->idUser;


$q = "SELECT id, `data_nabycia`,`numer_dokumentu`,`nazwa`,`warotsc_poczatkowa`,`miejsce_uzytkowania`,`data_likwidacji`,`przyczyna_likwidacji` FROM `wyposazenie`
	WHERE  id_user='$id';
 ";

  $r = mysqli_query($abc, $q);
	
	$arr = array();

	while ($row = mysqli_fetch_assoc($r)){
		$arr[] = $row;
	}
	# JSON-encode the response
  header('Content-Type: application/json');
  header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($arr);

?>