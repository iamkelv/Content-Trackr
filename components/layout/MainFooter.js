import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useTheme,
} from '@aws-amplify/ui-react'
import Link from 'next/link'
import React from 'react'

function MainFooter() {
  const { tokens } = useTheme()
  return (
    <Grid
      templateColumns="2fr 1fr 1fr 1fr"
      gap={tokens.space.small}
      marginTop={'5%'}
    >
      <Flex direction={'column'} gap={'large'} padding={'medium'}>
        <Flex>
          <Image
            alt=" logo"
            src="./assets/img/logo.png"
            objectFit="initial"
            objectPosition="50% 50%"
            backgroundColor="initial"
            height="100%"
            width="100%"
            maxWidth={'30%'}
            opacity="100%"
          />
        </Flex>
        <Flex>
          <Text>Track your Articles.</Text>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={'large'} padding={'medium'}>
        <Flex>
          <Heading level={4} fontWeight={'bold'}>
            Company
          </Heading>
        </Flex>
        <Flex direction={'column'}>
          <Link href={'/about'}>About</Link>
          <Link href={'/'}>Careers</Link>
          <Link href={'/'}>Contact Us</Link>
          <Link href={'/'}>Privacy & Policy</Link>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={'large'} padding={'medium'}>
        <Flex>
          <Heading level={4} fontWeight={'bold'}>
            Contact
          </Heading>
        </Flex>
        <Flex direction={'column'}>
          <Link href={'/about'}>Help/FAQ</Link>
          <Link href={'/'}>Guide</Link>
          <Link href={'/'}>Support</Link>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={'large'} padding={'medium'}>
        <Flex>
          <Heading level={4} fontWeight={'bold'}>
            More
          </Heading>
        </Flex>
        <Flex direction={'column'}>
          <Link href={'/'}>Our Blog</Link>
          <Link href={'/'}>Login</Link>
          <Link href={'/'}>Demo</Link>
        </Flex>
      </Flex>
    </Grid>
  )
}

export default MainFooter
