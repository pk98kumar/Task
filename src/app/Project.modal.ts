import { TaskDetails } from 'src/task.modal';

export class Project {
//   public pname: string;
//   public task: TaskDetails[] = [];
  constructor(public pname?: string,
    public task?:TaskDetails[] ) {
    this.pname = pname;
    this.task=[new TaskDetails()];
  }
}
