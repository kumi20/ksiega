import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker'; // do ustawiania opcji data pickera
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-zestawienie',
  templateUrl: './add-zestawienie.component.html',
  styleUrls: ['./add-zestawienie.component.css']
})
export class AddZestawienieComponent implements OnInit {

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
  
  idZestawienia;
  zestawienie;
  listaPojazdow;
  
  constructor(private ksiegaService: KsiegaService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
      this.ksiegaService.getPojazd().subscribe(
          response => this.listaPojazdow = response
      )
    
      this.zestawienie = new FormGroup({
          pojazdyid: new FormControl(""),
          dataDokumentu: new FormControl(""),
          numerDokumentu: new FormControl(""),
          rodzajWydatku: new FormControl(""),
          wartoscWydatku: new FormControl("")
      })
    
      this.route.params.subscribe(params => this.idZestawienia = params['id']);
    
      if (this.idZestawienia != null){
          this.ksiegaService.getDetZestawienie(this.idZestawienia).subscribe(
              response =>{
                  console.log(response);
                  
                  let data_nabycia = response[0].data.split('-');
                  if (data_nabycia[1] < 10) data_nabycia[1] = data_nabycia[1].substr(1,1);
                  if (data_nabycia[2] < 10) data_nabycia[2] = data_nabycia[2].substr(1,1);
                  this.zestawienie.controls['dataDokumentu'].setValue({date: {year: data_nabycia[0], month: data_nabycia[1], day: data_nabycia[2]}});
                  this.zestawienie.controls['pojazdyid'].setValue(response[0].pojazd);
                  this.zestawienie.controls['numerDokumentu'].setValue(response[0].numer);
                  this.zestawienie.controls['rodzajWydatku'].setValue(response[0].okreslenie_wydatku);
                  this.zestawienie.controls['wartoscWydatku'].setValue(response[0].wartosc);
              }
          )
        
      }
      else this.idZestawienia = 0;
  }
  
  powrot(){
      this._route.navigateByUrl('/zestawienie')
  }

  zapisz(value){
      this.ksiegaService.saveZestawienie(value, this.idZestawienia).subscribe(
          response => this._route.navigateByUrl('/zestawienie')
      )
  } 
  
  
  
  usun(){
      this.ksiegaService.deleteZestawienie(this.idZestawienia).subscribe(
          response => this._route.navigateByUrl('/zestawienie')
      )
  }

}
