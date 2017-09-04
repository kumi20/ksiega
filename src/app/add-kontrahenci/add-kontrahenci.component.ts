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
  
  constructor(private ksiegaService: KsiegaService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
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
  }

  save(value){
      this.ksiegaService.addKontrahent(value).subscribe(
          res => this._route.navigateByUrl('/kontrahenci')
      )
  }
  
  back(){
      this._route.navigateByUrl('/kontrahenci')
  }

}
