import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatesService } from '../services/states.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { States } from 'src/app/models/states';
import { Bank } from 'src/app/models/bank';
import { CitiesService } from '../services/cities.service';
import { Cities } from 'src/app/models/cities';
import { BankInfoService } from 'src/app/bank-info.service';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit, OnDestroy {
  states$: Observable<Array<States>>;
  subscriptions: Subscription = new Subscription();
  bankDetails: Bank = new Bank();
  cities: Array<Cities>;
  banks$: Observable<Array<Bank>>;

  constructor(
    private statesService: StatesService, 
    private _citiesService: CitiesService, 
    private bankSvc: BankInfoService,
    private bsRefModal: BsModalRef) { }

  ngOnInit() {
    this.states$ = this.statesService.getStates$$();
    this.banks$ = this.bankSvc.GetBanksList$();
  }

  stateChanged(){
    this.subscriptions.add(this._citiesService.getCitiesByState$(this.bankDetails.state)
    .subscribe(x => {
      this.cities = x;
    }));
  }

  saveDetails(){
    this.subscriptions.add(this.bankSvc.SaveBankDetails(this.bankDetails)
    .subscribe(() => {
      this.bsRefModal.hide();
    }))
  }

  cancel(){
    this.bsRefModal.hide();
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
