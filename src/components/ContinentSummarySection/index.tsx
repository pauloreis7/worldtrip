import { Text, Stack, HStack, useBreakpointValue } from "@chakra-ui/react";

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
  const isExtraLargeVersion = useBreakpointValue({
    base: false,
    lgr: true,
    xl: true,
  })

  return (
    <Stack
      direction={isExtraLargeVersion ? 'row' : 'column'}
      spacing={["4", "4", "12", "16"]}
      align="center"
      justify="space-between"
      mb={["8", "8", "20"]}
    >
      <Text
        maxWidth={600}
        fontSize={["sm", "sm", "md", "2xl"]}
        color="gray.900"
        textAlign="justify"
      >
        {description}
      </Text>

      <HStack spacing={["4", "8", "10"]}>
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