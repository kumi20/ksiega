import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-zus',
  templateUrl: './add-zus.component.html',
  styleUrls: ['./add-zus.component.css']
})
export class AddZusComponent implements OnInit {

  year;
  mounth;
  skladka;
  constructor(private ksiegaService: KsiegaService, private _route: Router) { }

  ngOnInit() {
      let dataToday = new Date();
      this.year = dataToday.getFullYear();
      this.mounth = dataToday.getMonth();
      if (this.mounth < 10) this.mounth = '0'+this.mounth;  
      
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
    
      this.ksiegaService.getWysokoscSkladek(this.year).subscribe(
          res =>{
              this.skladka.controls['termin'].setValue("kuba");
              this.skladka.controls['zdrowotne'].setValue(res[0].zus_zdr);
              this.skladka.controls['fundusz'].setValue(res[0].zus_fp);
              this.skladka.controls['spoleczne'].setValue(res[0].zus_sp - res[0].chorobowe);
              this.skladka.controls['rok'].setValue(this.year);
              this.skladka.controls['miesiac'].setValue(this.mounth);
              let pom = dataToday.getMonth()+1;
              let day;
              if (pom < 10) day = '0'+pom.toString();  
              this.skladka.controls['termin'].setValue(this.year+"-"+day+"-10");
              this.skladka.controls['termin_spoleczne'].setValue(this.year+"-"+day+"-10");
              this.skladka.controls['termin_zdrowotne'].setValue(this.year+"-"+day+"-10");
              this.skladka.controls['termin_fundusz'].setValue(this.year+"-"+day+"-10");
          }
      )
  }
  
  changeMounth(){
      let m = this.skladka.controls['miesiac'].value;
      let y = this.skladka.controls['rok'].value;
      m++;
    
      if (m < 10) m = "0"+m;
      
      if(this.skladka.controls['miesiac'].value == 12){
          m = "01"
          y++;
      }
    
      this.skladka.controls['termin'].setValue(y+'-'+m+'-10');
      this.skladka.controls['termin_spoleczne'].setValue(y+'-'+m+'-10');
      this.skladka.controls['termin_zdrowotne'].setValue(y+'-'+m+'-10');
      this.skladka.controls['termin_fundusz'].setValue(y+'-'+m+'-10');

  }
  
  zapisz(value){
      this.ksiegaService.saveSkladkaZus(value).subscribe(
          res => this._route.navigate(['zus'])
      )
  }
  

}
