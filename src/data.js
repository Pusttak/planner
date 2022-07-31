export const data = {
  tasks: {
    'task-1': { id: 'task-1', content: 'first' },
    'task-2': { id: 'task-2', content: 'second' },
    'task-3': { id: 'task-3', content: 'threes' },
    'task-4': {
      id: 'task-4',
      content: 'four',
    },
  },
  boards: {
    'board-1': {
      id: 'board-1',
      title: 'Start',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'board-2': {
      id: 'board-2',
      title: 'Process',
      taskIds: [],
    },
    'board-3': {
      id: 'board-3',
      title: 'Done',
      taskIds: [],
    },
  },
  boardsOrder: ['board-1', 'board-2', 'board-3'],
};
