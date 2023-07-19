import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  CheckboxField,
  Text,
  Flex,
  Link,
  View,
  Menu,
  MenuButton,
  MenuItem,
} from '@aws-amplify/ui-react'
import { AiOutlineMore } from 'react-icons/ai'

export const DataTable = ({ caption, highlightOnHover, size, variation }) => (
  <Table
    caption={caption}
    highlightOnHover={highlightOnHover}
    size={size}
    variation={variation}
  >
    {/* <TableHead>
      <TableRow>
        <TableCell as="th">Citrus</TableCell>
        <TableCell as="th">Stone Fruit</TableCell>
        <TableCell as="th">Berry</TableCell>
      </TableRow>
    </TableHead> */}
    <TableBody>
      <TableRow>
        <TableCell align="center">
          <Flex alignItems={'center'}>
            <CheckboxField name="subscribe" value="yes" />
            <Link href="">
              <Text>
                Demystifying Server-Side Rendering in Next JS: A Beginner's
                Guide
              </Text>
            </Link>
          </Flex>
        </TableCell>
        <TableCell>
          {' '}
          <View>
            {' '}
            <Menu
              trigger={
                <MenuButton>
                  <AiOutlineMore />
                </MenuButton>
              }
            >
              <MenuItem>View</MenuItem>
              <MenuItem>Delete</MenuItem>
            </Menu>
          </View>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">
          <Flex alignItems={'center'}>
            <CheckboxField name="subscribe" value="yes" />
            <Link href="">
              <Text>
                Demystifying Server-Side Rendering in Next JS: A Beginner's
                Guide
              </Text>
            </Link>
          </Flex>
        </TableCell>
        <TableCell>
          {' '}
          <View>
            {' '}
            <Menu
              trigger={
                <MenuButton>
                  <AiOutlineMore />
                </MenuButton>
              }
            >
              <MenuItem>View</MenuItem>
              <MenuItem>Delete</MenuItem>
            </Menu>
          </View>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">
          <Flex alignItems={'center'}>
            <CheckboxField name="subscribe" value="yes" />
            <Link href="">
              <Text>
                Demystifying Server-Side Rendering in Next JS: A Beginner's
                Guide
              </Text>
            </Link>
          </Flex>
        </TableCell>
        <TableCell>
          {' '}
          <View>
            {' '}
            <Menu
              trigger={
                <MenuButton>
                  <AiOutlineMore />
                </MenuButton>
              }
            >
              <MenuItem>View</MenuItem>
              <MenuItem>Delete</MenuItem>
            </Menu>
          </View>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
