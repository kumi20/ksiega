import { Component, OnInit } from '@angular/core';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-zus',
  templateUrl: './zus.component.html',
  styleUrls: ['./zus.component.css']
})
export class ZusComponent implements OnInit {

  year;
  zus;
  constructor(private ksiegaService:KsiegaService) { }

  ngOnInit() {
      let dataToday = new Date();
      this.year = dataToday.getFullYear();
      
      this.ksiegaService.getZus(this.year).subscribe(
          res => this.zus = res
      )
  }
  
  pokaz(){
      this.ksiegaService.getZus(this.year).subscribe(
          res => this.zus = res
      )
  }

    usun(id){
        this.ksiegaService.deleteSkladkaZus(id).subscribe(
            res => this.pokaz()
        )
  }
}
