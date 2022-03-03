import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

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
  alldata: any;
  searchtext: any = '';
  taskForm!: FormGroup;
  submitted = false;
  selectedData: any;

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
      // if( this.alldata.project.pname == this.taskForm.value.pname ){
      //     this.alldata.project.task.push(task)
      // }else{
      //   this.alldata.project.push(project);
      // }
      // this.alldata.project.map((e:Task)=>{return e})

      // this.alldata.project.filter((e:any)=>{
      //   if(e.pname == this.taskForm.value.pname){
      //     e.task.push(task);

      //   }else{
      //     this.alldata.project.push(project);
      //   }
      // });

      // let pr = this.alldata.project.filter(
      //   (e: any) => e.pname == this.taskForm.value.pname
      // );

      let nTask = false;
      for (let i = 0; i < this.alldata.project.length; i++) {
        let e = this.alldata.project[i];
        if (e.pname == this.taskForm.value.pname) {
          e.task.push(task);
          nTask = true;
        }
      }

      if (!nTask) {
        this.alldata.project.push(project);
      }

      localStorage.setItem('prince', JSON.stringify(this.allDetails));

      console.log(this.alldata.project);
    }
  }

  onSelectChange(e: any) {
    console.log(e.target.value);
    // let pr = (this.selectedData = this.alldata.filter(
    //   (e.value))
    // let pr:any = this.alldata.project[0].filter(e.priority);
    // console.log(pr);
    
  }
}
