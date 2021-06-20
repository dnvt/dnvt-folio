import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextHooks from './hooks/ContextHooks'
import Layout from './components/navigations/Layout'
import { MotionConfig } from 'framer-motion'
import ScrollToTop from './hooks/ScrollToTop'
import Homepage from "./routes/homepage/Homepage"
import Guidelines from "./routes/guildelines/Guidelines"
import Dashboard from './routes/work/usmobile/dashboard/Dashboard'
import Projects from './routes/projects/Projects'

////////////////////////////////////////////////////////////////////////////////

const App: React.FC = () => {

  return (
    <ContextHooks>
      <MotionConfig transition={{ duration: .012, type: "springs" }}>
        <BrowserRouter basename='/'>
          <ScrollToTop />
          <Layout>
            <Switch>
              <Route path="/guidelines" component={Guidelines} />
              <Route path="/work/usmobile/dashboard-pwa" component={Dashboard} />
              <Route path="/work/usmobile/branding" ><Projects type="branding" /></Route>
              <Route path="/work/usmobile/matrix" ><Projects type="matrix" /></Route>
              <Route path="/playground/coverjs"><Projects type="coverjs" /></Route>
              <Route path="/" component={Homepage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </MotionConfig>
    </ContextHooks>
  )
}

export default App
