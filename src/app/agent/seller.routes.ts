import { Routes } from '@angular/router';
import { SellerListComponent } from './seller/seller.component';
import {ShitesDetailComponent} from "./app-shites-detail/app-shites-detail.component";

export const SELLER_ROUTES: Routes = [
  { path: '', component: SellerListComponent },
  { path: 'add', component: ShitesDetailComponent },
  { path: 'edit/:id', component: ShitesDetailComponent },

];
