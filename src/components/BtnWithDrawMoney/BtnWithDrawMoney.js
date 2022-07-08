import React from 'react'
import styles from '../BtnWithDrawMoney/BtnWithDrawMoney.module.scss';
import {Link} from 'react-router-dom';

const BtnTransactionHistory = () => {

    return(
        <Link className={styles.btnDrawMoney} to="/drawmoney">Wyplata</Link>
    )
}

export default BtnTransactionHistory;