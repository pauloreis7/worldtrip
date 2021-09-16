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
        position="relative"
        fontSize={["2xl", "3xl", "5xl"]}
        fontWeight="semibold"
        color="yellow.500"
      >
        {itemValue}

        { infoTooltip && (
          <Tooltip
            label="How many cities of +100 visited in the world the continent has."
            placement="top"
          >
            <span>
              <Icon 
                position="absolute"
                top="0"
                right="0"
                as={FiInfo} 
                ml={["1", "1", "1.5"]} 
                fontSize={["xs", "sm", "md"]}
                color="gray.600"
                opacity={0.5}
              />
            </span>
          </Tooltip>
        )}
      </Text>

      <Text
        fontSize={["lg", "xl", "2xl"]}
        fontWeight="semibold"
        color="gray.900"
      >
        {title}

        
      </Text>
    </Flex>
  )
}