import { Flex, Grid, useTheme } from '@aws-amplify/ui-react'
import React from 'react'

function MainFooter() {
  const { tokens } = useTheme()
  return (
    <Grid
      templateColumns="2fr 1fr 1fr 1fr"
      gap={tokens.space.small}
      marginTop={'5%'}
    >
      <Flex backgroundColor={tokens.colors.blue[10]}>xc</Flex>
      <Flex backgroundColor={tokens.colors.blue[10]}>xc</Flex>
      <Flex backgroundColor={tokens.colors.blue[10]}>xc</Flex>
      <Flex backgroundColor={tokens.colors.blue[10]}>xc</Flex>
    </Grid>
  )
}

export default MainFooter
