import { GetStaticProps, GetStaticPaths } from 'next'

import { makeServer } from '../../server/mirageServer'

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
    <h1>Hello World</h1>
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