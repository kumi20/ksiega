import { Component, OnInit } from '@angular/core';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-pojazd',
  templateUrl: './pojazd.component.html',
  styleUrls: ['./pojazd.component.css']
})
export class PojazdComponent implements OnInit {

  pojazdy;
  constructor(private ksiegaService: KsiegaService) { }

  ngOnInit() {
      this.ksiegaService.getPojazd().subscribe(
          response => this.pojazdy = response
      )
  }

}
