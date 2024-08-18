import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const PropsDrilling = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default PropsDrilling;
