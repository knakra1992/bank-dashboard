import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cities } from 'src/app/models/cities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private _httpClient: HttpClient) { }

  public getCitiesByState$(stateCode: string): Observable<Array<Cities>>{
    return this._httpClient.get<Array<Cities>>(`${environment.baseUrl}/states/${stateCode}/cities`);
  }
}
