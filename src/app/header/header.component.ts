import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthrorizationService } from '../auth/authrorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthorized: boolean;

  constructor(public _authSvc: AuthrorizationService) { }

  ngOnInit() {
  }

  logout(){
    this._authSvc.logout();
  }

}
