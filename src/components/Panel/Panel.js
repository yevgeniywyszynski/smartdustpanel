import React, { useEffect, useState } from 'react';
import styles from '../Panel/Panel.module.scss';
import AccountBalance from '../AccountBalance/AccountBalanceContainer';
import Navigation from '../Navigation/Navigation';
import BtnTransactionHistory from '../BtnTransactionHistory/BtnTransactionHistory';
import BtnSerwerList from '../BtnSerwerList/BtnSerwerListContainer';
import ModalError from '../ModalError/ModalErrorContainer';

const Panel = () => {

    const[showError, setShowError] = useState(false)
    
    useEffect(() => {
        setTimeout(setShowError, 5000, true)
    }, [])
    
    return(
        <div className={styles.panelWrapper}>
            <Navigation />
            <AccountBalance />
            <BtnTransactionHistory/>
            <BtnSerwerList />
            {showError ? <ModalError setFunc = {setShowError}/> : null}
        </div>
    )
}

export default Panel;