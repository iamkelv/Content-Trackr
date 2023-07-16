import {
  Flex,
  Button,
  useTheme,
  View,
  Link,
  Grid,
  Image,
} from '@aws-amplify/ui-react'

export const MainNav = () => {
  const { tokens } = useTheme()
  const textColor = tokens.colors.neutral[60]
  return (
    <Grid
      width={'100%'}
      backgroundColor={tokens.colors.white}
      alignItems={'center'}
      templateColumns="1fr 2fr 1fr"
      height={'200px'}
      fontFamily={'sans-serif'}
      fontWeight={'bold'}
      fontSize={'x-large'}
      color={tokens.colors.black}
      gap={tokens.space.small}
    >
      <Flex color={tokens.colors.black}>
        <View>
          <Link color={textColor} padding={'15px 25px'} href="">
            <Image
              alt=" logo"
              src="./assets/img/logo.png"
              objectFit="initial"
              objectPosition="50% 50%"
              backgroundColor="initial"
              height="75%"
              width="75%"
              opacity="100%"
            />
          </Link>
        </View>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        padding={'0 10%'}
      >
        <View>
          <Link color={textColor} padding={'15px 25px'} href="/">
            Home
          </Link>
        </View>
        <View>
          <Link color={textColor} padding={'15px 25px'} href="/about">
            About
          </Link>
        </View>
        <View>
          <Link color={textColor} padding={'15px 25px'} href="/tour">
            Tour
          </Link>
        </View>
        <View>
          <Link color={textColor} padding={'15px 25px'} href="/blog">
            Blog
          </Link>
        </View>
      </Flex>
      <Flex gap={'large'} justifyContent={'center'}>
        <View>
          <Link
            color={tokens.colors.brand.secondary[60]}
            href="/about"
            padding={'15px 25px'}
          >
            Login
          </Link>
        </View>
        <View>
          <Link
            borderRadius={'10px'}
            color={tokens.colors.white}
            padding={'15px 25px'}
            backgroundColor={tokens.colors.brand.secondary[60]}
            href="/tour"
          >
            Register
          </Link>
        </View>
      </Flex>
    </Grid>
  )
}
