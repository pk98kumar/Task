import { Project } from './project.modal';

export class Users {
  // public id?: number;
  // public eName?: string;
  // public desg?: string;
  // public email?: string;
  // public wLocation?: string;
  //  project?: Project[]

  constructor(
    public id?: number,
    public eName?: string,
    public desg?: string,
    public email?: string,
    public wLocation?: string,
    public project: Project[]=[]
  ) {
    this.id = id;
    this.eName = eName;
    this.desg = desg;
    this.email = email;
    this.wLocation = wLocation;
    this.project = [new Project()];
  }
}
