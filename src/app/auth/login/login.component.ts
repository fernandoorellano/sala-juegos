import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { ActualizaPuntajeService } from '../services/actualiza-puntaje.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  miUsuario: Usuario;
  nombreOb:string ='';
  mailOb:string= '';
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private router: Router, public actpunSrv: ActualizaPuntajeService) { 
    this.miUsuario= new Usuario();
  }

  ngOnInit(): void {
  }
  async onLogin(){
    const {email, password, } = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if (user){ 
        this.router.navigate(['/']);
      }
    }catch(error){
      console.log(error);
    }
  }
}
