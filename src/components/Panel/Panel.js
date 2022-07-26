import React, { useEffect, useState } from 'react';
import AccountBalance from '../AccountBalance/AccountBalanceContainer';
import Navigation from '../Navigation/Navigation';
import BtnTransactionHistory from '../BtnTransactionHistory/BtnTransactionHistory';
import BtnSerwerList from '../BtnSerwerList/BtnSerwerListContainer';
import ModalError from '../ModalError/ModalErrorContainer';

import { ReactNotifications } from 'react-notifications-component';
import {  Store  }  from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import styles from '../Panel/Panel.module.scss';

const Panel = ({changeIsOpen}) => {

    const[showError, setShowError] = useState(false)
    
    // useEffect(() => {
    //     setTimeout(setShowError, 5000, true)
    // }, [])

    // useEffect(() => {
    //     setTimeout(serwerError, 10000)
    //     setTimeout(allWorkClean, 3000)
    // }, [])

    const serwerError = () => {
        Store.addNotification({
            title: "Serwer wymaga uwagi",
            message: <button className={styles.btnError} onClick= {() => changeIsOpen(true)}>More</button>,
            type: "danger",
            container: "top-right",
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
          container: "top-right",
          insert: 'top',
          dismiss: {
            duration: 3000
          }
        })
      }
    
    return(
        <>
        
        <div className="container">
            <ReactNotifications className={styles.error} />
        </div>

        <div className={styles.btnTestWrapper}>
            <button className={styles.cleanOk}
                onClick={allWorkClean}
                >
                All work clean
            </button>
            <button className={styles.errorNotification}
                onClick={serwerError}
                >
                Serwer error
            </button>
            <button className={styles.errorNotification}
                onClick={() => setShowError(true)}
                >
                Window Serwer
            </button>
        </div>

        <div className={styles.panelWrapper}>
            <Navigation />
            <AccountBalance />
            <BtnTransactionHistory/>
            <BtnSerwerList />
            {showError ? <ModalError setFunc = {setShowError}/> : null}
        </div>
        </>
    )
}

export default Panel;