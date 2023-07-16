import {
  Expander,
  ExpanderItem,
  Flex,
  Heading,
  Text,
  useTheme,
} from '@aws-amplify/ui-react'
import React from 'react'

export const CustomTitle = ({ title }) => {
  const { tokens } = useTheme()
  return (
    <Flex
      gap={tokens.space.small}
      width={'100%'}
      height={'5rem'}
      alignItems={'center'}
    >
      <Heading level={3} fontWeight={'extrabold'} fontSize={'1.3rem'}>
        {title}
      </Heading>
    </Flex>
  )
}

function FaqSection() {
  const { tokens } = useTheme()
  return (
    <div className=" bg-gradient-to-r from-violet-500 rounded-lg p-6 to-fuchsia-500">
      <Flex>
        <Expander type="single" isCollapsible={true}>
          <ExpanderItem
            title={<CustomTitle title={'What is Doc.io?'} />}
            value="item-1"
            fontSize={'xx-large'}
          >
            <Text fontSize={tokens.fontSizes.large}>
              Doc.io is a content management tool designed to help writers
              track, manage, and optimize their articles across platforms such
              as Hashnode, Medium, and dev.to. It provides a centralized
              dashboard to keep you organized, delivers real-time analytics on
              article performance, and offers valuable insights to enhance your
              content strategy.
            </Text>
          </ExpanderItem>
          <ExpanderItem
            title={<CustomTitle title={'How does Doc.io work?'} />}
            value="item-2"
          >
            <Text fontSize={tokens.fontSizes.large}>
              Doc.io integrates with your Hashnode, Medium, and dev.to accounts,
              allowing you to fetch and display your articles within the app. It
              tracks key metrics like views, claps, and comments, providing
              real-time updates and notifications. You can organize your
              articles, access performance analytics, and gain insights to
              optimize your content writing.
            </Text>
          </ExpanderItem>
          <ExpanderItem
            title={
              <CustomTitle
                title={'Can I connect multiple platforms to Doc.io?'}
              />
            }
            value="item-2"
          >
            <Text fontSize={tokens.fontSizes.large}>
              Yes, Doc.io supports integration with multiple platforms. You can
              connect your Hashnode, Medium, and dev.to accounts, and Doc.io
              will fetch and display your articles from all these platforms in
              one centralized location.
            </Text>
          </ExpanderItem>
          <ExpanderItem
            title={
              <CustomTitle
                title={'Is my personal information secure with Doc.io?'}
              />
            }
            value="item-2"
          >
            <Text fontSize={tokens.fontSizes.large}>
              {' '}
              Yes, we take the security of your personal information seriously.
              We implement appropriate measures to protect your data from
              unauthorized access, disclosure, or destruction. For more details,
              please refer to our Privacy Policy.
            </Text>
          </ExpanderItem>
          <ExpanderItem
            title={
              <CustomTitle
                title={
                  'Can I track the performance of my articles in real-time?'
                }
              />
            }
            value="item-2"
          >
            <Text fontSize={tokens.fontSizes.large}>
              {' '}
              Absolutely! Doc.io provides real-time updates on article
              statistics such as views, claps, and comments. You'll receive
              notifications for milestones and significant engagement events,
              helping you stay informed and motivated.
            </Text>
          </ExpanderItem>
          <ExpanderItem
            title={
              <CustomTitle
                title={'Can I get insights on how my articles are performing?'}
              />
            }
            value="item-2"
          >
            <Text fontSize={tokens.fontSizes.large}>
              {' '}
              Yes, Doc.io offers performance analytics and insights to help you
              evaluate the impact of your articles. You'll gain valuable data on
              engagement trends, reader demographics, and other key metrics.
              These insights enable you to make data-driven decisions and refine
              your content strategy.
            </Text>
          </ExpanderItem>
          <ExpanderItem
            title={
              <CustomTitle
                title={'Can I access Doc.io on different devices?'}
              />
            }
            value="item-2"
          >
            <Text fontSize={tokens.fontSizes.large}>
              {' '}
              Yes, Doc.io is designed to be accessible on both mobile devices
              and web browsers. You can access and manage your articles from
              anywhere, providing flexibility and convenience.
            </Text>
          </ExpanderItem>
          <ExpanderItem
            title={<CustomTitle title={'How do I get started with Doc.io?'} />}
            value="item-2"
          >
            <Text fontSize={tokens.fontSizes.large}>
              To get started, simply sign up for an account on Doc.io and
              connect your Hashnode, Medium, or dev.to usernames. Once
              connected, Doc.io will fetch your articles, and you can start
              tracking, managing, and optimizing your content effortlessly.
            </Text>
          </ExpanderItem>
          <ExpanderItem
            title={
              <CustomTitle
                title={
                  ' How can I contact support if I have further questions or issues?'
                }
              />
            }
            value="item-2"
          >
            <Text fontSize={tokens.fontSizes.large}>
              {' '}
              If you have any questions, concerns, or need assistance, you can
              reach out to our support team at support@doc.io. We'll be happy to
              assist you with any inquiries you may have.
            </Text>
          </ExpanderItem>
        </Expander>
      </Flex>
    </div>
  )
}

export default FaqSection
