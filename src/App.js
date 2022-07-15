import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<h1 className='flex flex-col h-screen items-center justify-center text-red-500 text-6xl'>This is a test</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App