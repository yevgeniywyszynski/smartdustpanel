import React, { useState } from 'react'
import styles from '../Panel/Panel.module.scss';
import {Link} from 'react-router-dom';
import { FaEnvelope, FaCog } from "react-icons/fa";
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const Panel = () => {

    const [showHistory, setShowHistory] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    return(
        <div className={styles.panelWrapper}>
            
            <div className={styles.menuWrapper}>
                <p className={styles.nickName}>Zalogowany jako: <span className={styles.nickStyl}>ywyszyn</span></p>
                <Link className={styles.emailIcon} to="/email"> <FaEnvelope className={styles.emailIcon} /></Link>

                <button 
                    type="button"
                    onClick={() => setShowSettings(showSettings)} 
                    className={styles.btnSettings}>
                        <FaCog className={styles.settingsIcon}/>
                </button>
                
            </div>

            <div className={styles.amountWrapper}>
                <p className={styles.balanceTitle}>Stan konta: <span className={styles.balance}>100 €</span></p>
                <p className={styles.balanceTitle}> + <span className={styles.balance}>75 € (week)</span></p>
            </div>

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
        </div>
    )
}

export default Panel;