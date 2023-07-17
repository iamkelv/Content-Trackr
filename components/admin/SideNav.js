import React, { useState } from 'react'
import {
  Flex,
  Heading,
  Image,
  Link,
  SwitchField,
  Text,
  View,
  useTheme,
} from '@aws-amplify/ui-react'

function SideNav() {
  const [isChecked, setIsChecked] = useState(true)
  const { tokens } = useTheme()

  return (
    <Flex
      backgroundColor={tokens.colors.blue[10]}
      // position={'fixed'}
      minHeight={'100vh'}
      direction={'column'}
      justifyContent={'center'}
    >
      <Flex
        flex={1}
        padding={tokens.space.medium}
        // backgroundColor={tokens.colors.white}
        direction={'column'}
      >
        <Image
          alt="logo"
          src="./assets/img/logo.png"
          objectFit="initial"
          maxWidth={'50%'}
          objectPosition="50% 50%"
          backgroundColor="initial"
          opacity="100%"
        />
      </Flex>
      <Flex flex={4} direction={'column'} gap={0} padding={'0'}>
        <View padding={tokens.space.small}>MENU</View>
        <Flex direction={'column'} gap={0}>
          <View padding={tokens.space.small}>
            <Link href="/admin">
              <Heading color={tokens.colors.brand.secondary[60]} level={5}>
                Dashboard
              </Heading>
            </Link>
          </View>
          <View padding={tokens.space.small}>
            <Link width={'auto'} href="?links=true">
              <Heading level={5}>My Links</Heading>
            </Link>
          </View>
          <View padding={tokens.space.small}>
            <Link href="?search=true">
              <Heading level={5}>Search</Heading>
            </Link>
          </View>
        </Flex>
      </Flex>
      <Flex flex={2} direction={'column'} gap={0} padding={'0'}>
        <View padding={tokens.space.small}>LINKS</View>
        <Flex direction={'column'} gap={0}>
          <View padding={tokens.space.small}>
            <span></span>
            <Link href="/admin">
              <Heading color={tokens.colors.brand.secondary[60]} level={5}>
                Hashnode
              </Heading>
            </Link>
          </View>
          <View padding={tokens.space.small}>
            <Link width={'auto'} href="?links=true">
              <Heading level={5}>Dev.to</Heading>
            </Link>
          </View>
          <View padding={tokens.space.small}>
            <Link href="?search=true">
              <Heading level={5}>Medium</Heading>
            </Link>
          </View>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={0} padding={'0'}>
        <Flex direction={'column'} gap={0}>
          <View padding={tokens.space.small}>
            <span></span>
            <Link href="/admin">
              <Heading color={tokens.colors.brand.secondary[60]} level={5}>
                Settings
              </Heading>
            </Link>
          </View>
          <View padding={tokens.space.small}>
            {isChecked ? <Text>Dark Mode</Text> : <Text>Light Mode</Text>}

            <SwitchField
              isChecked={isChecked}
              fontSize={'larger'}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
          </View>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SideNav
