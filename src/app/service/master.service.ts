import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIResponseModel } from '../components/model/interface/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private _http: HttpClient) {
    
  }

  getDesignations():Observable<IAPIResponseModel>{
      return this._http.get<IAPIResponseModel>("https://nooruddin-md-afsar.com/api/")
    }
}
