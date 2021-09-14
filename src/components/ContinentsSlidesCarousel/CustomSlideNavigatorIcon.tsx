import { IconButton, Icon } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface CustomSlideNavigatorIconProps {
  iconDirection: 'left' | 'right'
}

export function CustomSlideNavigatorIcon({ iconDirection }: CustomSlideNavigatorIconProps) {
  if(iconDirection === 'left') {
    return (
      <IconButton
        id="custom_prev"
        aria-label="Previous slide"
        icon={<Icon as={FiChevronLeft} fontSize="6xl" />}
        position="absolute"
        left="25px"
        top="45%"
        zIndex="banner"
        h="60px"
        variant="unstyled"
        fontWeight="thin"
        color="yellow.500"
      />
    )
  }
  
  return (
    <IconButton
      id="custom_next"
      aria-label="Next slide"
      icon={<Icon as={FiChevronRight} fontSize="6xl" />}
      position="absolute"
      right="45px"
      top="45%"
      zIndex="banner"
      h="60px"
      variant="unstyled"
      fontWeight="thin"
      color="yellow.500"
    />
  )
}