import { useEffect, useState } from "react";
import { func, string } from 'prop-types'
import {
  StyledCountdownButton,
  StyledCountdownButtonContent,
  StyledCountdownButtonValue,
  StyledCountdownButtonAnimate
} from './CountdownButtonStyles'

const CountdownButton = ({ children, onComplete, onClick }) => {
  const [seconds, setSeconds] = useState(15);
  const [actionClicked, setActionClicked] = useState(false);
  const [animating, setAnimating] = useState(false)

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
          {animating ?
            <StyledCountdownButtonAnimate>{seconds}</StyledCountdownButtonAnimate>
          :
            <StyledCountdownButtonValue>{seconds}</StyledCountdownButtonValue>
          }
        </StyledCountdownButtonContent>
      </StyledCountdownButton>
    </>
  );
};

CountdownButton.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
  onComplete: func.isRequired
}

export default CountdownButton;
