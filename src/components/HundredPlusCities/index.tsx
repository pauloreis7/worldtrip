import { Heading, SimpleGrid } from "@chakra-ui/react";

import { City } from './City'

type CityProps = {
  cityName: string;
  bannerUrl: string;
  country: string;
  countryFlagUrl: string;
}

interface HundredPlusCitiesProps {
  cities: CityProps[];
}

export function HundredPlusCities({ cities }: HundredPlusCitiesProps) {
  return (
    <>
      <Heading
        w="100%"
        textAlign="left"
        mb={["5", "8", "10"]}
        fontSize={["2xl", "3xl", "4xl"]}
        fontWeight="medium"
        color="gray.900"
      >
        Cities +100
      </Heading>

      <SimpleGrid 
        gridTemplateColumns={
          ["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]
        }
        minChildWidth="256px" 
        gap={["5", "5", "8", "8", "12"]}
      >
        { cities.map(city => (
          <City
            key={city.cityName}
            bannerUrl={city.bannerUrl}
            cityName={city.cityName}
            country={city.country}
            countryFlagUrl={city.countryFlagUrl}
          />
        ))}
      </SimpleGrid>
    </>
  )
}