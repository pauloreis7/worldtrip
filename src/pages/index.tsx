import { Flex, Box, HStack, Heading, Text, Image } from "@chakra-ui/react";

import { makeServer } from '../server/mirageServer'

import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { TravelTypes } from '../components/TravelTypes'

// makeServer()

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
        px="4"
      >
        <TravelTypes />
        
      </Flex>
    </Flex>
  )
}