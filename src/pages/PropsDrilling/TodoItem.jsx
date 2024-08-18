import { useState } from 'react';

const TodoItem = ({ todos, setTodos }) => {
  const [edit, setEdit] = useState(null);

  const handleDeleteButton = (id) => {
    const deleteTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
  };

  const onEditButton = (todo) => {
    setEdit({ ...todo });
  };

  const handleFinishEditButton = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === edit.id ? { ...todo, title: edit.title, content: edit.content } : todo
    );
    setTodos(updatedTodos);
    setEdit(null);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {edit && edit.id === todo.id ? (
            <>
              <input
                type="text"
                value={edit.title}
                onChange={(e) => setEdit({ ...edit, title: e.target.value })}
                placeholder="수정할 제목을 입력하세요"
              />
              <input
                type="text"
                value={edit.content}
                onChange={(e) => setEdit({ ...edit, content: e.target.value })}
                placeholder="수정할 내용을 입력하세요"
              />

              <button onClick={() => setEdit(null)}>취소</button>
              <button onClick={handleFinishEditButton}>수정 완료</button>
            </>
          ) : (
            <>
              <p>제목: {todo.title}</p>
              <p>내용: {todo.content}</p>
              <button onClick={() => handleDeleteButton(todo.id)}>삭제</button>
              <button onClick={() => onEditButton(todo)}>수정</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoItem;
