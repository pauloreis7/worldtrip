import { Flex } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from "next/dist/client/router";
import Head from 'next/head'

import { makeServer } from '../../server/mirageServer'

import { Loading } from '../../components/Loading'
import { Header } from '../../components/Header'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentSummarySection } from '../../components/ContinentSummarySection'
import { HundredPlusCities } from '../../components/HundredPlusCities'

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
  const router = useRouter()
  if(router.isFallback) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>

      <Flex direction="column" w="full">
        <Header backIcon />

        <ContinentBanner continentName={continent.name} bannerUrl={continent.bannerUrl} />

        <Flex
          direction="column"
          align="center"
          w="100%"
          maxWidth={1220}
          px={["4", "4", "6"]}
          mx="auto"
          my={["6", "6", "20"]}
        >
          
          <ContinentSummarySection 
            description={continent.description} 
            continentInfo={continent.infoSection} 
          />

          <HundredPlusCities cities={continent.hundredPlusCities} />
        </Flex>
      </Flex>
    </>
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