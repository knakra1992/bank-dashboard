import { Injectable } from '@angular/core';
import { Bank } from './models/bank';

@Injectable({
  providedIn: 'root'
})
export class BankInfoService {
  bankInfo: Bank[] = [{
    branchName: "Bank Branch 1",
    bank: "Bank Name 1",
    ifscCode: "IFSC0001",
    state: "MI",
    district: "FH"
  }, {
    branchName: "Bank Branch 2",
    bank: "Bank Name 2",
    ifscCode: "IFSC0002",
    state: "DTW",
    district: "DD"
  }, {
    branchName: "Bank Branch 3",
    bank: "Bank Name 3",
    ifscCode: "IFSC0003",
    state: "NN",
    district: "HU"
  }, {
    branchName: "Bank Branch 4",
    bank: "Bank Name 4",
    ifscCode: "IFSC0004",
    state: "MI",
    district: "FH"
  }, {
    branchName: "Bank Branch 5",
    bank: "Bank Name 5",
    ifscCode: "IFSC0005",
    state: "DT",
    district: "DFD"
  }, {
    branchName: "Bank Branch 6",
    bank: "Bank Name 6",
    ifscCode: "IFSC0006",
    state: "NNS",
    district: "HSU"
  }]
  constructor() { }

  public GetBankInfo(): Bank[]{
    return this.bankInfo;
  }
}
