import React, { memo, useMemo } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import InputControl from '../../shared/controls/input-control';
import { CreateTodoDTO } from '@todo/api-interfaces';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (values: CreateTodoDTO) => Promise<void>;
}

interface CreateTodoFrom {
  title: string;
}

export const TodoCreate = memo((props: Props) => {
  const { onCreate, isOpen, onClose } = props;

  const initialValues = useMemo(() => {
    return { title: '' };
  }, []);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      title: Yup.string().required('Title は必須です。'),
    });
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (
          values: CreateTodoFrom,
          { setSubmitting }: FormikHelpers<CreateTodoFrom>
        ) => {
          await onCreate(values);
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
                <Button type="button" onClick={onClose}>
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
    </Modal>
  );
});
