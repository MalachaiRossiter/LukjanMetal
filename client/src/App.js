import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Test/>} path={"/"}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
