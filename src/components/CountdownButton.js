import { useEffect, useState } from "react";
import { func, number, object, string } from 'prop-types'
import styled, { keyframes } from 'styled-components'

const CountdownButton = ({ children, onComplete, onClick, totalSeconds, theme }) => {
  const [seconds, setSeconds] = useState(totalSeconds);
  const [actionClicked, setActionClicked] = useState(false);
  const [animating, setAnimating] = useState(false)

  const StyledCountdownButton = styled.button`
    display: flex;
    border: 2px solid ${theme.borderColor};
    border-radius: 5px;
    background-color: ${theme.bgColor};
    padding: 1rem;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: ${theme.bgHover};
    }

    &:active {
      background-color: ${theme.active};
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
    animation-name: ${animating ? slideout : slidein};
    animation-duration: ${animating ? '.3s' : '.2s'};
  `

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        setAnimating (false)
        if (seconds > 1) {
          setTimeout(() => {
            setAnimating(true)
          }, 700)
          return seconds - 1;
        } else {
          clearInterval(interval);
          onComplete();
        }
      });
    }, 1000);
    setTimeout(() => {
      setAnimating(true)
    }, 700)
    if (actionClicked === true) clearInterval(interval);
    return () => clearInterval(interval);
  }, [onComplete, actionClicked]);

  return (
    <>
      <StyledCountdownButton
        type="button"
        onClick={() => {
          onClick();
          setActionClicked(true);
        }}
      >
        <StyledCountdownButtonContent>
          {children}
          <StyledCountdownButtonValue>{seconds}</StyledCountdownButtonValue>
        </StyledCountdownButtonContent>
      </StyledCountdownButton>
    </>
  );
};

CountdownButton.defaultProps = {
  totalSeconds: 15,
  theme: {
    bgActive: '#ccc',
    bgColor: 'white',
    bgHover: '#f2f2f2',
    borderColor: '#666'
  }
}
CountdownButton.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
  onComplete: func.isRequired,
  totalSeconds: number,
  theme: object
}

export default CountdownButton;
