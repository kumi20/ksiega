import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker'; // do ustawiania opcji data pickera
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-trasa',
  templateUrl: './add-trasa.component.html',
  styleUrls: ['./add-trasa.component.css']
})
export class AddTrasaComponent implements OnInit {

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
  
  idTrasy;
  trasa;
  listaPojazdow;
  
  ngOnInit() {
    
      this.route.params.subscribe(params => this.idTrasy = params['id']);
      
      this.trasa = new FormGroup({
          pojazdyid: new FormControl(""),
          termin: new FormControl(""),
          trasa: new FormControl(""),
          km: new FormControl(""),
          cel: new FormControl(""),
          stawka: new FormControl(""),
          uwagi: new FormControl("")
        
      })
    
      
    
      this.ksiegaService.getPojazd().subscribe(
          response => this.listaPojazdow = response
      )
    
      if(this.idTrasy != null){
          this.ksiegaService.getDetTrasa(this.idTrasy).subscribe(
              response =>{
                
                  let dataZd = response[0].data.split('-');
                  if (dataZd[1] < 10) dataZd[1] = dataZd[1].substr(1,1);
                  if (dataZd[2] < 10) dataZd[2] = dataZd[2].substr(1,1);

                  this.trasa.controls['termin'].setValue({date: {year: dataZd[0], month: dataZd[1], day: dataZd[2]}});
                  this.trasa.controls['pojazdyid'].setValue(response[0].id_pojazdu);
                  this.trasa.controls['trasa'].setValue(response[0].trasa);
                  this.trasa.controls['km'].setValue(response[0].km);
                  this.trasa.controls['cel'].setValue(response[0].cel);
                  this.trasa.controls['stawka'].setValue(response[0].stawka);
                  this.trasa.controls['uwagi'].setValue(response[0].uwagi);
                
              }
          )
      }
      else this.idTrasy = 0;
  }
  
  powrot(){
      this._route.navigateByUrl('/ewidencja')
  }

  zapisz(value){
      this.ksiegaService.saveTrasa(value, this.idTrasy).subscribe(
          response => this._route.navigateByUrl('/ewidencja')
      )
  } 
  
  zmianaStawki(){
      for(let i of this.listaPojazdow){
          if (i.id == this.trasa.controls['pojazdyid'].value) this.trasa.controls['stawka'].setValue(i.Stawka)
          else this.trasa.controls['stawka'].setValue("")
      }
  }
  
  usun(){
      this.ksiegaService.deleteTrasa(this.idTrasy).subscribe(
          response => this._route.navigateByUrl('/ewidencja')
      )
  }
}
