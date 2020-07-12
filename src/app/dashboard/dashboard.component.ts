import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bank } from 'src/app/models/bank';
import { BankInfoService } from '../bank-info.service';
import { Subscription } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddBankComponent } from '../modals/add-bank/add-bank.component';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [BankInfoService]
})
export class DashboardComponent implements OnInit, OnDestroy {
  bankInfo: Bank[];
  subs: Subscription = new Subscription();
  bsModalRef: BsModalRef;

  constructor(private bankSvc: BankInfoService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getBankDetails();
  }

  getBankDetails(){
    this.subs.add( this.bankSvc.GetBankInfo().subscribe(x => {
      this.bankInfo = x;
    }));
  }

  deleteRow(index: number){
    this.subs.add(this.bankSvc.DeleteBankDetails(index).subscribe(x => {
      this.subs.add(this.bankSvc.GetBankInfo().subscribe(x => this.bankInfo = x));
    }))
  }

  addBankDetails(){
    this.subs.add(this.modalService.onHide.pipe(take(1)).subscribe(() => {
      this.getBankDetails();
    }));

    this.bsModalRef = this.modalService.show(AddBankComponent);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
