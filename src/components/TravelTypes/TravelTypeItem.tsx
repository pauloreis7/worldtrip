import { Flex, Text, Image } from "@chakra-ui/react";

interface TravelTypesProps {
  src: string;
  title: string;
}

export function TravelTypeItem({ src, title }: TravelTypesProps) {
  return (
    <Flex direction="column" align="center">
      <Image
        src={src}
        alt={title}
        mb="6"
      />

      <Text 
        color="gray.900" 
        fontWeight="semibold" 
        fontSize="2xl"
      >
        {title}
      </Text>
    </Flex>
  )
}