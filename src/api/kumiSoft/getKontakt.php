<?php

	include('../config/config.php');


	$q = "SELECT * FROM `cms.static` WHERE `static_id`=3
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