import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs';  
//import  'rxjs/add/operator/map'; 
//import 'rxjs/add/operator/do'; 
//import 'rxjs/Rx'; 
import { map, filter, switchMap } from 'rxjs/operators';
  
@Injectable()  
export class CommonService {  
  
  constructor(private http: Http) { }  
  
  saveUser(user){      
    return this.http.post('http://localhost:8282/api/SaveUser/', user)  
            .pipe(map((response: Response) =>response.json()))              
  }  
  
  GetUser(){       
    return this.http.get('http://localhost:8282/api/getUser/')  
            .pipe(map((response: Response) => response.json()))              
  }  
 deleteUser(id){   
    return this.http.post('http://localhost:8282/api/deleteUser/',{'id': id})  
            .pipe(map((response: Response) =>response.json()))               
  }  
  
}  