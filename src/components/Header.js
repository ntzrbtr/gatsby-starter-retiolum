import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from '../styles/GlobalStyles'

const HeaderStyles = styled.header`
  margin: 0.5rem 0 1rem;

  > div {
    border-bottom: 1px solid #000;
    padding: 0.5rem 0;
  }

  h1 {
    margin: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </HeaderStyles>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
