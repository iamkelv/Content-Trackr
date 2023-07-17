import {
  Flex,
  Grid,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  SearchField,
  Text,
  View,
  useTheme,
} from '@aws-amplify/ui-react'
import React from 'react'
import { GrNotification } from 'react-icons/gr'
import { IoMdArrowDropdown } from 'react-icons/io'

function AdminTopNav() {
  const { tokens } = useTheme()

  return (
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
      <Flex>
        <SearchField label="search" placeholder="Search..." />
      </Flex>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <GrNotification size={30} />
        <View width="4rem">
          <Menu
            trigger={
              <MenuButton
                direction={'row'}
                display={'flex'}
                width={'200px'}
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
                  <View>
                    <Text>Kelvin</Text>
                  </View>
                  <View>
                    <IoMdArrowDropdown size={32} />
                  </View>
                </Flex>
              </MenuButton>
            }
          >
            <MenuItem>Settings</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </View>
      </Flex>
    </Grid>
  )
}

export default AdminTopNav
