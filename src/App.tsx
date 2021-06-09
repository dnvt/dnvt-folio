import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextHooks from './hooks/ContextHooks'
import Layout from './components/navigations/Layout'
import Guidelines from "./routes/guildelines/Guidelines"
import Homepage from "./routes/homepage/Homepage"
import { MotionConfig } from 'framer-motion'
import Dashboard from './routes/work/usmobile/dashboard/Dashboard'
import ScrollToTop from './hooks/ScrollToTop'

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
              <Route path="/" component={Homepage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </MotionConfig>
    </ContextHooks>
  )
}

export default App
