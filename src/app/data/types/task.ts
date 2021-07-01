export interface Task {
  _id: string;

  type: string;

  user: string;
  project: string;

  labelColor: string;
  name: string;
  priority: number;
  complete: boolean;

  subTasks: SubTask[] | null;

  reminder: Date | false;
  scheduled: Date | false;
}

export interface SubTask {
  _id: string;

  type: string;

  parentTask: string;

  labelColor: string;
  name: string;
  priority: number;
  complete: boolean;

  reminder: Date | false;
  scheduled: Date | false;
}
