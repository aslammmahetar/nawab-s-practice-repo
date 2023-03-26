import './App.css';
import { Box } from '@chakra-ui/react';
import Home from './Components/Home';
import SimpleGridExample from './Components/SimpleGrid';
import FlexExample from './Components/FlexExample';
import GridAndGridItem from './Components/GridAndGridItem';
import StackExample from './Components/StackExampple';
import ChakraModal from './Components/Modals';

function App() {
  return <Box>
    <Home />
    <SimpleGridExample />
    <FlexExample />
    <GridAndGridItem />
    <StackExample />
    <ChakraModal />
  </Box>
}

export default App;
