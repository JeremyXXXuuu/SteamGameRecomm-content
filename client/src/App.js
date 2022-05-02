import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Games from "./components/games.js";
import Game from "./components/game.js";
import Test from "./components/test.js";
function App() {
  return (
    <Router>
      {/* <nav>
        <h1>Steam Game Recom</h1>
      </nav> */}

      <div>
        <Routes>
          <Route path="/" element={<Games />} />
          {/* <Route path="/games/:id" element={<Game />} /> */}
          <Route path="/game/:id" element={<Game />} />
          <Route path="/games" element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
