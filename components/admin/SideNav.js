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
import {
  AiOutlineAppstore,
  AiOutlineLink,
  AiOutlineSetting,
} from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { BiCircle } from 'react-icons/bi'

function SideNav() {
  const [isChecked, setIsChecked] = useState(true)
  const { tokens } = useTheme()

  return (
    <Flex
      backgroundColor={tokens.colors.blue[10]}
      minHeight={'100vh'}
      direction={'column'}
      justifyContent={'center'}
    >
      <Flex flex={1} padding={tokens.space.medium} direction={'column'}>
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
          <Flex padding={tokens.space.small} alignItems={'center'}>
            <AiOutlineAppstore size={20} color="#C540BF" />
            <Link href="/admin">
              <Heading
                color={tokens.colors.brand.secondary[60]}
                fontSize={'large'}
              >
                Dashboard
              </Heading>
            </Link>
          </Flex>
          <Flex alignItems={'center'} padding={tokens.space.small}>
            <AiOutlineLink size={20} color="#C540BF" />
            <Link width={'auto'} href="?links=true">
              <Heading
                color={tokens.colors.brand.secondary[60]}
                fontSize={'large'}
              >
                My Links
              </Heading>
            </Link>
          </Flex>
          <Flex alignItems={'center'} padding={tokens.space.small}>
            <BsChatDots size={20} color="#C540BF" />
            <Link href="?search=true">
              <Heading
                color={tokens.colors.brand.secondary[60]}
                fontSize={'large'}
              >
                Search
              </Heading>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex flex={2} direction={'column'} gap={0} padding={'0'}>
        <View padding={tokens.space.small}>LINKS</View>
        <Flex direction={'column'} gap={0}>
          <Flex padding={tokens.space.small} alignItems={'center'}>
            <BiCircle
              size={20}
              className="bg-[#C540BF] text-[#C540BF] rounded-full"
            />
            <span></span>
            <Link href="/admin">
              <Heading color={tokens.colors.brand.secondary[60]} level={5}>
                Hashnode
              </Heading>
            </Link>
          </Flex>
          <Flex padding={tokens.space.small} alignItems={'center'}>
            <BiCircle
              size={20}
              className="bg-[#F472B6] text-[#F472B6] rounded-full"
            />
            <Link width={'auto'} href="?links=true">
              <Heading color="#F472B6" level={5}>
                Dev.to
              </Heading>
            </Link>
          </Flex>
          <Flex padding={tokens.space.small} alignItems={'center'}>
            <BsChatDots
              size={20}
              color="#FBBF24"
              className="bg-[#FBBF24] rounded-full"
            />
            <Link href="?search=true">
              <Heading level={5} color={'#FBBF24'}>
                Medium
              </Heading>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={0} padding={'0'}>
        <Flex direction={'column'} gap={0}>
          <Flex padding={tokens.space.small} alignItems={'center'}>
            <AiOutlineSetting size={20} color="#C540BF" />
            <span></span>
            <Link href="/admin">
              <Heading color={tokens.colors.brand.secondary[60]} level={5}>
                Settings
              </Heading>
            </Link>
          </Flex>
          <Flex padding={tokens.space.small}>
            {isChecked ? (
              <MdDarkMode size={20} />
            ) : (
              <MdOutlineLightMode size={20} />
            )}

            <SwitchField
              isChecked={isChecked}
              fontSize={'larger'}
              onChange={(e) => {
                setIsChecked(e.target.checked)
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SideNav
