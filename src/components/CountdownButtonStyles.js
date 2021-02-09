import styled, { keyframes } from 'styled-components'

const StyledCountdownButton = styled.button`
  display: flex;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #ccc;
  }
  
  &:focus {
    outline: none;
  }
`

const StyledCountdownButtonContent = styled.div`
  display: flex;
  align-items: center;
`

const slidein = keyframes`
  0% {
    transform: translateY(7px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
const slideout = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-7px);
    opacity: 0;
  }
`

const StyledCountdownButtonValue = styled.span`
  min-width: 2rem;
  animation-name: ${slidein};
  animation-duration: .2s;
`

const StyledCountdownButtonAnimate = styled.span`
  min-width: 2rem;
  animation-name: ${slideout};
  animation-duration: .3s;
`

export {
  StyledCountdownButton,
  StyledCountdownButtonContent,
  StyledCountdownButtonValue,
  StyledCountdownButtonAnimate
}