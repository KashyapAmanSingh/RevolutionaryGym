


import './App.css';
// import Searched from './Component/Searched';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailShow from './Component/Detail/Detail';


import Home from './Component/Home';
import NavigationButtons from './Component/NavigationButtons/NavigationButtons';
  

function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/DetailShow/:id" element={<DetailShow />} />

        </Routes>
        <NavigationButtons /> 
      </BrowserRouter>
    </>
  );
}

export default App;
