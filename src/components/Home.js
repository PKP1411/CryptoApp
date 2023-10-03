import { Container, HStack, Image ,Text, VStack} from '@chakra-ui/react'
import React from 'react'
import btccoin from '../Assets/btc1.jpg'
import eth from '../Assets/eth1.png'
import litecoin from '../Assets/litecoin1.png'
import usdt from '../Assets/usdt.png'
import { motion } from "framer-motion";
import { Footer } from "./Footer"
import  Typo  from './Typo'
  
 
const Home = () => {
  return (
    <Container maxW="full" bgColor={'rgba(254,239,204,0.8)'}>
      <Container maxW = "container.xl"  >
        <HStack wrap={'wrap'} justifyContent={'center'}>
          <motion.div
           
            animate={{
              translateY: "20px",
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image src={btccoin} w={150} h={150} borderRadius={'full'} m={'8'}></Image>
          </motion.div>
          <motion.div
            
            animate={{
              translateY: "20px",
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image src={eth} w={150} h={150} borderRadius={'full'} m={'8'} ></Image>
          </motion.div>

          <motion.div
            
            animate={{
              translateY: "20px",
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image src={litecoin} w={150} h={150} borderRadius={'full'} m={'8'}></Image>
          </motion.div>
           
          <motion.div
           
            animate={{
              translateY: "20px",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image src={usdt} w={150} h={150} borderRadius={'full'} m={'8'}></Image>
          </motion.div>
        </HStack>
        
        
      </Container>
      <VStack m={'6'} ml={'100'} alignContent={'start'} color={'rgba(100, 70, 1, 1.00)'} align="start" maxW="10xl" fontFamily={'mono'} >
        <Text fontSize={'5xl'} fontWeight={'bold'}
          transition={"all 0.3s"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
              color:"gray",
            },
          }}>
          Welcome to CryptoDetailer!
        </Text>
        <Text fontSize={'2xl'}
          transition={"all 0.3s"}
           
          css={{
            "&:hover": {
              transform: "scale(1.1)",
              color: "gray",
          
            },
          }}>
          Explore the World of Cryptocurrencies
        </Text>
      </VStack>

      <Typo/>
     
     <Footer maxW = "full"/>
    </Container>
  )
}

export default Home