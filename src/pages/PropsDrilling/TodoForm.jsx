import { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';

const TodoForm = ({ setTodos }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (!title || !content) {
      return alert('제목 또는 내용을 입력하세요.');
    }

    const newTodos = {
      id: uuid(),
      title,
      content
    };

    setTodos((prev) => [...prev, newTodos]);

    titleRef.current.value = '';
    contentRef.current.value = '';
    titleRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={titleRef} placeholder="제목을 입력하세요" />
      <input type="text" ref={contentRef} placeholder="내용을 입력하세요" />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
