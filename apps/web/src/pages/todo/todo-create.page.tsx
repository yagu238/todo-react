import React, { memo, useMemo } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { todoService } from '../../lib/apis/todo';
import { InputControl } from '../shared/control/input-control';

interface Props {
  onCreated?: (todo: Todo) => void;
}

interface CreateTodoFrom {
  title: string;
}

export const TodoCreate = memo((props: Props) => {
  const { onCreated } = props;
  const { onClose } = useDisclosure();

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      title: Yup.string().required('Title is required'),
    });
  }, []);

  return (
    <Formik
      initialValues={{ title: '' }}
      validationSchema={validationSchema}
      onSubmit={async (
        values: CreateTodoFrom,
        { setSubmitting }: FormikHelpers<CreateTodoFrom>
      ) => {
        const res = await todoService.create(values);
        if (!res) return;

        onCreated?.(res);
        setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Todo</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <InputControl name="title" label="Title" />
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
                ml={2}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Form>
      )}
    </Formik>
  );
});
