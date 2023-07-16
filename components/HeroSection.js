import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  View,
  useTheme,
} from '@aws-amplify/ui-react'
import React from 'react'

function HeroSection() {
  const { tokens } = useTheme()
  return (
    <Grid templateColumns="1fr 1fr" gap={tokens.space.small}>
      <Flex
        direction={'column'}
        gap={'medium'}
        backgroundColor={tokens.colors.white}
      >
        <View>
          <Heading
            level={2}
            maxWidth={{ large: '60%', medium: '100%' }}
            fontSize={tokens.fontSizes.xxxxl}
            fontWeight={'bolder'}
            fontFamily={'inter'}
          >
            Track and optimise your content writng effortlessly
          </Heading>
        </View>
        <View>
          <Text
            width={'70%'}
            lineHeight={'2em'}
            fontSize={tokens.fontSizes.medium}
          >
            Are you struggling to keep track of all your content marketing
            efforts?Do you find it challenging to measure the impact and
            effectiveness ofyour content?Look no further! Content Tracker is
            here to help you streamline your content management process and
            achieve better results.
          </Text>
        </View>
        <View>
          <Button
            padding={'15px 25px'}
            color={tokens.colors.brand.secondary[60]}
            border={tokens.colors.border.secondary[60]}
            onClick={() => alert('👋 hello')}
          >
            Discover Now
          </Button>
        </View>
      </Flex>
      <Flex
        position={'relative'}
        backgroundColor={tokens.colors.green}
        width={'100%'}
      >
        <Image
          alt="User "
          src="./assets/img/user.png"
          objectFit="initial"
          objectPosition="50% 50%"
          backgroundColor="initial"
          opacity="100%"
          minWidth={'fit-content'}
        />
        <Image
          alt="User "
          src="./assets/img/rate.png"
          objectFit="initial"
          objectPosition="50% 50%"
          backgroundColor="initial"
          opacity="100%"
          top={'75%'}
          left={'35%'}
          position={'absolute'}
        />{' '}
        <Image
          alt="User "
          position={'absolute'}
          left={'40%'}
          src="./assets/img/map.png"
          objectFit="initial"
          objectPosition="50% 50%"
          backgroundColor="initial"
          opacity="100%"
        />{' '}
      </Flex>
    </Grid>
  )
}

export default HeroSection
