import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AdivinaComponent } from './juegos/adivina/adivina.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PptComponent } from './juegos/ppt/ppt.component';
import { TatetiComponent } from './juegos/tateti/tateti.component'; 
import { QuiensoyComponent } from './quiensoy/quiensoy.component'; 
import { ListadoComponent } from './listado/listado.component';
import { MijuegoComponent } from './juegos/mijuego/mijuego.component';
import { GuardGuard } from './guards/guard.guard';
import { SilverGuard } from './guards/silver.guard';
import { PremiumGuard } from './guards/premium.guard';


const routes: Routes = [
  {path:"", redirectTo:'/home',pathMatch: 'full'},
  {path: 'quiensoy', component: QuiensoyComponent},
  {path: 'listado', component: ListadoComponent, canActivate: [GuardGuard]},
  {path: 'chat', component: ChatComponent},
  {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),},
  {path: 'login',loadChildren: () => import('./auth/login/login.module').then((m) => m.LoginModule),},
  {path: 'register',loadChildren: () => import('./auth/register/register.module').then((m) => m.RegisterModule),},
  { path: 'juegos', component: JuegosComponent,

  children: [
    { path: 'ppt', component: PptComponent,canActivate: [GuardGuard]},
    { path: 'tateti', component: TatetiComponent,canActivate: [GuardGuard]},
    { path: 'adivina', component: AdivinaComponent,canActivate: [SilverGuard]},
    { path: 'ahorcado', component: AhorcadoComponent,canActivate: [PremiumGuard]},
    { path: 'mijuego', component: MijuegoComponent}
  ] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
