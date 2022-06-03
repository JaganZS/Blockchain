import React, { useState } from "react";
import './App.css';
import WalletCard from './WalletConnect';
import TransferToken from './Transfer';
import {
    //ChakraProvider,
    Box,
    // Text,
    // //Link,VStack,Code,Grid,theme,Container,
    // Heading,
    Button,
    Text,
    // ButtonGroup,
    // Stack,
    VStack,
    IconButton
    //,Circle
} from '@chakra-ui/react';
import {
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem, Grid, GridItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';

//import ChevronDownIcon from '@chakra-ui/icon';
import { SearchIcon, ChevronDownIcon, TriangleDownIcon, ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
//import Image from 'Desktop/Crypto-BG-Pic.png'
//import ErrorMessage from './ErrorMessage';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react";
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
const changeNetwork = async (networkName, setError) => {
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
        //setError();
        await changeNetwork(networkName, setError);
    };
    return (
        <Flex direction={"column"} width={'80%'} margin={'0 auto'}>
            <Flex><WalletCard /></Flex>
            <Flex>
            <Menu>
                                    <MenuButton as={Button} size='xs' rightIcon={<TriangleDownIcon />} margin={"10px 0px"} width={'100%'}>
                                        <Text fontSize='xs' width={"100%"}> Ethereum </Text>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={() => handleNetworkSwitch("polygon")}>
                                            <Text fontSize='xs'> Polygon </Text> </MenuItem>
                                        <MenuItem onClick={() => handleNetworkSwitch("bsc")}>
                                            <Text fontSize='xs'> BSC </Text> </MenuItem>
                                    </MenuList>
                                </Menu>
            </Flex>
            <Flex justifyContent={'space-between'}>
            <Popover>
                                    <PopoverTrigger>
                                        <Button
                                            size="xs"
                                            bgColor={"#cc703c"}
                                            leftIcon={<ArrowUpIcon />}>
                                            <Text color={"white"}> Send </Text>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent zIndex={4}>
                                        <PopoverArrow />
                                        <PopoverCloseButton />
                                        <PopoverHeader>Transfer ETH Payment!</PopoverHeader>
                                        <PopoverBody> <TransferToken /></PopoverBody>
                                    </PopoverContent>
                                </Popover>
                                <Button size="xs"
                                    bgColor={"white"}
                                    variant={"outline"}
                                    leftIcon={<ArrowDownIcon
                                        color="#cc703c"
                                    />}>
                                    <Text color={"#cc703c"}> Receive </Text>
                                </Button>
                           
            </Flex>
        </Flex>
            

    );
}
