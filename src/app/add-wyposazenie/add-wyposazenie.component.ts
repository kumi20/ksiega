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

}
