import React from 'react'
import styles from '../TransactionHistory/TransactionHistory.module.scss';
import {FaLongArrowAltRight } from "react-icons/fa";

const TransactionHistory = () => {
    return(
        <div className={styles.transactionPageWrapper}>
            <div className={styles.titleWrapper}>
                <p className={styles.titleData}>Data</p>
                <p className={styles.titleData}>Akcja</p>
                <div></div>
                <p className={styles.titleData}>Kwota</p>
            </div>
            <div className={styles.historyWrapper}>
                <p className={styles.dataStyl}>2022-06-15</p>
                <p className={styles.dataStyl}>Nowy serwer</p>
                <FaLongArrowAltRight className={styles.iconFinal}/>
                <p className={styles.dataStylBold}> + 50 €</p>    
            </div>
            <div className={styles.historyWrapper}>
                <p className={styles.dataStyl}>2022-05-10</p>
                <p className={styles.dataStyl}> Nowy Samsung s22</p>
                <FaLongArrowAltRight className={styles.iconFinal}/>
                <p className={styles.dataStylBold}> + 120 €</p>    
            </div>
            <div className={styles.historyWrapper}>
                <p className={styles.dataStyl}>2021-01-24</p>
                <p className={styles.dataStyl}> Nowy serwer</p>
                <FaLongArrowAltRight className={styles.iconFinal}/>
                <p className={styles.dataStylBold}> + 50 €</p>    
            </div>
        </div>
    )
}

export default TransactionHistory;