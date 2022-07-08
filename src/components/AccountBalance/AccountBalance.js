import React, { useState } from "react";
import styles from '../AccountBalance/AccountBalance.module.scss';

function AccountBalance({
    balance,
    day,
    week,
    month,
    year,
    earningType,
    changeEarning,
    typeCurrency
}) {

    const [actualityEarning, setActualityEarnig] = useState(day);

    return (
        <div className={styles.amountWrapper}>
            <p className={styles.balanceTitle}>Stan konta: <span className={styles.balance}>{balance}{typeCurrency}</span></p>
            <p className={styles.balanceTitle}> + <span className={styles.balance}>{actualityEarning}{typeCurrency}</span></p>
            <select className={styles.amountType} id="currency"
                onChange={(e => {
                    changeEarning(e.target.value);
                    setActualityEarnig(e.target.value);
                    console.log(e.target.selectedIndex);
                    console.log(e.target.options[e.target.selectedIndex]);
                    
                    console.log(e.target.options[e.target.selectedIndex].innerText);
                })}
            >
                <option value={day}>day</option>
                <option value={week}>week</option>
                <option value={month}>month</option>
                <option value={year}>year</option>
            </select>
        </div>
    );
}

export default AccountBalance;