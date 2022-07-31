import { useReducer } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import stateReducer from 'reducers/stateReducer';
import Board from 'Board';
import { data } from 'data';
import { Container } from './App.styled';

const init = data;

const App = () => {
  const [state, dispatch] = useReducer(stateReducer, init);

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'border') {
      const newBoardsOrder = [...state.boardsOrder];
      newBoardsOrder.splice(source.index, 1);
      newBoardsOrder.splice(destination.index, 0, draggableId);

      dispatch({
        type: 'board/changeBoard',
        payload: newBoardsOrder,
      });

      return;
    }

    const startBoard = state.boards[source.droppableId];
    const finishBoard = state.boards[destination.droppableId];

    if (startBoard === finishBoard) {
      const newTaskIds = [...startBoard.taskIds];

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      dispatch({
        type: 'board/changeTask',
        payload: { boardId: destination.droppableId, tasks: newTaskIds },
      });
      return;
    }

    const startTaskIds = [...startBoard.taskIds];
    startTaskIds.splice(source.index, 1);
    dispatch({
      type: 'board/deleteTask',
      payload: { boardId: source.droppableId, tasks: startTaskIds },
    });

    const finishTaskIds = [...finishBoard.taskIds];
    finishTaskIds.splice(destination.index, 0, draggableId);
    dispatch({
      type: 'board/addTask',
      payload: { boardId: destination.droppableId, tasks: finishTaskIds },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-boards" direction="horisontal" type="border">
        {provided => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {state.boardsOrder.map((boardId, index) => {
              const board = state.boards[boardId];
              const tasks = board.taskIds.map(taskId => state.tasks[taskId]);
              return (
                <Board
                  key={board.id}
                  board={board}
                  tasks={tasks}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
