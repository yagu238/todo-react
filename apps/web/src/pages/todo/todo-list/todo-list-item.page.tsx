import { memo, useCallback, useState } from 'react';
import { Box, Center, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';
import { todoService } from '../../../lib/apis/todo';
import { MessageBox } from '../../shared/components/message-box';

interface Props {
  todo: Todo;
  onDeleted?: (id: number) => void;
}

export const TodoListItem = memo((props: Props) => {
  const { todo, onDeleted } = props;
  const [completedState, setCompletedState] = useState(todo.completed);
  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false);

  const handleUpdate = useCallback(async () => {
    const res = await todoService.update(todo.id, {
      title: todo.title,
      completed: !todo.completed,
    });
    if (!res.ok) return;
    setCompletedState(!completedState);
  }, [completedState, todo.completed, todo.id, todo.title]);

  const handleDelete = useCallback(async () => {
    setIsOpenDeleteConfirm(true);
  }, []);

  const handleDeleteConfirm = useCallback(async () => {
    const res = await todoService.delete(todo.id);
    if (!res.ok) return;
    onDeleted?.(todo.id);
  }, [onDeleted, todo.id]);

  return (
    <>
      <MessageBox
        isOpen={isOpenDeleteConfirm}
        headerText="Delete Todo"
        bodyText="Todo を削除します。よろしいですか？"
        onConfirm={handleDeleteConfirm}
        onClose={() => setIsOpenDeleteConfirm(false)}
      />
      <Box p={5} shadow="md" borderWidth="1px">
        <Flex>
          <Center w="60px" onClick={handleUpdate}>
            <CheckCircleIcon
              w={8}
              h={8}
              color={completedState ? 'teal.500' : 'gray.100'}
            ></CheckCircleIcon>
          </Center>
          <Box flex="1">
            <Heading fontSize="xl">{todo.title}</Heading>
            <Text mt={4}>test................</Text>
          </Box>
          <Box w="30px">
            <IconButton
              aria-label="Delete database"
              icon={<DeleteIcon />}
              size="xs"
              colorScheme="red"
              onClick={handleDelete}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
});
