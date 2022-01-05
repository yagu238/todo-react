import {
  Box,
  ChakraProvider,
  Container,
  Grid,
  GridItem,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import { TodoPage } from './pages/todo/todo.page';

export function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.md" py={8} px={4}>
        <TodoPage></TodoPage>
      </Container>
    </ChakraProvider>
  );
}

export default App;
