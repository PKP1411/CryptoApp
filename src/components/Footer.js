import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
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
        <Stack
            spacing={{
                base: '4',
                md: '5',
            }}
        >
            <Stack justify="space-between" direction="row" align="center">
                <ButtonGroup variant="tertiary">
                    <IconButton as="a" href="https://www.linkedin.com/in/prakash-prajapat-b30645205/" aria-label="LinkedIn" icon={<FaLinkedin />} />
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