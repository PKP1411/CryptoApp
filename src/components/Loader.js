import React from 'react'

import { Box, CircularProgress, HStack, Spinner, Text,VStack } from '@chakra-ui/react'

const Loader = () => {
  return (
    // <div>Loader</div>
      <HStack h = "90vh" justifyContent={"center"}>
          <Box transform={"scale(1)"}>
              <CircularProgress color="black" isIndeterminate m={'4'} />
              <Text fontSize={"2xl"}>Loading...</Text>   
          </Box>    
      </HStack>
      
  )
}

export default Loader