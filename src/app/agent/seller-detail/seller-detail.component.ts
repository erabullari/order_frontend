import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AgentService} from "../agent.service";

@Component({
  selector: 'app-seller-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './seller-detail.component.html',
  styleUrl: './seller-detail.component.css'
})
export class SellerDetailComponent implements OnInit {
  userId!: number | null;
  editForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private yourService: AgentService) {
    this.editForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.userId = id !== null ? +id : null;
      if (this.userId !== null) {
        this.getUserDetails(this.userId);
      } else {
        // Handle the error, e.g., navigate to an error page or show a message
      }
    });

  }


  getUserDetails(id: number): void {
    this.yourService.getUserDetails(id).subscribe((data: any) => {
      this.editForm.patchValue({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        // Do not set the password here for security reasons
      });
    });
  }

  onSubmit(): void {
    if (this.editForm.valid && this.userId !== null) {
      this.yourService.updateUserDetails(this.userId, this.editForm.value).subscribe(
        response => {
          console.log('User details updated successfully', response);
          // Optionally, refresh the list or navigate away
        },
        error => {
          console.error('Error updating user details', error);
        }
      );
    }
  }
}

