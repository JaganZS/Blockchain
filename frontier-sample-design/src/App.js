// import logo from './logo.svg';
import './App.css';
import {
  Flex, Box, Heading, Input, Button, InputGroup, Icon, Menu, MenuButton, MenuList,
  MenuItem, Grid, GridItem,
  HStack, Stack, VStack, Container
} from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import SimpleSidebar from './sidebar.js';
import Headers from './Header';
import SidebarWithHeader from './sidebarnew.tsx';
import WalletConnect from './WalletConnect';
import WalletApp from './WalletApp';
import Chart from './Chart';
import DoughnutChart from './Doughchart';
import Tokenbal from './Tokenbal';

//import WalletCard from './WalletCard';

// import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <Flex className="App" flexBasis={"fit-content"}>
      {/* <WalletCard /> */}
      {/* <SimpleSidebar /> */}
      <SidebarWithHeader />

      <Flex direction={'column'} width='100%'>

        <Headers />
        <Flex margin={'17px'}>
          <Flex direction={'column'}>
            <DoughnutChart />
            <Chart />
          </Flex>
          <Flex marginLeft='15px'>
            <Tokenbal />
          </Flex>

        </Flex>

      </Flex>


    </Flex>

    //   <div className='App1' style={{'display':'flex','marginTop':'60px'}}>
    //   <div style={{'width':'16%'}}></div>
    //   <div style={{'width':'80%'}}>
    //   <Grid templateColumns='50% 50%' gap={7} >
    //   <GridItem > 
    //   <SidebarWithHeader />
    //   <Headers />
    //     <DoughnutChart /> 
    //   <Box>
    // <Chart /> 
    // </Box>
    // </GridItem>
    //   {/* <GridItem > <TokBal /> </GridItem> */}
    // </Grid>

    //   </div>



    // </div>

  )
}
export default App;
