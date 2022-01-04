import { memo } from 'react';
import { Todo } from '@todo/api-interfaces';
import { TodoListItem } from './todo-list-item.page';

interface Props {
  todos: Todo[];
}

export const TodoList = memo((props: Props) => {
  const { todos } = props;

  return (
    <>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo}></TodoListItem>
      ))}
    </>
  );
});
