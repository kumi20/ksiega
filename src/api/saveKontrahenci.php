<?php
	include('../config/config.php');

	$data = json_decode(file_get_contents("php://input"));
  $idUser = $data->idUser;

  $id = $data->id;
  $nip = $data->nip;
  $name = $data->name;
  $street = $data->street;
  $postcode= $data->postcode;
  $miejscowosc = $data->miejscowosc;
  $person = $data->person;
  $telephone = $data->telephone;
  $fax = $data->fax;
  $email = $data->email;
  $www = $data->www;
  $dostawca = $data->dostawca;
  $odbiorca = $data->odbiorca;
	
	if ($id != 0)
	{
		$q = "UPDATE kontrahenci SET NIP='$nip',Name='$name',Street='$street',Postcode='$postcode',miejscowosc='$miejscowosc',Person_contact='$person',
      telephone='$telephone',fax='$fax',email='$email',www='$www',dostawca='$dostawca',odbiorca='$odbiorca' WHERE id='$id'
	 	";
		$r = mysqli_query ($abc, $q);
	}
	else{
		$q = "INSERT INTO kontrahenci(NIP, Name, Street, Postcode, miejscowosc, Person_contact, telephone, fax, email, www, dostawca, odbiorca, user_id) 
      VALUES ('$nip','$name', '$street', '$postcode', '$miejscowosc', '$person', '$telephone', '$fax', '$email', '$www', '$dostawca', '$odbiorca','$idUser'
		  )";
		$r = mysqli_query ($abc, $q);
	}

	header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
	echo $json_response = json_encode($q);
?>