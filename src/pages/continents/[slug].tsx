import { Flex } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from 'next'

import { makeServer } from '../../server/mirageServer'

import { Header } from '../../components/Header'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentSummarySection } from '../../components/ContinentSummarySection'

interface ContinentInfoSection {
  countries: number;
  languages: number;
  hundredPlusCitiesCount: number;
}

interface ContinentHundredPlusCitie {
  cityName: string;
  bannerUrl: string;
  country: string;
  countryFlagUrl: string;
}

interface ContinentDescProps {
  continent: {
    id: string;
    name: string;
    description: string;
    bannerUrl: string;
    infoSection: ContinentInfoSection;
    hundredPlusCities: ContinentHundredPlusCitie[];
  }
}

export default function ContinentDesc({ continent }: ContinentDescProps) {
  return (
    <Flex direction="column" w="full">
      <Header backIcon />

      <ContinentBanner continentName={continent.name} bannerUrl={continent.bannerUrl} />

      <Flex
        direction="column"
        align="center"
        w="100%"
        maxWidth={1220}
        px="6"
        mx="auto"
        my="20"
      >
        
        <ContinentSummarySection 
          description={continent.description} 
          continentInfo={continent.infoSection} 
        />

        
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { schema } = makeServer()

  const { slug } = params

  const { attrs } = schema.find('continent', String(slug))

  return {
    props: {
      continent: attrs
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}