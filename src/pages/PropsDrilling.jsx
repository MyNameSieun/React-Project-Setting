import { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

const PropsDrilling = () => {
  const [todos, setTodos] = useState([]);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;

    const newTodo = {
      id: uuid(),
      title,
      content
    };

    if (!title || !content) {
      return alert('제목이나 내용을 입력하세요.');
    }

    setTodos((prev) => [...prev, newTodo]);

    titleRef.current.value = '';
    contentRef.current.value = '';

    titleRef.current.focus();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={titleRef} placeholder="제목을 입력하세요" />
        <input type="text" ref={contentRef} placeholder="내용을 입력하세요" />
        <button type="submit">제출</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>제목: {todo.title}</p>
            <p>내용: {todo.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PropsDrilling;
