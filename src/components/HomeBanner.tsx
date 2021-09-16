import { Flex, Box, Heading, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function HomeBanner() {
  const isLargeVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="full"
      px={["4", "8", "10", "36"]}
      py={["9", "9", "9", "3"]}
      align="center"
      justify="space-between"
      backgroundImage="url('/images/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        maxWidth={["333px", "524px"]}
        mr="2rem"
      >
        <Heading
          color="gray.200"
          fontWeight="medium"
          fontSize={["xl", "xl", "4xl"]}
          mb={["2", "2", "5"]}
        >
          5 Continents, infinite possibilities.
        </Heading>

        <Text
          color="gray.400"
          fontSize={["sm", "sm", "xl"]}
        >
          The time has come to take the trip you have always dreamed of off the drawing board.
        </Text>
      </Box>

      { isLargeVersion && (
        <Image
          src="/images/airplane.svg"
          alt="airplane"
          w={{ xl: 'sm', "2xl": 'md' }}
        />
      )}
    </Flex>
  )
}