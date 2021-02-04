import "./styles.css";
import CountdownButton from "./CountdownButton";

export default function App() {
  return (
    <div className="App">
      <h1>Countdown button</h1>
      <CountdownButton
        onComplete={() => console.log("redirect")}
        onClick={() => console.log("Clicked")}
      />
    </div>
  );
}
