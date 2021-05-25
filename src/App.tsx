/**
 * Welcome to @dnvt/Homepage!
 * 
 * TODO:
 * Mount the page when all components exist
 * 
 */

import React from 'react'
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
import { HeroVignette, Vignette } from './components/vignettes/Vignettes'
import Device from './components/devices/Device'


////////////////////////////////////////////////////////////////////////////////

const App: React.FC = () => {
  // const HERO_IMAGE = ["./src/assets/images/USMobile/System/App-01.webp","./src/assets/images/USMobile/System/App-01.pnp"]

  return (
    <ContextHooks>
      <Sidelines />
      <Grid />
      <MotionConfig transition={{ duration: .012, type: "springs" }}>
        <Header />
        <HeroVignette alt="Hero container baby" background="#color" />
        <Spacer height={104} />
        <Vignette big background="yellow" alt="Hero container baby" />
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
          <Vignette alt="Yellow" />
          <Spacer height={24} />
          <Font type="h5">This is Francois speaking</Font>
          <Font type="text">
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur.
          </Font>
          <div >
            <Device alt="No Image" device="browser" />
            <Device alt="No Image" device="mobile" />
            <Device alt="No Image" device="browserless" />
            <Device alt="No Image" device="frameless" />
          </div>
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
        <Footer />
      </MotionConfig>
    </ContextHooks>
  )
}

export default App
