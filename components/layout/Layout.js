import React from 'react'
import { MainNav } from './MainNav'
import { Flex, useTheme } from '@aws-amplify/ui-react'
import MainFooter from './MainFooter'

function Layout({ children }) {
  const { tokens } = useTheme()
  return (
    <Flex
      direction={'column'}
      // overflow={'hidden'}
      padding={' 0 10%'}
      width={'100%'}
    >
      <MainNav />
      <div>{children}</div>
      <MainFooter />
    </Flex>
  )
}

export default Layout
