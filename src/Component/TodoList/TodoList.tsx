import React, { useState, useEffect } from 'react';
import { Form, Input, Button, List, message, Checkbox, Divider } from 'antd';
import todoapi from '../todoapi/todapi';
interface Todo { 
    _id: string;
    text: string;
    isRead: boolean;
}
const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const fetchTodos = async () => {
        try {
            const response = await todoapi.get<Todo[]>("getalltodo/");
            setTodos(response.data);
        } catch (error) {
            console.error(error);
            message.error('Error fetching todos');
        }
    };
    useEffect(() => {
        fetchTodos();
    }, []);
    const handleAdd = async (values: any) => {
        try {
            const response = await todoapi.post<Todo>("addtodo/", values);
            setTodos([...todos, response.data]);
            message.success('Todo added successfully');
        } catch (error) {
            console.error(error);
            message.error('Error adding todo');
        }
    };
    const handleDelete = async (todoId: string) => {
        try {
          await todoapi.delete(`/deletetodo/${todoId}`);
          setTodos(todos.filter((todo) => todo._id !== todoId));
          message.success('Todo deleted successfully');
        } catch (error) {
          console.error(error);
          message.error('Error deleting todo');
        }
      };
      const markTodoAsRead = async (id:string) => {
        try {
          const response = await todoapi.put(`/markisread/${id}`);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      }
    return (
        <>
            <Form onFinish={handleAdd}>
                <Divider />
                <Form.Item name="text">
                    <Input type="text"  size="middle"  style={{
                        width: "calc(100% - 200px)"
                    }} placeholder="Enter Todo" />
                    </Form.Item>
                     <Button type="primary" htmlType="submit">AddTodo</Button>
                <List
                    size="small"
                    header={<div>Todo Checklist</div>}
                    bordered
                    dataSource={todos}
                    renderItem={(todo) => (
                        <List.Item>
                            <Checkbox checked={todo.isRead} onChange={() => markTodoAsRead(todo._id)}>{todo.text}</Checkbox>
                            <List.Item actions={[<Button danger onClick={() => handleDelete(todo._id)} disabled={todo.isRead}>Delete</Button>]}>
                              </List.Item>
                        </List.Item>
                    )}
                />
            </Form>
        </>
    );
};

export default TodoList;
