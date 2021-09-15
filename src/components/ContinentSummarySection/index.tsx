import { Text, Stack, HStack } from "@chakra-ui/react";

import { ContinentInfoItem } from './ContinentInfoItem'

interface ContinentSummarySectionProps {
  description: string;
  continentInfo: {
    countries: number;
    languages: number;
    hundredPlusCitiesCount: number;
  }
}

export function ContinentSummarySection({
    description,
    continentInfo
  }: ContinentSummarySectionProps) {
  return (
    <Stack
      direction="row"
      spacing="16"
      align="center"
      justify="space-between"
      mb="20"
    >
      <Text
        maxWidth={600}
        fontSize="2xl"
        color="gray.900"
        textAlign="justify"
      >
        {description}
      </Text>

      <HStack spacing="10">
        <ContinentInfoItem title="countries" itemValue={continentInfo.countries} />

        <ContinentInfoItem title="languages" itemValue={continentInfo.languages} />

        <ContinentInfoItem 
          title="cities +100" 
          itemValue={continentInfo.hundredPlusCitiesCount} 
          infoTooltip
        />
      </HStack>
    </Stack>
  )
}