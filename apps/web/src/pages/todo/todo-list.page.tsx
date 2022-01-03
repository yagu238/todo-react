import { memo } from 'react';
import { Stack } from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { TodoListItem } from './todo-list-item.page';

interface Props {
  todos: Todo[];
}

export const TodoList = memo((props: Props) => {
  return (
    <Stack spacing={8}>
      {props.todos.map((todo) => (
        <TodoListItem todo={todo}></TodoListItem>
      ))}
    </Stack>
  );
});
