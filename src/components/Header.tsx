import { Flex, Box, Link as ChakraLink, Icon, Image } from "@chakra-ui/react";
import Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi'

interface HeaderProps {
  backIcon?: boolean
}

export function Header({ backIcon = false }: HeaderProps) {
  return (
    <Box
      as="header"
      w="full"
      px="36"
    >
      <Flex
        w="100%"
        h="24"
        align="center"
        justify="center"
        maxWidth={1160}
        position="relative"
      >
        
        {backIcon && (
          <Link href='/'>
            <ChakraLink position='absolute' left="0">
              <Icon as={FiChevronLeft} fontSize="24" color="gray.900" />
            </ChakraLink>
          </Link>
        )}

        <Image
          src="/images/logo.svg"
          alt="logo"
          w="44"
        />
      </Flex>
    </Box>
  )
}