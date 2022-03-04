import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Users } from '../user.modal';
import { Project } from '../project.modal';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss'],
})
export class IssueListComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  userdetails: any;
  allUserDetails: Users[] = [];

  constructor(private routes: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    // localStorage.setItem('prince', JSON.stringify(this.users));
    this.userdetails = localStorage.getItem('prince');
    this.allUserDetails = JSON.parse(this.userdetails);

    this.registerForm = this.fb.group({
      eName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      id: ['', [Validators.required]],
      desg: ['', [Validators.required]],
      wLocation: ['', [Validators.required]],
    });
  }
  searchtext: any = '';

  issuedata(id: number) {
    this.routes.navigateByUrl('users/' + id);
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  addUser() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.table(this.registerForm.value);
      let user: Users = this.registerForm.value;
      user.project = [];
      this.allUserDetails.push(user);
      localStorage.setItem('prince', JSON.stringify(this.allUserDetails));

      console.log(this.allUserDetails);
    }
  }
}
