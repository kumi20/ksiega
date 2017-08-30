import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker'; // do ustawiania opcji data pickera
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KsiegaService } from '../ksiega.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-przychod',
  templateUrl: './add-przychod.component.html',
  styleUrls: ['./add-przychod.component.css']
})
export class AddPrzychodComponent implements OnInit {

  addPrzychod;
  odbiorcy;	
  idPrzychodu;

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
	  this.route.params.subscribe(params => this.idPrzychodu = params['id']);
	  
	  this.addPrzychod = new FormGroup(
	  	{
			miesiac: new FormControl("", Validators.required),
			rok: new FormControl("", Validators.required),
			dataZdarzenia: new FormControl("", Validators.required),
			numerDowodu: new FormControl("", Validators.required),
			opis: new FormControl("",Validators.required),
			danekontrahenta: new FormControl("--wybierz--",Validators.required),
			wartoscSprzedanych: new FormControl(""),
			pozostalePrzychody: new FormControl(""),
			uwagi: new FormControl("")
		}
	  );
	  
	  const currentDate = new Date();
	  let miesiac;
	  let pom = currentDate.getMonth();
	  pom++;
	  if (currentDate.getMonth() < 10 ) miesiac = '0'+pom;
	  else miesiac = pom;
	  
	  this.addPrzychod.controls['rok'].setValue(currentDate.getFullYear());
	  this.addPrzychod.controls['miesiac'].setValue(miesiac);
	  this.addPrzychod.controls['danekontrahenta'].setValue("");
	  
	  this.ksiegaService.getOdbiorcy().subscribe(
	  		response => this.odbiorcy = response
	  )
	  
	  
	  if (this.idPrzychodu != null){
		  	  this.ksiegaService.getPrzychod(this.idPrzychodu).subscribe(
	  			response => {
				let dataZd = response[0].data_zd.split('-');
				if (dataZd[1] < 10) dataZd[1] = dataZd[1].substr(1,1);
				if (dataZd[2] < 10) dataZd[2] = dataZd[2].substr(1,1);
				this.addPrzychod.controls['miesiac'].setValue(response[0].miesiac);
				this.addPrzychod.controls['rok'].setValue(response[0].rok);
				this.addPrzychod.controls['dataZdarzenia'].setValue({date: {year: dataZd[0], month: dataZd[1], day: dataZd[2]}});
				this.addPrzychod.controls['numerDowodu'].setValue(response[0].nr_dow);
				this.addPrzychod.controls['opis'].setValue(response[0].opis_zdarzenia);
				this.addPrzychod.controls['danekontrahenta'].setValue(response[0].id_kont);
				this.addPrzychod.controls['wartoscSprzedanych'].setValue(response[0].przych);
				this.addPrzychod.controls['pozostalePrzychody'].setValue(response[0].pozostale_przychody);
				this.addPrzychod.controls['uwagi'].setValue(response[0].uwagi);
			}
	  	)
	  }
	  else this.idPrzychodu = 0;

	  
  }

  back(){
	  history.back();
  }
	
  zapisz(dateControl){
	  this.ksiegaService.savePrzychod(dateControl, this.idPrzychodu).subscribe(
	  	response => history.back()
	  )
  }
	
  usun(){
	  this.ksiegaService.deletePrzychod(this.idPrzychodu).subscribe(
	  	response => this._route.navigate(['ksiega'])
	  )
  }
}
