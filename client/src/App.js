import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import ClientesInadimplentesList from './views/ClientesInadimplentes/List';
import 'antd/dist/antd.css';
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* Normalmente se tem um Router aqui, mas como só tem uma tela, acabei não fazendo. */}
      <Box
        w="100vw"
        minH="100vh"
        bgGradient="linear(to right, #6E48AA, #9D50BB)"
        p="8"
      >
        <Box h="100%" shadow="xl" p="4" bg="#F5F5F5" borderRadius="10">
          <ClientesInadimplentesList />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
