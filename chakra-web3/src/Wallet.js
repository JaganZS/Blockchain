import React, {useState} from 'react'
import {ethers} from 'ethers';
import { FaSun,FaMoon } from 'react-icons/fa';
//import {PhoneIcon} from '@chakra-ui/icon'
import {
    Text,
    Heading,
    Button,
    Flex,
    // ButtonGroup,
    Stack,
    VStack,
    IconButton,
    Container,Box,useColorMode  
  } from '@chakra-ui/react';
  import ChevronDownIcon from '@chakra-ui/icon'


const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect to Wallet');
    const [chainId, setChainID] = useState(null);
    const CHAINIDS = {
        1: "Ethereum Main Network",
        3: "Ropsten Test Network",
        4: "Rinkeby Test Network",
        5: "Goerli Test Network",
        42: "Kovan Test Network",
        56: "Binance smart chain Mainnet",
        43114 : "Avalanche",
        137 : "Polygon"
      };
    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({method : 'eth_requestAccounts'})
            .then(result => {
                accountChangedHandler(result[0]);
            })
        }
        else {
            setErrorMessage('Install MetaMask');
        }
    }
    const accountChangedHandler = (newAccount) => {
        setConnButtonText('Connected');
        setDefaultAccount(newAccount);
        getUserBalance(newAccount);
    }
    const getUserBalance = (address) => {
        window.ethereum.request({method : 'eth_getBalance', params : [address, 'latest']})
        .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
        })
         setChainID(window.ethereum.networkVersion);
    }
    
    const getCurrentChainID = (chainId) => {
        return CHAINIDS[chainId];
    }
    const chainChangedHandler = () => { 
         window.location.reload();
    }
    window.ethereum.on('accountsChanged', accountChangedHandler);
    window.ethereum.on('chainChanged', chainChangedHandler);
    const {colorMode, toggleColorMode }=useColorMode();
    return (
        <Flex direction={"column"} width={"100%"}>
            <Flex justifyContent={"flex-end"}>
                    <Button onClick={connectWalletHandler} 
                            size='md'
                            height='40px'
                            width='200px'
                            border='2px'
                            borderColor='green.500'
                            colorScheme='teal'
       
        //marginRight={900}
        leftIcon={<ChevronDownIcon />}>
{connButtonText}</Button>
<IconButton icon={colorMode==='light' ? <FaSun /> : <FaMoon />} 
      isRound='true' 
      size="md" 
      alignSelf="flex-end"
      float={'right'}
      onClick={toggleColorMode}

      />
       </Flex>

<Container maxW='2xl'>
        <Heading mb='8' 
        fontWeight={'extrabold'} 
        fontSize='4xl'
        size='lg'
        bgGradient='linear(to-r,orange.500, orange.300, blue.400)'
        //bgColor={'green.500'} 
        bgClip={'text'}> {"Connection to MetaMask Wallet"} </Heading>
        <div className='walletConnection'>
        <Heading mb='6' 
        fontWeight={'semibold'} 
        size='lg' 
        bgColor='teal.400'
        bgClip={'text'}> Chain Name: {getCurrentChainID(chainId)}
        {connectWalletHandler()}</Heading>
        </div>

        {/* <Button onClick={connectWalletHandler} 
        size='md'
        height='48px'
        width='250px'
        border='2px'
        borderColor='green.500' colorScheme='teal' leftIcon={<ChevronDownIcon />}>
{connButtonText}</Button> */}

{/* <Box > //bg='green.200' w='100%' p={4} color='white'> */}
<Box>
<Text as='i' fontSize={'md'}>
Account Address: </Text> </Box>
<Box bg='green.200' w='80%' p={4} color='black'> <Text fontSize={'larger'}> {defaultAccount} </Text>
</Box>
<Box>
    <Text as='i' fontSize={'md'}>
Balance: </Text> </Box> 
<Box bg='green.200' w='80%' p={4} color='black'> <Text fontSize={'larger'}> {userBalance} </Text>
</Box>
        
        {errorMessage}
             
        </Container>
        </Flex>
    )
}
export default WalletCard;