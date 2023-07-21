import React from 'react'
import { Container, HStack, Heading } from '@chakra-ui/react'
import { Card,  CardBody,  Box, Text,  } from '@chakra-ui/react'

const Typo = () => {
    return (
        <Container maxW='full' flexWrap={'wrap'}>
            <HStack justifyContent={'space-around'} m='16' alignItems={'flex-start'} flexWrap={'wrap'}>
                <Card maxW='sm' bgColor={'rgb(223, 168, 120)'}
                  
                    transition={"all 0.3s"}
                    css={{
                        "&:hover": {
                            transform: "scale(1.1)",
                            color: "white",
                            margin: '16px'
                            // backgroundColor: 'rgba(254,239,204,0.8)',
                        },
                    }}>
                    <CardBody>
                <Box mt='2' spacing='3'   >
                            <Heading size='md' fontFamily={'mono'}>About CryptoDetailer</Heading>
                            <Text mt='6' fontFamily={'mono'}>
                            CryptoDetailer is your one-stop destination for accessing real-time information and in-depth
                            details about the fascinating world of cryptocurrencies. Whether you're an experienced trader
                            or just getting started in the crypto space, our user-friendly platform offers a wealth of data
                            and insights to empower your decisions.
                    </Text>
                </Box>
              </CardBody>
                </Card>
                <Card maxW='sm' bgColor={'rgb(223, 168, 120)'}
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
                            <Heading size='md' fontFamily={'mono'}>Discover Top Cryptocurrencies</Heading>
                            <Text mt='6' fontFamily={'mono'}>
                            Stay updated with the latest trends in the cryptocurrency market. Explore the top-performing
                            cryptocurrencies based on market capitalization and price movements. From Bitcoin and
                            Ethereum to exciting altcoins, find the most promising digital assets at a glance.
                        </Text>
                    </Box>
                </CardBody>
            </Card>
                <Card maxW='sm' bgColor={'rgb(223, 168, 120)'} transition={"all 0.3s"}
                    css={{
                        "&:hover": {
                            transform: "scale(1.1)",
                            color: "white",
                            margin:'16px'

                        },
                    }}>
                <CardBody>
                        <Box mt='2' spacing='3' >
                            <Heading size='md' fontFamily={'mono'}>Never Miss a Beat with Trending Cryptocurrencies</Heading>
                            <Text mt='6' fontFamily={'mono'}>
                            Discover what's buzzing in the crypto community. Our trending section highlights the most
                            talked-about cryptocurrencies, helping you keep your finger on the pulse of the market and
                            uncover potential opportunities.
                        </Text>
                    </Box>
                </CardBody>
            </Card>
            </HStack>

            <HStack justifyContent={'space-around'} m='16' alignItems={'flex-start'} flexWrap={'wrap'}>
                <Card maxW='sm' bgColor={'rgb(223, 168, 120)'} transition={"all 0.3s"}
                    css={{
                        "&:hover": {
                            transform: "scale(1.1)",
                            color: "white",
                            margin: '16px'

                        },
                    }}>
                    <CardBody>
                        <Box mt='2' spacing='3'   >
                            <Heading size='md' fontFamily={'mono'}>Stay Informed with Crypto News</Heading>
                            <Text mt='6' fontFamily={'mono'}>
                                Knowledge is power, and we've got you covered. Dive into our curated news section to stay informed about the latest developments, updates, and events impacting the cryptocurrency landscape.
                            </Text>
                        </Box>
                    </CardBody>
                </Card>
                <Card maxW='sm' bgColor={'rgb(223, 168, 120)'}
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
                            <Heading size='md' fontFamily={'mono'}>Search for Your Favorite Cryptocurrencies</Heading>
                            <Text mt='6' fontFamily={'mono'}>
                                Looking for specific information about a particular cryptocurrency? Our powerful search feature allows you to quickly find detailed profiles and real-time data for any digital asset in our vast database.
                            </Text>
                        </Box>
                    </CardBody>
                </Card>
                <Card maxW='sm' bgColor={'rgb(223, 168, 120)'}
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
                            <Heading size='md' fontFamily={'mono'}>Join the CryptoDetailer Community</Heading>
                            <Text mt='6' fontFamily={'mono'}>
                                Become a part of our growing community of cryptocurrency enthusiasts. Connect with like-minded individuals, share insights, and discuss the latest trends in our interactive forums and social media channels.
                            </Text>
                        </Box>
                    </CardBody>
                </Card>
            </HStack>
        </Container>
      
  )
}

export default Typo