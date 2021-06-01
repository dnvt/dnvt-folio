import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ContextHooks from './hooks/ContextHooks'
import Layout from './components/navigations/Layout'
import Guidelines from "./Guidelines"
import { MotionConfig } from 'framer-motion'

////////////////////////////////////////////////////////////////////////////////

const App: React.FC = () => {

  return (
    <ContextHooks>
      <MotionConfig transition={{ duration: .012, type: "springs" }}>
        <BrowserRouter basename='/'>
          <Layout>
            <Switch>
              <Route path="/" component={Guidelines} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </MotionConfig>
    </ContextHooks>
  )
}

export default App
