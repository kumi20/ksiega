import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerModule} from './app.routing';
import { Router, CanActivate } from '@angular/router';

import { Ng2PaginationModule } from 'ng2-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { MyDatePickerModule } from 'mydatepicker';

import { Angular2SocialLoginModule } from "angular2-social-login";

import { KsiegaService } from './ksiega.service';
import { KumiService } from './kumi.service';

import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { KsiegaComponent } from './ksiega/ksiega.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPrzychodComponent } from './add-przychod/add-przychod.component';
import { AddRozchodComponent } from './add-rozchod/add-rozchod.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { KontrahenciComponent } from './kontrahenci/kontrahenci.component';
import { AddKontrahenciComponent } from './add-kontrahenci/add-kontrahenci.component';
import { MailComponent } from './mail/mail.component';
import { DochodowyComponent } from './dochodowy/dochodowy.component';
import { ZusComponent } from './zus/zus.component';
import { AddZusComponent } from './add-zus/add-zus.component';
import { WyposazenieComponent } from './wyposazenie/wyposazenie.component';


let providers = {
   // "google": {
   //   "clientId": "rare-sound-168810"
   // },
   // "linkedin": {
   //   "clientId": "LINKEDIN_CLIENT_ID"
  //  },
    "facebook": {
      "clientId": "128072974397769",
      "apiVersion": "v2.8" //like v2.4 
    }
  };

@NgModule({
  declarations: [
    AppComponent,
    KsiegaComponent,
    DashboardComponent,
    AddPrzychodComponent,
    AddRozchodComponent,
    NavbarComponent,
	  LoginComponent,
    KontrahenciComponent,
    AddKontrahenciComponent,
    MailComponent,
    DochodowyComponent,
    ZusComponent,
    AddZusComponent,
    WyposazenieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Ng2PaginationModule,
    HttpModule,
    routerModule,
    MyDatePickerModule,
    FormsModule,
    Angular2SocialLoginModule,
    
  ],
  providers: [
	  KsiegaService,
      KumiService,
	  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);