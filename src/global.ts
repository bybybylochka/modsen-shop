import styled, { createGlobalStyle } from 'styled-components'

import DMSans from './assets/fonts/DMSans/DMSans.ttf'
import AllertaStencil from './assets/fonts/Allerta_Stencil/AllertaStencil-Regular.ttf'
import { baseTheme } from './constants/theme'

export default createGlobalStyle`
@font-face {
    font-family: 'DMSans';
    src: url(${DMSans}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
    @font-face {
    font-family: 'AllertaStencil';
    src: url(${AllertaStencil}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: 'DMSans', sans-serif;
    font-size: 14px;
    text-decoration: none;
    color: ${baseTheme.colors.textPrimary};
  }
  body{
    margin: 0;
    background-color: ${baseTheme.colors.background};
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`
export const Wrapper = styled.div`
  width: 1280px;
  margin: auto;
`
