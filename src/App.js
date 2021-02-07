import { useState } from 'react'
import 'normalize.css'
import "./styles.css";
import CountdownButton from "./CountdownButton";

export default function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <main>
        <div className="">
          <h1>Countdown button</h1>
          {show &&
            <CountdownButton
              onComplete={() => setShow(false)}
              onClick={() => setShow(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"/>
              </svg>
              <span style={{display: 'inline-block', marginLeft:'10px'}}>Next episode starting in</span>
            </CountdownButton>
          }
          {!show &&
            <button type="button" onClick={() => setShow(true)}>Reset</button>
          }
          <p>Repo for this component can be found here <a href="https://github.com/freaksauce/CountdownButton">https://github.com/freaksauce/CountdownButton</a>, it does include an onClick and onComplete method in case you actually want to use it in a media app.</p>
        </div>
      </main>
    </div>
  );
}
