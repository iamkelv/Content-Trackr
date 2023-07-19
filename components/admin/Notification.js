import { Divider, Menu, MenuButton, MenuItem } from '@aws-amplify/ui-react'
import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { GrNotification } from 'react-icons/gr'

function Notifications() {
  return (
    <div>
      <Menu
        menuAlign="start"
        gap={'medium'}
        trigger={
          <MenuButton variation="primary" size="large" width="40%">
            <GrNotification size={30} />
            🔔
          </MenuButton>
        }
      >
        <MenuItem onClick={() => alert('notification')}>Notfication</MenuItem>
        <MenuItem onClick={() => alert('notification')}>Notfication</MenuItem>
        <MenuItem onClick={() => alert('notification')}>Notfication</MenuItem>
        <MenuItem onClick={() => alert('notification')}>Notfication</MenuItem>
      </Menu>
    </div>
  )
}

export default Notifications
