const stateReducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'board/changeTask':
      return {
        ...state,
        boards: {
          ...state.boards,
          [payload.boardId]: {
            ...state.boards[payload.boardId],
            taskIds: payload.tasks,
          },
        },
      };

    case 'board/deleteTask':
      return {
        ...state,
        boards: {
          ...state.boards,
          [payload.boardId]: {
            ...state.boards[payload.boardId],
            taskIds: payload.tasks,
          },
        },
      };

    case 'board/addTask':
      return {
        ...state,
        boards: {
          ...state.boards,
          [payload.boardId]: {
            ...state.boards[payload.boardId],
            taskIds: payload.tasks,
          },
        },
      };

    case 'board/changeBoard':
      return {
        ...state,
        boardsOrder: [...payload],
      };

    case 'task/addTask':
      return {
        ...state,
        tasks: { ...state.tasks, [payload.task.id]: payload.task },
        boards: {
          ...state.boards,
          [payload.boardId]: {
            ...state.boards[payload.boardId],
            taskIds: [
              ...state.boards[payload.boardId].taskIds,
              payload.task.id,
            ],
          },
        },
      };

    case 'task/deleteTask':
      delete state.tasks[payload.taskId];
      return {
        ...state,
        boards: {
          ...state.boards,
          [payload.boardId]: {
            ...state.boards[payload.boardId],
            taskIds: state.boards[payload.boardId].taskIds.filter(
              task => task !== payload.taskId
            ),
          },
        },
      };

    default:
      return state;
  }
};

export default stateReducer;
