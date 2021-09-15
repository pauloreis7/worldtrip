import { Flex, Text, Tooltip, Icon } from "@chakra-ui/react";
import { FiInfo } from 'react-icons/fi'

interface ContinentInfoItemProps {
  title: string;
  itemValue: number;
  infoTooltip?: boolean;
}

export function ContinentInfoItem({
    title,
    itemValue,
    infoTooltip = null,
  }: ContinentInfoItemProps) {
  return (
    <Flex direction="column" textAlign="center">
      <Text
        fontSize="5xl"
        fontWeight="semibold"
        color="yellow.500"
      >
        {itemValue}
      </Text>

      <Text
        fontSize="2xl"
        fontWeight="semibold"
        color="gray.900"
      >
        {title}

        { infoTooltip && (
          <Tooltip 
            hasArrow
            label="How many cities of +100 visited in the world the continent has."
            placement="bottom"
          >
            <span>
              <Icon 
                as={FiInfo} 
                ml="1.5" 
                fontSize="md"
                color="gray.600"
                opacity={0.5}
              />
            </span>
          </Tooltip>
        )}
      </Text>
    </Flex>
  )
}