import React, { memo } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  headerText?: string;
  bodyText?: string;
  cancelBtnText?: string;
  okBtnText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

export const MessageBox = memo((props: Props) => {
  const {
    isOpen,
    headerText,
    bodyText,
    cancelBtnText,
    okBtnText,
    onConfirm,
    onClose,
  } = props;
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={() => onClose?.()}
      isOpen={isOpen}
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>{headerText}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{bodyText}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={() => onClose?.()}>
            {cancelBtnText ?? 'Cancel'}
          </Button>
          <Button colorScheme="red" ml={3} onClick={onConfirm}>
            {okBtnText ?? 'OK'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});
