import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import ItemDetails from './components/ItemDetails';
import DisplayAll from './components/DisplayAll';

function App() {

  const [reaload, setReload] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route element={<Home/>} path={'/'} default/>
          <Route element={<About/>} path={'/about'}/>
          <Route element={<ItemDetails/>} path={'/product/:id'}/>
          <Route element={<DisplayAll/>} path={'/product'}/>
          <Route element={<DisplayAll/>} path={'/product/keyword/:keyword'}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
