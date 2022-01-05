import { memo, useState } from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { CheckCircleIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { MessageBox } from '../../shared/components/message-box';

interface Props {
  todo: Todo;
  onEdit?: (id: number) => void;
  onRemoved?: (id: number) => void;
}

export const TodoListItem = memo((props: Props) => {
  const { todo, onEdit, onRemoved } = props;
  const [isOpenRemoveConfirm, setIsOpenRemoveConfirm] = useState(false);

  return (
    <>
      <MessageBox
        isOpen={isOpenRemoveConfirm}
        headerText="Delete Todo"
        bodyText="Todo を削除します。よろしいですか？"
        onConfirm={() => onRemoved?.(todo.id)}
        onClose={() => setIsOpenRemoveConfirm(false)}
      />
      <Box p={5} shadow="md" borderWidth="1px">
        <Flex>
          <Center w="60px" onClick={() => onEdit?.(todo.id)}>
            <CheckCircleIcon
              w={8}
              h={8}
              color={todo.completed ? 'teal.500' : 'gray.100'}
            ></CheckCircleIcon>
          </Center>
          <Box flex="1">
            <Heading fontSize="xl">{todo.title}</Heading>
            <Text mt={4}>test................</Text>
          </Box>
          <Box w="56px">
            <Flex>
              <IconButton
                aria-label="Edit database"
                icon={<EditIcon />}
                size="xs"
                colorScheme="teal"
                onClick={() => onEdit?.(todo.id)}
              />
              <Spacer />
              <IconButton
                aria-label="Delete database"
                icon={<DeleteIcon />}
                size="xs"
                colorScheme="red"
                onClick={() => setIsOpenRemoveConfirm(true)}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
});
