import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route element={<Home/>} path={'/'} default/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
