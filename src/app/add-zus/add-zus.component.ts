import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-add-zus',
  templateUrl: './add-zus.component.html',
  styleUrls: ['./add-zus.component.css']
})
export class AddZusComponent implements OnInit {

  year;
  mounth;
  skladka;
  constructor(private ksiegaService: KsiegaService) { }

  ngOnInit() {
      let dataToday = new Date();
      this.year = dataToday.getFullYear();
      
      this.skladka = new FormGroup({
          miesiac: new FormControl("", Validators.required),
          rok: new FormControl("", Validators.required),
          termin: new FormControl("", Validators.required),
          spoleczne: new FormControl("", Validators.required),
          termin_spoleczne: new FormControl("", Validators.required),
          zdrowotne: new FormControl("", Validators.required),
          termin_zdrowotne: new FormControl("", Validators.required),
          fundusz: new FormControl("", Validators.required),
          termin_fundusz: new FormControl("", Validators.required),
          
      })  
  }

}
