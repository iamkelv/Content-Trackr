import { Flex, Heading, Text, View } from '@aws-amplify/ui-react'
import React from 'react'

function WhyChoose() {
  return (
    <Flex
      direction={'column'}
      maxWidth={{ large: '30%', medium: '100%' }}
      margin={'5% auto'}
      justifyContent={'center'}

      // marginTop={''}
    >
      <Heading level={1} fontWeight={'bolder'}>
        Why choose <span className="text-[rgb(191,64,191)]">Doc.io</span>
      </Heading>
      <Text>
        lorem for the sweccsms dfjssmsmjks s dnssksjsjskksklso dsjsksism lorenm
        forem smjuwlksielsjskjsue smsiuiuewms jiewsmue smsi.{' '}
      </Text>
    </Flex>
  )
}

export default WhyChoose
