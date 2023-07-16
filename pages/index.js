import HeroSection from '@/components/HeroSection'
import Jumbotron from '@/components/Jumbotron'
import FaqSection from '@/components/home/FaqSection'
import HomeCard from '@/components/home/HomeCard'
import TestimonialSection from '@/components/home/TestimonialSection'
import WhyChoose from '@/components/home/whyChoose'
import { MainNav } from '@/components/layout/MainNav'
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useTheme,
  Collection,
} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

export default function Home() {
  const { tokens } = useTheme()
  const cardtitems = [
    {
      title: 'Complehensive Tracking',
      description:
        'Completes all the work associated with planning and processing',
      image: './assets/img/why-1.png',
    },
    {
      title: 'Data driven  decision making',
      description:
        'After successful access then book from exclusive deals & pricing',
      image: './assets/img/why-2.png',
    },
    {
      title: ' Exciting Dashboard',
      description:
        'Start and explore a wide range of exciting travel experience.',
      image: './assets/img/why-3.png',
    },
  ]
  return (
    <Flex direction={'column'} width={'100%'} gap={'2rem'}>
      <HeroSection />
      <Jumbotron />
      <WhyChoose />
      <HomeCard items={cardtitems} />
      <TestimonialSection />
      <FaqSection />
    </Flex>
  )
}
