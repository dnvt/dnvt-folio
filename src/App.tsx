import React, { useMemo } from 'react'
import Container from './components/containers/Container'
import ContextHooks from "./hooks/ContextHooks"
import Grid from './utils/grids/Grid'
import Spacer from './utils/spacer/Spacer'
import Font from './utils/fonts/Font'
import Sidelines from './utils/sidelines/Sidelines'
import InternalLink from './ui/links/internal-link/InternalLink'
import ExternalLink from './ui/links/external-link/ExternalLink'
import { MotionConfig } from 'framer-motion'
import Header from './components/navigations/Header'
import Footer from './components/navigations/Footer'
import { BigVignette, HeroVignette, Vignette } from './components/vignettes/Vignettes'
import GroupedMobileBrowser from './components/devices/layouts/GroupedMobileBrowser'
import DragMobileFour from './components/devices/layouts/DragMobileFour'
import DragFramelessFive from './components/devices/layouts/DragFramelessFive'
import Card from './components/cards/Card'
import GroupedCard from './components/cards/layouts/GroupedCards'
import FooterCards from './components/cards/layouts/FooterCards'
import CONTENT_APP from "./App.content"
import DragCardsThree from './components/cards/layouts/DragCardThree'

////////////////////////////////////////////////////////////////////////////////

/**
 * Welcome to @dnvt/Homepage!
 * 
 * TODO:
 * Mount the page when all components exist
 * 
 */
const App: React.FC = () => {
  const content = useMemo(() => CONTENT_APP, [])

  return (
    <ContextHooks>
      <Sidelines />
      <Grid />
      <MotionConfig transition={{ duration: .012, type: "springs" }}>
        <Header />
        <HeroVignette src={["", ""]} alt="Hero container baby" background="#color" />
        <Spacer height={104} />
        <BigVignette src={["", ""]} alt="Hero container baby" />
        <Container>
          <Spacer height={104} />
          <Font type="h1">Hello World</Font>
          <Font type="h2">Helloooo</Font>
          <Spacer height={32} />
          <InternalLink path="http://dnvt.me">Hello link</InternalLink>
          <ExternalLink path="http://dnvt.me">Hello external lol</ExternalLink>
          <Spacer height={24} />
          <Font type="h3">This is Francois speaking<br />And Joey!</Font>
          <Spacer height={16} />
          <Font type="text">
            This is François!!!! Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.
            Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </Font>
          <Font type="legend">
            Maecenas faucibus mollis interdum.
          </Font>
          <Spacer height={24} />
        </Container>
        <Vignette src={["", ""]} alt="Yellow" />
        <Container>
          <Spacer height={24} />
          <Font type="h5">This is Francois speaking</Font>
          <Font type="text">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.
          </Font>
        </Container>
        <Spacer height={80} />
        <DragMobileFour images={content.MOBILE_FOUR} />
        <Spacer contained height={80} />
        <DragFramelessFive images={content.FRAMELESS_FIVE} />
        <Spacer contained height={80} />
        <DragCardsThree content={content.THREE_CARDS} />
        <Spacer contained height={80} />
        <GroupedMobileBrowser images={content.GROUPED_DEVICES} />
        <Spacer contained height={80} />
        <Card alt={"image alt"} src={["", ""]} tag={{ value: "Hello test" }}>Testing the card thing</Card>
        <Spacer contained height={32} />
        <GroupedCard content={content.GROUPED_CARDS} left />
        <Spacer contained height={32} />
        <GroupedCard content={content.GROUPED_CARDS} />
        <Spacer contained height={80} />
        <Container>
          <Font type="text">
            Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.
          </Font>
          <Font type="h5">This is Francois speaking</Font>
          <Font type="text">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.
            Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </Font>
          <Font type="text">
            Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas sed diam eget risus varius blandit sit amet non magna.
          </Font>
        </Container>
        <FooterCards content={content.FOOTER_CARDS} />
        <Footer />
      </MotionConfig>
    </ContextHooks >
  )
}

export default App
