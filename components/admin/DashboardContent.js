import {
  CheckboxField,
  Divider,
  Flex,
  Grid,
  Heading,
  Loader,
  Menu,
  MenuButton,
  MenuItem,
  Text,
  View,
  Link,
  useTheme,
  Image,
} from '@aws-amplify/ui-react'
import { AiOutlineCheckSquare, AiOutlineMore } from 'react-icons/ai'
import AdminTopNav from './AdminTopNav'
import CardUI from '../ui/Card'
import Chart from './Chart'
import { GrArticle } from 'react-icons/gr'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { DataTable } from './dataTable'
import CalendarUi from './CalenderUi'

function DashboardContent() {
  const { tokens } = useTheme()
  return (
    <Flex direction={'column'}>
      <Grid
        templateColumns={{ large: '3fr 1.2fr ', base: '1fr' }}
        gap={tokens.space.small}
        width={'100%'}
      >
        <Flex width={'100%'} direction={'column'}>
          <CardUI props={{ color: 'red', width: '100%' }}>
            <Flex marginBottom={'medium'}>
              <Heading level={5} fontFamily={tokens.fontWeights.bold}>
                Recent Articles
              </Heading>
            </Flex>
            <Flex marginBottom={'medium'}>
              <Grid
                templateColumns={{
                  large: '1fr 1fr 1fr',
                  medium: '1fr 1fr',
                  base: '1fr',
                }}
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
          <Grid templateColumns="1.5fr 1fr" gap={tokens.space.small}>
            <CardUI props={{ padding: 'medium' }}>
              <Flex direction={'column'} width={'100%'}>
                <Flex>
                  <Heading level={5} fontWeight={'bold'}>
                    Overall Likes
                  </Heading>
                </Flex>
                <Flex width={'100%'} height={'1000px'} maxHeight={'500px'}>
                  <Chart />
                </Flex>
              </Flex>
            </CardUI>
            <CardUI props={{ padding: 'medium' }}>
              <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                width={'100%'}
                marginBottom={tokens.space.medium}
              >
                <Heading>Summary</Heading>
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
              <Flex>
                <Grid templateColumns="1fr 1fr 0.7" gap={'2rem'}>
                  <CardUI
                    background={'#C540BF'}
                    props={{
                      padding: 'medium',
                      borderRadius: '20px',
                      gap: '5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Flex
                      alignItems={'center'}
                      direction={'column'}
                      width={'100%'}
                    >
                      <GrArticle size={32} className="text-white" />
                      <Flex
                        direction={'column'}
                        alignItems={'center'}
                        width={'100%'}
                      >
                        <Heading color={tokens.colors.white}>Articles</Heading>
                        <Text color={tokens.colors.white}>100</Text>
                      </Flex>
                    </Flex>
                  </CardUI>
                  <CardUI
                    background={'#F472B6'}
                    props={{
                      padding: 'medium',
                      borderRadius: '20px',
                      gap: '5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Flex
                      direction={'column'}
                      alignItems={'center'}
                      width={'100%'}
                    >
                      <GrArticle size={32} style={{}} />
                      <Heading color={tokens.colors.white}>Comments</Heading>
                      <Text color={tokens.colors.white}>1.3k</Text>
                    </Flex>
                  </CardUI>
                  <CardUI>
                    <Flex
                      direction={'column'}
                      alignItems={'center'}
                      width={'100%'}
                    >
                      <AiOutlineCheckSquare />
                      <Flex>
                        <Heading>Notifications</Heading>
                        <Text>100</Text>
                      </Flex>
                    </Flex>
                  </CardUI>
                </Grid>
              </Flex>
            </CardUI>
          </Grid>
          <Flex direction={'column'} justifyContent={'space-between'}>
            <Flex
              width={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Heading level={5} fontWeight={'bold'}>
                Most Read Articles
              </Heading>
              <Flex>
                <Link
                  href="df"
                  display={'flex'}
                  style={{ alignItems: 'center' }}
                >
                  See All <MdKeyboardArrowRight size={'1.5rem'} />
                </Link>
              </Flex>
            </Flex>
            <Flex>
              <DataTable />
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={'1rem'}>
          <CardUI>
            <CalendarUi />
          </CardUI>
          <CardUI>
            <Flex direction={'column'} gap={'1rem'}>
              <Heading textDecoration={'underline'}>Notification</Heading>
              <Flex gap={'2rem'} direction={'column'}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Image
                    src={'./assets/img/test-user.png'}
                    alt={'user'}
                    width={'100%'}
                    height={'100%'}
                    maxWidth={'40px'}
                  />
                  <Flex direction={'column'} alignItems={'center'}>
                    <Heading>Kelvin Moses</Heading>
                    <Text>comment on your post</Text>
                  </Flex>
                  <Text>8:30pm</Text>
                </Flex>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                  <Image
                    src={'./assets/img/test-user.png'}
                    alt={'user'}
                    width={'100%'}
                    height={'100%'}
                    maxWidth={'40px'}
                  />
                  <Flex
                    direction={'column'}
                    alignItems={'center'}
                    marginLeft={'medium'}
                  >
                    <Heading>Sophia </Heading>
                    <Text>comment on your post</Text>
                  </Flex>
                  <Text>8:30pm</Text>
                </Flex>
              </Flex>
            </Flex>
          </CardUI>
        </Flex>
      </Grid>
    </Flex>
  )
}

export default DashboardContent
