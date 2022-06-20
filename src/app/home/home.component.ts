import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

}
