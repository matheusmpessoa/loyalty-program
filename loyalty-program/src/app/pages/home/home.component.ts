import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userData!: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userData = this.authService.user;
  }

}
