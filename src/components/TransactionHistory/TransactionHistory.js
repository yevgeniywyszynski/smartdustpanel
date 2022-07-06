import React, { useEffect, useState } from 'react'
import styles from '../TransactionHistory/TransactionHistory.module.scss';
import {FaLongArrowAltRight } from "react-icons/fa";

const TransactionHistory = ({allTransaction, typeCurrency}) => {

    const[sumTransaction, setSumTransaction] = useState(0)
    
    useEffect(() => {
        setSumTransaction(sumHistory())
    },[])

    const sumHistory = () => {
        let sum = 0
        for(let i of allTransaction){
            sum = sum + i.amountPrice
        }
        return sum
    }

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
                    <p className={styles.dataStylBold}> + {transaction.amountPrice} {transaction.typeCurrency}</p>
                </div>
            ))}
            <div className={styles.sumWrapper}>
                <p className={styles.sumTransaction}>suma:</p>
                <p className={styles.sumTransaction}>{sumTransaction} €</p>
            </div>
        </div>
    )
}

export default TransactionHistory;