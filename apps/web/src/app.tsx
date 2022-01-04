import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react';
import { TodoPage } from './pages/todo/todo.page';

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
        <GridItem rowSpan={11} colStart={3} colEnd={6} />
        <GridItem rowSpan={11} colStart={6} colEnd={11}>
          <Container maxW="container.xl">
            <TodoPage></TodoPage>
          </Container>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
