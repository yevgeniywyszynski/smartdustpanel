import React, { useState } from 'react'
import styles from '../BtnTransactionHistory/BtnTransactionHistory.module.scss';
import TransactionHistory from '../TransactionHistory/TransactionHistoryContainer';

const BtnTransactionHistory = () => {
    const [showHistory, setShowHistory] = useState(false)

    return(
        <div className={styles.BtnTransactionHistoryWrapper}>
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

export default BtnTransactionHistory;