import { useEffect, useState } from "react";
import { func, string } from 'prop-types'
import './styles.css'

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
      <button
        className="countdownButton"
        type="button"
        onClick={() => {
          onClick();
          setActionClicked(true);
        }}
      >
        <div class="countdownButton--content">
          {children}
          <span
            className={animating === true ? 'countdownButton--animate' : 'countdownButton--value'}
          >
            {seconds}
          </span>
        </div>
      </button>
    </>
  );
};

CountdownButton.propTypes = {
  children: string.isRequired,
  onClick: func.isRequired,
  onComplete: func.isRequired
}

export default CountdownButton;
