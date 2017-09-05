<?php

include('../config/config.php');



$data = json_decode(file_get_contents("php://input"));

$id = $data->idUser;
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
$id_kon = $data->id;

if ($odbiorca == null) $odbiorca = "0";
if($dostawca == null) $dostawca ="0";

if ($id_kon == 0){
    $q = "INSERT INTO kontrahenci(NIP, Name, Street, Postcode, miejscowosc, Person_contact, telephone, fax, email, www, dostawca, odbiorca, user_id) 
    VALUES ('$nip','$name', '$street', '$postcode', '$miejscowosc', '$person', '$telephone', '$fax', '$email', '$www', '$dostawca', '$odbiorca','$id')";
    $r = mysqli_query($abc, $q);
}
else{
    $q = "UPDATE kontrahenci SET NIP='$nip',Name='$name',Street='$street',Postcode='$postcode',miejscowosc='$miejscowosc',Person_contact='$person',
    telephone='$telephone',fax='$fax',email='$email',www='$www',dostawca='$dostawca',odbiorca='$odbiorca' WHERE id='$id_kon'";
    $r = mysqli_query($abc, $q);
}



header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($q);
?>