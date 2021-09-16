import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";

interface CityProps {
  cityName: string;
  bannerUrl: string;
  country: string;
  countryFlagUrl: string;
}

export function City({ 
  cityName,
  bannerUrl,
  country,
  countryFlagUrl,
 }: CityProps) {
  return (
    <Box borderRadius="base" overflow="hidden">
      <Image 
        src={bannerUrl}
        alt={`${cityName}, ${country}`}
        w="100%"
        h="10rem"
        objectFit="cover"
      />

      <Flex
        align="center"
        justify="space-between"
        px={["4", "6"]}
        pt="6"
        pb="8"
        bgColor="white"
        borderWidth="1px"
        borderColor="yellow.500"
        borderTop="0"
      >
        <Box flex="1">
          <Heading
            mb="3"
            fontFamily="Barlow"
            fontSize="xl"
            fontWeight="semibold"
            color="gray.900"
          >
            {cityName}
          </Heading>
          <Text
            fontFamily="Barlow"
            fontSize="md"
            fontWeight="medium"
            color="gray.600"
          >
            {country}
          </Text>
        </Box>

        <Image
          src={countryFlagUrl}
          alt={`${country} flag`}
          w="30px"
          h="30px"
          borderRadius="full"
          objectFit="cover"
        />
      </Flex>
    </Box>
  )
}