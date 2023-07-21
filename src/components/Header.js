import React from 'react';
import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Icon from "react-crypto-icons";


// Header backgrond = bgColor='rgba(100, 70, 1, 1.00)' 
// background={'rgba(254,239,204,0.8)'}


const Header = () => {
  return <HStack p={'3'} shadow={"base"} bgColor='rgba(100, 70, 1, 1.00)' >

    <HStack border='1px' borderColor=" rgb(242, 169, 0)" p='2' ml= "8">
      <Icon name="btc" size={25} color="white" />
      <Text color={" rgb(242, 169, 0)"} fontWeight={'bold'} 
        fontSize={'20'}
       >    
      DevCrypto
      </Text>
    </HStack>
    <Spacer />
    <Box mr = '8'>
      <Button color={"white"} variant={"unstyled"} pl={"8"}
        css={{
          "&:hover": {
            transform: "scale(1.2)",
            color: "rgb(242, 169, 0)",
          },
        }} 
      >
          <Link to = "/">Home</Link> 
      </Button>
     
      <Button color={"white"} variant={"unstyled"} pl={"8"}
        css={{
          "&:hover": {
            transform: "scale(1.2)",
            // background:"yellow",
            color: "rgb(242, 169, 0)",
          },
        }} >
          <Link to="/coins">Coins</Link>
      </Button>

      <Button color={"white"} variant={"unstyled"} pl={"8"}
        css={{
          "&:hover": {
            transform: "scale(1.2)",
            color: "rgb(242, 169, 0)",
          },
        }} >
          <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button color={"white"} variant={"unstyled"} pl={"8"}
        css={{
          "&:hover": {
            transform: "scale(1.2)",
            // background:"yellow",
            color: "rgb(242, 169, 0)",
          },
        }} >
        <Link to="/aboutus">About Us</Link>
      </Button>
    </Box>
     


    </HStack>  
     
}

export default Header