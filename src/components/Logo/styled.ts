import styled, { css } from 'styled-components'

const logoText = css`
  font-family: 'AllertaStencil', sans-serif;
  font-size: 35px;
  font-weight: normal;
`

export const LogoContainer = styled.h1`
  ${logoText}
  span {
    ${logoText}
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`
