import logo from './logo.svg';
import './App.css';
import HomePage from './comps/HomePage';
import { Rahs } from './Routes';
import Nav from './comps/Nav';

function App() {
  return (
    <div className={`"App ${ window?.innerWidth < 1024 ? `w-screen` : `` } scroll-smooth overflow-clip "`}>
      <Rahs />
    </div>
  );
}

export default App;
