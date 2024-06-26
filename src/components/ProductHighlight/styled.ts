import styled from 'styled-components'

export const HighlightCardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(100%);
  transition:
    opacity 0.5s,
    transform 0.5s;
`
export const HighlightCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  &:hover ${HighlightCardOverlay} {
    opacity: 1;
    transform: translateY(0);
  }
`
export const HighlightCardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
export const HighlightCardInfo = styled.div`
  & :first-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
    font-size: 20px;
  }
  & :last-child {
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textHighlight};
  }
`

export const HighlightCardOverlayButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
`
export const HighlightCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 8px;
`
