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
import { ZusComponent } from './zus/zus.component';
import { AddZusComponent } from './add-zus/add-zus.component';
import { WyposazenieComponent } from './wyposazenie/wyposazenie.component'


/// ROUTING
const routesConfig: Routes = [
	{path: '', component: DashboardComponent,},
	{path: 'login', component: LoginComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'ksiega', component: KsiegaComponent, canActivate: [AuthGuard]},
	{path: 'ksiega/1/:id', component: AddPrzychodComponent, canActivate: [AuthGuard]},
	{path: 'ksiega/0/:id', component: AddRozchodComponent, canActivate: [AuthGuard]},
	{path: 'addP', component: AddPrzychodComponent, canActivate: [AuthGuard]},
	{path: 'addR', component: AddRozchodComponent, canActivate: [AuthGuard]},
	{path: 'kontrahenci', component: KontrahenciComponent, canActivate: [AuthGuard]},
  {path: 'addKontrahenci', component: AddKontrahenciComponent, canActivate: [AuthGuard]},
  {path: 'kontrahenci/:id', component: AddKontrahenciComponent, canActivate: [AuthGuard]},
  {path: 'dochodowy', component: DochodowyComponent, canActivate: [AuthGuard]},
  {path: 'zus', component: ZusComponent, canActivate: [AuthGuard]},
  {path: 'addZus', component: AddZusComponent, canActivate: [AuthGuard]},
  {path: 'wyposazenie', component: WyposazenieComponent},
]

export const routerModule = RouterModule.forRoot(routesConfig, {
    enableTracing: false,
    useHash: true,
})