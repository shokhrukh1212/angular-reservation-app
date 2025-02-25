import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'new',
    component: ReservationFormComponent,
  },
  {
    path: 'list',
    component: ReservationListComponent,
  },
  {
    path: 'edit/:id',
    component: ReservationFormComponent,
  },
];
