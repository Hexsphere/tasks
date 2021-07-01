import { Project } from 'src/app/data/types/project';

export const projects: Project[] = [
  {
    _id: '0',
    lastViewedDate: new Date('April 23, 2021 04:15:00'),
    user: '0',
    labelName: 'Home',
    labelColor: 'sky blue',
    name: 'House renovations',
    tasks: 5,
  },
  {
    _id: '1',
    lastViewedDate: new Date('April 23, 2021 04:20:00'),
    user: '0',
    labelName: 'Misc.',
    labelColor: 'gray',
    name: 'Another list',
    tasks: 4,
  },
];
