import { Component, Input, OnInit } from '@angular/core'; 
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { CarouselService } from '../auth/services/carousel.service';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImage[] = []
  @Input() indicators = true
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 6000;

  selectedIndex = 0; 
  num: number = 0;
  nombreJuego: string='';

  public user$: Observable<any> = this.authSvc.afAuth.user; 


  constructor(private miSrv: CarouselService, private authSvc: AuthService, private router: Router,
    public afAuth: AngularFireAuth){}

  ngOnInit(): void {
    //this.miSrv.mensaje("Hola");
    if(this.autoSlide){
      this.autoSlideImages();
    }   
    this.tipoJuego();
  }

  tipoJuego(){
    if(this.num==0){
      this.nombreJuego="ahorcado"
    }else
    if(this.num==1){
      this.nombreJuego="adivina el numero"
    }else
    if(this.num==2){
      this.nombreJuego="tateti"
    }else
    if(this.num==3){
      this.nombreJuego="piedra papel o tijera"
    }
  }

  autoSlideImages(){
    setInterval(()=>{
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
      this.num=3;
    }else{
      this.selectedIndex--;
      this.num--;
    }  
    this.tipoJuego();
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
      this.num=0;
    }else{
      this.selectedIndex++;
      this.num++;
    } 
    this.tipoJuego();
  }

  validar(){
    this.afAuth.authState.subscribe( user =>{
      //console.log("estado del usuario: ", user);
      //console.log("juego: ",this.num);
      if(!user){
        //console.log("no existe"); 
        this.router.navigate(['/register']);
        return;
      } 
      if(this.num==0){
        this.router.navigate(['/juegos/ahorcado']);
      }else
      if(this.num==1){
        this.router.navigate(['/juegos/adivina']);
      }else
      if(this.num==2){
        this.router.navigate(['/juegos/tateti']);
      }else
      if(this.num==3){
        this.router.navigate(['/juegos/ppt']);
      }
    })
  }
}