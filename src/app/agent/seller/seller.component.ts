import {Component, OnInit} from "@angular/core";
import {AgentService} from "../agent.service";
import {first} from "rxjs";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {MatButton} from "@angular/material/button";

export interface User {
  isDeleting: boolean;
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller.component.html',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    MatTableModule,
    MatButton,
    RouterOutlet
  ],
  styleUrls: ['./seller.component.css']
})

export class SellerListComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['username', 'email', 'first_name', 'last_name', 'actions'];
  dataSource = new MatTableDataSource<User>();

  constructor(private userService: AgentService) {}

  ngOnInit() {
    this.userService.getAllUsers()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
        this.dataSource.data = this.users; // Update the dataSource with the fetched users
      });
  }

  deleteUser(id: number) {
    const user = this.users.find(x => x.id === id);
    if (!user) return;
    user.isDeleting = true;
    this.userService.deleteUser(id)
      .pipe(first())
      .subscribe(() => {
        this.users = this.users.filter(x => x.id !== id);
        this.dataSource.data = this.users; // Update the dataSource after deletion
      });
  }
}
