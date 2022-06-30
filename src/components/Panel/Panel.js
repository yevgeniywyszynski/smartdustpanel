import React, { useState } from 'react'
import styles from '../Panel/Panel.module.scss';
import {Link} from 'react-router-dom';
import { FaEnvelope, FaChevronDown, FaChevronUp } from "react-icons/fa";
import TransactionHistory from '../TransactionHistory/TransactionHistoryContainer';
import Menu from '../Menu/Menu';
import SerwerList from '../SerwerList/SerwerListContainer';
import { FaUserAlt } from 'react-icons/fa';
import AccountBalance from '../AccountBalance/AccountBalanceContainer';

const Panel = () => {

    const [showHistory, setShowHistory] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [showSerwerList, setShowSerwerList] = useState(false)

    return(
        <div className={styles.panelWrapper}>
            
            <div className={styles.menuWrapper}>
                <p className={styles.nickName}><FaUserAlt className={styles.userIcon}/> <span className={styles.nickStyl}>ywyszyn</span></p>
                <Link className={styles.emailIcon} to="/email"> <FaEnvelope className={styles.emailIcon} /></Link>

                <button 
                    type="button"
                    className={styles.btnSettings} 
                    onClick={() => setShowSettings(!showSettings)}>
                        {showSettings ? 
                        <FaChevronUp  className={styles.emailIcon} /> 
                        : 
                        <FaChevronDown className={styles.emailIcon} />} 
                </button>
            </div>
            
            <div className={styles.menuWrapper}>
                {
                    showSettings ? <Menu /> : null
                }
            </div>
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