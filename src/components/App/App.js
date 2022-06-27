import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Panel from '../Panel/Panel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element ={<Login />} />
            <Route path="panel" element = {<Panel/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
