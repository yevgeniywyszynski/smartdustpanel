import React, { useEffect } from 'react';
import styles from '../App/App.module.scss'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Email from '../Email/Email';
import Layout from '../Layout/Layout';
import Login from '../Login/LoginContainer';
import Panel from '../Panel/PanelContainer';
import Settings from '../Settings/Settings';
import Profile from '../Profile/ProfileContainer';
import MobileView from '../MobileView/MobileViewContainer';
import WithdrawMoney from '../WithdrawMoney/WithdrawMoneyContainer';

import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
//const socket = io();

function App({inactiveSerwer, changeIsOpen}) {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData)
  }

  return (
      <div className="App">
        
      <div className={styles.googleLog}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'}
        ></GoogleLogin>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element ={<Login />} />
            <Route path="panel" element = {<Panel/>} />
            <Route path="email" element = {<Email />} />
            <Route path="drawmoney" element = {<WithdrawMoney />} />
            <Route path="settings" element = {<Settings />} />
            <Route path="profile" element = {<Profile />}/>
            <Route path="panel/mobile:id" element = {<MobileView />} />
          </Route>
        </Routes>
      </BrowserRouter>      
      </div>
  );
}

export default App;
