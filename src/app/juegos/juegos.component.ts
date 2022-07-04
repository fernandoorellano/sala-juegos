import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActualizaPuntajeService } from '../auth/services/actualiza-puntaje.service';
import { AgregarListadoService } from '../auth/services/agregar-listado.service';
import { AuthService } from '../auth/services/auth.service';
import { PuntajeService } from '../auth/services/puntaje.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  
  constructor(private authSvc: AuthService, private router: Router) { } 

  // validar(){
  //   this.authSvc.aux=true;
  //   console.log("te suscribiste");
  //    this.router.navigate(['/home']);
  // }

  // validar2(){
  //   this.authSvc.aux=false;
  //   console.log("Cansaekase");
  //   this.router.navigate(['/home']);
  // }

  ngOnInit(): void {}
  
}
