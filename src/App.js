
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Upload from './pages/Upload';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
