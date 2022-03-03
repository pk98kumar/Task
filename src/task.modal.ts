export class TaskDetails {
  public id?: number;
  public tName?: string;
  public status?: string;
  public tdetails?: string;
  public priority?: string;

  constructor(
    id?: number,
    tName?: string,
    status?: string,
    tdetails?: string,
    priority?: string
  ) {
    this.id = id;
    this.tName = tName;
    this.status = status;
    this.tdetails = tdetails;
    this.priority = priority;
  }
}
