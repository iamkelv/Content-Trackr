import { Button, Flex, Text, useTheme } from '@aws-amplify/ui-react'
import React from 'react'

function Jumbotron() {
  const { tokens } = useTheme()
  return (
    <Flex width={'100%'} marginTop={'2%'}>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        width={'40%'}
      >
        {' '}
        <Text fontWeight={'bolder'} fontFamily={'inter'} fontSize={'1.5rem'}>
          Unlock the power of doc.io
        </Text>{' '}
        <Button
          backgroundColor={tokens.colors.brand.secondary[60]}
          color={tokens.colors.white}
          padding={`${tokens.space.medium} ${tokens.space.xl} `}
        >
          Explore Now
        </Button>
      </Flex>
    </Flex>
  )
}

export default Jumbotron
