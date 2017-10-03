import { Component, OnInit } from '@angular/core';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-ksiega',
  templateUrl: './ksiega.component.html',
  styleUrls: ['./ksiega.component.css']
})
export class KsiegaComponent implements OnInit {

  constructor(private ksiegaService: KsiegaService) { }

  kpir;
  month;
  year;
  statystyka;	
	
  ngOnInit() {
	  

	  this.statystyka = '';
	  let dataToday = new Date();
	  let pom = dataToday.getMonth();
	  pom++;
	  
	  if (pom < 10 ) this.month = "0"+pom;
	  else this.month = pom;
	  this.year = dataToday.getFullYear();
	  
	  this.ksiegaService.getKsiega(this.year,this.month).subscribe(
	  		response => this.kpir = response
	  )
	  
	  this.ksiegaService.getStatisticKpir(this.year, this.month).subscribe(
	  		response => {console.log(response);
						 this.statystyka = response;
						}
	  )
  }
	
  pokaz(){
	  this.ksiegaService.getKsiega(this.year,this.month).subscribe(
	  		response => this.kpir = response
	  )
	  
	  this.ksiegaService.getStatisticKpir(this.year, this.month).subscribe(
	  		response => {console.log(response);
						 this.statystyka = response;
						}
	  )
  }	

}
