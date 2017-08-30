import { Injectable } from '@angular/core';
import { Http, HttpModule, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';


@Injectable()
export class KumiService {

  public uri: string = "http://kumi20.webd.pl/api/kumiSoft/";
  
  constructor(private _http:Http) { }
   
  idUser = '1484923258195547';
    
  getOnas(){

      return this._http.get(this.uri+"getOnas.php").map(
            res => res.json()
      )
  }
    
  getOferta(){
     
      return this._http.get(this.uri+"getOferta.php").map(
            res => res.json()
      )
  } 
  
  getKontakt(){
      return this._http.get(this.uri+"getKontakt.php").map(
          res => res.json()
      )
  }

}
