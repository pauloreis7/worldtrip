import { Flex, Divider, Heading, Text } from "@chakra-ui/react";
import { GetStaticProps } from 'next'

import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { TravelTypes } from '../components/TravelTypes'
import { ContinentsSlidesCarousel } from '../components/ContinentsSlidesCarousel'

export default function Home() {
  return (
    <Flex direction="column" w="full">
      <Header />

      <HomeBanner />

      <Flex
        direction="column"
        align="center"
        w="100%"
        maxWidth={1360}
        my="28"
        mx="auto"
        px="6"
      >
        <TravelTypes />

        <Divider w="5.625rem" borderBottomWidth="2px" mt="20" borderColor="gray.900" />

        <Heading
          w="3xl"
          my="14"
          textAlign="center"
          fontSize="4xl"
          fontWeight="medium"
          color="gray.900"
        >
          <Text>Shall we go for it?</Text>
          Then choose your continent
        </Heading>
        
        <ContinentsSlidesCarousel />
      </Flex>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 hours
  }
} 
