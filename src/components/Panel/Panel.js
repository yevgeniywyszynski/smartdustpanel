import React from 'react'
import styles from '../Panel/Panel.module.scss';
import AccountBalance from '../AccountBalance/AccountBalanceContainer';
import Navigation from '../Navigation/Navigation';
import BtnTransactionHistory from '../BtnTransactionHistory/BtnTransactionHistory';
import BtnSerwerList from '../BtnSerwerList/BtnSerwerListContainer';

const Panel = () => {

    return(
        <div className={styles.panelWrapper}>
            <Navigation />
            <AccountBalance />
            <BtnTransactionHistory/>
            <BtnSerwerList />
        </div>
    )
}

export default Panel;