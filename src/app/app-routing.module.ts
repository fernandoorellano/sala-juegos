import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AdivinaComponent } from './juegos/adivina/adivina.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { JuegosComponent } from './juegos/juegos.component';
import { PptComponent } from './juegos/ppt/ppt.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';

const routes: Routes = [
  {path:"", redirectTo:'/home',pathMatch: 'full'},
  {path: 'quiensoy', component: QuiensoyComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),},
  {path: 'login',loadChildren: () => import('./auth/login/login.module').then((m) => m.LoginModule),},
  {path: 'register',loadChildren: () => import('./auth/register/register.module').then((m) => m.RegisterModule),},
  { path: 'juegos', component: JuegosComponent,
  children: [
    { path: 'ppt', component: PptComponent },
    { path: 'tateti', component: TatetiComponent },
    { path: 'adivina', component: AdivinaComponent },
    { path: 'ahorcado', component: AhorcadoComponent },
  ] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
