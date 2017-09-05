import { Component, OnInit } from '@angular/core';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-ewidencja',
  templateUrl: './ewidencja.component.html',
  styleUrls: ['./ewidencja.component.css']
})
export class EwidencjaComponent implements OnInit {

  constructor(private ksiegaService: KsiegaService) { }

  month;
  year;
  trasa;
  
  ngOnInit() {
    
      let dataToday = new Date();
      let pom = dataToday.getMonth();
      pom++;

      if (dataToday.getMonth() < 10 ) this.month = "0"+pom;
      else this.month = pom;
      this.year = dataToday.getFullYear();
    
      this.ksiegaService.getEwidencja(this.year, this.month).subscribe(
          response => this.trasa = response
      )
  }
  
  pokaz(){
      this.ksiegaService.getEwidencja(this.year, this.month).subscribe(
          response => this.trasa = response
      )
  }

}
