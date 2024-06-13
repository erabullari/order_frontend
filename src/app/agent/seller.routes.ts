import { Routes } from '@angular/router';
import { SellerListComponent } from './seller/seller.component';
import {SellerDetailComponent} from "./seller-detail/seller-detail.component";

export const SELLER_ROUTES: Routes = [
  { path: '', component: SellerListComponent },
  {
    path: 'details/:id',
    component: SellerDetailComponent,
    title: 'Home details',
  },
];
