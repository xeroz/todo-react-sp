import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProjectBoard/>
    </div>
  );
}

export default App;
