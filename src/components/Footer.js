import * as React from 'react'
import styled from 'styled-components'

import { Container } from '../styles/GlobalStyles'

const FooterStyles = styled.footer`
  margin: 1rem 0 0;

  > div {
    border-top: 1px solid #000;
    padding: 0.5rem 0;
  }
`

const Footer = () => (
  <FooterStyles>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </Container>
  </FooterStyles>
)

export default Footer
