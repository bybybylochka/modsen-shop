import styled, { css } from 'styled-components'
import { baseTheme } from '../../constants/theme'

const logoText = css`
  font-family: 'AllertaStencil', sans-serif;
  font-size: 35px;
  font-weight: normal;
`

export const LogoContainer = styled.h1`
  ${logoText}
  span {
    ${logoText}
    color: ${baseTheme.colors.textHighlight};
  }
`
