import styled, { css } from 'styled-components'

const thumbSize = '18px'
const thumbWidth = '4px'

const trackStyles = css`
  appearance: none;
  background: transparent;
  border: transparent;
`

const thumbStyles = css`
  appearance: none;
  pointer-events: all;
  width: ${thumbSize};
  height: ${thumbSize};
  border-radius: 0px;
  border: 0 none;
  cursor: grab;
  background-color: red;

  &:active {
    cursor: pointer;
  }
`

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0;
`

export const InputWrapper = styled.div`
  width: calc(100% + ${thumbSize});
  margin: 0 calc(${thumbSize} / -2);
  position: absolute;
  height: ${thumbSize};
`

export const ControlWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: ${thumbSize};
`

export const Input = styled.input`
  position: absolute;
  width: 100%;
  pointer-events: none;
  appearance: none;
  height: 100%;
  opacity: 0;
  z-index: 3;
  padding: 0;

  &::-ms-track {
    ${trackStyles}
  }

  &::-moz-range-track {
    ${trackStyles}
  }

  &:focus::-webkit-slider-runnable-track {
    ${trackStyles}
  }

  &::-ms-thumb {
    ${thumbStyles}
  }

  &::-moz-range-thumb {
    ${thumbStyles}
  }

  &::-webkit-slider-thumb {
    ${thumbStyles}
  }
`

export const Rail = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  height: 3px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.border};
`

export const InnerRail = styled.div`
  position: absolute;
  height: 70%;
  background: ${({ theme }) => theme.colors.textPrimary};
`

export const Control = styled.div`
  width: ${thumbWidth};
  height: ${thumbSize};
  position: absolute;
  background: ${({ theme }) => theme.colors.textPrimary};
  top: 50%;
  margin-left: calc(${thumbWidth} / -2);
  transform: translate3d(0, -50%, 0);
  z-index: 2;
`
