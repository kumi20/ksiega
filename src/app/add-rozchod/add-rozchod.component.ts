import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker'; // do ustawiania opcji data pickera
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-rozchod',
  templateUrl: './add-rozchod.component.html',
  styleUrls: ['./add-rozchod.component.css']
})
export class AddRozchodComponent implements OnInit {

	addRozchod;
	odbiorcy;
	idRozchodu;
	
	public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd',
        monthLabels: {
            1:'Sty',
            2:'Lut',
            3:'Mar',
            4:'Kwi',
            5:'Maj',
            6:'Cze',
            7:'Lip',
            8:'Sie',
            9:'Wrz',
            10:'Paź',
            11:'Lis',
            12:'Gru'
        },
        todayBtnTxt: 'Dzisiaj',
        dayLabels:{
            su: 'niedz.',
            mo: 'pon.',
            tu: 'wt.',
            we: 'śr.',
            th: 'czw.',
            fr: 'pt.',
            sa: 'sob.', 
        },
    };
	
  constructor( private ksiegaService: KsiegaService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
	  
	  this.route.params.subscribe(params => this.idRozchodu = params['id']);
	  
	  this.addRozchod = new FormGroup(
	  	{
		  	miesiac: new FormControl("", Validators.required),
			rok: new FormControl("", Validators.required),
			dataZdarzenia: new FormControl("", Validators.required),
			numerDowodu: new FormControl("", Validators.required),
			opis: new FormControl("",Validators.required),
			danekontrahenta: new FormControl("--wybierz--",Validators.required),
			zakupTowarow: new FormControl(""),
			wynagrodzenieGotowka: new FormControl(""),
			kosztyUboczne: new FormControl(""),
			pozostaleWydatki: new FormControl(""),
			uwagi: new FormControl("")
	  	}
	  )
	  
	  const currentDate = new Date();
	  let miesiac;
	  let pom = currentDate.getMonth();
	  pom++;
	  if (currentDate.getMonth() < 10 ) miesiac = '0'+pom;
	  else miesiac = pom;
	  
	  this.addRozchod.controls['rok'].setValue(currentDate.getFullYear());
	  this.addRozchod.controls['miesiac'].setValue(miesiac);
	  this.addRozchod.controls['danekontrahenta'].setValue("");
	  
	  this.ksiegaService.getDostawcy().subscribe(
	  		response => this.odbiorcy = response
	  )
	  
	  if(this.idRozchodu != null){
		  this.ksiegaService.getRozchod(this.idRozchodu).subscribe(
		  		response =>{
					console.log(response);
					let dataZd = response[0].data_zd.split('-');
					if (dataZd[1] < 10) dataZd[1] = dataZd[1].substr(1,1);
					if (dataZd[2] < 10) dataZd[2] = dataZd[2].substr(1,1);
					this.addRozchod.controls['miesiac'].setValue(response[0].miesiac);
					this.addRozchod.controls['rok'].setValue(response[0].rok);
					this.addRozchod.controls['dataZdarzenia'].setValue({date: {year: dataZd[0], month: dataZd[1], day: dataZd[2]}});
					this.addRozchod.controls['numerDowodu'].setValue(response[0].nr_dow);
					this.addRozchod.controls['opis'].setValue(response[0].opis_zdarzenia);
					this.addRozchod.controls['danekontrahenta'].setValue(response[0].id_kont);
					this.addRozchod.controls['zakupTowarow'].setValue(response[0].zakup_towarow);
					this.addRozchod.controls['wynagrodzenieGotowka'].setValue(response[0].wynagrodzenie_gotowka);
					this.addRozchod.controls['kosztyUboczne'].setValue(response[0].koszty_uboczne);
					this.addRozchod.controls['pozostaleWydatki'].setValue(response[0].pozostale_wydatki);
					this.addRozchod.controls['uwagi'].setValue(response[0].uwagi);
				}
		  )
	  }
	  else this.idRozchodu = 0;
  }
	
  powrot(){
	  history.back();
  }	
	
	zapisz(dateControl){
		this.ksiegaService.saveRozchod(dateControl, this.idRozchodu).subscribe(
			response => this._route.navigateByUrl('/ksiega')
		)
	}
	
  usun(){
	  this.ksiegaService.deletePrzychod(this.idRozchodu).subscribe(
	  		response => this._route.navigateByUrl('/ksiega')
	  )
  }

}
