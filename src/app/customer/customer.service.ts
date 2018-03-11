import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs/observable/of";

import { tap, catchError } from "rxjs/operators";
import { ICustomer } from "@app/customer/customer";
import { Observable } from "rxjs/observable";
@Injectable()
export class CustomerService {
  customers: ICustomer[];
  _rootUrl = "https://localhost:44328/api/customers";
  constructor(private httpClient: HttpClient) {}
  GetAllCustomers(): Observable<ICustomer[]> {
    if (this.customers) {
      return of(this.customers);
    }
    return this.httpClient
      .get<ICustomer[]>(`${this._rootUrl}`)
      .pipe(tap((data: ICustomer[]) => (this.customers = data)));
  }

  AddCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.httpClient
      .post<ICustomer>(`${this._rootUrl}`, customer)
      .pipe(tap(data => console.log("createProduct: " + JSON.stringify(data))));
  }

  UpdateCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.httpClient
      .post<ICustomer>(this._rootUrl + `/${customer.id}`, customer)
      .pipe(tap(data => console.log(`${data.name}`)));
  }

  DeleteCustomer(id: number): Observable<void> {
    return this.httpClient.delete<void>(this._rootUrl + `/${id}`);
  }
}
