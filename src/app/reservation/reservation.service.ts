import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  reservations: Reservation[] = [];
  private api_url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // GET
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.api_url + '/reservations');
  }

  // GET by ID
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.api_url + `/reservations/${id}`);
  }

  // ADD
  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.api_url + '/reservations', reservation);
  }

  // UPDATE
  updateReservation(
    id: string,
    updatedReservation: Reservation
  ): Observable<void> {
    return this.http.put<void>(
      this.api_url + `/reservation/${id}`,
      updatedReservation
    );
  }

  // DELETE
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.api_url + `/reservation/${id}`);
  }
}
