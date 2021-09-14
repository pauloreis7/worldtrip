import { Flex, Heading, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from 'next/link'

interface SlideItemProps {
  slug: string;
  title: string;
  summary: string;
  imageSource: string;
}

export function SlideItem({ slug, title, summary, imageSource }: SlideItemProps) {
  return (
    <Link href={`/continents/${slug}`} passHref>
      <ChakraLink _hover={{ textDecoration: 'none' }}>
        <Flex
          direction="column"
          textAlign="center"
          justify="center"
          align="center"
          h="md"
          bgImage={`url('${imageSource}')`}
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
        >
          <Heading
            mb="4"
            color="yellow.500"
            fontSize="5xl"
            fontWeight="bold"
          >
            {title}
          </Heading>

          <Text
            color="gray.200"
            fontSize="2xl"
            fontWeight="bold"
          >
            {summary}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  )
}