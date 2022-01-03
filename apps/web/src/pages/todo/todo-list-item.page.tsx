import { memo } from 'react';
import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { CheckCircleIcon } from '@chakra-ui/icons';

interface Props {
  todo: Todo;
}

export const TodoListItem = memo((props: Props) => {
  const stateColor = props.todo.completed ? 'teal.500' : 'gray.100';

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Flex>
        <Center w="60px">
          <CheckCircleIcon w={8} h={8} color={stateColor}></CheckCircleIcon>
        </Center>
        <Box flex="1" ml={4}>
          <Heading fontSize="xl">{props.todo.title}</Heading>
          <Text mt={4}>test................</Text>
        </Box>
      </Flex>
    </Box>
  );
});
