import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BasedatosService } from '../services/basedatos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService],
})
export class RegisterComponent implements OnInit {

 usuarios: any;
  usuario = {
    email: '',
    pass: '',
    nombre: '',
    tipoUser: 'normal'
  }

  ngOnInit() {
    this.database.obtenerTodos("users").subscribe((usuariosRef) => { 
      this.usuarios = usuariosRef.map(userRef => {
        let usuario: any = userRef.payload.doc.data();
        usuario['id'] = userRef.payload.doc.id;
        return usuario;
      }); 
    })
  }

  constructor(private authSvc: AuthService, private database: BasedatosService, private router: Router) { }


  onRegister(){
    const { email, pass } = this.usuario;
    this.authSvc.register(email, pass).then(user => { 
      let lista = [...this.usuarios];
      let existe = lista.find(user => user.email == email);

      if (!existe) { 
        this.database.crear('users', this.usuario);
      };

      this.router.navigate(['/home']);
    }).catch(err => {
      console.log(err)
    })
  }
}
