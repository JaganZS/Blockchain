import './App.css';
import { Flex, Box,Heading,Input,Button,InputGroup,Icon,Menu,MenuButton,MenuList,
  MenuItem, Grid, GridItem,
  HStack,Stack, VStack, Container} from '@chakra-ui/react'
import { SearchIcon,ChevronDownIcon,QuestionIcon } from '@chakra-ui/icons'
import SimpleSidebar from './sidebar.tsx';

function Headers() {
    return(
      <div className="App" flexBasis={"fit-content"}>
<Box marginTop="10px">
  <Flex marginLeft={"6px"} alignItems="center" alignContent={"start"} padding="14px"
        flexBasis="fit-content" border={"2px"}>
        <Box w="100%">
              <Heading> Overview </Heading>
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
                <MenuButton marginLeft={"10px"} w="100px" h="30px" as={Button} 
                rightIcon={<ChevronDownIcon />}>
                  USD
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