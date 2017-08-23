import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular2-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  sub: any;
	
  constructor(public _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }
	
  signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      data => {
		  			let userid = data;
		  			console.log(userid['uid']);
		  			localStorage.setItem('FacebookKsiegaToken', userid['uid']);
		  			this._router.navigateByUrl('/');
                  //user data 
                  //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
                }
    	)
  }

	login(){
		localStorage.setItem('FacebookKsiegaToken', "1484923258195547");
		this._router.navigate(['/dashboard']);
	}

}
