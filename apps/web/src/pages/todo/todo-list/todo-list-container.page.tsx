import { memo } from 'react';

import { Todo } from '@todo/api-interfaces';
import { TodoList } from './todo-list.page';
import { Stack } from '@chakra-ui/react';

interface Props {
  todos: Todo[];
  onDeleted?: (id: number) => void;
}

export const TodoListContainer = memo((props: Props) => {
  const { todos, onDeleted } = props;
  return (
    <Stack spacing={8}>
      <TodoList todos={todos} onDeleted={onDeleted} />
    </Stack>
  );
});
