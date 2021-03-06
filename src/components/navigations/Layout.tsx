import React from "react"
import { useMenuVisibility } from "../../hooks/useMenuVisibility"
import Sidelines from "../../utils/sidelines/Sidelines"
import Footer from "./Footer"
import Header from "./Header"
import Menu from "./Menu"

const Layout: React.FC = ({ children }) => {
  const [menu] = useMenuVisibility()

  return (
    <>
      <Header />
      <Sidelines />
      {menu && <Menu />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
