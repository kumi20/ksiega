import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KsiegaService {

  public headers;
  //public idUser: string = '1484923258195547';
  public idUser: string = localStorage.getItem('FacebookKsiegaToken');
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
        'idUser':this.idUser,
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
        'idUser':this.idUser,
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
  
    //funkcja dodaje kontrahenta
    addKontrahent(data, id){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'nip': data.nip,
            'name': data.nazwa,
            'street': data.ulica,
            'postcode': data.kodPocztowy,
            'miejscowosc': data.miejscowosc,
            'person': data.osobaKontaktowa,
            'telephone': data.telefon,
            'fax': data.fax,
            'email': data.email,
            'www': data.www,
            'dostawca': data.dostawca,
            'odbiorca': data.odbiorca,
            'id': id
        })
        
        return this._http.post(this.uri+"addKon.php", json).map(
          response => response.json()
        )
    }
  
    //funckja pobiera szczegóły kontrahenta
    getDetKon(id){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'idKon':id
        })
        
        return this._http.post(this.uri+"getDetKon.php", json).map(
            response => response.json()
        )
    }
  
    //usuwanie kontrahenta
    deleteKontrahent(id){
        const json = JSON.stringify({
            'id':id
        })
        
        return this._http.post(this.uri+"deleteKontrahent.php",json).map(
            response => response.json()
        )
    }
  
    //pobiera listę środków trwałych
    getWyposazenie(){
        const json = JSON.stringify({
            'idUser':this.idUser,
        })
        
        return this._http.post(this.uri+"getWyposazenie.php", json).map(
            response => response.json()
        )
    }
  
    //zapisuje wyposazenie
    saveWyposazenie(value, id){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'data_nabycia': value.data_nabycia.date.year+'-'+value.data_nabycia.date.month+'-'+value.data_nabycia.date.day,
            'numer_dokumentu': value.numer_dokumentu,
            'nazwa': value.nazwa,
            'miejsce_uzytkowania': value.miejsce_Uzytkowania,
            'warotsc_poczatkowa': value.wartosc_poczotakowa,
            'zlikwidowane': value.wyposazenie_zlikwidowane,
            'data_likwidacji': value.data_likwidacji.date.year+'-'+value.data_likwidacji.date.month+'-'+value.data_likwidacji.date.day,
            'przyczyna_likwidacji': value.przyczyna_Likwidacji,
            'id': id
        })
        
        return this._http.post(this.uri+"addWyposazenie.php", json).map(
            response => response.json()
        )
    }
  
    //pobiera szczegóły wyposazenia
    getDetWyposazenie(id){
        const json = JSON.stringify({
            'id':id,
        })
        
        return this._http.post(this.uri+"getDetWyposazenia.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja usuwa wyposazenie
    deleteWyposazenie(id){
        const json = JSON.stringify({
            'id':id,
        })
        
        return this._http.post(this.uri+"deleteWyposazenie.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja pobiera dowody wewnętrzne
    getDowody(year){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'year': year
        })
        
        return this._http.post(this.uri+"getDowody.php", json).map(
            response => response.json()
        )
    }
  
    //funckja pobiera szczegoly dowodu wewnetrznego
    getDetDowodu(id){
        const json = JSON.stringify({
            'id':id,
        })
        
        return this._http.post(this.uri+"getDetDowodu.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja zapisuje dowod
    saveDowod(value, id){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'id': id,
            'data': value.data_wystawienia.date.year+'-'+value.data_wystawienia.date.month+'-'+value.data_wystawienia.date.day,
            'numer': value.nr_dowdu,
            'nazwa': value.nazwa,
            'ilosc': value.ilosc,
            'jednostka': value.jednostka,
            'cena': value.cena,
            'osoba': value.osoba,
            'opis': value.opis,
            'selectedDow': value.kolumna,
            
        })
        
        return this._http.post(this.uri+"addDowod.php", json).map(
            response => response.json()
        )  
    }
  
    //funkcja usuwa dowod
    deleteDowod(id){
        const json = JSON.stringify({
            'id':id,
        })
        
        return this._http.post(this.uri+"deleteDowod.php", json).map(
            response => response.json()
        )
    }
    
    //funkcja ksieguje dowod
    ksiegujDowod(id){
        const json = JSON.stringify({
            'id':id,
            'idUser':this.idUser,
        })
        
        return this._http.post(this.uri+"ksiegujDowod.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja pobiera listę pojazdów
    getPojazd(){
        const json = JSON.stringify({
            'idUser':this.idUser
        })
        
        return this._http.post(this.uri+"getPojazdy.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja pobiera szczegóły pojazdu
    getDetPojazdu(id){
        const json = JSON.stringify({
            'id':id,
        })
        
        return this._http.post(this.uri+"getDetPojazdy.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja zaspisuje dane pojazdu
    savePojazd(value, id){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'id': id,
            'identyfikator': value.identyfikator,
            'Marka': value.Marka,
            'Rejestracja': value.Rejestracja,
            'Pojemnosc_silnika': value.Pojemnosc_silnika,
            'Stawka': value.Stawka,
        })
        
        return this._http.post(this.uri+"addPojazd.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja usuwa pojazd
    deletePojazd(id){
        const json = JSON.stringify({
            'id':id
        })
        
        return this._http.post(this.uri+"deletePojazd.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja zwraca kilometrowke
    getEwidencja(year,mounth){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'year': year,
            'mounth': mounth
        })
        
        return this._http.post(this.uri+"getTrasa.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja zapisuje trase
    saveTrasa(values, id){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'termin': values.termin.date.year+'-'+values.termin.date.month+'-'+values.termin.date.day,
            'trasa': values.trasa,
            'km': values.km,
            'cel': values.cel,
            'stawka': values.stawka,
            'uwagi': values.uwagi,
            'pojazdyid': values.pojazdyid,
            'id': id
        })
        
        return this._http.post(this.uri+"addTrasa.php", json).map(
            response => response.json()
        )
    }
  
    //funckja pobiera szczegóły trasy
    getDetTrasa(id){
        const json = JSON.stringify({
            'id':id
        })
        
        return this._http.post(this.uri+"getDetTrasa.php", json).map(
            response => response.json()
        )
    }
    
    //funkcja usuwa trase
    deleteTrasa(id){
        const json = JSON.stringify({
            'id':id
        })
        
        return this._http.post(this.uri+"deleteTrasa.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja zwraca kwote jaka można zaksiegować w kilometrowce
    kwotaKilometrowka(year, mounth){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'mounth': mounth,
            'year':year
        })
        
        return this._http.post(this.uri+"getPrzejechaneKm.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja pobiera zestawienie dokumentow do kilometrowki
    getZestawienie(year, mounth){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'mounth': mounth,
            'year':year
        })
        
        return this._http.post(this.uri+"getZestawienie.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja pobiera szczegóły zestawienia
    getDetZestawienie(id){
         const json = JSON.stringify({
            'id':id,
            
        })
        
        return this._http.post(this.uri+"getDetZestawienia.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja zapisuje zestawienie
    saveZestawienie(values, id){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'termin': values.dataDokumentu.date.year+'-'+values.dataDokumentu.date.month+'-'+values.dataDokumentu.date.day,
            'numer': values.numerDokumentu,
            'okreslenie_wydatku': values.rodzajWydatku,
            'wartosc': values.wartoscWydatku,  
            'pojazdy': values.pojazdyid,
            'id': id
        })
        
        return this._http.post(this.uri+"addZestawienie.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja usuwa zestawienie
    deleteZestawienie(id){
        
        const json = JSON.stringify({
            'id':id,
            
        })
        
        return this._http.post(this.uri+"deleteZestawienie.php", json).map(
            response => response.json()
        )
    }
  
    //funkcja ksieguje zestawienie kilometrowek
    ksiegujZestawienie(id, wartosc){
        const json = JSON.stringify({
            'idUser':this.idUser,
            'wartosc': wartosc, 
            'id':id
        })
        
        return this._http.post(this.uri+"ksiegujZestawienie.php", json).map(
            response => response.json()
        )
    }
}
