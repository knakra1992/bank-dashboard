import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { States } from 'src/app/models/states';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  
  constructor(private _httpClient: HttpClient) { }

  getStates$$(): Observable<Array<States>>{
    return this._httpClient.get<Array<States>>(`${environment.baseUrl}/states`);
  }
}
