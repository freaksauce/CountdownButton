import React, { useEffect, useState } from "react";
import './styles.css'

const CountdownButton = ({ onComplete, onClick }) => {
  const [seconds, setSeconds] = useState(10);
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
        Next episode starting in
        <span
          className={animating === true ? 'countdownButton--animate' : 'countdownButton--value'}
        >
          {seconds}
        </span>
      </button>
    </>
  );
};

export default CountdownButton;
