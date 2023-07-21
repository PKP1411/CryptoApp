import './App.css';

import {BrowserRouter as Router, Rotues, Route, Routes } from "react-router-dom"; 
import Header from './components/Header';
import Home from './components/Home';
import Coindetails from './components/Coindetails';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import Aboutus from './components/Aboutus';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exchanges' element={< Exchanges/>} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coin/:id' element={<Coindetails />} />
        <Route path='/aboutus' element={<Aboutus/>} />


      </Routes>
     </Router> 
  );
}

export default App;
