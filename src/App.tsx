import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'

import ContextHooks from './hooks/ContextHooks'
import Layout from './components/navigations/Layout'
import ScrollToTop from './hooks/ScrollToTop'
import Homepage from "./routes/homepage/Homepage"
import Guidelines from "./routes/guildelines/Guidelines"
import Dashboard from './routes/work/usmobile/Dashboard'
import Projects from './routes/work/projects/Projects'
import About from './routes/about/About'
import Error from './routes/error/404'

////////////////////////////////////////////////////////////////////////////////

const App: React.FC = () => {

  return (
    <ContextHooks>
      <MotionConfig transition={{ duration: .012, type: "springs" }}>
        <HashRouter
          basename={process.env.PUBLIC_URL + '/'}
        >
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/work/usmobile/branding" ><Projects type="branding" /></Route>
              <Route path="/work/usmobile/matrix" ><Projects type="matrix" /></Route>
              <Route path="/work/usmobile/dashboard-pwa" component={Dashboard} />
              <Route path="/work/private/airbus">{<Projects type="airbus" />}</Route>
              <Route path="/work/private/siemens">{<Projects type="siemens" />}</Route>
              <Route path="/work/private/telekom">{<Projects type="telekom" />}</Route>
              <Route path="/work/norse-interior"><Projects type="norse" /></Route>
              <Route path="/work/elastic-film"><Projects type="elastic" /></Route>
              <Route path="/work/love-your-waste"><Projects type="waste" /></Route>
              <Route path="/work/kipfit-app"><Projects type="kipfit" /></Route>
              <Route path="/work/mimi-hearing-technology"><Projects type="mimi" /></Route>
              <Route path="/work/a-park-for-the-homeless-in-the-stars"><Projects type="stars" /></Route>
              <Route path="/playground/coverjs"><Projects type="coverjs" /></Route>
              <Route path="/about" component={About} />
              <Route path="/guidelines" component={Guidelines} />
              <Route component={Error} />
            </Switch>
          </Layout>
        </HashRouter>
      </MotionConfig>
    </ContextHooks>
  )
}

export default App
