import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-dochodowy',
  templateUrl: './dochodowy.component.html',
  styleUrls: ['./dochodowy.component.css']
})
export class DochodowyComponent implements OnInit {

  constructor(private ksiegaService: KsiegaService) { }

  year;
  dochodowy;
  obliczPodatek;
  obliczono: boolean = false;
  podatek;
  
  ngOnInit() {
      
      let dataToday = new Date();
      this.year = dataToday.getFullYear();
      
      this.ksiegaService.getDochdowy(this.year).subscribe(
          res => this.dochodowy = res
      )
    
      this.obliczPodatek = new FormGroup({
          'mounth': new FormControl("", Validators.required),
          'year': new FormControl("", Validators.required)
      })
  }
  
  pokaz(){
      this.ksiegaService.getDochdowy(this.year).subscribe(
          res => this.dochodowy = res
      )
  }
  
  oblicz(value){
      this.ksiegaService.liczPodatek(value.year, value.mounth).subscribe(
          res => {
            this.obliczono = true;
            this.podatek = res;
            console.log("podatek",res)
          }
      ) 
  }
  
  anuluj(){
      this.obliczono = false;
  }
  
  zapisz(){
      console.log(this.podatek);
      this.ksiegaService.savePodatekDochodowy(this.podatek).subscribe(
          res => {
              this.pokaz();
              this.obliczono = false;
          }
      )
    
      
  }
  
     usun(id){
        this.ksiegaService.deleteDochdowy(id).subscribe(
            res => this.pokaz()
        )
    }

}
