import { Component, OnInit } from '@angular/core';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-dowody',
  templateUrl: './dowody.component.html',
  styleUrls: ['./dowody.component.css']
})
export class DowodyComponent implements OnInit {

  year;
  dowody;
  zaksiegowany = false;
  
  constructor(private ksiegaService: KsiegaService) { }

  ngOnInit() {
      let dataToday = new Date();
      this.year = dataToday.getFullYear();
    
      this.ksiegaService.getDowody(this.year).subscribe(
          response => this.dowody = response
      )
  }
  
  pokaz(){
      this.ksiegaService.getDowody(this.year).subscribe(
          response => this.dowody = response
      )
  }
  
  ksieguj(id){
      this.ksiegaService.ksiegujDowod(id).subscribe(
          response => this.zaksiegowany = true
      )
  }

}
