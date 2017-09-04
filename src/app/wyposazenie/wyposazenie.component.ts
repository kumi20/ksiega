import { Component, OnInit } from '@angular/core';
import { KsiegaService } from '../ksiega.service';

@Component({
  selector: 'app-wyposazenie',
  templateUrl: './wyposazenie.component.html',
  styleUrls: ['./wyposazenie.component.css']
})
export class WyposazenieComponent implements OnInit {

  wyposazenie;
  
  constructor(private ksiegaService: KsiegaService) { }

  ngOnInit() {
      this.ksiegaService.getWyposazenie().subscribe(
          res => this.wyposazenie = res
      )
  }

}
