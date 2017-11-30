import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AdvanceService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';
  constructor(private http: HttpClient) { }

  loadAdvance() {
    return this.http.get('http://10.10.27.36:8181/adv/v1/advance/18813/search');
  }

}
