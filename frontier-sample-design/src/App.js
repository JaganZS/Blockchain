// import logo from './logo.svg';
import './App.css';
import { Flex, Box,Heading,Input,Button,InputGroup,Icon,Menu,MenuButton,MenuList,
  MenuItem, 
  HStack,Stack, VStack} from '@chakra-ui/react'
import { SearchIcon,ChevronDownIcon } from '@chakra-ui/icons'

// import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return(
    <div className="App">
      <Flex w={"20%"} h="100%">

      </Flex>
      
        <Flex marginLeft={"250px"} alignItems="center" alignContent={"start"}>
        <Box w="100%" h="10px">
              <Heading> Overview </Heading>
        </Box>
          <HStack spacing={"10px"}>
            {/* <Box w="100%" h="10px">
              <Heading> Overview </Heading>
            </Box> */}
            <Flex>
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
              </Flex>
              
        
          </HStack>
       
        </Flex>
        
     
    {/* <Heading>
      This is chakra
    </Heading> */}
  </div>
  );
}

export default App;
