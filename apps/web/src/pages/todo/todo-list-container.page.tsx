import { useState, useEffect, memo, useCallback } from 'react';

import { Todo } from '@todo/api-interfaces';
import { TodoList } from './todo-list.page';
import { todoService } from '../../lib/apis/todo';
import { TodoCreateContainer } from './todo-create-container.page';

export const TodoContainer = memo(() => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    todoService.fetchAll().then((res) => {
      setTodos(res);
    });
  }, []);

  const created = useCallback(
    (todo: Todo) => {
      const newTodos = todos.concat(todo);
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <>
      <TodoCreateContainer onCreated={created} />
      <TodoList todos={todos}></TodoList>
    </>
  );
});
