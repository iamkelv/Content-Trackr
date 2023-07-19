import {
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  SearchField,
  Text,
  View,
  useTheme,
} from '@aws-amplify/ui-react'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrNotification } from 'react-icons/gr'
import { IoMdArrowDropdown } from 'react-icons/io'
import CardUI from '../ui/Card'
import Notifications from './Notification'
import { useRouter } from 'next/router'

function AdminTopNav() {
  const route = useRouter()
  const { tokens } = useTheme()

  return (
    <CardUI>
      <Grid
        backgroundColor={tokens.colors.white}
        padding={tokens.space.medium}
        templateColumns="2fr 1fr 1fr"
        gap={tokens.space.small}
        width={'100%'}
        alignItems={'center'}
        maxHeight={'5.5rem'}
      >
        <Flex display={{ large: 'flex', base: 'none' }}>
          <Heading level={2} fontWeight={'bolder'}>
            Dashboard
          </Heading>
        </Flex>
        <Flex display={{ medium: 'flex', base: 'none' }} alignItems={'center'}>
          <Flex display={{ medium: 'none', small: 'flex' }}>
            <AiOutlineMenu />
          </Flex>
          <SearchField label="search" placeholder="Search..." />
        </Flex>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Flex display={{ medium: 'flex', base: 'flex' }}>
            <Notifications />
          </Flex>

          <View width="4rem">
            <Menu
              trigger={
                <MenuButton
                  direction={'row'}
                  display={'flex'}
                  width={{ medium: '150px', base: 'auto' }}
                  border={'none'}
                >
                  <Flex alignItems={'center'}>
                    <Image
                      alt="Amplify logo"
                      src="./assets/img/test-user.png"
                      objectFit="initial"
                      objectPosition="50% 50%"
                      backgroundColor="initial"
                      maxHeight="50px"
                      maxWidth="50px"
                      borderRadius={'50%'}
                      opacity="100%"
                      onClick={() => alert('📸 Say cheese!')}
                    />
                    <Flex
                      alignItems={'center'}
                      display={{ medium: 'block', base: 'none' }}
                    >
                      <View>
                        <Text>Kelvin</Text>
                      </View>
                      <View>
                        <IoMdArrowDropdown size={32} />
                      </View>
                    </Flex>
                  </Flex>
                </MenuButton>
              }
            >
              <MenuItem>Settings</MenuItem>
              <MenuItem>
                <Link href="admin/profile">Profile</Link>
              </MenuItem>
              <MenuItem onClick={() => route.replace({ host: '/auth' })}>
                Logout
              </MenuItem>
            </Menu>
          </View>
        </Flex>
      </Grid>
    </CardUI>
  )
}

export default AdminTopNav
