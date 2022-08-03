export const data = {
  tasks: {
    'task-1': { id: 'task-1', content: 'first' },
    'task-2': { id: 'task-2', content: 'second' },
    'task-3': { id: 'task-3', content: 'threes' },
  },
  boards: {
    'board-1': {
      id: 'board-1',
      title: 'Important + Urgent',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'board-2': {
      id: 'board-2',
      title: 'Important + Not Urgent',
      taskIds: [],
    },
    'board-3': {
      id: 'board-3',
      title: 'Not Important + Urgent',
      taskIds: [],
    },
    'board-4': {
      id: 'board-4',
      title: 'Not Important + Not Urgent',
      taskIds: [],
    },
  },
  boardsOrder: ['board-1', 'board-2', 'board-3', 'board-4'],
};
