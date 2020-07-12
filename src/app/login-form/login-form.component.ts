import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthrorizationService } from '../auth/authrorization.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;

  constructor(public router: Router, private _authSvc: AuthrorizationService) { }

  ngOnInit() {
  }

  authenticate(){
    this._authSvc.login(this.username, this.password);
  }
}
