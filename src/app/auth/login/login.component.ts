import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
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
  constructor(private authSvc: AuthService, private router: Router) { 
    this.miUsuario= new Usuario();
  }

  ngOnInit(): void {
  }
  async onLogin(){
    //console.log("form:", this.loginForm.value);
    const {email, password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if (user){ 
        /*
        this.miUsuario.email=this.loginForm.value.email;
        this.miUsuario.password=this.loginForm.value.password;
        console.log("email en login="+this.miUsuario.email);
        console.log("pass en login="+this.miUsuario.password);

        var users = JSON.parse(localStorage.getItem("Usuario") || "[]");
        users.push(this.miUsuario.email, this.miUsuario.password);
        localStorage.setItem("Usuario", JSON.stringify(users)); 
        */
        this.router.navigate(['/home']);
      }
    }catch(error){
      console.log(error);
    }
  }
}
