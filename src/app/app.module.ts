import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { NavbarComponent } from './shared/navbar/navbar.component';

import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { QuiensoyComponent } from './quiensoy/quiensoy.component';
import { PptComponent } from './juegos/ppt/ppt.component'; 
import { JuegosComponent } from './juegos/juegos.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { AdivinaComponent } from './juegos/adivina/adivina.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';  
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';
import { ChatComponent } from './chat/chat.component'; 
import { AuthService } from './auth/services/auth.service';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';   
import { CarouselModule } from './carousel/carousel.module'; 
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';

import { ListadoComponent } from './listado/listado.component'; 
import { AgregarModule } from './listado/agregar/agregar.module';
import { ListaModule } from './listado/lista/lista.module';
import { MijuegoComponent } from './juegos/mijuego/mijuego.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuiensoyComponent,
    PptComponent, 
    JuegosComponent, 
    TatetiComponent, 
    AdivinaComponent, 
    AhorcadoComponent, 
    ChatComponent,  
    ListadoComponent, MijuegoComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    LoginModule,
    RegisterModule,
    CarouselModule,
    ListaModule,
    AgregarModule
  ],
  providers: [AuthService,
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
