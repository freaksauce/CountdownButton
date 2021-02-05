import React, { useEffect, useState } from "react";

const buttonStyles = {
  display: "flex",
  border: "2px solid black",
  borderRadius: "5px",
  backgroundColor: "white",
  padding: "1rem",
  fontWeight: "600"
};

const countdownValueStyle = {
  minWidth: "2rem",
  opactiy: '1'
};
const countdownValueAnimate = {
  minWidth: "2rem",
  transitionProperty: 'opacity, transform',
  transitionDuration: '.2s, .2s',
  transitionTimingFunction: 'ease-out',
  transform: 'translateX(-10px)',
  opacity: '0'
}

const CountdownButton = ({ onComplete, onClick }) => {
  const [seconds, setSeconds] = useState(5);
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
      <p>animating: {animating === true ? 'yes' : 'no'}</p>
      <button
        style={buttonStyles}
        type="button"
        onClick={() => {
          onClick();
          setActionClicked(true);
        }}
      >
        Next episode starting in
        <span
          style={animating === true ? countdownValueAnimate : countdownValueStyle}
        >
          {seconds}
        </span>
      </button>
    </>
  );
};

export default CountdownButton;
