import TodoSort from 'components/TodoSort';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      <h1>TODOS</h1>
      <TodoSort />
      <TodoItem todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
