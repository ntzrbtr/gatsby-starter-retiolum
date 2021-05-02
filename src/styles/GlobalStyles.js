// styles/index.js
import styled, { css, createGlobalStyle } from 'styled-components'
import resetercss from 'reseter.css/src/styled-components/js/reseter.js'

export const Variables = css`
  /* Place your CSS variables here */
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
`

export const GlobalStyles = createGlobalStyle`
  ${resetercss}
`
