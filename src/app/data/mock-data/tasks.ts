import { Task } from 'src/app/data/types/task';

export const tasks: Task[] = [
  {
    _id: '0',
    type: 'parent',
    user: '0',
    project: '0',
    labelColor: 'sky blue',
    name: 'Repaint living room',
    priority: 0,
    complete: true,
    reminder: false,
    scheduled: false,
    subTasks: null,
  },
  {
    _id: '1',
    type: 'parent',
    user: '0',
    project: '0',
    labelColor: 'red',
    name: 'Buy new pavers for patio',
    priority: 0,
    complete: false,
    reminder: false,
    scheduled: false,
    subTasks: null,
  },
  {
    _id: '2',
    type: 'parent',
    user: '0',
    project: '0',
    labelColor: 'lime green',
    name: 'Replace trees in backyard',
    priority: 0,
    complete: false,
    reminder: false,
    scheduled: false,
    subTasks: [
      {
        _id: '0',
        type: 'sub task',
        parentTask: '0',
        labelColor: 'lime green',
        name: 'Go to store to find trees',
        priority: 0,
        complete: false,

        reminder: false,
        scheduled: false,
      },
    ],
  },
  {
    _id: '3',
    type: 'parent',
    user: '0',
    project: '0',
    labelColor: 'purple',
    name: 'Repaint living room',
    priority: 0,
    complete: false,
    reminder: false,
    scheduled: false,
    subTasks: null,
  },

  {
    _id: '4',
    type: 'parent',
    user: '0',
    project: '1',
    labelColor: 'gray',
    name: 'Example task with reminder',
    priority: 2,
    complete: false,
    reminder: new Date('April 26, 2021 12:00:00'),
    scheduled: false,
    subTasks: null,
  },

  {
    _id: '5',
    type: 'parent',
    user: '0',
    project: '1',
    labelColor: 'gray',
    name: 'Example task with due date',
    priority: 1,
    complete: false,
    reminder: false,
    scheduled: new Date('April 23, 2021 12:00:00'),
    subTasks: null,
  },

  {
    _id: '6',
    type: 'parent',
    user: '0',
    project: '1',
    labelColor: 'gray',
    name: 'Example task with due date',
    priority: 0,
    complete: false,
    reminder: false,
    scheduled: new Date('April 23, 2021 01:00:00'),
    subTasks: null,
  },

  {
    _id: '7',
    type: 'parent',
    user: '0',
    project: '1',
    labelColor: 'gray',
    name: 'Example task with due date',
    priority: 0,
    complete: false,
    reminder: false,
    scheduled: new Date('April 24, 2021 09:00:00'),
    subTasks: null,
  },

  {
    _id: '8',
    type: 'parent',
    user: '0',
    project: '1',
    labelColor: 'gray',
    name: 'Example task with due date',
    priority: 0,
    complete: false,
    reminder: false,
    scheduled: new Date('April 24, 2021 10:00:00'),
    subTasks: null,
  },

  {
    _id: '9',
    type: 'parent',
    user: '0',
    project: '1',
    labelColor: 'gray',
    name: 'Example task with due date',
    priority: 0,
    complete: false,
    reminder: false,
    scheduled: new Date('April 24, 2021 11:00:00'),
    subTasks: null,
  },
];