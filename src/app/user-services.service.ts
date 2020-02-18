import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Result, RootObject } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpClient: HttpClient) { }

  getUser(userId: string){
    return this.httpClient.get(URL+"?id.value="+userId);
  }

  getUsers():Observable<RootObject>{
    return this.httpClient.get<RootObject>(URL);
  }
  getUse(){
    return this.httpClient.get(URL);
  }
}

const URL = "http://localhost:3000/results";
