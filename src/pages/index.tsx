import { Flex, Box, Link as ChakraLink, Heading, Text, Image } from "@chakra-ui/react";

import { makeServer } from '../server/mirageServer'

import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'

// makeServer()

export default function Home() {

  return (
    <Flex direction="column" w="full">
      <Header />

      <HomeBanner />
    </Flex>
  )
}
