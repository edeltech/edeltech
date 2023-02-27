import Head from 'next/head'
import Layout from '../components/organisms/layout'
import BackgroundImage from '../components/atoms/background-image'
import LargeTitleIntro from '../components/molecules/large-title-intro'
import Description from '../components/molecules/description'
import { detailsServices } from '../data/details'
import { detailsCardsServices } from '../data/details-cards'
import DetailsCardsWrapper from '../components/organisms/details-cards-wrapper'
import Contact from '../components/atoms/contact'
import Footer from '../components/molecules/footer'

export default function ServicesPage () {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Services</title>
      </Head>
      <LargeTitleIntro
        surtitle='About our programs in'
        title='Assessment, Migration & Acceleration'
        text='Over the years, we have accumulated a huge amount of knowledge on how to migrate on to the public cloud
        and operate workload in a secure and scalable way. We have seen many commonalities in all the projects and
        across different industries. We have packaged this knowledge to help our customers move faster and make use of
        the 1000s of hours we have spent in the cloud.' />
      <Description
        surtitle='What do our services programs include'
        text='We have learned that a lot of our customers have the same needs and requirements. Therefore, we build
        services that bring more value for less money to our customers. These provide ready-to-use components, while
        still allowing the adaption to each specific customer and team. These services include:'
        details={detailsServices} />
      <BackgroundImage src='/images/mountain-background.png' alt='People standing in front of the mountain'
        className='-mt-[10rem] sm:-mt-[15rem] md:-mt-[17rem] lg:-mt-[30rem] xl:-mt-[40rem] 2xl:-mt-[50rem]'
        width={1920} height={0} />
      <DetailsCardsWrapper cards={detailsCardsServices} />
      <BackgroundImage src='/images/division.png' alt='Plants divider' className='-mt-40 xl:-mt-64'
        width={1920} height={0} />
      <Contact />
      <Footer version='illustration' />
    </Layout>
  )
}
