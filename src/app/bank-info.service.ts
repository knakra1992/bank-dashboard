import { Injectable } from '@angular/core';
import { Bank } from './models/bank';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankInfoService {
  bankInfo: Bank[];

  constructor(private _httpClient: HttpClient) { }

  public GetBankInfo(): Observable<Bank[]>{
    return this._httpClient.get<Bank[]>(`${environment.baseUrl}/banks/details`)
  }

  public DeleteBankDetails(id: number){
    return this._httpClient.delete(`${environment.baseUrl}/banks/${id}`)
  }

  public SaveBankDetails(bankDetails: Bank){
    return this._httpClient.post(`${environment.baseUrl}/banks`, bankDetails, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
  }

  public GetBanksList$(){
    return this._httpClient.get<Array<Bank>>(`${environment.baseUrl}/banks`);
  }
}
