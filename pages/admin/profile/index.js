import AdminLayout from '@/components/admin/AdminLayout'
import CardUI from '@/components/ui/Card'
import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  TextField,
  useTheme,
} from '@aws-amplify/ui-react'
import React from 'react'

function ProfilePage() {
  const { tokens } = useTheme()
  return (
    <AdminLayout>
      <Grid
        templateColumns={{ large: '3fr 1.2fr ', base: '1fr' }}
        gap={tokens.space.small}
        width={'100%'}
      >
        <CardUI>
          <Flex position={'relative'} direction={'column'} gap={'xxxl'}>
            <Flex position={'relative'} direction={'column'}>
              <Image
                alt="bg"
                src="../assets/img/profile-bg.png"
                objectFit="initial"
                objectPosition="50% 50%"
                backgroundColor="initial"
                height="100%"
                width={'100vw'}
                maxWidth="100%"
                backgroundImage={'../assets/img/profile-bg.png'}
                opacity="100%"
                position={'relative'}
              />
              <Image
                alt="bg"
                src="../assets/img/test-user.png"
                objectFit="initial"
                objectPosition="50% 50%"
                backgroundColor="initial"
                height="100%"
                width={'100%'}
                maxWidth="100px"
                maxHeight={'100px'}
                opacity="100%"
                position={'absolute'}
                left={'10%'}
                bottom={'-15%'}
                boxShadow={'medium'}
                borderRadius={'50%'}
                padding={'small'}
              />
            </Flex>
            <Flex direction={'column'}>
              <Heading>MY INFORMATION</Heading>
              <Flex direction={'column'}>
                <Flex
                  justifyContent={'space-between'}
                  direction={{ large: 'flex', base: 'column' }}
                >
                  {' '}
                  <TextField
                    outerStartComponent={
                      <Text marginRight={'1rem'}>Name: </Text>
                    }
                    value={'Kelvin Moses'}
                  />{' '}
                  <TextField
                    outerStartComponent={
                      <Text marginRight={'1rem'}>Email: </Text>
                    }
                    value={'example@example.com'}
                  />
                </Flex>
                <Flex justifyContent={'space-between'} marginTop={'1rem'}>
                  {' '}
                  <Button
                    backgroundColor={tokens.colors.brand.secondary[60]}
                    color={tokens.colors.white}
                  >
                    Save Change
                  </Button>
                </Flex>
                <Flex justifyContent={'space-between'} marginTop={'1rem'}>
                  {' '}
                  <Flex direction={'column'}>
                    <Heading>Account Action</Heading>
                    <Button
                      backgroundColor={tokens.colors.black}
                      color={tokens.colors.white}
                    >
                      Reset Password
                    </Button>
                  </Flex>
                  <Flex direction={'column'}>
                    <Heading>Danger Zone</Heading>
                    <Button
                      backgroundColor={'red'}
                      border={'inherit'}
                      color={tokens.colors.white}
                    >
                      Delete Account
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </CardUI>
        <CardUI>
          <Flex direction={'column'}>
            <Flex>
              {' '}
              <Text>YOUR LINKS</Text>{' '}
            </Flex>
            <Flex
              justifyContent={'space-between'}
              width={'100%'}
              maxWidth={'70%'}
              direction={'column'}
              gap={'medium'}
            >
              <Flex width={'100%'} alignItems={'center'}>
                {' '}
                <span
                  style={{
                    padding: ' 20px 20px',
                    background: '#BF40BF',
                    borderRadius: '10px',
                  }}
                ></span>{' '}
                <Heading>Hashnode</Heading>
              </Flex>
              <Flex width={'100%'} alignItems={'center'}>
                {' '}
                <span
                  style={{
                    padding: ' 20px 20px',
                    background: '#F472B6',
                    borderRadius: '10px',
                  }}
                ></span>{' '}
                <Heading>Dev.to</Heading>
              </Flex>
              <Flex width={'100%'} alignItems={'center'}>
                {' '}
                <span
                  style={{
                    padding: ' 20px 20px',
                    background: '#FBBF24',
                    borderRadius: '10px',
                  }}
                ></span>{' '}
                <Heading>Medium</Heading>
              </Flex>
            </Flex>
          </Flex>
        </CardUI>
      </Grid>
    </AdminLayout>
  )
}

export default ProfilePage
