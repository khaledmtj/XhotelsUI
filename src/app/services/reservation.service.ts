import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  customerData: any;
  customerId: number | null = -1;
  reservationDetails: any;
  apiURL: string = 'https://localhost:7064';
  finalReservation: any;

  constructor(private http: HttpClient) { }

  public addCustomerData(data: any) {
    this.customerData = data;
    const url = `${this.apiURL}/api/customer`;
    return this.http.post<number>(url, this.customerData).pipe(
      map(resp => {
        this.customerId = resp;
        return resp;
      })
    );
  }

  public getAllRoomTypes() {
    const url = `${this.apiURL}/api/roomType`;
    return this.http.get<any>(url).pipe(
      map(resp => {
        return resp;
      })
    );
  }

  public AddReservation(reservationDetails: any) {
    const url = `${this.apiURL}/api/reservation`;
    if (this.customerId == null || this.customerId == undefined || this.customerId <= 0) {
      window.alert('Cannot make reservation, since customer information was not provided')
      return;
    }
    reservationDetails.customerId = this.customerId
    return this.http.post<any>(url, reservationDetails).pipe(
      map(res => {
        this.finalReservation = res;
        return res;
      }),
      catchError(err => {
        window.alert(err.error);
        return of();
      })
    )
  }

  public getFinalReservation() {
    return this.finalReservation;
  }
}
