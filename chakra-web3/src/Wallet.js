import React, {useState} from 'react'
import {ethers} from 'ethers';
import {
    ChakraProvider,Box,Text,Link,VStack,Code,Grid,theme,Container,Heading,Button, ButtonGroup,
    Stack
  } from '@chakra-ui/react';

const WalletCard = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
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
    return (
        <div className='walletCard'>
            <Stack spacing={6}>
        <Heading> {"Connection to MetaMask wallet"} </Heading>
        <div className='walletConnection'>
        <Heading> Chain Name: {getCurrentChainID(chainId)}
        {connectWalletHandler()}</Heading>
        </div>
        <Button onClick={connectWalletHandler} colorScheme='teal' size='lg'>{connButtonText}</Button>
        <div className='accountDisplay'>
            <h3> Account Address: - {defaultAccount}</h3>
        </div>
        <div className='balanceDisplay'>
            <h3> Balance: {userBalance}</h3>
        </div>
        </Stack>
        {errorMessage}
        </div>
    )
}
export default WalletCard;