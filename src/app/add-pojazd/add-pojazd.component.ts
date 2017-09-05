import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-pojazd',
  templateUrl: './add-pojazd.component.html',
  styleUrls: ['./add-pojazd.component.css']
})
export class AddPojazdComponent implements OnInit {

  pojazd;
  idPojazdu;
  
  constructor(private ksiegaService: KsiegaService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
      this.route.params.subscribe(params => this.idPojazdu = params['id']);
      
      this.pojazd = new FormGroup({
          'identyfikator': new FormControl(""),
          'Marka': new FormControl(""),
          'Rejestracja': new FormControl(""),
          'Pojemnosc_silnika': new FormControl(""),
          'Stawka': new FormControl("")
      })
    
      if(this.idPojazdu != null){
          this.ksiegaService.getDetPojazdu(this.idPojazdu).subscribe(
              response => {
                   this.pojazd.controls['identyfikator'].setValue(response[0].Identyfikator);
                   this.pojazd.controls['Marka'].setValue(response[0].Marka);
                   this.pojazd.controls['Rejestracja'].setValue(response[0].Rejestracja);
                   this.pojazd.controls['Pojemnosc_silnika'].setValue(response[0].Pojemnosc_silnika);
                   this.pojazd.controls['Stawka'].setValue(response[0].Stawka);
              }
          )
      }
      else this.idPojazdu = 0;
  }

  powrot(){
      this._route.navigateByUrl('/pojazd')
  }
  
  zapisz(value){
      this.ksiegaService.savePojazd(value, this.idPojazdu).subscribe(
          response => this._route.navigateByUrl('/pojazd')
      )
  }
  
  usun(){
      this.ksiegaService.deletePojazd(this.idPojazdu).subscribe(
          response => this._route.navigateByUrl('/pojazd')
      )
  }
}
