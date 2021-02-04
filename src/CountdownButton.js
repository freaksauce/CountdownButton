import React, { useEffect, useState } from "react";

const buttonStyles = {
  display: "flex",
  border: "1px solid black",
  backgroundColor: "white",
  padding: "1rem"
};

const countdownValueStyle = {
  minWidth: "2rem"
};

const CountdownButton = ({ onComplete, onClick }) => {
  const [seconds, setSeconds] = useState(15);
  const [actionClicked, setActionClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds > 0) {
          return seconds - 1;
        } else {
          clearInterval(interval);
          setSeconds(0);
          onComplete();
        }
      });
    }, 1000);
    if (actionClicked === true) clearInterval(interval);
    return () => clearInterval(interval);
  }, [onComplete, actionClicked]);

  return (
    <>
      <button
        style={buttonStyles}
        type="button"
        onClick={() => {
          onClick();
          setActionClicked(true);
        }}
      >
        Next episode starting in
        <span style={countdownValueStyle}>{seconds}</span>
      </button>
    </>
  );
};

export default CountdownButton;
