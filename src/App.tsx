import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Layout } from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CreateNote from './pages/CreateNote/CreateNote';
import Trash from './pages/Trash/Trash'

function App() {

  return (
    <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='create-note' element={<CreateNote />} />
        <Route path='trash' element={<Trash />} />  
        <Route path='edit/:id' element={<Trash />} /> 
      </Route>

    </Routes>
  );
}

export default App;
