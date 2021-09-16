import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from 'next/link'

interface SlideItemProps {
  href: string;
  title: string;
  summary: string;
  imageSource: string;
}

export function SlideItem({ href, title, summary, imageSource }: SlideItemProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink _hover={{ textDecoration: 'none' }}>
        <Flex
          direction="column"
          textAlign="center"
          justify="center"
          align="center"
          h={["2xs", "2xs", "md"]}
          bgImage={`url('${imageSource}')`}
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
        >
          <Heading
            mb="4"
            color="yellow.500"
            fontSize={["2xl", "2xl", "5xl"]}
            fontWeight="bold"
          >
            {title}
          </Heading>

          <Text
            color="gray.200"
            fontSize={["sm", "sm", "2xl"]}
            fontWeight="bold"
          >
            {summary}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  )
}