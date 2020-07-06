import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { BankInfoService } from '../bank-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BankInfoService]
})
export class DashboardComponent implements OnInit {
  bankInfo: Bank[];
  constructor(private bankSvc: BankInfoService) { }

  ngOnInit() {
    this.bankInfo = this.bankSvc.GetBankInfo();
  }

  nextPage(){
    alert('Next Clicked');
  }

  backPage(){
    alert('Back Clicked');
  }

  deleteRow(index: number){
    this.bankInfo.splice(index, 1);
  }

}
