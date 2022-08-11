import { Droppable, Draggable } from 'react-beautiful-dnd';
import Task from 'components/Task';
import AddTaskForm from 'components/AddTaskForm';
import { BoardContainer, Title, TaskList, Box } from './Board.styled';

const Board = ({ board, tasks, index, isAddTask, ...rest }) => {
  return (
    <Draggable draggableId={board.id} index={index} isDragDisabled={true}>
      {provided => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Box {...provided.dragHandleProps}>
            <Droppable droppableId={board.id} type="task">
              {(provided, snapshot) => (
                <BoardContainer>
                  <Title>{board.title}</Title>
                  <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    {tasks.map((task, index) => (
                      <Task
                        key={task.id}
                        task={task}
                        index={index}
                        boardId={board.id}
                        {...rest}
                      />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                  <AddTaskForm board={board} isAddTask={isAddTask} />
                </BoardContainer>
              )}
            </Droppable>
          </Box>
        </div>
      )}
    </Draggable>
  );
};

export default Board;
