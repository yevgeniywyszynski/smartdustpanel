import React, { useEffect } from 'react';
import styles from '../App/App.module.scss'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Email from '../Email/Email';
import Layout from '../Layout/Layout';
import Login from '../Login/LoginContainer';
import Panel from '../Panel/Panel';
import Settings from '../Settings/Settings';
import Profile from '../Profile/Profile';
import MobileView from '../MobileView/MobileViewContainer';
import WithdrawMoney from '../WithdrawMoney/WithdrawMoneyContainer';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {  Store  }  from 'react-notifications-component' ;

function App({inactiveSerwer, changeIsOpen}) {


  useEffect(() => {
    setTimeout(serwerError, 10000)
    setTimeout(allWorkClean, 3000)
}, [])

const serwerError = () => {
    Store.addNotification({
        title: "Serwer wymaga uwagi",
        message: <button className={styles.btnError} onClick= {() => changeIsOpen(true)}>More</button>,
        type: "danger",
        container: "bottom-right",
        insert: "top",
        dismiss: {
          duration: 7000,
          showIcon: true
        },
    })
}

const allWorkClean = () => {
  Store.addNotification({
    title: "Witaj jkowalski",
    message: "wszystko działa poprawnie",
    type: "success",
    container: "bottom-right",
    insert: 'top',
    dismiss: {
      duration: 3000
    }
  })
}

  return (
    <div className="App">
      <div className="container">
        <ReactNotifications />
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
