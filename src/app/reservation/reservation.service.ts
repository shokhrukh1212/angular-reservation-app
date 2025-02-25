import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  // GET
  getReservations() {
    return this.reservations;
  }

  // GET by ID
  getReservation(id: string) {
    return this.reservations.find((reservation) => reservation.id === id);
  }

  // ADD
  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  // UPDATE
  updateReservation(id: string, updatedReservation: Reservation) {
    const index = this.reservations.findIndex((r) => r.id === id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  // DELETE
  deleteReservation(id: string) {
    const index = this.reservations.findIndex((r) => r.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
