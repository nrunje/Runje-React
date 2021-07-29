import { useState } from "react";
import './App.css';
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Welcome from "./Welcome";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <NavBar />
        {/* {OnEntryPage && <Welcome />}
        {OnEntryPage && <button id="entry-button" onClick={() => setOnEntryPage(!OnEntryPage)}>
          Click to enter
        </button>} */}
        <Content />
      </div>
    </div>
  );
}

function Content(props) {
  const [OnEntryPage, setOnEntryPage] = useState(true);

  if (OnEntryPage) {
    return (
      <div className="content-entry-page">
        <Welcome />
        <button id="entry-button" onClick={() => setOnEntryPage(!OnEntryPage)}>Click to enter</button>
      </div>
    );
  } else {
    return <h3>Content should be here</h3>;
  }
}