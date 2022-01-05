import React, { memo, useCallback, useMemo } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { CreateTodoDTO, Todo } from '@todo/api-interfaces';
import { AddIcon } from '@chakra-ui/icons';
import { todoService } from '../../../lib/apis/todo';
import { TodoCreate } from './todo-create.page';

interface Props {
  onCreated?: (todo: Todo) => void;
}

export const TodoCreateContainer = memo((props: Props) => {
  const { onCreated } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const create = useCallback(
    async (dto: CreateTodoDTO) => {
      const res = await todoService.create(dto);
      if (!res) return;

      onCreated?.(res);
      onClose();
    },
    [onClose, onCreated]
  );

  return (
    <>
      <Flex py={4} mb={4}>
        <Box p="2">
          <Heading size="md">Todo Items</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button
            leftIcon={<AddIcon />}
            colorScheme="teal"
            variant="outline"
            onClick={onOpen}
          >
            Add
          </Button>
        </Box>
      </Flex>
      <TodoCreate onCreate={create} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
