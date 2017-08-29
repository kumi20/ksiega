import { Component, OnInit } from '@angular/core';

import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-kontrahenci',
  templateUrl: './kontrahenci.component.html',
  styleUrls: ['./kontrahenci.component.css']
})
export class KontrahenciComponent implements OnInit {
		
	kontrahenci;
    p;
  constructor(private ksiegaService: KsiegaService) { }

  ngOnInit() {
	  this.ksiegaService.getKontrahenci().subscribe(
	  		response => this.kontrahenci = response 
	  )
  }

}
