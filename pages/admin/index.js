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
import AdminLayout from '@/components/admin/AdminLayout'
import { withAuthenticator } from '@aws-amplify/ui-react'
function AdminPage() {
  return (
    <AdminLayout>
      <DashboardContent />
    </AdminLayout>
  )
}

export default withAuthenticator(AdminPage)
