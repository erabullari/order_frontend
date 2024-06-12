import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-shites-detail',
  templateUrl: './app-shites-detail.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule
  ],
  styleUrls: ['./app-shites-detail.component.css']
})
export class ShitesDetailComponent implements OnInit {
  formGroup: FormGroup;
  formGroupAdd: FormGroup;
  titleAlert: string = 'This field is required';
  passwordAlert: string = 'This field is required';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ShitesDetailComponent>

  ) {
    this.formGroup = this.formBuilder.group({}); // Initialize with an empty group
    this.formGroupAdd = this.formBuilder.group({}); // Initialize with an empty group
  }


  ngOnInit(): void {
    if (this.data.action === 'edit') {
      this.createForm();
    } else {
      this.createNewForm();
    }
  }

  createForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.formGroup = this.formBuilder.group({
      email: [
        this.data.user.email,
        [Validators.required, Validators.pattern(emailregex)],
      ],
      name: [this.data.user.username, Validators.required],
      first: [this.data.user.first_name, Validators.required],
      last: [this.data.user.last_name, Validators.required],
      isActive: [this.data.user.is_active],
    });
  }

  createNewForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.formGroupAdd = this.formBuilder.group({
      new_email: [null, [Validators.required, Validators.pattern(emailregex)]],
      new_name: ['', Validators.required],
      new_first: ['', Validators.required],
      new_last: ['', Validators.required],
      new_pass: [null, [Validators.required, this.checkPassword]],
    });
  }

  checkPassword(control: any) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  addNewUser(): void {
    if (this.formGroupAdd.valid) {
      // Handle user addition
      console.log(this.formGroupAdd.value);
      this.dialogRef.close();
    }
  }

  save(): void {
    if (this.formGroup.valid) {
      // Handle user update
      console.log(this.formGroup.value);
      this.dialogRef.close();
    }
  }

//   getErrorPassword() {
//     const passwordControl = this.formGroupAdd.get('new_pass');
//     return passwordControl.hasError('required')
//       ? 'Field is required (at least eight characters, one uppercase letter and one number)'
//       : passwordControl.hasError('requirements')
//         ? 'Password needs to be at least eight characters, one uppercase letter and one number'
//         : '';
//   }
//
//   getErrorEmail() {
//     const emailControl = this.formGroupAdd.get('new_email');
//     return emailControl.hasError('required')
//       ? 'Field is required'
//       : emailControl.hasError('pattern')
//         ? 'Not a valid email address'
//         : '';
//   }
  protected readonly name = name;
}
