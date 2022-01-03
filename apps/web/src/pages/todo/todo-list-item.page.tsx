import { memo, useCallback, useState } from 'react';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { todoService } from '../../lib/apis/todo';

interface Props {
  todo: Todo;
}

export const TodoListItem = memo((props: Props) => {
  const [completedState, setCompletedState] = useState(props.todo.completed);

  const handleUpdateComplete = useCallback(() => {
    todoService
      .update(props.todo.id, {
        title: props.todo.title,
        completed: !props.todo.completed,
      })
      .then((res) => {
        if (!res.ok) return;
        setCompletedState(!completedState);
      });
  }, [completedState, props.todo.completed, props.todo.id, props.todo.title]);

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
          <Heading fontSize="xl">{props.todo.title}</Heading>
          <Text mt={4}>test................</Text>
        </Box>
      </Flex>
    </Box>
  );
});
