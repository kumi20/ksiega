import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker'; // do ustawiania opcji data pickera
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-dowod',
  templateUrl: './add-dowod.component.html',
  styleUrls: ['./add-dowod.component.css']
})
export class AddDowodComponent implements OnInit {

  constructor(private ksiegaService: KsiegaService, private route: ActivatedRoute, private _route: Router) { }
  
  public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd',
        monthLabels: {
            1:'Sty',
            2:'Lut',
            3:'Mar',
            4:'Kwi',
            5:'Maj',
            6:'Cze',
            7:'Lip',
            8:'Sie',
            9:'Wrz',
            10:'Paź',
            11:'Lis',
            12:'Gru'
        },
        todayBtnTxt: 'Dzisiaj',
        dayLabels:{
            su: 'niedz.',
            mo: 'pon.',
            tu: 'wt.',
            we: 'śr.',
            th: 'czw.',
            fr: 'pt.',
            sa: 'sob.', 
        },
    };
  
  dowody;
  idDowodu;

  ngOnInit() {
    
      this.dowody = new FormGroup({
          nr_dowdu: new FormControl(""),
          data_wystawienia: new FormControl(""),
          nazwa: new FormControl(""),
          ilosc: new FormControl(""),
          cena: new FormControl(""),
          jednostka: new FormControl(""),
          osoba: new FormControl(""),
          kolumna: new FormControl(""),
          opis: new FormControl("")
      })
    
      
      this.route.params.subscribe(params => this.idDowodu = params['id']);
    
      if (this.idDowodu != null){
          this.ksiegaService.getDetDowodu(this.idDowodu).subscribe(
              response => {
                let dataZd = response[0].data.split('-');
                if (dataZd[1] < 10) dataZd[1] = dataZd[1].substr(1,1);
                if (dataZd[2] < 10) dataZd[2] = dataZd[2].substr(1,1);

				        this.dowody.controls['data_wystawienia'].setValue({date: {year: dataZd[0], month: dataZd[1], day: dataZd[2]}});
				        this.dowody.controls['nr_dowdu'].setValue(response[0].numer);
				        this.dowody.controls['nazwa'].setValue(response[0].nazwa);
				        this.dowody.controls['ilosc'].setValue(response[0].ilosc);
				        this.dowody.controls['cena'].setValue(response[0].cena);
				        this.dowody.controls['jednostka'].setValue(response[0].jednostka);
				        this.dowody.controls['osoba'].setValue(response[0].osoba);
				        this.dowody.controls['kolumna'].setValue(response[0].kol_ksiegi);
				        this.dowody.controls['opis'].setValue(response[0].opis);
              }
          )
      }
      else this.idDowodu = 0;
  }
  
  powrot(){
      this._route.navigateByUrl('/dowody');
  }
  
  zapisz(value){
      this.ksiegaService.saveDowod(value, this.idDowodu).subscribe(
          res => this._route.navigateByUrl('/dowody')
      )
  }
  
  usun(){
      this.ksiegaService.deleteDowod(this.idDowodu).subscribe(
          res => this._route.navigateByUrl('/dowody')
      )
  }

}
