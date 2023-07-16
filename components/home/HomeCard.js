import {
  Card,
  useTheme,
  Text,
  Flex,
  View,
  Heading,
  Image,
  Collection,
  Grid,
} from '@aws-amplify/ui-react'
import React from 'react'

function HomeCard({ items }) {
  const { tokens } = useTheme()
  return (
    <Flex
      direction={'row'}
      margin={'0 auto'}
      justifyContent={'center'}
      marginTop={'5%'}
      backgroundColor={tokens.colors.red}
    >
      <Grid
        templateColumns="1fr 1fr 1fr"
        // templateRows="10rem 10rem"
        gap={tokens.space.xxl}
        justifyContent={'center'}
      >
        {items.map((item, index) => (
          <Flex
            key={index}
            maxWidth={'23.125rem'}
            gap={'5rem'}
            direction={'column'}
            alignItems={'center'}
          >
            <Card
              variation="elevated"
              alignSelf={'center'}
              Width={'100%'}
              minHeight={'14rem'}
              backgroundColor={tokens.colors.white}
              paddingTop={'1rem'}
            >
              <Heading
                level={4}
                padding={'1rem 0'}
                margin={'0 auto'}
                fontWeight={'bolder'}
              >
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Card>
            <View>
              <Image
                alt="Image"
                src={item.image}
                objectFit="initial"
                objectPosition="50% 50%"
                backgroundColor="initial"
                height="75%"
                width="75%"
                opacity="100%"
                onClick={() => alert('📸 Say cheese!')}
              />
            </View>
          </Flex>
        ))}
      </Grid>
    </Flex>
  )
}

export default HomeCard
