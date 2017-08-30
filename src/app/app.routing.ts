import { RouterModule, Routes, CanActivate} from '@angular/router';
import { KsiegaComponent } from './ksiega/ksiega.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPrzychodComponent } from './add-przychod/add-przychod.component';
import { AddRozchodComponent } from './add-rozchod/add-rozchod.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { KontrahenciComponent } from './kontrahenci/kontrahenci.component';
import { AddKontrahenciComponent } from './add-kontrahenci/add-kontrahenci.component';
import { DochodowyComponent } from './dochodowy/dochodowy.component';


/// ROUTING
const routesConfig: Routes = [
	{path: '', component: DashboardComponent,},
	{path: 'login', component: LoginComponent},
	{path: 'dashboard', component: DashboardComponent,  },
	{path: 'ksiega', component: KsiegaComponent, },
	{path: 'ksiega/1/:id', component: AddPrzychodComponent, },
	{path: 'ksiega/0/:id', component: AddRozchodComponent, },
	{path: 'addP', component: AddPrzychodComponent,},
	{path: 'addR', component: AddRozchodComponent},
	{path: 'kontrahenci', component: KontrahenciComponent},
  {path: 'addKontrahenci', component: AddKontrahenciComponent},
  {path: 'kontrahenci/:id', component: AddKontrahenciComponent},
  {path: 'dochodowy', component: DochodowyComponent},
  
]

export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false,
    useHash: true,
})