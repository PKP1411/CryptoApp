import React, { useEffect, useState } from 'react'
import axios from "axios";
import { server } from '../index';
import { Container } from '@chakra-ui/react';
import Loader from './Loader';
import { HStack, VStack, Image, Heading,Text } from '@chakra-ui/react';
import ErrorComponents from './ErrorComponents';

const Exchanges = () => {

  const [exchanges, setExchanges] = useState(); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 


  useEffect(() => {
    const fetchExchanges = async () => {
      try {

        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false); 

      } catch (error) {
        setError(true); 
        setLoading(false); 
      }
    }; 
    fetchExchanges(); 
  }, [])
  
  if(error) return <ErrorComponents msg = "Error while fetching Exchanges"/>

  return (
    <Container maxW={"full"} background={'rgba(254,239,204,0.8)'} >
      <Container maxW={'container.xl'}>
      {loading ? <Loader /> : <>
        <HStack wrap={"wrap"} justifyContent={"center"}>
        {
          exchanges.map((i) => (
            <ExchangeCard
              key = {i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url = {i.url}
            />
          )) }
        </HStack>
        </>
        }
      </Container>
     </Container>
  )
}

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack bg  = {"gray.100"}
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchanges;