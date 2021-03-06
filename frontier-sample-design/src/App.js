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


function App() {
  return (
    <Flex className="App" flexBasis={"fit-content"}>
      <SidebarWithHeader />

      <Flex direction={'column'} width='85%'>

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

  )
}
export default App;
