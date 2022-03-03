import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Users } from 'src/app/user.modal';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss'],
})
export class IssueDetailsComponent implements OnInit {
  details: any = '';
  allDetails: any = '';
  activatedRoute: any;
  issueId: any;
  lead: any;
  alldata: Users = new Users();
  searchtext: any = '';
  taskForm!: FormGroup;
  submitted = false;
  selectedData: any;

  data: any[] = [];

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      pname: ['', [Validators.required]],
      id: ['', [Validators.required]],
      tName: ['', [Validators.required]],
      status: ['', [Validators.required]],
      tdetails: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });

    this.details = localStorage.getItem('prince');
    this.allDetails = JSON.parse(this.details);

    this.issueId = this.route.snapshot.params['id'];
    console.log(this.issueId, 'yerey732741858');

    this.allDetails.filter((e: any) => {
      if (e.id == this.issueId) {
        this.alldata = e;
        console.log(this.alldata);
      }
    });

    this.selectedData = this.alldata;

    this.data = JSON.parse(JSON.stringify(this.alldata.project));
  }

  get taskFormControl() {
    return this.taskForm.controls;
  }

  addTask() {
    this.submitted = true;
    if (this.taskForm.valid) {
      console.table(this.taskForm.value);
      let task = this.taskForm.value;
      let project = {
        pname: this.taskForm.get('pname')?.value,
        task: [task],
      };

      let nTask = false;

      for (let i = 0; i < this.alldata.project.length; i++) {
        let e = this.alldata.project[i];
        if (e.pname == this.taskForm.value.pname) {
          e.task?.push(task);
          nTask = true;
        }
      }

      if (!nTask) {
        this.alldata.project.push(project);
      }
      // for (let i = 0; i < this.allDetails.project.length; i++) {
      //   let e = this.alldata.project[i];
      //   if (e.pname == this.taskForm.value.pname) {
      //     e.project?.push(project);
      //     nTask = true;
      //   }
      // }

      localStorage.setItem('prince', JSON.stringify(this.allDetails));

      console.log(this.alldata.project);
    }
  }
  result: any;
  onSelectChange(e: any) {
    // let i:any
    this.data = JSON.parse(JSON.stringify(this.alldata.project));
    let prince = e.target.value;

    if (prince != 'all') {
      let d: any[] = this.data;

      d.forEach((pr: any) => {
        let ta: any[] = [];
        pr.task.forEach((t: any) => {
          if (t.priority === prince) {
            // d.push(pr);
            ta.push(t);
            console.log(t);
          }
        });
        pr.task = ta;
      });
      this.data = d;
    }
  }
}
