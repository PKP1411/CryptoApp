
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// Header backgrond = bgColor='rgba(100, 70, 1, 1.00)' 
import { Divider } from '@chakra-ui/react'


const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
    <Link to={`/coin/${id}`}>
        
        <VStack bg = {'gray.100'}
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
            // color='rgba(100, 70, 1, 1.00)'
        >
            
            <Image
                src={img}
                w={"10"}
                h={"10"}
                objectFit={"contain"}
                alt={"Exchange"}
            />
            <Heading size={"md"} noOfLines={1}>
                {symbol}
            </Heading>
            
            <Divider borderColor='rgba(100, 70, 1, 1.00)' width={'full'} />

            <Text noOfLines={1}>{name}</Text>
            <Text noOfLines={1}>{price ? `${currencySymbol} ${price}` : "NA"}</Text>
        </VStack>
    </Link>
);

export default CoinCard;