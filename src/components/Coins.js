
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { server } from '../index';
import { Container, RadioGroup, Radio, Box } from '@chakra-ui/react';
import Loader from './Loader';
import { HStack, Button } from '@chakra-ui/react';
import ErrorComponents from './ErrorComponents';
import CoinCard from './CoinCard';

// background={'rgba(254,239,204,0.8)'}

const Coins = () => {

  const [coins, setCoins] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPages] = useState(1); 
  const [currency, setCurrency] = useState("inr"); 

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPages(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1);
 


  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);

      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency,page])

  if (error) return <ErrorComponents msg="Error while fetching Coins" />

  return (
    <Container maxW={"full"} background={'rgba(254,239,204,0.8)'}>
      <Container maxW={'container.xl'}>
      {loading ? <Loader /> : <>
         
        <RadioGroup value={currency} onChange={setCurrency} p={'4'}
        >
            <HStack>
              <Box color='rgba(100, 70, 1, 1.00)' fontWeight={'bold'}>
            <Radio mr={'4'} value={"inr"}
              css={{
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "black",
                  backgroundColor: 'black',
                },
                  }}>INR</Radio>
              </Box>
              <Box color='rgba(100, 70, 1, 1.00)' fontWeight={'bold'}>
            <Radio mr={'4'} value={"usd"}
              css={{
                "&:hover": {
                  transform: "scale(1.2)",
                  color: "black",
                  backgroundColor:'black',
                },
                  }}>USD</Radio>
              </Box>
              <Box color='rgba(100, 70, 1, 1.00)' fontWeight={'bold'}>
            <Radio mr={'4'} value={"eur"}
              css={{
          "&:hover": {
            transform: "scale(1.2)",
                  color: "rgb(242, 169, 0)",
                  backgroundColor: 'black',
          },
                  }}>EUR</Radio>
              </Box>
          </HStack>
       </RadioGroup>

        <HStack wrap={"wrap"} justifyContent={"center"} >
          {
            coins.map((i) => (
              <CoinCard
                id = {i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                symbol = {i.symbol}
                img={i.image}
                currencySymbol={currencySymbol}
              />
            ))}
        </HStack>
        <HStack w = {"full"} overflowX={"auto"} p ={'8'}>  
          {
            btns.map((item, index) => (

              <Button bgColor={"blackAlpha.900"}
                key = {index}
                color={"white"}
                onClick={() => changePage(index+1)}>
                {index + 1}
              </Button>
            ))
          }
        
        </HStack>

      </>
        }
      </Container>
    </Container>
  )
}

 

export default Coins;