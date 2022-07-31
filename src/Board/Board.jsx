import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from 'Task';
import { BoardContainer, Title, TaskList } from './Board.styled';

const Board = ({ board, tasks, index }) => {
  return (
    <Draggable draggableId={board.id} index={index}>
      {provided => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <div {...provided.dragHandleProps}>
            <Droppable droppableId={board.id} type="task">
              {(provided, snapshot) => (
                <BoardContainer isDraggingOver={snapshot.isDraggingOver}>
                  <Title>{board.title}</Title>
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {tasks.map((task, index) => (
                      <Task key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                </BoardContainer>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Board;
