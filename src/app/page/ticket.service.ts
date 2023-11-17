import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.post('https://ucyzdq75xj.execute-api.us-east-2.amazonaws.com/scores/event',{
      filters: {
      start_data: "2022-12-30T00:00:00.378Z",
      end_data: "2022-12-30T07:50:00.378Z",
      plate: "CAC 8027"
    }})
  }
  plates(){
    return this.http.get('https://ucyzdq75xj.execute-api.us-east-2.amazonaws.com/scores/plate')
  }
}
