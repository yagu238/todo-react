import { memo, useCallback } from 'react';

import { Todo } from '@todo/api-interfaces';
import { Stack } from '@chakra-ui/react';
import { TodoList } from './todo-list.page';
import { todoService } from '../../../lib/apis/todo';

interface Props {
  todos: Todo[];
  onEdited?: (todo: Todo) => void;
  onRemoved?: (id: number) => void;
}

export const TodoListContainer = memo((props: Props) => {
  const { todos, onEdited, onRemoved } = props;

  const update = useCallback(
    async (id: number) => {
      // const res = await todoService.update(id, {
      //   title: todo.title,
      //   completed: !todo.completed,
      // });
      // if (!res.ok) return;
      // onEdited?.(id);
    },
    [onEdited]
  );

  const remove = useCallback(
    async (id: number) => {
      const res = await todoService.delete(id);
      if (!res.ok) return;
      onRemoved?.(id);
    },
    [onRemoved]
  );

  return (
    <Stack spacing={8}>
      <TodoList todos={todos} onEdit={update} onRemoved={remove} />
    </Stack>
  );
});
