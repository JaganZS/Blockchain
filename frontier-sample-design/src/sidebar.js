import React, { ReactNode, useState } from 'react';
import WalletApp from './WalletApp'
// import React, {useState} from 'react'
import {ethers} from 'ethers';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  Select,
  useDisclosure,
  BoxProps,
  FlexProps,Button,Grid,Menu,MenuButton,MenuItem,MenuList,GridItem
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBriefcase,
  FiBookmark,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { SearchIcon,ChevronDownIcon } from '@chakra-ui/icons'
import { ReactText } from 'react';


const LinkItems = [
  { name: 'Overview', icon: FiHome },
  { name: 'My Assets', icon: FiBriefcase},
  { name: 'Exchange', icon: FiBriefcase},
  { name: 'Earn', icon: FiTrendingUp },
  { name: 'NFT', icon: FiCompass },
  { name: 'Activity', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];



export default function SimpleSidebar({ children }) {
 
  const [error, setError] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} width="240px">
      
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}


  
const SidebarContent = ({ onClose, ...rest }) => {
  const connect=(e)=>  {
    if (window.ethereum) {
        window.ethereum.request({method : 'eth_requestAccounts'})
    }
    else {
        console.log('Install MetaMask');
    }
};
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      //marginTop={"30px"}
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex >
        {/* <Menu >
          <MenuButton  
            RightIcon={<ChevronDownIcon />}>
              Ethereum
          </MenuButton>
          <MenuList >
            <MenuItem>BSC</MenuItem>
            <MenuItem>Polygon</MenuItem>
          </MenuList>
        </Menu> */}
        <Grid templateColumns='repeat(2, 1fr)' gap={3}>
        <GridItem colSpan={2}>
        <Menu >
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Ethereum
          </MenuButton>
          <MenuList >
          <MenuItem onClick={ connect}> connect </MenuItem>
            <MenuItem> Polygon </MenuItem>
            <MenuItem> BSC </MenuItem>
          </MenuList>
          {/* <Select placeholder='Select chain' onChange={changeNetwork(even)} >
          <option value='polygon'>polygon</option>
          <option value='bsc'>binance</option>
        </Select> */}
        </Menu>
        </GridItem>
          <GridItem rowSpan={2}>
          <Button size="xs">
              Send
          </Button>
          </GridItem>
          {/* <Button size="xs">
              Send
          </Button> */}
          <GridItem rowSpan={2}>
          <Button size="xs">
              Receive
          </Button>
          </GridItem>
          {/* <Button size="xs">
              Receive
          </Button> */}
        </Grid>
        </Flex>
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
     
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} fontSize="10px">
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};



const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text> */}
    </Flex>
  );
};
// export default SimpleSidebar;