import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AddEmp from './Components/AddEmp';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom';
import EditEmp from './Components/EditEmp';
//import Navbar2 from './Components/Navbar2';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addEmp' element={<AddEmp />}></Route>
      <Route path='/editEmp/:id' element={<EditEmp />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
