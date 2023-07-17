import { useState } from 'react'
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
  SwitchField,
  Text,
  View,
  useTheme,
} from '@aws-amplify/ui-react'

import { GrNotification } from 'react-icons/gr'
import { IoMdArrowDropdown } from 'react-icons/io'
import SideNav from '@/components/admin/SideNav'
import AdminTopNav from '@/components/admin/AdminTopNav'
import DashboardContent from '@/components/admin/DashboardContent'

function AdminPage() {
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
      <DashboardContent />
    </Grid>
  )
}

export default AdminPage
