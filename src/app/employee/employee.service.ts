import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  loadEmployee() {
    return this.http.get('http://10.10.27.36:8181/adv/v1/employee');
  }
}
