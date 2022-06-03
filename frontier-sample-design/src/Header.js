import './App.css';
import { Flex, Box,Heading,Input,Button,InputGroup,Icon,Menu,MenuButton,MenuList,
  MenuItem, Grid, GridItem,Text,
  HStack,Stack, VStack, Container} from '@chakra-ui/react'
import { SearchIcon,ChevronDownIcon,QuestionIcon,TriangleDownIcon } from '@chakra-ui/icons'
import SimpleSidebar from './sidebar.js';

function Headers() {
    return(
      <div className="App" flexBasis={"fit-content"} style={{'width':'100%'}}>
<Box  width={"100%"} bgColor="gray.100">
  <Flex alignItems="center" alignContent={"start"} padding="14px" 
        flexbasis="fit-content" 
        // border={"2px"} 
        justifyContent="space-between">
        <Box>
          <Heading as='h3' size='lg'> Overview </Heading>
              {/* <Text fontSize={"4xl"}> Overview </Text> */}
        </Box>
            <Flex>
              <Flex marginLeft={"400px"} border={"1px"} borderRadius={"5px"} h="27px">
                <Input w="250px"
                  size='xs'
                  placeholder='Search for token,pools or vaults' 
                  borderColor={"white"}
                />
                <Icon as={SearchIcon} w="20px" h="15px" alignSelf={"center"}/>
              </Flex>
              <Menu >
                <MenuButton marginLeft={"10px"} w="100px" h="30px" as={Button} bgColor="white" border={"1px"} borderColor={"gray"}
    
                rightIcon={<TriangleDownIcon />}>
                  <Text fontSize="xs"> USD </Text>
                </MenuButton>
              <MenuList >
                <MenuItem>RS</MenuItem>
                <MenuItem>AED</MenuItem>
              </MenuList>
              </Menu>
              <Icon marginLeft={"20px"} w="20px" h="20px" alignSelf={"center"}>
                <QuestionIcon />
              </Icon>
              </Flex>
              
{/*         
          </HStack> */}
       
        </Flex>
    
</Box>
        </div>
    )
}
    export default Headers;