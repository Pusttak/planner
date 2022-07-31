const stateReducer = (state, action) => {
  switch (action.type) {
    case 'board/changeTask':
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.boardId]: {
            ...state.boards[action.payload.boardId],
            taskIds: action.payload.tasks,
          },
        },
      };

    case 'board/deleteTask':
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.boardId]: {
            ...state.boards[action.payload.boardId],
            taskIds: action.payload.tasks,
          },
        },
      };

    case 'board/addTask':
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.payload.boardId]: {
            ...state.boards[action.payload.boardId],
            taskIds: action.payload.tasks,
          },
        },
      };

    case 'board/changeBoard':
      return {
        ...state,
        boardsOrder: [...action.payload],
      };

    default:
      return state;
  }
};

export default stateReducer;
