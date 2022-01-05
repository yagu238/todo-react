import React, { memo, useCallback } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  Spacer,
  useDisclosure,
} from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { TodoCreate } from './todo-create.page';
import { AddIcon } from '@chakra-ui/icons';

interface Props {
  onCreated?: (todo: Todo) => void;
}

export const TodoCreateContainer = memo((props: Props) => {
  const { onCreated } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const created = useCallback(
    (todo: Todo) => {
      onCreated?.(todo);
      onClose();
    },
    [onClose, onCreated]
  );

  const closed = useCallback(() => {
    onClose();
  }, [onClose]);

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <TodoCreate onCreated={created} onClosed={closed} />
      </Modal>
    </>
  );
});
