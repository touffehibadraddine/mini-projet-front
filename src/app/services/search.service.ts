import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
    
  get_denomination(sirene: String){
    
   return this.http.get(environment.api+'/get_denomination/'+sirene);
    
  }

}
