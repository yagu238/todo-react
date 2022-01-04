import { memo, useCallback, useState } from 'react';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { todoService } from '../../lib/apis/todo';

interface Props {
  todo: Todo;
}

export const TodoListItem = memo((props: Props) => {
  const { todo } = props;
  const [completedState, setCompletedState] = useState(todo.completed);

  const handleUpdateComplete = useCallback(async () => {
    const res = await todoService.update(todo.id, {
      title: todo.title,
      completed: !todo.completed,
    });
    if (!res.ok) return;
    setCompletedState(!completedState);
  }, [completedState, todo.completed, todo.id, todo.title]);

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Flex>
        <Center w="60px" onClick={handleUpdateComplete}>
          <CheckCircleIcon
            w={8}
            h={8}
            color={completedState ? 'teal.500' : 'gray.100'}
          ></CheckCircleIcon>
        </Center>
        <Box flex="1" ml={4}>
          <Heading fontSize="xl">{todo.title}</Heading>
          <Text mt={4}>test................</Text>
        </Box>
      </Flex>
    </Box>
  );
});
