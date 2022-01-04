import { memo } from 'react';

import { Todo } from '@todo/api-interfaces';
import { TodoList } from './todo-list.page';
import { Stack } from '@chakra-ui/react';

interface Props {
  todos: Todo[];
}

export const TodoListContainer = memo((props: Props) => {
  const { todos } = props;
  return (
    <Stack spacing={8}>
      <TodoList todos={todos} />
    </Stack>
  );
});
