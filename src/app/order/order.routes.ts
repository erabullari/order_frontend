import {Routes} from '@angular/router';
import {OrderListComponent} from "./order-list/order-list.component";
import {OrderFormComponent} from "./order-form/order-form.component";

export const ORDER_ROUTES: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
  {
    path: 'form',
    component: OrderFormComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
];
