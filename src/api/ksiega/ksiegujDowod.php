<?php

include('../config/config.php');



$data = json_decode(file_get_contents("php://input"));
$idUser = $data->idUser;
$id_dowodu = $data->id;

$q = "SELECT numer, data, nazwa, cena, kol_ksiegi, opis FROM dow_wewnetrzne WHERE id='$id_dowodu'";
$r = mysqli_query($abc, $q);

$w = mysqli_fetch_array($r);

$numer = $w['numer'];
$data = $w['data'];
$nazwa = $w['nazwa'];
$cena = str_replace(",",".",$w['cena']);
$kol_ksiegi = $w['kol_ksiegi'];
$opis = $w['opis'];

$pom = explode("-", $data);
$rok = $pom[0];
$miesiac = $pom[1];

$przych = 0;
$pozostale_przychody = 0;
$zakup_towarow = 0;
$koszty_uboczne = 0;
$wynagrodzenie_gotowka = 0;
$pozostale_wydatki = 0;



if ($kol_ksiegi == "7") $przych = $cena;
if ($kol_ksiegi == "8") $pozostale_przychody = $cena;
if ($kol_ksiegi == "10") $zakup_towarow = $cena;
if ($kol_ksiegi == "11") $koszty_uboczne = $cena;
if ($kol_ksiegi == "12") $wynagrodzenie_gotowka = $cena;
if ($kol_ksiegi == "13") $pozostale_wydatki = $cena;
if ($kol_ksiegi == "15") $pozostale_wydatki = $cena;

if ($kol_ksiegi == "7" || $kol_ksiegi == "8") $czy_przychod = true;
else $czy_przychod = false;

$razem_wydatki = $zakup_towarow+$koszty_uboczne+$wynagrodzenie_gotowka+$pozostale_wydatki;
$razem_przychod = (float)$przych + (float)$pozostale_przychody;

$q = "INSERT INTO `kpir`(`nr_dow`, `id_kont`, `przych`, `pozostale_przychody`, `razem_przychod`, `zakup_towarow`, 
			`koszty_uboczne`, `wynagrodzenie_gotowka`, `pozostale_wydatki`, `razem_wydatki`, `opis_zdarzenia`, 
			`rok`, `miesiac`, `uwagi`, `data_zd`, `czy_przy`, `id_user`) 
	VALUES ('$numer', 0, '$przych','$pozostale_przychody','$razem_przychod','$zakup_towarow','$koszty_uboczne','$wynagrodzenie_gotowka',
	'$pozostale_wydatki','$razem_wydatki','$nazwa','$rok','$miesiac','$opis','$data ','$czy_przychod','$idUser')";
	
$r = mysqli_query($abc, $q);

$q = "UPDATE `dow_wewnetrzne` SET `czy_zaksiegowano`=true WHERE id='$id_dowodu'";
$r = mysqli_query($abc, $q);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $json_response = json_encode($q);

?>