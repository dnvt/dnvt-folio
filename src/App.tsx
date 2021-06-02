import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextHooks from './hooks/ContextHooks'
import Layout from './components/navigations/Layout'
import Guidelines from "./routes/guildelines/Guidelines"
import Homepage from "./routes/homepage/Homepage"
import { MotionConfig } from 'framer-motion'

////////////////////////////////////////////////////////////////////////////////

const App: React.FC = () => {

  return (
    <ContextHooks>
      <MotionConfig transition={{ duration: .012, type: "springs" }}>
        <BrowserRouter basename='/'>
          <Layout>
            <Switch>
              <Route path="/guidelines" component={Guidelines} />
              <Route path="/" component={Homepage} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </MotionConfig>
    </ContextHooks>
  )
}

export default App
