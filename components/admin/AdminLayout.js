import React from 'react'
import SideNav from './SideNav'
import { Flex, Grid, View, useTheme } from '@aws-amplify/ui-react'
import DashboardContent from './DashboardContent'
import { useState } from 'react'
import AdminTopNav from './AdminTopNav'

function AdminLayout({ children }) {
  const { tokens } = useTheme()

  const [isChecked, setIsChecked] = useState(true)
  return (
    <Grid
      templateColumns="2fr 8fr"
      // templateRows="10rem 10rem"
      gap={tokens.space.small}
      backgroundColor={'#FFFFFF'}
      position={'relative'}
      justifyContent={'space-between'}
    >
      <SideNav />
      <Flex direction={'column'}>
        <AdminTopNav />
        <View>{children}</View>
      </Flex>
    </Grid>
  )
}

export default AdminLayout
