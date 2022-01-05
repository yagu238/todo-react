import { memo } from 'react';
import { Todo } from '@todo/api-interfaces';
import { TodoListItem } from './todo-list-item.page';

interface Props {
  todos: Todo[];
  onEdit?: (id: number) => void;
  onRemoved?: (id: number) => void;
}

export const TodoList = memo((props: Props) => {
  const { todos, onEdit, onRemoved } = props;
  return (
    <>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onEdit={onEdit}
          onRemoved={onRemoved}
        ></TodoListItem>
      ))}
    </>
  );
});
