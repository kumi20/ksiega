import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KsiegaService {

  public headers;
  public idUser: string = '1484923258195547';
  public uri: string = "http://kumi20.webd.pl/api/ksiega/"
	
  constructor(private _http:Http) { 
  	
	  this.headers = new Headers();
	  this.headers.append('Content-Type', 'application/json');
	  this.headers.append('Access-Control-Allow-Origin', '*');
  
  }

  getKsiega(year, month){
	  const json = JSON.stringify(
		  {
			  'year':year,
		    'month': month,
        'idUser':this.idUser
		  }
	  );
	  
	  return this._http.post(this.uri+`getKpir.php`, json).map(
	  		response => response.json()
	  )
  }
	
  //funkcja pobiera odbiorców
  getOdbiorcy(){
     const json = JSON.stringify(
		  {
        'idUser':this.idUser
		  });
	  return this._http.post(this.uri+'getOdbiorcy.php',json).map(
	  		response => response.json()
	  )	  
  }
	
  //funkcja pobiera dostawcow
  getDostawcy(){
    const json = JSON.stringify(
		{
			'idUser':this.idUser
		})
	  return this._http.post(this.uri+'getDostawcy.php',json).map(
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
	  
	  return this._http.post(this.uri+'getPrzychod.php', json).map(
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
	  
	  return this._http.post(this.uri+'getRozchod.php', json).map(
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
			'id': id,
      'idUser':this.idUser
		}
	  )
	  
	  return this._http.post(this.uri+"savePrzychod.php",json).map(
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
			'id': id,
      'idUser':this.idUser
		}
	  )
	  
	  return this._http.post(this.uri+"saveRozchod.php",json).map(
	  		response => response.json()
	  )
  }	
	
  //funckja usuwa przychód
  deletePrzychod(id){
  	var json = JSON.stringify(
		{'id':id}
	)
	
	return this._http.post(this.uri+"deletePrzychod.php", json).map(
		response => response.json()
	)
  }
	
  //funkcja pobiera statystyki dla ksiegi przychodów 
  getStatisticKpir(year,month){
	  var json = JSON.stringify(
		{
			'year':year,
			'month': month,
      'idUser':this.idUser
		}
	)
	  
	return this._http.post(this.uri+"statystykaKpir.php",json).map(
		response => response.json()
	)  
  }
	
  //funcka pobiera listę kontrahentów
  getKontrahenci(){
	  const json = JSON.stringify(
		{
			'idUser':this.idUser
		})
	  
	  return this._http.post(this.uri+"getKontrahenci.php",json).map(
	  	response => response.json()
	  )
  }
  
  //funckja pobiera podatek dochodwy
  getDochdowy(year){
      const json = JSON.stringify(
      {
        'idUser':this.idUser,
        'year': year
      })
      
      return this._http.post(this.uri+"getDochodowy.php", json).map(
          response => response.json()
      )
  }
  
  //funkcja oblicza podatek dochodowy
  liczPodatek(year, mounth){
      const json = JSON.stringify(
      {
        'idUser':this.idUser,
        'year': year,
        'mounth':mounth
      })
      
      return this._http.post(this.uri+"obliczPodatek.php", json).map(
          response => response.json()
      )
  }
  
  //funkcja zapisuje podatek dochodowy
  savePodatekDochodowy(podatek){
      const json = JSON.stringify(
      {
        'idUser':this.idUser,
        'podatek': podatek,
      })
      
      return this._http.post(this.uri+"addDochodowy.php", json).map(
          response => response.json()
      )
    }
  
    //funkcja usuwa podatek dochodowy
    deleteDochdowy(id){
      const json = JSON.stringify(
      {
        'id':id
      })
      
      return this._http.post(this.uri+"deleteDochodowy.php", json).map(
          response => response.json()
      )
    }
  
    //funkcja pobiera składki zus
    getZus(year){
        const json = JSON.stringify(
        {
          'idUser':this.idUser,
          'year': year,
        })
      
      return this._http.post(this.uri+"getZus.php", json).map(
          response => response.json()
      )
    }
  
    //wysokośc składek
    getWysokoscSkladek(year){
        const json = JSON.stringify(
        {
          'rok': year,
        })
      
      return this._http.post(this.uri+"wysokoscSkladek.php", json).map(
          response => response.json()
      )
    }
  
    //zapis skladki zus
    saveSkladkaZus(skladka){
        const json = JSON.stringify(
        {
          'idUser':this.idUser,
          'skladka': skladka
        })
      
      return this._http.post(this.uri+"addSkladkeZUS.php", json).map(
          response => response.json()
      )
    }
  
    //usuwa składkę zus
    deleteSkladkaZus(id){
        const json = JSON.stringify(
        {
          'id':id,
        })
        
        return this._http.post(this.uri+"deleteSkZus.php", json).map(
          response => response.json()
      )
    }
  
}
