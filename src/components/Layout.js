import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import { Container, GlobalStyles } from '../styles/GlobalStyles'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
