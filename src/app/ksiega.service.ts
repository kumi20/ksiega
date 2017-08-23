import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KsiegaService {

  public headers;
	
  constructor(private _http:Http) { 
  	
	  this.headers = new Headers();
	  this.headers.append('Content-Type', 'application/json');
	  this.headers.append('Access-Control-Allow-Origin', '*');
  
  }

  getKsiega(year, month){
	  var json = JSON.stringify(
		  {
			  'year':year,
		  	  'month': month
		  }
	  );
	  
	  return this._http.post(`http://kumi20.webd.pl/ksiega/api/getKpir.php`, json).map(
	  		response => response.json()
	  )
  }
	
  //funkcja pobiera odbiorców
  getOdbiorcy(){
	  return this._http.get('http://kumi20.webd.pl/ksiega/api/getOdbiorcy.php').map(
	  		response => response.json()
	  )	  
  }
	
  //funkcja pobiera dostawcow
  getDostawcy(){
	  return this._http.get('http://kumi20.webd.pl/ksiega/api/getDostawcy.php').map(
	  		response => response.json()
	  )
  }
	
  //funckja zwraca szczegóły przychodu
  getPrzychod(id){
	  var json = JSON.stringify(
		  {
			  'id':id
		  }
	  );
	  
	  return this._http.post('http://kumi20.webd.pl/ksiega/api/getPrzychod.php', json).map(
	  	response => response.json()
	  )
  }
	
  //funckja zwraca szczegóły rozchodu
  getRozchod(id){
	  var json = JSON.stringify(
		  {
			  'id':id
		  }
	  )
	  
	  return this._http.post('http://kumi20.webd.pl/ksiega/api/getRozchod.php', json).map(
	  		response => response.json()
	  )
  }
	
  //funkcja zapisujaca przychod	
  savePrzychod(przychod, id){
	  if (przychod.dataZdarzenia.date.month < 10 ) przychod.dataZdarzenia.date.month = "0"+przychod.dataZdarzenia.date.month;
	  var json = JSON.stringify(
	  	{
			'miesiac': przychod.miesiac,
			'rok': przychod.rok,
			'dataZd': przychod.dataZdarzenia.date.year+'-'+przychod.dataZdarzenia.date.month+'-'+przychod.dataZdarzenia.date.day,
			'nr_dow': przychod.numerDowodu,
			'opis_zdarzenia': przychod.opis,
			'id_kont': przychod.danekontrahenta,
			'przych': przychod.wartoscSprzedanych,
			'pozostale_przychody': przychod.pozostalePrzychody,
			'uwagi': przychod.uwagi,
			'id': id
		}
	  )
	  
	  return this._http.post("http://kumi20.webd.pl/ksiega/api/savePrzychod.php",json).map(
	  		response => response.json()
	  )
  }
	
  //funkcja zapisuje rozchod
  saveRozchod(rozchod, id){
	  if (rozchod.dataZdarzenia.date.month < 10 ) rozchod.dataZdarzenia.date.month = "0"+rozchod.dataZdarzenia.date.month;
	  var json = JSON.stringify(
	  	{
			'miesiac': rozchod.miesiac,
			'rok': rozchod.rok,
			'dataZd': rozchod.dataZdarzenia.date.year+'-'+rozchod.dataZdarzenia.date.month+'-'+rozchod.dataZdarzenia.date.day,
			'nr_dow': rozchod.numerDowodu,
			'opis_zdarzenia': rozchod.opis,
			'id_kont': rozchod.danekontrahenta,
			'zakup_towarow': rozchod.zakupTowarow,
			'wynagrodzenie_gotowka': rozchod.wynagrodzenieGotowka,
			'koszty_uboczne': rozchod.kosztyUboczne,
			'pozostale_wydatki': rozchod.pozostaleWydatki,
			'uwagi': rozchod.uwagi,
			'id': id
		}
	  )
	  
	  return this._http.post("http://kumi20.webd.pl/ksiega/api/saveRozchod.php",json).map(
	  		response => response.json()
	  )
  }	
	
  //funckja usuwa przychód
  deletePrzychod(id){
  	var json = JSON.stringify(
		{'id':id}
	)
	
	return this._http.post("http://kumi20.webd.pl/ksiega/api/deletePrzychod.php", json).map(
		response => response.json()
	)
  }
	
  //funkcja pobiera statystyki dla ksiegi przychodów 
  getStatisticKpir(year,month){
	  var json = JSON.stringify(
		{
			'year':year,
			'month': month
		}
	)
	  
	return this._http.post("http://kumi20.webd.pl/ksiega/api/statystykaKpir.php",json).map(
		response => response.json()
	)  
  }
	
  //funcka pobiera listę kontrahentów
  getKontrahenci(){
	  var json = JSON.stringify(
		{
			'idUser':'1484923258195547'
		}
	  )
	  
	  return this._http.post("http://kumi20.webd.pl/ksiega/api/getKontrahenci.php",json).map(
	  	response => response.json()
	  )
  }
}
