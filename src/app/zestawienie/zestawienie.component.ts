import { Component, OnInit } from '@angular/core';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-zestawienie',
  templateUrl: './zestawienie.component.html',
  styleUrls: ['./zestawienie.component.css']
})
export class ZestawienieComponent implements OnInit {

  constructor(private ksiegaService: KsiegaService) { }
 
  month;
  year;
  kwotaKM: string = '0.00';
  zestawienie;
  zaksiegowany: boolean = false;
  
  ngOnInit() {
    
        
        let dataToday = new Date();
        let pom = dataToday.getMonth();
        pom++;

        if (dataToday.getMonth() < 10 ) this.month = "0"+pom;
        else this.month = pom;
        this.year = dataToday.getFullYear();
    
        this.ksiegaService.kwotaKilometrowka(this.year, this.month).subscribe(
            response => this.kwotaKM = response.wartosc
        )
    
        this.ksiegaService.getZestawienie(this.year, this.month).subscribe(
            response => this.zestawienie = response
        )
      
  }
  
  pokaz(){
        this.ksiegaService.kwotaKilometrowka(this.year, this.month).subscribe(
            response => this.kwotaKM = response.wartosc
        )
    
        this.ksiegaService.getZestawienie(this.year, this.month).subscribe(
            response => this.zestawienie = response
        )
  }
  
  ksieguj(id){
      this.ksiegaService.ksiegujZestawienie(id, this.kwotaKM).subscribe(
          response => this.zaksiegowany = true
      )
  }

}
