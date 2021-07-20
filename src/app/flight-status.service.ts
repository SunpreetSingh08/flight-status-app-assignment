import { Injectable } from '@angular/core';
import { Status} from './model/status';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class FlightStatusService { 
 
constructor(private http: HttpClient) { 
}  
  
allStatusDetails(baseUrl:string,token:string): Observable<any> {  
  const today = moment().utc().format().toString();
  const tomorrow = moment().utc().add(1, 'days').format().toString();
  const pageSize = 0;
  const pageNumber = 3;
  const url = `${baseUrl}&pageSize=${pageSize}&pageNumber=${pageNumber}&carrierCode=KL&startRange=${today}&endRange=${tomorrow}`;
  const headers = {
     Accept: 'application/hal+json;version=com.afkl.operationalflight.v3',
    'api-key': token,
    };
  return this.http.get<any>(url,{headers:headers});
  }
}


