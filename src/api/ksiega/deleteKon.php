<?php

include('../config/config.php');

$data = json_decode(file_get_contents("php://input"));

$id = $data->idKon;





$q = "DELETE FROM kontrahenci WHERE id='$id';
 ";

$r = mysqli_query($abc, $q);
	
	
	# JSON-encode the response
	echo $json_response = json_encode($id);

?>