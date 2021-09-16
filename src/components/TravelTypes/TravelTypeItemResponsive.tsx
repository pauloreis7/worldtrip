import { Flex, Text, Icon } from "@chakra-ui/react";
import { BsFillCircleFill } from 'react-icons/bs'

interface TravelTypeItemResponsiveProps {
  title: string;
}

export function TravelTypeItemResponsive({ title }: TravelTypeItemResponsiveProps) {
  return (
    <Flex align="center">
      <Icon 
        as={BsFillCircleFill} 
        mr="4" 
        fontSize="12px"
        color="yellow.500"
      />
      <Text>{title}</Text>
    </Flex>
  )
}