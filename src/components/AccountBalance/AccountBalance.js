import React from "react";
import styles from '../AccountBalance/AccountBalance.module.scss';

const AccountBalance = () => {
    return(
        <div className={styles.amountWrapper}>
            <p className={styles.balanceTitle}>Stan konta: <span className={styles.balance}>100 €</span></p>
            <p className={styles.balanceTitle}> + <span className={styles.balance}>75 €</span></p>
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