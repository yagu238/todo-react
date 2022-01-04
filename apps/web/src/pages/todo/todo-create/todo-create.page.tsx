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
  Button,
} from '@chakra-ui/react';
import { Todo } from '@todo/api-interfaces';
import { todoService } from '../../../lib/apis/todo';
import { InputControl } from '../../shared/control/input-control';

interface Props {
  onCreated?: (todo: Todo) => void;
  onClosed?: () => void;
}

interface CreateTodoFrom {
  title: string;
}

export const TodoCreate = memo((props: Props) => {
  const { onCreated, onClosed } = props;

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
              <Button type="button" onClick={() => onClosed?.()}>
                Cancel
              </Button>
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
