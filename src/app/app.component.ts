import { Component } from '@angular/core';
import { TaskDetails } from 'src/task.modal';
import { Project } from './project.modal';
import { Users } from './user.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'editor-app';

  users: Users[] = [];
  Mydata: any = '';
  display: boolean = false;

  ngOnInit(): void {
    // let usr:Users = new Users(111,'Prince Kumr','UI Developer Intern','princ@thrymr.net','Lko Office');
    // let project:Project = new Project('Tdis Project');
    // let task:TaskDetails = new TaskDetails()

    this.users = [
      {
        eName: 'Prince Kumar',
        desg: 'UI Developer Intern',
        id: 111,
        email: 'princ@thrymr.net',
        wLocation: 'Lko Office',
        project: [
          {
            pname: 'Tdis Project',
            task: [
              {
                id: 1,
                tName: 'Fix the login error msg',
                status: 'Slected for development',
                tdetails:
                  'When we login with wrong cred throwing two time error msg',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for accounting',
                status: 'Development Complete',
                tdetails:
                  'When we click on save button after that show a table with these field, premium amt, additional cost, other cost, total',
                priority: 'High',
              },
            ],
          },
          {
            pname: 'Edx Hindi',
            task: [
              {
                id: 1,
                tName: 'create a teachrs view page',
                status: 'Dvelopment in progress',
                tdetails:
                  'When we click the teacher name redirect to teacher view page with all details',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for course',
                status: 'Development Complete',
                tdetails:
                  'When we click on course after that show a table with all courses, with their teatils',
                priority: 'low',
              },
            ],
          },
        ],
      },
      {
        eName: 'Lakshmi Maam',
        desg: 'Project Manager',
        email: 'lakshmi@thrymr.net',
        id: 112,
        wLocation: 'Hydrabad  Office',
        project: [
          {
            pname: 'Thrymr Website',
            task: [
              {
                id: 1,
                tName: 'Fix the login error msg',
                status: 'Slected for development',
                tdetails:
                  'When we login with wrong cred throwing two time error msg',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for accounting',
                status: 'Development Complete',
                tdetails:
                  'When we click on save button after that show a table with these field, premium amt, additional cost, other cost, total',
                priority: 'High',
              },
            ],
          },
          {
            pname: 'Daynamind',
            task: [
              {
                id: 1,
                tName: 'create a teachrs view page',
                status: 'Dvelopment in progress',
                tdetails:
                  'When we click the teacher name redirect to teacher view page with all details',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for course',
                status: 'Development Complete',
                tdetails:
                  'When we click on course after that show a table with all courses, with their teatils',
                priority: 'low',
              },
            ],
          },
        ],
      },
      {
        eName: 'Saurabh Vaish ',
        desg: 'Full Stack Developer',
        email: 'saurabh@thrymr.net',
        id: 113,
        wLocation: 'Lko Office',
        project: [
          {
            pname: 'Tdis Project',
            task: [
              {
                id: 1,
                tName: 'Fix the login error msg',
                status: 'Slected for development',
                tdetails:
                  'When we login with wrong cred throwing two time error msg',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for accounting',
                status: 'Development Complete',
                tdetails:
                  'When we click on save button after that show a table with these field, premium amt, additional cost, other cost, total',
                priority: 'High',
              },
            ],
          },
          {
            pname: 'Edx Hindi',
            task: [
              {
                id: 1,
                tName: 'create a teachrs view page',
                status: 'Dvelopment in progress',
                tdetails:
                  'When we click the teacher name redirect to teacher view page with all details',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for course',
                status: 'Development Complete',
                tdetails:
                  'When we click on course after that show a table with all courses, with their teatils',
                priority: 'low',
              },
            ],
          },
        ],
      },
      {
        eName: 'Monika Maam',
        desg: 'Center Head',
        email: 'monika@thrymr.net',
        id: 114,
        wLocation: 'Lko Office',
        project: [
          {
            pname: 'ShipX Project',
            task: [
              {
                id: 1,
                tName: 'Fix the login error msg',
                status: 'Slected for development',
                tdetails:
                  'When we login with wrong cred throwing two time error msg',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for accounting',
                status: 'Development Complete',
                tdetails:
                  'When we click on save button after that show a table with these field, premium amt, additional cost, other cost, total',
                priority: 'High',
              },
            ],
          },
          {
            pname: 'Hegde',
            task: [
              {
                id: 1,
                tName: 'create a teachrs view page',
                status: 'Dvelopment in progress',
                tdetails:
                  'When we click the teacher name redirect to teacher view page with all details',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for course',
                status: 'Development Complete',
                tdetails:
                  'When we click on course after that show a table with all courses, with their teatils',
                priority: 'low',
              },
            ],
          },
        ],
      },
      {
        eName: 'Rehana Fairoz',
        desg: 'Backend Developer Junior',
        id: 115,
        email: 'rehana@thrymr.net',
        wLocation: 'Nandyal Office',
        project: [
          {
            pname: 'Tdis',
            task: [
              {
                id: 1,
                tName: 'Fix the login error msg',
                status: 'Slected for development',
                tdetails:
                  'When we login with wrong cred throwing two time error msg',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for accounting',
                status: 'Development Complete',
                tdetails:
                  'When we click on save button after that show a table with these field, premium amt, additional cost, other cost, total',
                priority: 'High',
              },
            ],
          },
          {
            pname: 'Wings Info',
            task: [
              {
                id: 1,
                tName: 'create a teachrs view page',
                status: 'Dvelopment in progress',
                tdetails:
                  'When we click the teacher name redirect to teacher view page with all details',
                priority: 'Medium',
              },
              {
                id: 2,
                tName: 'create a table for course',
                status: 'Development Complete',
                tdetails:
                  'When we click on course after that show a table with all courses, with their teatils',
                priority: 'low',
              },
            ],
          },
        ],
      },
    ];

    localStorage.setItem('prince', JSON.stringify(this.users));
  }
}
