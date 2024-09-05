import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import List from './List';
// import { title } from 'process';
const books = {
  id:1,
  title:"FirstBOOk",
  author:"TY",
  rating:4
}
const App:React.FC = ()=>{
  const [name, setName] = useState("");
  useEffect(()=>{
    console.log('useEffect');
  },[])
  
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/list' element={ <List /> } >
          <Route path='' element= { <List /> } />
          <Route path=':id/:name' element= { <List /> } />
      </Route>
      <Route path='/form' element={<Form book={books} onSave={ (book)=>{ console.log(book)} } />} />
      <Route path='/' element={<Navigate to="/list" />} />

    </Routes>
  </BrowserRouter>
    
  </>;
}

export default App;
