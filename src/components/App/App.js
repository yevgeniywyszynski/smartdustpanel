import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Email from '../Email/Email';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Panel from '../Panel/Panel';
import Settings from '../Settings/Settings';
import Profile from '../Profile/Profile';
import MobileView from '../MobileView/MobileViewContainer';
import WithdrawMoney from '../WithdrawMoney/WithdrawMoneyContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element ={<Login />} />
            <Route path="panel" element = {<Panel/>} />
            <Route path="email" element = {<Email />} />
            <Route path="drawmoney" element = {<WithdrawMoney />} />
            <Route path="panel/settings" element = {<Settings />} />
            <Route path="panel/profile" element = {<Profile />}/>
            <Route path="panel/mobile:id" element = {<MobileView />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
