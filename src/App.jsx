import React from 'react';
import './App.css';
import Searched from './Component/Searched';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailShow from './Component/Detail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Searched />} />
          <Route path="/DetailShow/:id" element={<DetailShow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
