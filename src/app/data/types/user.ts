export interface User {
  _id: string;

  name: string;
  role: string;
  username: string;
  email: string;
  photo: string;

  projects: number;
  tasks: number;
  completedTasks: number;
}
