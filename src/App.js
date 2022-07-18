import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route exact path="/test" element={<h1>This is a test</h1>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App