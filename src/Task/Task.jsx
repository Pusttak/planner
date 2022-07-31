import { Draggable } from 'react-beautiful-dnd';
import { Item, Content, ListItem } from './Task.styled';

const Task = ({ task, index }) => (
  <Draggable key={task.id} draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <ListItem
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Item isDragging={snapshot.isDragging}>
          <Content>{task.content}</Content>
          {/* <DragHandle {...provided.dragHandleProps} /> */}
        </Item>
      </ListItem>
    )}
  </Draggable>
);

export default Task;
