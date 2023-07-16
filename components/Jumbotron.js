import { Button, Flex, Text, useTheme } from '@aws-amplify/ui-react'
import React from 'react'

function Jumbotron() {
  const { tokens } = useTheme()
  return (
    <Flex
      width={{ large: '50%', base: '100%' }}
      direction={'column'}
      marginTop={'3%'}
    >
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        // width={{ large: '40%', medium: '70%', small: '100%' }}
        width={'100%'}
      >
        {' '}
        <Text
          fontWeight={'bolder'}
          width={'100%'}
          fontFamily={'inter'}
          fontSize={'1.5rem'}
        >
          Unlock the power of doc.io
        </Text>{' '}
        <Button
          backgroundColor={tokens.colors.brand.secondary[60]}
          color={tokens.colors.white}
          width={'200px'}
          padding={`${tokens.space.medium} ${tokens.space.xl} `}
        >
          Explore Now
        </Button>
      </Flex>
    </Flex>
  )
}

export default Jumbotron
