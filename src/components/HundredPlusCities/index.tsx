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
        mb="10"
        fontSize="4xl"
        fontWeight="medium"
        color="gray.900"
      >
        Cities +100
      </Heading>

      <SimpleGrid gridTemplateColumns="repeat(4, 1fr)" gap="12">
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