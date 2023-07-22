import React from 'react'
import { Card, CardBody, Box, Text, Heading, Container, HStack, Spacer} from '@chakra-ui/react'
import { Footer } from './Footer'


const Aboutus = () => {
  return (
    <Container maxW='full' flexWrap={'wrap'}>
      <HStack justifyContent={'space-around'} m='16' alignItems={'flex-start'} flexWrap={'wrap'}>
        <Card maxW='xl' bgColor={'rgb(223, 168, 120)'}
          transition={"all 0.3s"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
              color: "white",
              margin: '16px'

            },
          }}>
          <CardBody>
            <Box mt='2' spacing='3'  >
              <Heading size='md' fontFamily={'mono'}>Code Hack 2023</Heading>
              <Text mt='6' fontFamily={'mono'}>
                Code Hack is an annual hackathon series by Dev Code Community which is currently consisting of
                around 700+ enthusiastic developers helping each other build & upskill.This hackathon is a beginner-friendly Hackathon any college-going undergrad or student can register and hack their level best to gain experience and understand how hackathons go!
              </Text>
            </Box>
          </CardBody>
        </Card> 

        
        <Card maxW='xl' bgColor={'rgb(223, 168, 120)'}
          transition={"all 0.3s"}
          css={{
            "&:hover": {
              transform: "scale(1.1)",
              color: "white",
              margin: '16px'

            },
          }}>
          <CardBody>
            <Box mt='2' spacing='3'  >
              <Heading size='md' fontFamily={'mono'}>Dev Code Community:</Heading>
              <Text mt='6' fontFamily={'mono'}>
                A tech enthusiast community that will help you to code, learn new technical skills from scratch, exposure to various technical workshops, and yes will surely provide you with the opportunity to grow your network with industry experts. It is a platform that offers up some of the most amazing hackathons, eventful meet-ups, and some boot camps with outcome-based learning. It also aims to be the one-stop destination for developers with plentiful hard-core reliable resources and readily provides exciting event updates!
              </Text>
            </Box>
          </CardBody>
        </Card> 
        
        


        
      </HStack>
      <br />
      <br />
      <br />
      <br />
      
      <Footer alignItems={'flex-end'} />
      
    </Container>
  )
}

export default Aboutus