import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react';
import { TodoContainer } from './pages/todo/todo-list-container.page';

export function App() {
  return (
    <ChakraProvider>
      <Grid
        h="920px"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={12} />
        <GridItem rowSpan={11} colSpan={2} />
        <GridItem rowSpan={11} colSpan={10}>
          <Container maxW="container.xl">
            <TodoContainer></TodoContainer>
          </Container>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
