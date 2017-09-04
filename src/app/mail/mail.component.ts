import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { KumiService } from '../kumi.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  emailSend;
  wyslano: boolean = false;    
  emailSendd;
  
  constructor(private kumiService: KumiService) { }

  ngOnInit() {
      this.emailSend = new FormGroup({
          name: new FormControl("", Validators.required),
          email: new FormControl("", Validators.required),
          message: new FormControl("", Validators.required)
      })
      
  }
    
  send(wiadomosc){
      this.wyslano = true;
      this.kumiService.sendMail(wiadomosc).subscribe(
          res => console.log(wiadomosc)
      )
    
  }

}
