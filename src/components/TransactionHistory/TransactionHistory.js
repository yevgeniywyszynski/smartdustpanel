import React from 'react'
import styles from '../TransactionHistory/TransactionHistory.module.scss';
import {FaLongArrowAltRight } from "react-icons/fa";

const TransactionHistory = ({allTransaction}) => {
    
    return(
        <div className={styles.transactionPageWrapper}>
            <div className={styles.titleWrapper}>
                <p className={styles.titleData}>Data</p>
                <p className={styles.titleData}>Akcja</p>
                <div></div>
                <p className={styles.titleData}>Kwota</p>
            </div>
            {allTransaction.map( transaction => (
                <div className={styles.historyWrapper} key={transaction.id}>
                    <p className={styles.dataStyl}>{transaction.data}</p>
                    <p className={styles.dataStyl}>{transaction.orderType}</p>
                    <FaLongArrowAltRight className={styles.iconFinal}/>
                    <p className={styles.dataStylBold}> + {transaction.amountPrice}</p>
                </div>
            ))}
        </div>
    )
}

export default TransactionHistory;