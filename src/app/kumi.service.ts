import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class KumiService {

  constructor(private _http:Http) { }
   
  idUser = '1484923258195547';
    
  getOnas(){
      const json = JSON.stringify(
      {
          'idUser': this.idUser
      })
      return this._http.post("http://kumi20.webd.pl/ksiega/api/getOnas.php",json).map(
            res => res.json()
      )
  }
    
  getOferta(){
      const json = JSON.stringify(
      {
          'idUser': this.idUser     
      })
      return this._http.post("http://kumi20.webd.pl/ksiega/api/getOferta.php",json).map(
            res => res.json()
      )
  }    

}
