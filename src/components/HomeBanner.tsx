import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <Flex
      w="100%"
      px="36"
      py="3"
      align="center"
      justify="space-between"
      backgroundImage="url('/images/Background.svg')"
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
          5 Continentes, infinitas possibilidades.
        </Heading>

        <Text
          color="gray.400"
          fontSize="xl"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      <Image
        src="/images/Airplane.svg"
        alt="Airplane"
      />
    </Flex>
  )
}