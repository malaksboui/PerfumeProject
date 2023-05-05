import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PerfumesList from "./components/PerfumesList.jsx"
import AddPerfume from "./components/AddPerfume.jsx"
import UpdatePerfume from "./components/UpdatePerfumeForm.jsx"
import './App.css'

function App() {
  return (
    <Router>
      <div id="background">
        <nav>
          <ul>
            <li>
              <Link to="/"> Home page </Link>
            </li>
            <li>
              <Link to="/add"> Add Perfume </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PerfumesList />} />
          <Route path="/add" element={<AddPerfume />} />
          <Route path="/update/:id" element={<UpdatePerfume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
