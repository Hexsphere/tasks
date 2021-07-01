export interface Project {
  _id: string;
  lastViewedDate: Date;

  user: string;

  labelName: string;
  labelColor: string;
  name: string;
  tasks: number;
}
