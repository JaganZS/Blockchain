// import logo from './logo.svg';
import './App.css';
import { Flex, Box,Heading,Input,Button,InputGroup,Icon,Menu,MenuButton,MenuList,
  MenuItem, Grid, GridItem,
  HStack,Stack, VStack, Container} from '@chakra-ui/react'
import { SearchIcon,ChevronDownIcon } from '@chakra-ui/icons'
import SimpleSidebar from './sidebar.js';
import Headers from './Header';
import SidebarWithHeader from './sidebarnew.tsx';
import WalletConnect from './WalletConnect';
import WalletApp from './WalletApp';
//import WalletCard from './WalletCard';

// import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return(
    <Flex className="App" flexBasis={"fit-content"}>
      {/* <WalletCard /> */}
      {/* <SimpleSidebar /> */}
      <SidebarWithHeader />
      <Headers />
      
    </Flex>
  )
            }
export default App;
