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
    <Grid
      templateColumns={{ medium: '1fr 1fr', base: '1fr' }}
      gap={tokens.space.small}
      order={'revert'}
      style={{ gridAutoFlow: 'column' }}
    >
      <Flex
        direction={'column'}
        gap={'medium'}
        backgroundColor={tokens.colors.white}
      >
        <View>
          <Heading
            level={2}
            maxWidth={{ large: '60%', medium: '100%' }}
            // fontSize={{
            //   large: tokens.fontSizes.xxxxl,
            //   medium: tokens.fontSizes.xxl,
            //   base: tokens.fontSizes.medium,
            // }}
            fontWeight={'bolder'}
            fontFamily={'inter'}
          >
            Track and optimise your content writng effortlessly
          </Heading>
        </View>
        <View>
          <Text
            width={{ medium: '70%', base: '100%' }}
            lineHeight={'2em'}
            fontSize={{
              medium: tokens.fontSizes.medium,
              base: tokens.fontSizes.small,
            }}
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
        display={{ medium: 'flex', base: 'none' }}
      >
        <Image
          alt="User "
          src="./assets/img/user.png"
          objectFit="initial"
          objectPosition="50% 50%"
          backgroundColor="initial"
          opacity="100%"
          width={{ medium: 'inherit', base: '250px' }}
          height={{ medium: 'inherit', base: '250px' }}
          minWidth={'fit-content'}
        />
        <Image
          display={{ medium: 'flex', base: 'none' }}
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
          display={{ medium: 'flex', base: 'none' }}
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
