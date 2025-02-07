import './App.css'
// import {Box, Button, Flex, Stack, HStack, VStack, Text, Heading, background} from '@chakra-ui/react'

import { Header } from './components/Header';
// import { Pricing } from './components/Pricing';
import { Home } from './components/Home';
// import { Aboutme } from './components/Aboutme';
import { Route, Routes } from 'react-router'
import  Navbar  from './components/Navbar';
import  Aboutme  from './components/Aboutme';
import  Projects  from './components/Projects';
import { Center } from '@chakra-ui/react';
import Footer from './components/Footer';
import Project from './pages/Project/Project';
import ProjectsPage from './components/ProjectsPage';
import Background from './components/Background';
// my stuff
// function App() {
//   return (
//     <>
//       <div className='App'>
//         <h1>My Name is Mahyar</h1>

//           <VStack spacing='24px'>
//             <Box bg='green'>This is a boxila 1</Box>
//             <Heading fontSize='44px'>Mahyar Abolhallaj</Heading>
//             <Box bg='black'>This is a boxila 2</Box>
//             <Box bg='grey'>This is a boxila 3</Box>
//             <Box bg='pink' h='300px' w='300px'mt="32px">
//               <Text fontSize="32px">This is a text</Text>
//               <Button mt="32px" colorScheme='red' _hover={{background: 'green'}} >Button</Button>
//             </Box>
//           </VStack>

//       </div>
//     </>
//   )
// }

function App() {
  return (
    <>
    <div className='App'>
      <Routes> 
            <Route index path='/aboutme' element={<Aboutme />} />
            <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
      {/* <Center> */}
      <Navbar />
      <Home />

      <Aboutme />
      <Projects />
      <Footer />
      <Background />
    </div>
    </>
  );
}


export default App;
