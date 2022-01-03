import { useState, useEffect, memo } from 'react';
import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { Todo } from '@todo/api-interfaces';
import { TodoList } from './todo-list.page';
import { todoService } from '../../lib/apis/todo';

export const TodoContainer = memo(() => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    todoService.fetchAll().then((res) => {
      setTodos(res);
    });
  }, []);

  return (
    <>
      <Flex py={4}>
        <Box p="2">
          <Heading size="md">Todo Items</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button leftIcon={<AddIcon />} colorScheme="teal" variant="outline">
            Add
          </Button>
        </Box>
      </Flex>
      <TodoList todos={todos}></TodoList>
    </>
  );
});
