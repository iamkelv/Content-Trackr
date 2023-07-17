import {
  CheckboxField,
  Flex,
  Grid,
  Heading,
  Loader,
  Menu,
  MenuButton,
  MenuItem,
  Text,
  View,
  useTheme,
} from '@aws-amplify/ui-react'
import { AiOutlineMore } from 'react-icons/ai'
import AdminTopNav from './AdminTopNav'
import CardUI from '../ui/Card'

function DashboardContent() {
  const { tokens } = useTheme()
  return (
    <Flex direction={'column'}>
      <AdminTopNav />

      <Grid
        templateColumns="3fr 1.2fr "
        gap={tokens.space.small}
        width={'100%'}
      >
        <Flex width={'100%'}>
          <CardUI props={{ color: 'red', width: '100%' }}>
            <Flex marginBottom={'medium'}>
              <Heading level={5} fontFamily={tokens.fontWeights.bold}>
                Recent Articles
              </Heading>
            </Flex>
            <Flex marginBottom={'medium'}>
              <Grid
                templateColumns="1fr 1fr 1fr"
                gap={tokens.space.small}
                justifyContent={'space-between'}
                columnGap={'medium'}
                width={'100%'}
                marginBottom={'large'}
              >
                <CardUI>
                  <Flex
                    width={'100%'}
                    marginBottom={'large'}
                    justifyContent={'space-between'}
                  >
                    <Heading level={5} fontWeight={tokens.fontWeights.medium}>
                      Hashnode
                    </Heading>
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
                  </Flex>
                  <Flex marginBottom={'large'} direction={'column'}>
                    <Flex width={'100%'} justifyContent={'space-between'}>
                      <Text fontWeight={'normal'}>Weekly contents</Text>
                      <Text>55</Text>
                    </Flex>
                    <Flex>
                      <Loader
                        variation="linear"
                        percentage={55}
                        filledColor={'#C540BF'}
                        isDeterminate
                        isPercentageTextHidden={true}
                      />
                    </Flex>
                  </Flex>
                  <Flex>
                    <View>
                      <CheckboxField
                        label="96 followers"
                        name="subscribe"
                        value="yes"
                        checked
                      />
                    </View>
                  </Flex>
                </CardUI>
                <CardUI>
                  <Flex
                    width={'100%'}
                    marginBottom={'large'}
                    justifyContent={'space-between'}
                  >
                    <Heading level={5} fontWeight={tokens.fontWeights.medium}>
                      Dev.to
                    </Heading>
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
                  </Flex>
                  <Flex marginBottom={'large'} direction={'column'}>
                    <Flex width={'100%'} justifyContent={'space-between'}>
                      <Text fontWeight={'normal'}>All contents</Text>
                      <Text>55</Text>
                    </Flex>
                    <Flex>
                      <Loader
                        variation="linear"
                        filledColor={'#F472B6'}
                        percentage={55}
                        isDeterminate
                        isPercentageTextHidden={true}
                      />
                    </Flex>
                  </Flex>
                  <Flex>
                    <View>
                      <CheckboxField
                        label="206 followers"
                        name="subscribe"
                        value="yes"
                        checked
                      />
                    </View>
                  </Flex>
                </CardUI>
                <CardUI>
                  <Flex
                    width={'100%'}
                    marginBottom={'large'}
                    justifyContent={'space-between'}
                  >
                    <Heading level={5} fontWeight={tokens.fontWeights.medium}>
                      Medium
                    </Heading>
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
                  </Flex>
                  <Flex marginBottom={'large'} direction={'column'}>
                    <Flex width={'100%'} justifyContent={'space-between'}>
                      <Text fontWeight={'normal'}>All contents</Text>
                      <Text>4</Text>
                    </Flex>
                    <Flex>
                      <Loader
                        variation="linear"
                        percentage={55}
                        isDeterminate
                        filledColor={'#FBBF24'}
                        isPercentageTextHidden={true}
                      />
                    </Flex>
                  </Flex>
                  <Flex>
                    <View>
                      <CheckboxField
                        label="1.3k followers"
                        name="subscribe"
                        value="yes"
                        checked
                      />
                    </View>
                  </Flex>
                </CardUI>
              </Grid>
            </Flex>
          </CardUI>
        </Flex>
        <Flex backgroundColor={tokens.colors.green[10]} width={'100%'}>
          sd
        </Flex>
      </Grid>
    </Flex>
  )
}

export default DashboardContent
