import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {NgModule} from "@angular/core";
import {ShitesDetailComponent} from "./agent/app-shites-detail/app-shites-detail.component";


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'agents',
    loadChildren: () => import('./agent/seller.routes').then((m) => m.SELLER_ROUTES)
  },
  {
    path: 'products',
    loadChildren: () => import('./product/product.routes').then((m) => m.PRODUCT_ROUTES)
  },
  {
    path: 'orders',
    loadChildren: () => import('./order/order.routes').then((m) => m.ORDER_ROUTES)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
