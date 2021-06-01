import React from "react"
import Grid from "../../utils/grids/Grid"
import Sidelines from "../../utils/sidelines/Sidelines"
import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC = ({ children }) => {

  return (
    <>
      <Grid />
      <Header />
      {children}
      <Sidelines />
      <Footer />
    </>
  )
}

export default Layout
