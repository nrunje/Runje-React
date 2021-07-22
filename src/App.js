import './App.css';
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <NavBar />
        <Welcome />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
