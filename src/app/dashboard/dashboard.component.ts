import { Component, OnInit } from '@angular/core';

import { KumiService } from '../kumi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private kumiService: KumiService) { }

  oNas: string = '';
  oferta: string = ''; 
  wyslano: boolean = false;  
  
    
  ngOnInit() {
      
      this.kumiService.getOnas().subscribe(
            res => this.oNas = res[0].static_content
      )
	  
      this.kumiService.getOferta().subscribe(
            res =>  this.oferta = res[0].static_content
      )
      

  }
    
}
