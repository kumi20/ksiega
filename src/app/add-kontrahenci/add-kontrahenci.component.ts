import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-kontrahenci',
  templateUrl: './add-kontrahenci.component.html',
  styleUrls: ['./add-kontrahenci.component.css']
})
export class AddKontrahenciComponent implements OnInit {
  
  kontrahenci;
  idKontrahenta;
  
  constructor(private ksiegaService: KsiegaService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    
      this.route.params.subscribe(params => this.idKontrahenta = params['id']);
      this.kontrahenci = new FormGroup(
        {
            nip: new FormControl("", Validators.required),
            nazwa: new FormControl("", Validators.required),
            ulica: new FormControl("", Validators.required),
            kodPocztowy: new FormControl("", Validators.required),
            miejscowosc: new FormControl("", Validators.required),
            osobaKontaktowa: new FormControl(),
            telefon: new FormControl(),
            fax: new FormControl(),
            email: new FormControl(),
            www: new FormControl(),
            dostawca: new FormControl(),
            odbiorca: new FormControl()
        }
      )
    
      if (this.idKontrahenta != null){
          this.ksiegaService.getDetKontrahenta(this.idKontrahenta).subscribe(
              response => {
                  this.kontrahenci.controls['nip'].setValue(response[0].NIP);
                  this.kontrahenci.controls['nazwa'].setValue(response[0].Name);
                  this.kontrahenci.controls['ulica'].setValue(response[0].Street);
                  this.kontrahenci.controls['kodPocztowy'].setValue(response[0].Postcode);
                  this.kontrahenci.controls['miejscowosc'].setValue(response[0].miejscowosc);
                  this.kontrahenci.controls['osobaKontaktowa'].setValue(response[0].Person_contact);
                  this.kontrahenci.controls['telefon'].setValue(response[0].telephone);
                  this.kontrahenci.controls['fax'].setValue(response[0].fax);
                  this.kontrahenci.controls['email'].setValue(response[0].email);
                  this.kontrahenci.controls['www'].setValue(response[0].www);
                  this.kontrahenci.controls['dostawca'].setValue(response[0].dostawca=="0"?false:true);
                  this.kontrahenci.controls['odbiorca'].setValue(response[0].odbiorca=="0"?false:true);
                
              }
          )
      }
    else this.idKontrahenta = 0;
  }
  
  powrot(){
      history.back();
  }
  
  zapisz(dateControl){
      this.ksiegaService.saveKontrahent(dateControl, this.idKontrahenta).subscribe(
          response => history.back()
      )
  }
  
  usun(){
      this.ksiegaService.deleteKOntrahent(this.idKontrahenta).subscribe(
          response => history.back()
      )
  }

}
