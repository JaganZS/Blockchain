import React,{ useState} from "react";
import './App.css';
import WalletCard from './Wallet';
import TransferToken from './transfer';
import {
  //ChakraProvider,
  Box,
  // Text,
  // //Link,VStack,Code,Grid,theme,Container,
  // Heading,
  Button,
  // ButtonGroup,
  // Stack,
  VStack,
  IconButton
  //,Circle
} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

import ChevronDownIcon from '@chakra-ui/icon';
//import Image from 'Desktop/Crypto-BG-Pic.png'
//import ErrorMessage from './ErrorMessage';
const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org"
    ],
    blockExplorerUrls: ["https://bscscan.com"]
  }
};
const changeNetwork = async ({ networkName, setError }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName]
        }
       ]
    });
  } catch (err) {
    setError(err.message);
  }
};
export default function App() {
  const [error, setError] = useState(null);
  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };
  return (
    <div>
      {/* <Box boxSize='sm'>
  <Image src={'Image'} alt='BG Image' /> */}
   
      <VStack>
    
      
    <WalletCard />
   
    {/* <h1 className="text-xl font-semibold text-gray-700 text-center"> */}
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Switch Chains
  </MenuButton>
  <MenuList>
    <MenuItem onClick={() => handleNetworkSwitch("polygon")}> Polygon </MenuItem>
    <MenuItem onClick={() => handleNetworkSwitch("bsc")}> BSC </MenuItem>
  </MenuList>
</Menu>
    

<TransferToken />
          {/* Switch Chains
        </h1>
        <div className="mt-4">
          <Button size='md'
        height='30px'
        width='140px'
        border='2px'
        borderColor='green.500' colorScheme='teal'
            onClick={() => handleNetworkSwitch("polygon")}
            className="mt-2 mb-2 btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Switch to Polygon
          </Button>
          <Button size='md'
        height='30px'
        width='120px'
        border='2px'
        borderColor='green.500' colorScheme='teal'
            onClick={() => handleNetworkSwitch("bsc")}
            
          >
            Switch to BSC
          </Button>
          <ErrorMessage message={error} />
        </div> */}
           
      </VStack>
      {/* </Box> */}
    </div>
  );
}
