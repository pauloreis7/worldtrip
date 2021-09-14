import { Flex, HStack, Text, Image } from "@chakra-ui/react";

import { TravelTypeItem } from './TravelTypeItem'

export function TravelTypes() {
  return (
    <HStack spacing="32">
      <TravelTypeItem src="/images/cocktail.svg" title="night life" />

      <TravelTypeItem src="/images/surf.svg" title="beach" />

      <TravelTypeItem src="/images/building.svg" title="modern" />

      <TravelTypeItem src="/images/museum.svg" title="classic" />

      <TravelTypeItem src="/images/earth.svg" title="more..." />
    </HStack>
  )
}