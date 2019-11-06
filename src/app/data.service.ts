import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModal } from './DataModal';

@Injectable()
export class DataService{
    private _url:string="http://jsonplaceholder.typicode.com/posts";
    
    
    
    constructor(private _http: HttpClient)
  {
  }
  getData():Observable<any>
  {

    return this._http.get(this._url);
              
  }
}