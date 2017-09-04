import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker'; // do ustawiania opcji data pickera
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-wyposazenie',
  templateUrl: './add-wyposazenie.component.html',
  styleUrls: ['./add-wyposazenie.component.css']
})
export class AddWyposazenieComponent implements OnInit {

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
  
  wyposazenie;
  idWyposazenie;
  
  constructor(private ksiegaService: KsiegaService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    
      this.wyposazenie = new FormGroup({
          'data_nabycia': new FormControl("", Validators.required),
          'numer_dokumentu': new FormControl("", Validators.required),
          'nazwa': new FormControl("", Validators.required),
          'miejsce_Uzytkowania': new FormControl("", Validators.required),
          'wartosc_poczotakowa': new FormControl("", Validators.required),
          'wyposazenie_zlikwidowane': new FormControl(""),
          'data_likwidacji': new FormControl(""),
          'przyczyna_Likwidacji': new FormControl("")
      })
    
      this.wyposazenie.controls['data_likwidacji'].setValue({date: {year: '0000', month: '00', day: '00'}});
    
      this.route.params.subscribe(params => this.idWyposazenie = params['id']);
      if (this.idWyposazenie !=null){
          this.ksiegaService.getDetWyposazenie(this.idWyposazenie).subscribe(
              response => {
                  console.log(response);
                
                  let data_nabycia = response[0].data_nabycia.split('-');
                  if (data_nabycia[1] < 10) data_nabycia[1] = data_nabycia[1].substr(1,1);
                  if (data_nabycia[2] < 10) data_nabycia[2] = data_nabycia[2].substr(1,1);
                  this.wyposazenie.controls['data_nabycia'].setValue({date: {year: data_nabycia[0], month: data_nabycia[1], day: data_nabycia[2]}});
                
                  let data_likwidacji = response[0].data_likwidacji.split('-');
                  if (data_likwidacji[1] < 10) data_likwidacji[1] = data_likwidacji[1].substr(1,1);
                  if (data_likwidacji[2] < 10) data_likwidacji[2] = data_likwidacji[2].substr(1,1);
                  this.wyposazenie.controls['data_likwidacji'].setValue({date: {year: data_likwidacji[0], month: data_likwidacji[1], day: data_likwidacji[2]}});
                
                  this.wyposazenie.controls['numer_dokumentu'].setValue(response[0].numer_dokumentu);
                  this.wyposazenie.controls['nazwa'].setValue(response[0].nazwa);
                  this.wyposazenie.controls['miejsce_Uzytkowania'].setValue(response[0].miejsce_uzytkowania);
                  this.wyposazenie.controls['wartosc_poczotakowa'].setValue(response[0].warotsc_poczatkowa);
                  this.wyposazenie.controls['wyposazenie_zlikwidowane'].setValue(!response[0].zlikwidowane);
                  this.wyposazenie.controls['przyczyna_Likwidacji'].setValue(response[0].przyczyna_likwidacji);
              }
          )
      }
      else this.idWyposazenie = 0;
  }
  
  save(value){
      this.ksiegaService.saveWyposazenie(value, this.idWyposazenie).subscribe(
          response => this._route.navigateByUrl('/wyposazenie')
      )    
  }
  
  powrot(){
      this._route.navigateByUrl('/wyposazenie');
  }
  
  usun(){
      this.ksiegaService.deleteWyposazenie(this.idWyposazenie).subscribe(
          response => this._route.navigateByUrl('/wyposazenie')
      )
  }  

}
