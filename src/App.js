import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";

import Home from './Pages/Home/Home';
import Game from './Pages/Game/Game';


function App() {
  return (
<div className="App">
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/game" element={<Game/>} />
    </Routes>  
  </HashRouter>
      
</div>
  );
}

export default App;
