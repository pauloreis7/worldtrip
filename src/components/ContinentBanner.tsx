import { Heading, Flex } from "@chakra-ui/react";

interface ContinentBannerProps {
  continentName: string;
  bannerUrl: string;
}

export function ContinentBanner({ continentName, bannerUrl }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={["3xs", "3xs", "lg"]}
      px="36"
      py="16"
      backgroundImage={`url('${bannerUrl}')`}
      backgroundPosition="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      align="end"
      justify={["center","center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "center", "left"]}
        fontSize={["3xl", "3xl", "5xl"]}
        fontWeight="semibold"
        color="gray.200"
      >
        {continentName}
      </Heading>
    </Flex>
  )
}