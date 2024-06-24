import styled from 'styled-components'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
`
export const ErrorTitle = styled.p`
  font-size: 33px;
  font-weight: 600;
`

export const ErrorDescription = styled.p`
  font-size: 20px;
  text-align: center;
`

export const ErrorButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 10px 80px;
  width: 30%;
  margin: auto;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.button};
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`
