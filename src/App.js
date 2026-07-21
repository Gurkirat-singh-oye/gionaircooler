import logo from "./logo.svg";
import "./App.css";
import HomePage from "./comps/HomePage";
import { Rahs } from "./Routes";
import Nav from "./comps/Nav";
import customCursor from "./Images/47989.png";

function App() {
  return (
    <div
      className={`App ${window?.innerWidth < 1024 ? `w-screen` : ``} scroll-smooth overflow-clip `}
      style={{ cursor: `url(${customCursor}), pointer` }}
    >
      <Rahs />
    </div>
  );
}

export default App;
