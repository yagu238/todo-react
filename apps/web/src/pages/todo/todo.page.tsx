import { useState, useEffect, memo, useCallback } from 'react';

import { Todo } from '@todo/api-interfaces';
import { todoService } from '../../lib/apis/todo';
import { TodoCreateContainer } from './todo-create/todo-create-container.page';
import { TodoListContainer } from './todo-list/todo-list-container.page';

export const TodoPage = memo(() => {
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
      <TodoListContainer todos={todos}></TodoListContainer>
    </>
  );
});
