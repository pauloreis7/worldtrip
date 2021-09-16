import { SimpleGrid, Flex, HStack, Text, Icon, useBreakpointValue } from "@chakra-ui/react";
import { BsFillCircleFill } from 'react-icons/bs'

import { TravelTypeItem } from './TravelTypeItem'
import { TravelTypeItemResponsive } from './TravelTypeItemResponsive'

export function TravelTypes() {
  const isLargeVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  if(isLargeVersion) {
    return (
      <HStack spacing={["24", "24", "24", "24", "32"]}>
        <TravelTypeItem src="/images/cocktail.svg" title="night life" />
  
        <TravelTypeItem src="/images/surf.svg" title="beach" />
  
        <TravelTypeItem src="/images/building.svg" title="modern" />
  
        <TravelTypeItem src="/images/museum.svg" title="classic" />
  
        <TravelTypeItem src="/images/earth.svg" title="more..." />
      </HStack>
    )
  }

  return (
    <SimpleGrid
      gap="16"
      minChildWidth="20"
      gridTemplateColumns="repeat(2, 1fr)"
      color="gray.900"
      fontWeight="medium" 
      fontSize="lg"
      align="center"
    >
      <TravelTypeItemResponsive title="night life" />

      <TravelTypeItemResponsive title="beach" />

      <TravelTypeItemResponsive title="modern" />

      <TravelTypeItemResponsive title="classic" />

      <TravelTypeItemResponsive title="more..." />

    </SimpleGrid>
  )
}