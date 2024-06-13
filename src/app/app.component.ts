import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {SellerListComponent} from "./agent/seller/seller.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SellerListComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
}
