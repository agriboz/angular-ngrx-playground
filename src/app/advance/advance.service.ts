import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdvanceService {
  constructor(private http: HttpClient) { }

  loadAdvance(employeeId) {
    return this.http.get(`http://10.10.27.36:8181/adv/v1/advance/${employeeId}/search`);
  }

}
