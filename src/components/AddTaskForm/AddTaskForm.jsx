import { Form, Input, Button, AddIcon } from './AddTaskForm.styled';

const AddTaskForm = ({ board, isAddTask }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.content.value) {
      const trimContent = e.target.content.value.replace(/ {1,}/g, ' ').trim();
      isAddTask(board.id, trimContent);
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="content"
        placeholder="Add new task"
        autoComplete="off"
      />
      <Button type="submit">
        <AddIcon />
      </Button>
    </Form>
  );
};

export default AddTaskForm;
