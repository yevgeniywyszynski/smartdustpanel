import React from 'react'
import styles from '../BtnWithDrawMoney/BtnWithDrawMoney.module.scss';
import {Link} from 'react-router-dom';

const BtnTransactionHistory = () => {

    return(
        <Link className={styles.btnDrawMoney} to="/drawmoney">Wypłać</Link>
    )
}

export default BtnTransactionHistory;