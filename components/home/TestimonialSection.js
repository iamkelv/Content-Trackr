import {
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  View,
  useTheme,
} from '@aws-amplify/ui-react'

function TestimonialSection() {
  const { tokens } = useTheme()
  return (
    <Grid
      templateColumns="1fr 1fr"
      templateRows="10rem 10rem"
      gap={tokens.space.small}
      marginTop={'5%'}
      marginBottom={'5%'}
    >
      <Flex
        width={{ large: '70%', small: '100%' }}
        direction={'column'}
        padding={tokens.space.large}
      >
        <Heading level={1} fontWeight={'extrabold'} fontFamily={'inter'}>
          What people say <br />
          <span className="text-[#BF40BF]">about Us.</span>{' '}
        </Heading>
        <Text width={{ large: '70%', small: '100%' }}>
          Our Clients send us bunch of smilies with our services and we love
          them.
        </Text>
      </Flex>
      <Flex
        width={{ large: '70%', small: '100%' }}
        padding={tokens.space.large}
        position={'relative'}
        direction={'column'}
      >
        <Flex>
          <Image
            alt="Image "
            src="./assets/img/test-user.png"
            objectFit="initial"
            objectPosition="50% 50%"
            backgroundColor="initial"
            borderRadius={'50%'}
            opacity="100%"
          />
        </Flex>
        <Flex>
          <Card
            variation="elevated"
            width={'100%'}
            backgroundColor={tokens.colors.neutral[10]}
            borderRadius={'10px'}
            padding={tokens.space.large}
          >
            <Text margin={'2rem 0'}>
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </Text>
            <Text>
              <Heading level={3}>Kelvin Moses </Heading>
              <Text>Lagos Nigeria</Text>
            </Text>
          </Card>
        </Flex>
      </Flex>
    </Grid>
  )
}

export default TestimonialSection
