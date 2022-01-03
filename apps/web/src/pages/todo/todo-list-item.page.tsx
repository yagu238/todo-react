import { memo } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';

interface Props {
  todo: Todo;
}

export const TodoListItem = memo((props: Props) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{props.todo.title}</Heading>
      <Text mt={4}>test................</Text>
    </Box>
  );
});
