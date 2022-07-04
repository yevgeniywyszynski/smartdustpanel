import React, { useState } from "react";
import styles from '../AccountBalance/AccountBalance.module.scss';

function AccountBalance({ balance, day, week, month, year, earningType, changeEarning }) {

    const [actualityEarning, setActualityEarnig] = useState(day);

    const chceckTypeEarning = () => {
        setActualityEarnig(eval(earningType));
        
        // setActualityEarnig(earningType)
        // var obj = {day:1, week:2}
        // obj['day']=2
        // var x='week'
        // obj[x]=2

        // if (earningType === "week") {
        //     setActualityEarnig(week);
        // }
        // else if (earningType === "day") {
        //     setActualityEarnig(day);
        // }
        // else if (earningType === "year") {
        //     setActualityEarnig(year);
        // }
        // else if (earningType === "month") {
        //     setActualityEarnig(month);
        // }
    };
    

    return ( 
        <div className={styles.amountWrapper}>
            <p className={styles.balanceTitle}>Stan konta: <span className={styles.balance}>{balance}€</span></p>
            <p className={styles.balanceTitle}> + <span className={styles.balance}>{actualityEarning}€</span></p>
            <select className={styles.amountType} id="currency"
                onChange={(e => {
                    changeEarning(e.target.value);
                    setActualityEarnig(eval(e.target.value));
                    // earningType=e.target.value
                    // chceckTypeEarning();
                })}
            >
                <option value="day">day</option>
                <option value="week">week</option>
                <option value="month">month</option>
                <option value="year">year</option>
            </select>
        </div>
    );
}

export default AccountBalance;