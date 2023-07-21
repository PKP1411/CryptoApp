import { Container, Image, Badge, HStack, Stat, Radio, RadioGroup, VStack, Box, Text, StatLabel, StatNumber, StatHelpText, StatArrow, Progress, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Loader from "./Loader"
import { useParams } from 'react-router-dom'
import axios from "axios";
import { server } from "../index"
import { useEffect } from 'react'
import ErrorComponent from './ErrorComponents'
import Chart from './Chart';







const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

const Item = ({ color = 'black', title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text color={color} fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text color={color}>{value}</Text>
  </HStack>
);




const Coindetails = () => {
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const params = useParams();
  const [days, setDays] = useState('24h')
  const [chartArray, setChartArray] = useState({})

  const btns = ['24h', "7d", "14d", "30d", "60d", "200d", "1y", "max"];
  // const [color, setColor] = useState("black"); 
  // const currencySymbol = currency === "inr" ? "₹" : "eur" ? "€" : "$"; 
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
      case "1y":
        setDays("365d");
        setLoading(true);
        break;
      case "max":
        setDays("max");
        setLoading(true);
        break;

      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  };



  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/${params.id}`
        );

        // const {data:chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vc_currency${currency}&days=${days}`)
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );

        setCoin(data);
        setChartArray(chartData.prices)
        setLoading(false);

      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days])

  if (error) return <ErrorComponent msg="Error while fetching Coin" />


  return (
    <Container maxW={"full"} background={'rgba(254,239,204,0.8)'}>
    <Container maxW={'container.xl'} >
      {
        loading ? <Loader></Loader> : <>

          <Box width={"full"} borderWidth={1}>
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </Box>

            <HStack p="4" overflowX={"auto"}  >
            {btns.map((i) => (
              <Button
                color='white'
                background={'rgba(100, 70, 1, 1.00)'}
                disabled={days === i}
                css={{
                  "&:hover":{
                    color: 'black'
                  }
                }}
                key={i}
                onClick={() => switchChartStats(i)}
              >
                {i}
              </Button>
            ))}
          </HStack>



          <RadioGroup value={currency} onChange={setCurrency} p={'4'}>
            <HStack>
              <Radio value={"inr"} >INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={'4'} p='16' alignItems={'flex-start'}>

            <Text fontSize={"small"} alignSelf={"center"} opacity={'0.6'}>
              Last Updated on{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image src={coin.image.large} w={'16'} objectFit={'contain'}></Image>

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol} {coin.market_data.current_price[currency]}
              </StatNumber>

              <StatHelpText color={coin.market_data.price_change_percentage_24h > 0 ? "green" : "red"} >
                <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge fontSize={"2xl"}
              bgColor={"blackAlpha.900"}
              color={"white"}>
              {`#${coin.market_cap_rank}`}
            </Badge>

            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />

            <Box w="full" p='4'>
              <Item color="green" title={"All Time High"} value={`${currencySymbol} ${coin.market_data.ath[currency]}`} />
              <Item color="red" title={"All Time High"} value={`${currencySymbol} ${coin.market_data.atl[currency]}`} />
              <Item title={"Market Cap"} value={`${currencySymbol} ${coin.market_data.market_cap[currency]}`} />
              <Item title={"Max supply"} value={coin.market_data.max_supply} />
              <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
            </Box>
          </VStack>
        </>
      }
      </Container>
    </Container>
  )
}

export default Coindetails