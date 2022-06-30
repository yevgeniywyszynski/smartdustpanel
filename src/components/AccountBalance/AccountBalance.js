import React from "react";
import styles from '../AccountBalance/AccountBalance.module.scss';

const AccountBalance = ({balance, earningsDay, earningsWeek, earningsYear}) => {
    return(
        <div className={styles.amountWrapper}>
            <p className={styles.balanceTitle}>Stan konta: <span className={styles.balance}>{balance}€</span></p>
            <p className={styles.balanceTitle}> + <span className={styles.balance}>{earningsWeek}€</span></p>
            <select className={styles.amountType} id="currency" 
            >
            <option value="week">week</option>
            <option value="day">day</option>
            <option value="mounth">mounth</option>
            <option value="year">year</option>
            </select>
        </div>
    )
}

export default AccountBalance;