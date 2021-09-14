import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <Flex
      w="100%"
      px="36"
      py="3"
      align="center"
      justify="space-between"
      backgroundImage="url('/images/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        maxWidth="524px"
      >
        <Heading
          color="gray.200"
          fontWeight="medium"
          fontSize="4xl"
          mb="5"
        >
          5 Continents, infinite possibilities.
        </Heading>

        <Text
          color="gray.400"
          fontSize="xl"
        >
          The time has come to take the trip you have always dreamed of off the drawing board.
        </Text>
      </Box>

      <Image
        src="/images/airplane.svg"
        alt="airplane"
      />
    </Flex>
  )
}