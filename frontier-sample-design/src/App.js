// import logo from './logo.svg';
import './App.css';
import { Flex, Box,Heading,Input,Button,InputGroup,Icon,Menu,MenuButton,MenuList,
  MenuItem, Grid, GridItem,
  HStack,Stack, VStack, Container} from '@chakra-ui/react'
import { SearchIcon,ChevronDownIcon } from '@chakra-ui/icons'
import SimpleSidebar from './sidebar.tsx';
import Headers from './Header';

// import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return(
    <Flex className="App" flexBasis={"fit-content"}>
      <SimpleSidebar />
      <Headers />
      {/* <Flex>

   
        <Flex w={"15%"} h="100%" flexBasis={"fit-content"} border={"2px"}> 
          <VStack>
            <Container>
            <Menu >
                <MenuButton  
                  rightIcon={<ChevronDownIcon />}>
                    Ethereum
                </MenuButton>
                <MenuList >
                  <MenuItem>BSC</MenuItem>
                  <MenuItem>Polygon</MenuItem>
                </MenuList>
              </Menu>
              <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                {/* <GridItem w='100%' h='10' bg='blue.500' /> */}
              {/* <Button>
                Send
              </Button>
              <Button>
                Receive
              </Button>
              </Grid>
              </Container>
          </VStack> 
         </Flex> */}
        
      
      
        {/* <Flex marginLeft={"6px"} alignItems="center" alignContent={"start"}
        flexBasis="fit-content" border={"2px"}>
        <Box w="100%" h="10px">
              <Heading> Overview </Heading>
        </Box>
          <HStack spacing={"10px"}> */}
            {/* <Box w="100%" h="10px">
              <Heading> Overview </Heading>
            </Box> */}
            {/* <Flex>
              <Flex marginLeft={"400px"} marginTop={"35px"} border={"1px"} borderRadius={"5px"}>
                <Input w="250px"
                  size='xs'
                  placeholder='Search for token,pools or vaults' 
                  borderColor={"white"}
                />
                <Icon as={SearchIcon} w="20px" h="15px" alignSelf={"center"}/>
              </Flex>
              <Menu >
                <MenuButton marginLeft={"10px"} w="100px" h="30px" as={Button} marginTop={"33px"} 
                rightIcon={<ChevronDownIcon />}>
                  USD
                </MenuButton>
              <MenuList >
                <MenuItem>RS</MenuItem>
                <MenuItem>AED</MenuItem>
              </MenuList>
              </Menu>
              </Flex> */}
              
        
          {/* </HStack> */}
       
        {/* </Flex> */}
        
</Flex>
  )
            }
export default App;
