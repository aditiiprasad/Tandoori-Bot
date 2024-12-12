import { useState } from 'react'
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        
      </Routes>
     </Router>
    </>
  )
}

export default App
