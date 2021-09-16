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
        my={["9", "9", "9", "28"]}
        mx="auto"
        px={["4", "4", "6"]}
      >
        <TravelTypes />

        <Divider
          w={["3.75rem", "3.75rem", "5.625rem"]}
          borderBottomWidth="2px"
          mt={["9", "9", "20"]}
          borderColor="gray.900"
        />

        <Heading
          my={["6", "6", "14"]}
          textAlign="center"
          fontSize={["xl", "xl", "4xl"]}
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
