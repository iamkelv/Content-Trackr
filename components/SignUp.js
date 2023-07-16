import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useTheme,
  Authenticator,
} from '@aws-amplify/ui-react'
// import awsConfig from './aws-exports'

Amplify.configure({
  Auth: {},
})
import '@aws-amplify/ui-react/styles.css'
import { components, formFields } from './auth/auth-ui'
import React, { useEffect, useState } from 'react'
import { Amplify, Auth, Hub } from 'aws-amplify'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'

function SignUp() {
  const [user, setUser] = useState(null)
  const [customState, setCustomState] = useState(null)
  const { tokens } = useTheme()

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(data)
          break
        case 'signOut':
          setUser(null)
          break
        case 'customOAuthState':
          setCustomState(data)
      }
    })

    Auth.currentAuthenticatedUser()
      .then((currentUser) => setUser(currentUser))
      .catch(() => console.log('Not signed in'))

    return unsubscribe
  }, [])

  return (
    <Grid
      maxWidth={{ large: '70%', medium: '100%' }}
      margin={'0 auto'}
      justifyContent={'space-between'}
      templateColumns="1fr 1fr"
      // gap={tokens.space.small}
    >
      <div className="h-auto p-4  min-h-[600px] relative bg-gradient-to-r rounded-s-lg shadow-xl from-violet-500 to-fuchsia-500">
        <Flex
          direction={'column'}
          position={'relative'}
          height={'100%'}
          justifyContent={'space-between'}
        >
          <Flex>
            {' '}
            <Image
              alt=" logo"
              src="./assets/img/logo.png"
              objectFit="initial"
              objectPosition="50% 50%"
              backgroundColor="initial"
              opacity="100%"
              onClick={() => alert('📸 Say cheese!')}
            />
          </Flex>
          <Flex>
            <Image
              alt="Amplify logo"
              src="./assets/img/auth-bg.png"
              objectFit="initial"
              objectPosition="50% 50%"
              backgroundColor="initial"
              height="75%"
              width="100%"
              opacity="100%"
            />
          </Flex>
          <Flex
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Heading color={tokens.colors.white} fontWeight={'bold'} level={5}>
              Customizable your content writing Dashboard
            </Heading>
            <Text
              color={tokens.colors.white}
              textAlign={'center'}
              fontSize={tokens.fontSizes.small}
            >
              Integrate your content writing on different platform in an easily
              customizable app.
            </Text>
          </Flex>
        </Flex>
      </div>
      <div className="p-4  h-auto min-h-[600px] relative bg-gradient-to-r rounded-s-lg shadow-xl">
        <Authenticator
          socialProviders={['amazon', 'google']}
          formFields={formFields}
          components={components}
        >
          {({ signOut }) => <button onClick={signOut}>Sign out</button>}
        </Authenticator>
      </div>
    </Grid>
  )
}

export default SignUp
