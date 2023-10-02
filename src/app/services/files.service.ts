import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveServices, ServiceModel } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }


  public getServiceModel(filePath: string): Observable<ServiceModel> {
    return this.http.get<ServiceModel>(filePath);
  }

  public getActiveServices(filePath: string): Observable<ActiveServices> {
    return this.http.get<ActiveServices>(filePath);
  }
  
}
