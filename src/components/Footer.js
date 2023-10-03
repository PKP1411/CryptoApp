import { ButtonGroup, Container, IconButton, Stack, Text, Box, HStack, Spacer  } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
 

export const Footer = () => (
    <Container
        maxW="full"
        as="footer"
        role="contentinfo"
        py={{
            base: '4',
            md: '8',
        }}

        color={'white'}
        bgColor={'rgba(100, 70, 1, 1.00)'}
       
    >   
        
        <HStack>
            <Spacer />
        <Stack align={'flex-start'}>
            <Box as="a" href={'#'}>
                About Us
            </Box>
            <Box as="a" href={'#'}>
                Blog
            </Box>
            <Box as="a" href={'#'}>
                Careers
            </Box>
            <Box as="a" href={'#'}>
                Contact Us
            </Box>
            </Stack>
             <Spacer/>
            <Stack align={'flex-start'}>
                <Box as="a" href={'#'}>
                    Help Center
                </Box>
                <Box as="a" href={'#'}>
                    Safety Center
                </Box>
                <Box as="a" href={'#'}>
                    Community Guidelines
                </Box>
            </Stack>

            <Spacer />

            <Stack align={'flex-start'}>
                <Box as="a" href={'#'}>
                    Cookies Policy
                </Box>
                <Box as="a" href={'#'}>
                    Privacy Policy
                </Box>
                <Box as="a" href={'#'}>
                    Terms of Service
                </Box>
                <Box as="a" href={'#'}>
                    Law Enforcement
                </Box>
            </Stack>

            <Spacer />
 
            
        </HStack>
        <Stack
            spacing={{
                base: '4',
                md: '5',
            }}
        >
           
            <Stack justify="space-between" direction="row">
                 
                <ButtonGroup variant="tertiary" align="center">
                    <IconButton as="a" href="https://www.linkedin.com/in/prakash-prajapat-b30645205/" aria-label="LinkedIn" icon={<FaLinkedin  />} />
                    <IconButton as="a" href="https://github.com/PKP1411" aria-label="GitHub" icon={<FaGithub />} />
                    <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
                </ButtonGroup>
            </Stack>
            <Text fontSize="sm" color="fg.subtle">
                &copy; {new Date().getFullYear()} A Crypto Detailed App.
            </Text>
        </Stack>
    </Container>
)