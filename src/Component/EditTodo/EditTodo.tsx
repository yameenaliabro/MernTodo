import { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";

interface Todo {
  _id: string;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todo: Todo;
  onEdit: (updatedTodo: Todo) => void;
}

function EdiTodo ({ todo, onEdit }: TodoProps){
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
    setText(todo.text);
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleFormSubmit = async () => {
    try {
      const response = await axios.patch(`/api/todos/${todo._id}`, {
        text,
      });
      const updatedTodo = response.data;
      onEdit(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isEditing ? (
        <Form onFinish={handleFormSubmit}>
          <Form.Item>
            <Input value={text} onChange={handleTextChange} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Save</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
          </Form.Item>
        </Form>
      ) : (
        <div>
          <span>{todo.text}</span>
          <Button onClick={handleEditClick}>Edit</Button>
        </div>
      )}
    </div>
  );
};
export default EdiTodo