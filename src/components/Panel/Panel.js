import React, { useState } from 'react'
import styles from '../Panel/Panel.module.scss';
import { FaChevronUp } from "react-icons/fa";
import TransactionHistory from '../TransactionHistory/TransactionHistoryContainer';
import SerwerList from '../SerwerList/SerwerListContainer';
import AccountBalance from '../AccountBalance/AccountBalanceContainer';
import Navigation from '../Navigation/Navigation';

const Panel = () => {

    const [showHistory, setShowHistory] = useState(false)
    const [showSerwerList, setShowSerwerList] = useState(false)

    return(
        <div className={styles.panelWrapper}>
            <Navigation />
            <AccountBalance />
            <button 
                className={styles.btnHistory} 
                type="button"
                onClick={() => setShowHistory(!showHistory)}>
                    {showHistory? "Ukryj Historie" : "Historia konta"}
            </button>
               
            <div className={styles.transactionWrapper}>
                {
                    showHistory ? <TransactionHistory /> : null
                }
            </div>

            <button
                className={styles.btnSerwerList}
                type="button"
                onClick={() => setShowSerwerList(!showSerwerList)}>
                    {showSerwerList? <FaChevronUp  className={styles.emailIcon} />   : "All your's devices" }
            </button>

            <div className={styles.serwerWrapper}>
                {
                    showSerwerList ? <SerwerList /> : null
                }
            </div>
        </div>
    )
}

export default Panel;