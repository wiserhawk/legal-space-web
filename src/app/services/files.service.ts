import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveBlogs, BlogModel } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }


  public getBlogModel(filePath: string): Observable<BlogModel> {
    return this.http.get<BlogModel>(filePath);
  }

  public getActiveBlogs(filePath: string): Observable<ActiveBlogs> {
    return this.http.get<ActiveBlogs>(filePath);
  }
  
}
