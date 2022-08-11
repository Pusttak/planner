import { useState, useEffect, useMemo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Item, Content, BoxItem, Form, Input, Button } from './Task.styled';

const Task = ({
  task,
  index,
  boardId,
  isEditTask,
  isDeleteTask,
  isInputId,
  setIsInputId,
}) => {
  const [content, setContent] = useState(task.content);
  const [isInput, setIsInput] = useState(false);

  useEffect(() => {
    task.id === isInputId ? setIsInput(true) : setIsInput(false);
  }, [isInputId, task.id]);

  const handleSubmit = e => {
    e.preventDefault();
    if (content !== '') {
      isEditTask(boardId, { id: task.id, content });
      setIsInputId(null);
    }
  };

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleInputIsOpen = () => {
    if (isInputId === null) {
      setIsInputId(task.id);
    }
  };

  const visibilityContent = useMemo(() => {
    return content.length >= 38 ? `${content.slice(0, 38)}...` : content;
  }, [content]);

  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <BoxItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Item
            isDragging={snapshot.isDragging}
            onDoubleClick={handleInputIsOpen}
          >
            {!isInput ? (
              <Content>{visibilityContent}</Content>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={content}
                  onChange={handleChange}
                  autoFocus="on"
                />
                <Button type="submit">Apply</Button>
              </Form>
            )}
            {/* <DragHandle {...provided.dragHandleProps} /> */}
          </Item>
        </BoxItem>
      )}
    </Draggable>
  );
};

export default Task;
